"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useGlobalState } from '@/context/globalState'; // Adjust the path
import { logout } from '@/firebase/authentication';

const Navbar = () => {
  const router = useRouter();

  // Function to handle the redirect
  const redirectToAnotherPage = () => {
    router.push('/registration');
  };

  const redirectToAttraction = () => {
    router.push('/nearbyattractions');
  };

  const redirectToSignUpPage = () => {
    router.push('/signup');
  };

  const redirectToAdminPage = () => {
    router.push('/admin');
  };

  const { auth, setAuth } = useGlobalState();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const isScrolling = scrollTop > 0;
    setIsScrolled(isScrolling);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    async function check() {
      if (auth?.user?.email == "final@test.com"){
        setIsAdmin(true)
      }
    }
    setIsAdmin(false)
    if (auth.user) {
      check()
    }

  }, [auth])
  // ${isScrolled ? "bg-[var(--primary-color)]" : "bg-primary-color"

  return (
    <nav
      className={`z-[999] flex justify-between items-center pt-5 px-4 lg:px-24 sticky top-0 
      bg-[var(--primary-color)] text-white py-5`}
    >
      <div className="w-[25%] flex">
        <Image src="/assets/logo.png" alt="logo" width={80} height={80} className="object-contain"/>
        <Link href="https://www.instagram.com/cultcrew.nluo?igsh=NDNoaDQ1eDhsMTI3" target="_blank">
        <Image src="/assets/clutcrew.png" alt="logo" width={100} height={100} className="object-contain"/>
        </Link>
      </div>
      <div className="w-[75%] flex justify-end items-center">
        {/* Navbar links for larger screens */}
        <ul className="hidden lg:flex justify-between items-center space-x-4">
          <li className="text-sm hover:text-highlight-color transition duration-300 px-4 uppercase tracking-widest cursor-pointer">
            <Link href="/"> Home</Link>
          </li>
          <li className="text-sm hover:text-highlight-color transition duration-300 px-4 uppercase tracking-widest cursor-pointer">
            <Link href="/#schedule">Schedule</Link>
          </li>
          <li className="text-sm hover:text-highlight-color transition duration-300 px-4 uppercase tracking-widest cursor-pointer">
            <span onClick={redirectToAttraction}> Nearby Attractions</span>

          </li>
          <li className="text-sm hover:text-highlight-color transition duration-300 px-4 uppercase tracking-widest cursor-pointer">
            <Link href="/#gallery"> Gallery</Link>

          </li>
          
          <li className="text-sm hover:text-highlight-color transition duration-300 px-4 uppercase tracking-widest cursor-pointer">
            <Link href="/#contact">  Contact Us</Link>

          </li>
          <li className="text-sm hover:text-highlight-color transition duration-300 px-4 uppercase tracking-widest cursor-pointer">
            <span onClick={redirectToAnotherPage}> Registration</span>
          </li>

          {auth.user ? (
            // User is logged in
            <>

              <li className="text-sm hover:text-highlight-color transition duration-300 px-4 uppercase tracking-widest cursor-pointer">
                <span onClick={() => logout(setAuth)}> Logout</span>
              </li>
            </>
          ) : (
            // User is not logged in
            <>

              <li className="text-sm hover:text-highlight-color transition duration-300 px-4 uppercase tracking-widest cursor-pointer">
                <span onClick={redirectToSignUpPage}> Signup/Login</span>
              </li>
            </>
          )}

          {
            isAdmin? (
              <>
              <li className="text-sm hover:text-highlight-color transition duration-300 px-4 uppercase tracking-widest cursor-pointer">
                <span onClick={redirectToAdminPage}> Admin</span>
              </li>
              </>
            ):(null)
          }

        </ul>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <LiaTimesSolid
              className="text-2xl cursor-pointer transition duration-300 absolute top-12 right-5 z-50"
              onClick={toggleMenu}
            />
          ) : (
            <HiBars3
              className="text-2xl cursor-pointer transition duration-300"
              onClick={toggleMenu}
            />
          )}

          {/* Mobile dropdown menu */}
          {isMenuOpen && (
            <div
              className={`${isMenuOpen
                ? "translate-x-0"
                : "translate-x-full opacity-0 pointer-events-none"
                } pt-20 h-screen w-[60%] bg-[var(--primary-color)] absolute top-0 right-0 bg-primary-color p-4 shadow-lg transition-transform duration-500`}
            >
              {" "}
              <ul className="flex flex-col space-y-2">
                <li className="hover:text-highlight-color transition duration-300 uppercase tracking-widest text-sm leading-10">
                <Link href="/"> Home</Link>
                </li>
                <li className="hover:text-highlight-color transition duration-300 uppercase tracking-widest text-sm leading-10">
                <Link href="/#schedule">Schedule</Link>
                </li>
                <li className="hover:text-highlight-color transition duration-300 uppercase tracking-widest text-sm leading-10">
                <span onClick={redirectToAttraction}> Nearby Attractions</span>
                </li>
                <li className="hover:text-highlight-color transition duration-300 uppercase tracking-widest text-sm leading-10">
                <Link href="/#gallery"> Gallery</Link>
                </li>

                <li className="hover:text-highlight-color transition duration-300 uppercase tracking-widest text-sm leading-10">
                <Link href="/#contact">  Contact Us</Link>
                </li>

                <li className="hover:text-highlight-color transition duration-300 uppercase tracking-widest text-sm leading-10">
                <span onClick={redirectToAnotherPage}> Registration</span>
                </li>
              

                {auth.user ? (
            // User is logged in
            <>

              <li className="hover:text-highlight-color transition duration-300 uppercase tracking-widest text-sm leading-10">
                <span onClick={() => logout(setAuth)}> Logout</span>
              </li>
            </>
          ) : (
            // User is not logged in
            <>

              <li className="hover:text-highlight-color transition duration-300 uppercase tracking-widest text-sm leading-10">
                <span onClick={redirectToSignUpPage}> Signup/Login</span>
              </li>
            </>
          )}

          {
            isAdmin? (
              <>
              <li className="hover:text-highlight-color transition duration-300 uppercase tracking-widest text-sm leading-10">
                <span onClick={redirectToAdminPage}> Admin</span>
              </li>
              </>
            ):(null)
          }
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
