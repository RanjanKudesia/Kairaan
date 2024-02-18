import { db } from "./config";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
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



