'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUp } from '@/firebase/authentication'; // Adjust this path to your auth.js file
import { useGlobalState } from '@/context/globalState'; // Adjust this path to your context file
import { toast } from 'react-toastify';
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";


const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const { setAuth } = useGlobalState();
    const router = useRouter();
  
    const [swichPassType, setSwichPassType] = useState("password");
    function switchPassVisibility() {
      if (swichPassType === "password") {
        setSwichPassType("text");
      } else {
        setSwichPassType("password");
      }
    }

      // Function to handle the redirect
      const redirectToAnotherPage = () => {
        router.push('/login');
      };
  
    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(email, password, setAuth);
            toast.success("Successfully Signed Up");
            router.push('/');
        } catch (error) {
            toast.error(error.message);
            setError(error.message);
        }
    };
  
    return (
      <section className="relative text-white pt-5 min-h-screen flex justify-center items-center flex-col bg-gradient-to-r from-[#2b4992] via-[#87a1c6] to-[#3f5294] p-8 bg-opacity-50">
      <div
               className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-70"
               style={{ backgroundImage: "url('/assets/b2.jpg')" }}
             ></div>
        <div
          className="card w-full max-w-md p-8 space-y-3 rounded-lg bg-[rgba(0,0,0,0.4)] relative shadow-xl bg-cover bg-no-repeat bg-blend-darken"  >
          <h1 className="text-[40px] font-semibold text-center text-[var(--text-color)]">
            Signup Form
          </h1>
          <p className="text-sm text-center">Create a new account</p>
          <br />
          {error && <p className="text-center text-red-500">{error}</p>}
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="flex border-b">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
              />
              <MdOutlineAttachEmail className="mt-3 mr-3" />
            </div>
            <div className="flex border-b">
              <input
                type={swichPassType}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Your Password"
                className="w-full px-3 py-2 focus:outline-none bg-transparent"
              />
              <span>
                {swichPassType === "password" ? (
                  <FaEyeSlash
                    onClick={switchPassVisibility}
                    className="mt-3 cursor-pointer mr-3"
                  />
                ) : (
                  <FaEye
                    onClick={switchPassVisibility}
                    className="mt-3 cursor-pointer mr-3"
                  />
                )}
              </span>
            </div>
  
            {/* <div className="text-right">
              <span className="text-sm cursor-pointer">Forgot Password?</span>
            </div> */}
            <button
            type="submit"
            className="w-full px-4 py-2 text-[var(--text-color)] bg-transparent border rounded-sm focus:outline-none focus:border-[var(--secondary-color)] flex justify-center items-center focus:bg-[var(--text-color)]"
          >
            Sign Up <LuLogIn className="ml-2"/>
          </button>
            <div className="text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <span className="cursor-pointer" onClick={redirectToAnotherPage}>Login</span>{" "}
              </p>
            </div>
          </form>
        </div>
        </section>
    );
  };

export default SignupPage;
