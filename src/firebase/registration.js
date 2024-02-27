import { db } from "./config";
import { collection, addDoc, getDocs, query, where, doc,updateDoc  } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid'; // Import for UUID 

export const registrationHandler = async (formData) => {
  try {
    const data = {
      name: formData.get('name'),
      college: formData.get('college'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      rollNumber: formData.get('rollNumber'),
      status: "processing",
      code: "",
    };

    const photo = formData.get('photo');

    // Create a unique file name using UUID
    const uniqueFilename = uuidv4() + '.' + photo.name.split('.').pop(); 

    // Get a reference to Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `images/${uniqueFilename}`);

    // Upload the image file
    const uploadTask = uploadBytesResumable(storageRef, photo);

    uploadTask.on('state_changed', 
      (snapshot) => { 
        // Optionally provide progress updates if needed
      }, 
      (error) => {
        console.error("Error uploading file:", error);
        return { success: false, error: error.message };
      }, 
      () => {
        // Get the download URL after the upload is successful
        getDownloadURL(uploadTask.snapshot.ref)
          .then(async (downloadURL) => {
            data.photoURL = downloadURL; // Store the image URL

            // Proceed with Firestore addition
            const docRef = await addDoc(collection(db, "registrations"), data);
            console.log("Document written with ID: ", docRef.id);
            return { success: true }; 
          });
      }
    );
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error: error.message };
  }
};


export const checkEmailExists = async (email) => {
    const registrationsRef = collection(db, "registrations");

    const emailQuery = query(registrationsRef, where("email", "==", email));
    
    try {
        const querySnapshot = await getDocs(emailQuery);
        console.log(querySnapshot.empty)
      return !querySnapshot.empty; // Returns true if an email exists
    } catch (error) {
      console.error("Error checking for email:", error);
      return false; // Or handle the error differently
    }
  };

  export const getStatusAndCodeByEmail = async (email) => {
    const registrationsRef = collection(db, "registrations");
    const emailQuery = query(registrationsRef, where("email", "==", email));
  
    try {
      const querySnapshot = await getDocs(emailQuery);
  
      if (querySnapshot.empty) {
        return null; // Email not found
      } else {
        // Assuming there's only one document with the email 
        // (adjust handling if you might have multiple)
        const docData = querySnapshot.docs[0].data(); 
        return {
          status: docData.status,
          code: docData.code,
          name: docData.name
        };
      }
    } catch (error) {
      console.error("Error getting status and code:", error);
      throw error; // Let the error propagate up for handling
    }
  };


  export const fetchProcessingRegistrations = async () => {
    try {
      const registrationsRef = collection(db, "registrations");
      const q = query(registrationsRef, where("status", "==", "processing"));
      const querySnapshot = await getDocs(q);
  
      const registrations = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      return registrations;
    } catch (error) {
      console.error("Error fetching processing registrations:", error);
      throw error; // Re-throw to allow the calling code to handle errors
    }
  };
  
  export const fetchCompletedRegistrations = async () => {
    // Similar to fetchProcessingRegistrations, but with
    // a where clause for 'status' == 'completed'
    try {
      const registrationsRef = collection(db, "registrations");
      const q = query(registrationsRef, where("status", "==", "completed"));
      const querySnapshot = await getDocs(q);
  
      const registrations = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      return registrations;
    } catch (error) {
      console.error("Error fetching completed registrations:", error);
      throw error; // Re-throw to allow the calling code to handle errors
    }
  };

  export const fetchCheckedInRegistrations = async () => {
    // Similar to fetchProcessingRegistrations, but with
    // a where clause for 'status' == 'completed'
    try {
      const registrationsRef = collection(db, "registrations");
      const q = query(registrationsRef, where("status", "==", "checked-in"));
      const querySnapshot = await getDocs(q);
  
      const registrations = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      return registrations;
    } catch (error) {
      console.error("Error fetching checked in registrations:", error);
      throw error; // Re-throw to allow the calling code to handle errors
    }
  };


  function generateCode() {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Example: 4-digit random code
  }

  export const approveRegistration = async (registrationId) => {
    try {
      const registrationRef = doc(db, "registrations", registrationId);
      const code = generateCode();
  
      await updateDoc(registrationRef, {
        status: "completed",
        code: code
      });
    } catch (error) {
      console.error("Error approving registration:", error);
      throw error; // Re-throw the error for handling
    }
  };

  export const checkInUser = async (registrationId) => {
    try {
      const registrationRef = doc(db, "registrations", registrationId);
  
      await updateDoc(registrationRef, {
        status: "checked-in"
      });
    } catch (error) {
      console.error("Error checking in user:", error);
      throw error; // Re-throw the error for handling
    }
  };


