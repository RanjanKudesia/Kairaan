'use client';
import { LuLogIn } from "react-icons/lu";
import "./page.css";


const RegistrationPage = () => {
  
    return (
      <section className="relative text-white pt-5 min-h-screen flex justify-center items-center flex-col bg-gradient-to-r from-[#2b4992] via-[#87a1c6] to-[#3f5294] p-8 bg-opacity-50">
      <div
               className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
               style={{ backgroundImage: "url('/assets/b2.jpg')" }}
             ></div>
        <div
          className="my-[100px] card w-full md:max-w-[50%] p-8 space-y-3 rounded-lg bg-[rgba(0,0,0,0.4)] relative shadow-xl bg-cover bg-no-repeat bg-blend-darken"  >
          <h1 className="text-[40px] font-semibold text-center text-[var(--text-color)]">
          Registration Form
          </h1>
          <p className="text-sm text-center">Fill the form below!</p>
          <br />
          <form className="space-y-6">
            <div className="flex border-b">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex border-b">
              <input
                type="text"
                required
                placeholder="Your College Name"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex border-b">
              <input
                type="number"
                required
                placeholder="Your Phone Number"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex border-b">
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex border-b">
              <input
                type="text"
                required
                placeholder="Your Roll Number"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex border-b">
              <input
                type="number"
                required
                placeholder="Your Aadhar Number (last 4 digits)"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex border-b">
              <input
                type="file"
                required
                placeholder="Upload a photo of self "
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
              />
            </div>
         
          
            
            <button
            type="submit"
            className="w-full px-4 py-2 text-[var(--text-color)] bg-transparent border rounded-sm focus:outline-none focus:border-[var(--secondary-color)] flex justify-center items-center focus:bg-[var(--text-color)]"
          >
            Register Now <LuLogIn className="ml-2"/>
          </button>
          </form>
        </div>
        </section>
    );
  };

export default RegistrationPage;
