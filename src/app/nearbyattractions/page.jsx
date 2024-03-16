"use client";
import Image from "next/image";
import "./page.css";
import { PiMapPinLineLight } from "react-icons/pi";

export default function NearbyAttractionsPage() {
  return (
    <section className="relative text-white pt-5 h-max flex justify-center items-center flex-col bg-gradient-to-r from-[#2b4992] via-[#87a1c6] to-[#3f5294] p-8 bg-opacity-50">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/assets/b2.jpg')" }}
      ></div>

      {/* Near by Attractions */}
      <section className="z-50 relative text-white pt-5 flex justify-center items-center flex-col p-0 md:p-8">
        <h2 className="text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold mb-5 text-center">
          Near By Attractions
        </h2>

        {/* Konark Sun Temple start */}
        <div className="m-5 flex justify-center items-center flex-wrap flex-col md:flex-row sm:mx-[20px] md:mx-[100px] lg:mx-[150px] xl:mx-[200px] bg-[rgba(0,0,0,0.3)] rounded-xl p-10">
          <div className="w-full md:w-1/4">
            <Image
              src="/assets/konark.png"
              alt="location_img"
              width={1000}
              height={50}
              className="w-full h-[50]"
            />
          </div>
          <div className="w-full md:w-9/12">
            <h2 className="mt-5 md:mt-0 text-2xl md:text-3xl font-bold md:leading-[45px] text-center md:text-left">
              Konark Sun Temple
            </h2>

            <div className="flex justify-center items-center flex-col md:justify-start md:items-start md:flex-row">
              <PiMapPinLineLight className="hidden text-xl mr-2 md:block" />
              <p className="uppercase text-center md:text-left">
                Hindu temple in Konark, Odisha
              </p>
            </div>

            <p className="text-center md:text-justify mt-2">
              Located in Odisha, India, the Konark Sun Temple is a UNESCO World
              Heritage Site known for its exquisite architecture dedicated to
              the sun god, Surya. The temple's intricate stone carvings
              depicting various mythological scenes and celestial beings attract
              visitors from around the world.
            </p>
          </div>
        </div>
        {/* Konark Sun Temple start */}

        {/* Chandipur start */}
        <div className="m-5 flex justify-center items-center flex-wrap flex-col md:flex-row sm:mx-[20px] md:mx-[100px] lg:mx-[150px] xl:mx-[200px] bg-[rgba(0,0,0,0.3)] rounded-xl p-10">
          <div className="w-full md:w-1/4">
            <Image
              src="/assets/chandipur.png"
              alt="location_img"
              width={1000}
              height={50}
              className="w-full h-[50]"
            />
          </div>
          <div className="w-full md:w-9/12">
            <h2 className="mt-5 md:mt-0 text-2xl md:text-3xl font-bold md:leading-[45px] text-center md:text-left">
              Chandipur
            </h2>

            <div className="flex justify-center items-center flex-col md:justify-start md:items-start md:flex-row">
              <PiMapPinLineLight className="hidden text-xl mr-2 md:block" />
              <p className="uppercase text-center md:text-left">
                Balasore District, Odisha
              </p>
            </div>

            <p className="text-center md:text-justify mt-2">
              A unique beach town in Odisha, Chandipur is famous for its
              disappearing sea phenomenon. During low tide, the sea recedes up
              to 5 kilometers, exposing the seabed, and then returns during high
              tide. This natural occurrence is a major attraction for tourists
              visiting the region.
            </p>
          </div>
        </div>
        {/* Chandipur start */}

        {/* Puri start */}
        <div className="m-5 flex justify-center items-center flex-wrap flex-col md:flex-row sm:mx-[20px] md:mx-[100px] lg:mx-[150px] xl:mx-[200px] bg-[rgba(0,0,0,0.3)] rounded-xl p-10">
          <div className="w-full md:w-1/4">
            <Image
              src="/assets/puri.png"
              alt="location_img"
              width={1000}
              height={50}
              className="w-full h-[50]"
            />
          </div>
          <div className="w-full md:w-9/12">
            <h2 className="mt-5 md:mt-0 text-2xl md:text-3xl font-bold md:leading-[45px] text-center md:text-left">
              Puri
            </h2>

            <div className="flex justify-center items-center flex-col md:justify-start md:items-start md:flex-row">
              <PiMapPinLineLight className="hidden text-xl mr-2 md:block" />
              <p className="uppercase text-center md:text-left">Odisha</p>
            </div>

            <p className="text-center md:text-justify mt-2">
              Known for its beautiful beaches and the famous Jagannath Temple,
              Puri is a significant pilgrimage destination in India. The
              Jagannath Temple hosts the Rath Yatra festival, during which
              massive chariots carrying deities are pulled by devotees, drawing
              millions of visitors annually.
            </p>
          </div>
        </div>
        {/* Puri start */}

        {/* Nandankanan start */}
        <div className="m-5 flex justify-center items-center flex-wrap flex-col md:flex-row sm:mx-[20px] md:mx-[100px] lg:mx-[150px] xl:mx-[200px] bg-[rgba(0,0,0,0.3)] rounded-xl p-10">
          <div className="w-full md:w-1/4">
            <Image
              src="/assets/nandankanan.png"
              alt="location_img"
              width={1000}
              height={50}
              className="w-full h-[50]"
            />
          </div>
          <div className="w-full md:w-9/12">
            <h2 className="mt-5 md:mt-0 text-2xl md:text-3xl font-bold md:leading-[45px] text-center md:text-left">
              Nandankanan
            </h2>

            <div className="flex justify-center items-center flex-col md:justify-start md:items-start md:flex-row">
              <PiMapPinLineLight className="hidden text-xl mr-2 md:block" />
              <p className="uppercase text-center md:text-left">
                Barang, Bhubaneswar, Odisha
              </p>
            </div>

            <p className="text-center md:text-justify mt-2">
              Nandankanan Zoological Park, located near Bhubaneswar, is renowned
              for its conservation efforts and housing a diverse range of
              wildlife, including white tigers and Asiatic lions. It is also a
              botanical garden with a picturesque lake, making it a popular spot
              for nature enthusiasts.
            </p>
          </div>
        </div>
        {/* Nandankanan start */}

        {/* Chilka lake
 start */}
        <div className="m-5 flex justify-center items-center flex-wrap flex-col md:flex-row sm:mx-[20px] md:mx-[100px] lg:mx-[150px] xl:mx-[200px] bg-[rgba(0,0,0,0.3)] rounded-xl p-10">
          <div className="w-full md:w-1/4">
            <Image
              src="/assets/chilkalake.png"
              alt="location_img"
              width={1000}
              height={50}
              className="w-full h-[50]"
            />
          </div>
          <div className="w-full md:w-9/12">
            <h2 className="mt-5 md:mt-0 text-2xl md:text-3xl font-bold md:leading-[45px] text-center md:text-left">
            Chilika Lake
            </h2>

            <div className="flex justify-center items-center flex-col md:justify-start md:items-start md:flex-row">
              <PiMapPinLineLight className="hidden text-xl mr-2 md:block" />
              <p className="uppercase text-center md:text-left">Odisha</p>
            </div>

            <p className="text-center md:text-justify mt-2">
              Asia's largest brackish water lagoon, Chilika Lake is a haven for
              migratory birds, especially during the winter months. Birdwatchers
              flock to this site to catch glimpses of rare avian species like
              flamingos, herons, and pelicans amidst the tranquil waters and
              lush greenery.
            </p>
          </div>
        </div>
        {/* Chilka lake
 start */}

        {/* Udayagiri and
Khandagiri Caves start */}
        <div className="m-5 flex justify-center items-center flex-wrap flex-col md:flex-row sm:mx-[20px] md:mx-[100px] lg:mx-[150px] xl:mx-[200px] bg-[rgba(0,0,0,0.3)] rounded-xl p-10">
          <div className="w-full md:w-1/4">
            <Image
              src="/assets/udayagiri.png"
              alt="location_img"
              width={1000}
              height={50}
              className="w-full h-[50]"
            />
          </div>
          <div className="w-full md:w-9/12">
            <h2 className="mt-5 md:mt-0 text-2xl md:text-3xl font-bold md:leading-[45px] text-center md:text-left">
              Udayagiri and Khandagiri Caves
            </h2>

            <div className="flex justify-center items-center flex-col md:justify-start md:items-start md:flex-row">
              <PiMapPinLineLight className="hidden text-xl mr-2 md:block" />
              <p className="uppercase text-center md:text-left">
                Historical landmark in Bhubaneswar, Odisha
              </p>
            </div>

            <p className="text-center md:text-justify mt-2">
              These ancient Jain rock-cut caves near Bhubaneswar showcase
              intricate carvings, sculptures, and inscriptions dating back to
              the 2nd century BCE. The caves provide a glimpse into Jain and
              Buddhist art and architecture, offering a fascinating historical
              and cultural experience for visitors.
            </p>
          </div>
        </div>
        {/* Udayagiri and
Khandagiri Caves start */}
      </section>
    </section>
  );
}
