import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";

export default function GallerySlider() {
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
          <Image src="/assets/g1.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g2.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g3.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g4.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g5.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g6.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g7.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g8.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g9.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g10.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g11.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g12.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g13.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g14.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g15.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center bg-transparent">
        <Image src="/assets/g16.jpg" alt="img" width={300} height={600} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
