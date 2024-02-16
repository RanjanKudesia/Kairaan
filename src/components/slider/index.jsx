import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";

export default function Slider() {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3); // Default number of slides per view

  useEffect(() => {
    const handleResize = () => {
      // Update slides per view based on screen width
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    // Set initial slides per view
    handleResize();

    // Listen for window resize event
    window.addEventListener("resize", handleResize);

    // Clear event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper !== null) {
        swiper.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [swiper]);

  return (
    <>
      <Swiper
        loop={true}
        onSwiper={setSwiper}
        slidesPerView={slidesPerView} // Set slides per view dynamically
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper bg-transparent"
      >
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
          <Image src="/assets/pa1.png" alt="img" width={300} height={600} />
          <p className="pt-5 text-sm md:text-xl">Ritviz</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
          <Image src="/assets/pa2.png" alt="img" width={300} height={600} />
          <p className="pt-5 text-sm md:text-xl">Mojo Jojo</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
          <Image src="/assets/pa3.png" alt="img" width={300} height={600} />
          <p className="pt-5 text-sm md:text-xl">Trap</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
          <Image src="/assets/pa4.png" alt="img" width={300} height={600} />
          <p className="pt-5 text-sm md:text-xl">Underground Authorities</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
          <Image src="/assets/pa5.png" alt="img" width={300} height={600} />
          <p className="pt-5 text-sm md:text-xl">Lost Stories</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
