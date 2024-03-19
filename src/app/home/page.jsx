"use client";
import Image from "next/image";
import "./page.css";
import { FiExternalLink } from "react-icons/fi";
import Slider from "@/components/slider";
import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneSquareSolid } from "react-icons/lia";
import Link from "next/link";
import GallerySlider from "@/components/slider/gallery";
import EventSection from "@/components/event";
import UpcomingArtist from "@/components/slider/upcomingArtist";

export default function Homepage() {
  const isMobileScreen = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 600; // Change this value if needed
    }

    return false;
  };

  // Function to check if the screen size is mobile
  const isMobile = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768; // Change this value if needed
    }

    return false;
  };

  return (
    <div className="text-white -mt-[35%] md:-mt-[20%] lg:-mt-[9%] bg-gradient-to-r from-[#2b4992] via-[#87a1c6] to-[#3f5294] bg-opacity-50 relative z-50">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-70 top-0 z-0"
        style={{ backgroundImage: "url('/assets/b2.jpg')" }}
      ></div>
      {/* HERO SECTION start */}
      {/* <section
        className="min-h-[110vh] bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/assets/hero-banner.jpg)" }}
      ></section> */}

      <section className="relative z-50">
        {/* {isMobileScreen ? ( */}
        <Image
          src="/assets/mobile-banner.jpg"
          alt="hero-banner"
          className="flex md:hidden w-full h-full object-cover"
          width={2000}
          height={1000}
        />
        {/* ) : ( */}
        <Image
          src="/assets/desktop-hero-banner.jpg"
          alt="hero-banner"
          width={2000}
          height={1000}
          className="hidden md:flex w-full h-full object-cover"
        />
        {/* )} */}
      </section>

      {/* HERO SECTION end */}

      {/* Why KAIRAAN? start */}

      <section className="relative text-white min-h-[50vh] flex justify-center items-center flex-col">
        <div className="flex justify-center items-center z-10 px-[30px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px] py-[50px] lg:py-0">
          <div className="relative w-[100%] z-50">
            <h2 className="text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold text-center">
              KAIRAAN' <span className="align-baseline">24</span>
            </h2>
            <p className="text-center lg:text-2xl">
              We are delighted to announce the{" "}
              <span className="font-bold">7th edition</span> of our Flagship
              Annual Cultural Fest KAIRAAN, organized by the Cultural Committee
              of NLUO from March 21 – March 23, 2024. The theme for this year is
              inspired by the enchanting theme of {"‘"}Van Gogh{"’"}s Starry
              Nights.{"’"} Yes, you heard it right! This edition promises to
              give its audience an immersive and enchanting experience that will
              transport you to the vibrant world of the Dutch painter. Hop on
              with us as we take you on this artistic odyssey.
            </p>
          </div>
        </div>
      </section>
      {/* Why KAIRAAN? end */}

      {/* Upcoming Artist Start */}
      <section className="relative z-40 px-[30px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px] py-[50px] w-full min-h-[50vh] flex justify-center items-center flex-col">
        <h2 className="mb-10 text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold text-left">
          UPCOMING ARTISTS
        </h2>

        <div className="justify-center items-center hidden md:flex">
        <Image src="/assets/upcomingArtist1.png" alt="img" width={500} height={500} className="h-[400px] object-contain"/>
        <Image src="/assets/upcomingArtist2.png" alt="img" width={500} height={500} className="h-[400px] object-contain"/>
        <Image src="/assets/upcomingArtist3.png" alt="img" width={500} height={500} className="h-[400px] object-contain"/>
        </div>
        <div className="flex md:hidden">
        <UpcomingArtist/>
        </div>
      </section>
      {/* Upcoming Artist End */}


      {/* About Events start */}
      {/* <section className="relative z-50 px-[30px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px] py-[50px] w-full min-h-[50vh] flex justify-center items-center flex-col">
        <h2 className="text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold text-center md:mb-5 lg:mb-10">
          WHAT&apos;S COOKIN&apos;?
        </h2>

        <div className="w-full flex justify-around items-center flex-col border-y-2 py-5 border-white m-3">
          <div className="w-full flex justify-around items-center flex-wrap">
            <div className="w-[45%] md:w-fit text-right border-dotted border-r-2 pr-3 border-white">
              <h2 className="font-bold text-3xl mb-1 md:mb-0 md:text-5xl md:leading-[40px]">21</h2>
              <p className="uppercase md:leading-10 text-xs md:text-base">March 2024</p>
            </div>
            <div className="w-[calc(55%-0.75rem)] md:w-[40%] ml-3 md:ml-0 text-left flex justify-start items-start flex-col">
              <h2 className="text-xl md:text-3xl font-extrabold leading-10">Camp Rock</h2>
              <p className="uppercase text-xs md:text-base">(Battle of Bands)</p>
            </div>
            <div className="w-[40%] flex justify-center md:justify-end items-center">
              <button className="text-xs md:text-base mt-5 md:mt-0 flex justify-center items-center uppercase border-2 border-white text-white py-3 px-5 md:py-4 md:px-10 rounded-lg hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] hover:transition hover:duration-300">
                More Info <FiExternalLink className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-around items-center flex-col border-y-2 py-5 border-white m-3">
          <div className="w-full flex justify-around items-center flex-wrap">
            <div className="w-[45%] md:w-fit text-right border-dotted border-r-2 pr-3 border-white">
              <h2 className="font-bold text-3xl mb-1 md:mb-0 md:text-5xl md:leading-[40px]">22</h2>
              <p className="uppercase md:leading-10 text-xs md:text-base">March 2024</p>
            </div>
            <div className="w-[calc(55%-0.75rem)] md:w-[40%] ml-3 md:ml-0 text-left flex justify-start items-start flex-col">
              <h2 className="text-xl md:text-3xl font-extrabold leading-10">TARANG</h2>
              <p className="uppercase text-xs md:text-base">(Talent Show for Persons with Disabilities)</p>
            </div>
            <div className="w-[40%] flex justify-center md:justify-end items-center">
            <button className="text-xs md:text-base mt-5 md:mt-0 flex justify-center items-center uppercase border-2 border-white text-white py-3 px-5 md:py-4 md:px-10 rounded-lg hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] hover:transition hover:duration-300">
                More Info <FiExternalLink className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-around items-center flex-col border-y-2 py-5 border-white m-3 mb-12">
          <div className="w-full flex justify-around items-center flex-wrap">
            <div className="w-[45%] md:w-fit text-right border-dotted border-r-2 pr-3 border-white">
              <h2 className="font-bold text-3xl mb-1 md:mb-0 md:text-5xl md:leading-[40px]">21</h2>
              <p className="uppercase md:leading-10 text-xs md:text-base">March 2024</p>
            </div>
            <div className="w-[calc(55%-0.75rem)] md:w-[40%] ml-3 md:ml-0 text-left flex justify-start items-start flex-col">
              <h2 className="text-xl md:text-3xl font-extrabold leading-10">RANGMANCH</h2>
              <p className="uppercase text-xs md:text-base">(Theatre competition )</p>
            </div>
            <div className="w-[40%] flex justify-center md:justify-end items-center">
            <button className="text-xs md:text-base mt-5 md:mt-0 flex justify-center items-center uppercase border-2 border-white text-white py-3 px-5 md:py-4 md:px-10 rounded-lg hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] hover:transition hover:duration-300">
                More Info <FiExternalLink className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        <button className="text-xs md:text-base mt-5 md:mt-0 flex justify-center items-center uppercase border-2 border-white text-white py-3 px-5 md:py-4 md:px-10 rounded-lg hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] hover:transition hover:duration-300">
                 View More <FiExternalLink className="ml-1" />
              </button>
      </section> */}

      <EventSection className="z-[9999]" />

      {/* About Events end */}

      {/* Day-wise Schedule start */}
      <section
        id="schedule"
        className="relative z-40 px-[30px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px] py-[50px] w-full min-h-[50vh] flex justify-center items-center flex-col"
      >
        <h2 className="text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold text-left">
          Day-wise Schedule
        </h2>
          {/* <p className="text-2xl leading-10">Coming soon!</p> */}
          <table className="border-2 rounded-md border-white text-center mt-10">
  <thead className="border-2 rounded-md border-white text-xl uppercase">
    <tr>
      <th className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        21.03.2024
        <br />
        Day 1
      </th>
      <th className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        22.03.2024
        <br />
        Day 2
      </th>
      <th className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        23.03.2024
        <br />
        Day 3
      </th>
    </tr>
  </thead>

  <tbody>
    <tr className="border-2 rounded-md border-white">
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Up the Ante Quiz (Inhouse) <br /> 10:30 AM <br /> Seminar Hall
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Pitch Perfect (Solo Singing) <br /> 02:00 PM <br /> Amphitheatre
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Antakshari <br /> 02:00 PM <br /> LH 5
      </td>
    </tr>
    <tr className="border-2 rounded-md border-white">
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        TARANG <br /> 02:00 PM <br /> Amphitheatre
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Step Up (Solo Dance) <br /> 03:00 PM <br /> Amphitheatre
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Treasure Hunt <br /> 04:00 PM <br /> LH 5
      </td>
    </tr>
    <tr className="border-2 rounded-md border-white">
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        The Buddy Project <br /> 03:00 PM <br /> LH 5
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        High Strung (Group Dance) <br /> 04:00 PM <br /> Amphitheatre
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Rangmanch (Theatre) <br /> 05:00 PM <br /> Amphitheatre
      </td>
    </tr>
    <tr className="border-2 rounded-md border-white">
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Unplugged <br /> 05:00 PM <br /> Fest Area (Parking lot)
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Camp Rock (Battle of Bands) <br /> 05:30 PM <br /> Amphitheatre
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Project Runway (Fashion Show) <br /> 06:00 PM <br /> Amphitheatre
      </td>
    </tr>
    <tr className="border-2 rounded-md border-white">
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Faculty and Staff Events (In-House) <br /> 06:00 PM <br /> Amphitheatre
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Special Performance <br /> 07:00 PM <br /> Amphitheatre
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Bharg Live <br /> 07:30 PM <br /> Fest Area (Parking lot)
      </td>
    </tr>
    <tr className="border-2 rounded-md border-white">
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Prom (In-House) <br /> 09:00 PM <br /> Amphitheatre
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        Dikshant Live <br /> 08:30 PM <br /> Fest Area (Parking lot)
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        DJ Ravator <br /> 10:00 PM <br /> Fest Area (Parking lot)
      </td>
    </tr>
    <tr className="border-2 rounded-md border-white">
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        DJ Satya <br /> 10:00 PM <br /> Amphitheatre
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        DJ Night <br /> 10:30 PM <br /> Fest Area (Parking lot)
      </td>
      <td className="border-2 rounded-md border-white py-2 px-4 md:py-4 md:px-16 text-sm md:text-base">
        {/* Event Name <br /> Time */}
      </td>
    </tr>
  </tbody>
</table>

      </section>
      {/* Day-wise Schedule end */}

      {/* Previous Artists start */}
      <section className="relative z-40 px-[30px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px] py-[50px] w-full min-h-[50vh] flex justify-center items-center flex-col">
        <h2 className="text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold text-left">
          PREVIOUS ARTISTS
        </h2>

        <Slider />
      </section>
      {/* Previous Artists end */}

      {/* MESSAGE FROM ORGANISERS start */}

      <section className="z-40 relative text-white pt-5 min-h-[30vh] flex justify-center items-center flex-col p-8">
        <div className="z-50 px-[30px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px] py-[50px]">
          <h2 className="text-3xl leading-[40px] mb-4 md:mb-0 md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold text-center">
            MESSAGE FROM ORGANISERS
          </h2>
          <p className="text-center lg:text-2xl">
            For us, KAIRAAN is more than just an event—it's a journey! It serves
            as a platform for our team to achieve significant milestones. The
            2023 KAIRAAN with its immeasurable success has given us the momentum
            to make the 2024 edition bigger and better than previously imagined.
            We are expanding our horizons by introducing new events in different
            spheres, collaborating with some of the BIGGEST ARTISTS in the
            country to make this a year to remember! We extend our heartfelt
            welcome to you to be a part of KAIRAAN’24 with a promise that it
            will be an experience you cherish for years to come.
          </p>
        </div>
      </section>
      {/* MESSAGE FROM ORGANISERS end */}

      {/* Gallery start */}
      <section
        id="gallery"
        className="relative z-40 px-2 py-[50px] w-full min-h-[50vh] flex justify-center items-center flex-col"
      >
        <h2 className="text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold text-left mb-5 ">
          Gallery
        </h2>
        <section className="overflow-hidden text-gray-700 w-full">
          {/* <style jsx>{`
       .swiper-button-prev:after, .swiper-button-next:after{
        color:black !important;
        font-size:25px !important;
       }
      `}</style> */}

          {isMobile() ? (
            <GallerySlider /> // Render GallerySlider component on mobile screens
          ) : (
            <div className="container px-1 py-2 mx-auto relative z-40">
              <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                  <div className="w-1/2 p-1">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full"
                      src="/assets/g3.jpg"
                      width={800}
                      height={800}
                    />
                  </div>
                  <div className="w-1/2 p-1">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full"
                      src="/assets/g4.jpg"
                      width={800}
                      height={800}
                    />
                  </div>
                  <div className="w-full p-1">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full"
                      src="/assets/g1.jpg"
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="w-full p-1">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full"
                      src="/assets/g2.jpg"
                      width={800}
                      height={800}
                    />
                  </div>
                  <div className="w-1/2 p-1">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full"
                      src="/assets/g5.jpg"
                      width={800}
                      height={800}
                    />
                  </div>
                  <div className="w-1/2 p-1">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full"
                      src="/assets/g7.jpg"
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </section>
      {/* Gallery end */}

      {/* Contact Us start */}
      <section
        id="contact"
        className="z-40 relative text-white pt-5 min-h-[30vh] flex justify-center items-center flex-col"
      >
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: "url('/assets/b2.jpg')" }}
        ></div> */}
        <div className="z-50 px-[30px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px] py-[50px] w-full">
          <h2 className="text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold mb-5 text-center">
            Contact Us
          </h2>

          {/* <div className="flex justify-start items-center w-full">
            <div className="w-[50%] shadow-lg card m-1 flex justify-start items-center p-10 bg-[rgba(0,0,0,0.3)] rounded-xl">
              <div>
                <Image
                  src="/assets/Preyansh.jpg"
                  alt="img"
                  width={400}
                  height={400}
                  className="rounded-full w-[150px] h-[150px] shadow-lg object-cover"
                />
              </div>

              <div className="ml-5">
                <p className="text-3xl font-semibold">Preyansh Gupta</p>
                <p className="text-2xl leading-10">Convenor</p>
                <Link href="" className="flex items-center">
                  <HiOutlineMail className="text-xl mr-2" /> +91 7999-935-624
                </Link>
                <Link href="" className="flex items-center">
                  <LiaPhoneSquareSolid className="text-xl mr-2" />{" "}
                  20bba035@nluo.ac.in
                </Link>
              </div>
            </div>

            <div className="w-[50%] shadow-lg card m-1 flex justify-start items-center p-10 bg-[rgba(0,0,0,0.3)] rounded-xl">
              <div>
                <Image
                  src="/assets/Shamil.jpg"
                  alt="img"
                  width={400}
                  height={400}
                  className="rounded-full w-[150px] h-[150px] shadow-lg object-cover"
                />
              </div>

              <div className="ml-5">
                <p className="text-3xl font-semibold">Shamil Adeeb</p>
                <p className="text-2xl leading-10">Co-Convenor</p>
                <Link href="" className="flex items-center">
                  <HiOutlineMail className="text-xl mr-2" /> +91 7504-637-660
                </Link>
                <Link href="" className="flex items-center">
                  <LiaPhoneSquareSolid className="text-xl mr-2" />
                  21bba042@nluo.ac.in
                </Link>
              </div>
            </div>
          </div> */}

          <div className="flex justify-center items-center flex-wrap w-full">
            <div className="w-[calc(100%-22px)] md:w-[calc(50%-22px)] xl:w-[calc(25%-22px)] shadow-lg card m-1 flex justify-start items-center flex-col px-5 py-10 bg-[rgba(0,0,0,0.3)] rounded-xl">
              <div>
                <Image
                  src="/assets/Preyansh.jpg"
                  alt="img"
                  width={400}
                  height={400}
                  className="rounded-full w-[150px] h-[150px] shadow-lg object-cover"
                />
              </div>

              <div className="text-center">
                <p className="text-xl font-semibold mt-5">Preyansh Gupta</p>
                <p className="text-lg ">Convenor</p>
                <div className="flex justify-center items-center mt-2">
                  <Link
                    href="mailto:20bba035@nluo.ac.in"
                    className="flex items-center text-sm"
                  >
                    <HiOutlineMail className="text-lg mr-2" />
                  </Link>
                  <Link
                    href="tel:+917999935624"
                    className="flex items-center text-sm"
                  >
                    <LiaPhoneSquareSolid className="text-lg mr-2" />{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[calc(100%-22px)] md:w-[calc(50%-22px)] xl:w-[calc(25%-22px)] shadow-lg card m-1 flex justify-start items-center flex-col px-5 py-10 bg-[rgba(0,0,0,0.3)] rounded-xl">
              <div>
                <Image
                  src="/assets/Shamil.jpg"
                  alt="img"
                  width={400}
                  height={400}
                  className="rounded-full w-[150px] h-[150px] shadow-lg object-cover"
                />
              </div>

              <div className="text-center">
                <p className="text-xl font-semibold mt-5">Shamil Adeeb</p>
                <p className="text-lg ">Co-Convenor</p>
                <div className="flex justify-center items-center mt-2">
                  <Link
                    href="mailto:21bba042@nluo.ac.in"
                    className="flex items-center text-sm"
                  >
                    <HiOutlineMail className="text-lg mr-2" />
                  </Link>
                  <Link
                    href="tel:+917504637660"
                    className="flex items-center text-sm"
                  >
                    <LiaPhoneSquareSolid className="text-lg mr-2" />{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[calc(100%-22px)] md:w-[calc(50%-22px)] xl:w-[calc(25%-22px)] shadow-lg card m-1 flex justify-start items-center flex-col px-5 py-10 bg-[rgba(0,0,0,0.3)] rounded-xl">
              <div>
                <Image
                  src="/assets/Shantanu.jpg"
                  alt="img"
                  width={400}
                  height={400}
                  className="rounded-full w-[150px] h-[150px] shadow-lg object-cover"
                />
              </div>

              <div className="text-center">
                <p className="text-xl font-semibold mt-5">Shantanu Bhatnagar</p>
                <p className="text-lg ">Co-Convenor</p>
                <div className="flex justify-center items-center mt-2">
                  <Link
                    href="mailto:21bba043@nluo.ac.in"
                    className="flex items-center text-sm"
                  >
                    <HiOutlineMail className="text-lg mr-2" />
                  </Link>
                  <Link
                    href="tel:+917987557358"
                    className="flex items-center text-sm"
                  >
                    <LiaPhoneSquareSolid className="text-lg mr-2" />{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[calc(100%-22px)] md:w-[calc(50%-22px)] xl:w-[calc(25%-22px)] shadow-lg card m-1 flex justify-start items-center flex-col px-5 py-10 bg-[rgba(0,0,0,0.3)] rounded-xl">
              <div>
                <Image
                  src="/assets/Shakti.jpg"
                  alt="img"
                  width={400}
                  height={400}
                  className="rounded-full w-[150px] h-[150px] shadow-lg object-cover"
                />
              </div>

              <div className="text-center">
                <p className="text-xl font-semibold mt-5">Shakti Soni</p>
                <p className="text-lg ">Secretary</p>
                <div className="flex justify-center items-center mt-2">
                  <Link
                    href="mailto:21ba088@nluo.ac.in"
                    className="flex items-center text-sm"
                  >
                    <HiOutlineMail className="text-lg mr-2" />
                  </Link>
                  <Link
                    href="tel:+917077916257"
                    className="flex items-center text-sm"
                  >
                    <LiaPhoneSquareSolid className="text-lg mr-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us end */}
    </div>
  );
}
