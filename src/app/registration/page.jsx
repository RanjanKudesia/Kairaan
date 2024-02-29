"use client";
import { LuLogIn } from "react-icons/lu";
import "./page.css";
import { useGlobalState } from "@/context/globalState";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuUpload } from "react-icons/lu";
import Request from "@/components/request";
import {
  registrationHandler,
  checkEmailExists,
  getStatusAndCodeByEmail,
} from "@/firebase/registration";
import GeneratedTicket from "@/components/ticket";
import Link from "next/link";

const RegistrationPage = () => {
  const router = useRouter();
  const { auth } = useGlobalState();

  const [hasRegistered, setHasRegistered] = useState(false);
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [photo, setPhoto] = useState(null);
  const [status, setStatus] = useState(null);
  const [code, setCode] = useState(null);
  const [photoName, setPhotoName] = useState('');


  const [acceptedTerms, setAcceptedTerms] = useState(false);


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setPhotoName(selectedFile.name);
    }
  };

  useEffect(() => {
    async function check() {
      const response = await getStatusAndCodeByEmail(auth?.user?.email);
      if (response) {
        setStatus(response.status);
        setCode(response.code);
        setName(response.name)
      }
    }
    if (auth.user) {
      check();
    }
  }, [hasRegistered]);


  const [firstRun,setFirstRun] = useState(true);

  useEffect(() => {
    async function check() {
      const response = await checkEmailExists(auth?.user?.email);
      setHasRegistered(response);
    }
    // if (firstRun) {
    //   setFirstRun(false);
    //   return;
    // }
    if (auth?.user) {
      check();
      setEmail(auth.user.email);
    }
    else {
      router.push("/signup");
    }
  }, [auth]);

  // useEffect(() => {
  //   if (!auth.user) {
  //     router.push("/signup");
  //   }
  // }, [auth.user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }

    if (!name || !photo) {
      alert("Please fill in all required fields.");
      return;
    };
    // Submitting Data to Firestore using your handler
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("college", college);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("rollNumber", rollNumber);
      formData.append("photo", photo);

      const result = await registrationHandler(formData);

      if (result.success) {
        console.log("Registration successful!");
        setHasRegistered(true);
      } else {
        console.error("Registration failed:", result.error);
        // You might want to display an error message to the user here
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setHasRegistered(true);
      // Handle unexpected errors gracefully
    }
  };

  const redirectToSignUpPage = () => {
    router.push("/signup");
  };

  return auth.user ? (
    hasRegistered ? (
      status == "completed" ? (
        <GeneratedTicket code={code} name={name} />
        // <div>your entry code is {code}</div>
      ) : (
        <Request />


        // <div>your request is being processed</div>
      )
    ) : (
      <section className="relative text-white pt-5 min-h-screen flex justify-center items-center flex-col bg-gradient-to-r from-[#2b4992] via-[#87a1c6] to-[#3f5294] p-8 bg-opacity-50">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: "url('/assets/b2.jpg')" }}
        ></div>
        <div className="my-[100px] card w-full md:max-w-[50%] p-8 space-y-3 rounded-lg bg-[rgba(0,0,0,0.4)] relative shadow-xl bg-cover bg-no-repeat bg-blend-darken">
          <h1 className="text-[40px] font-semibold text-center text-[var(--text-color)]">
            Registration Form
          </h1>
          <p className="text-sm text-center">General Pass 
An all-inclusive pass for all the activities throughout the all three days of the fest. which includes entry into the Artist Night, all the performances, access to food stalls, and other fun activities throughout the Fest.
<br />
If you would like to participate in any of our Flagship Events such as Dance Competition, Fashion Show, Talent Hunt etc., then you must submit a completed Google Form along with your payment details. Please note that there are additional costs associated with participating in these events so make sure to check out the details on the rulebook before submitting your application.
</p>
          <br />
          <div className="qr-code-container text-center">
            <img
              src="/assets/qr-code.png"
              alt="Payment QR Code"
              style={{ width: "100px", height: "100px" }}
              className="mx-auto"
            />
            <p>Scan to Pay 300</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex border-b">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex border-b">
              <input
                type="text"
                required
                placeholder="Your College Name"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
            <div className="flex border-b">
              <input
                type="number"
                required
                placeholder="Your Phone Number"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {/* <div className="flex border-b">
            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full px-3 py-2 focus:outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div> */}
            <div className="flex border-b">
              <input
                type="text"
                required
                placeholder="Your Roll Number"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </div>
            <div className="relative flex border justify-center items-center">
              <input
                type="file"
                required
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => {
                  setPhoto(e.target.files[0]);
                  handleFileChange(e);
                }}
                accept="image/*"
              />
              <div className="bg-transparent rounded-md shadow-md px-4 py-2 flex items-center justify-center flex-col">
                <LuUpload className="text-5xl mr-2 text-[#c4c4c4]" />
                <span className="text-[#c4c4c4] text-sm mt-2">
                  {photoName ? photoName : 'Upload a Payment Receipt!'}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
  <input
    id="termsAndConditions"
    type="checkbox"
    required
    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
    checked={acceptedTerms}
    onChange={(e) => setAcceptedTerms(e.target.checked)}
  />
  <label htmlFor="termsAndConditions" className="ml-2 text-sm font-medium text-gray-100">
    I accept the <Link href="/policy" className="text-blue-600 hover:underline">Terms and Conditions</Link>
  </label>
</div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-[var(--text-color)] bg-transparent border rounded-sm focus:outline-none focus:border-[var(--secondary-color)] flex justify-center items-center focus:bg-[var(--text-color)]"
            >
              Register Now <LuLogIn className="ml-2" />
            </button>
          </form>
        </div>
      </section>
    )
  ) : null;
};

export default RegistrationPage;
