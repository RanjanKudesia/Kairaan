"use client";
import Image from "next/image";

const GeneratedTicket = (props) => {
  return (
    <section className="relative text-white pt-5 min-h-screen flex justify-center items-center flex-col bg-gradient-to-r from-[#2b4992] via-[#87a1c6] to-[#3f5294] p-8 bg-opacity-50">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/assets/b2.jpg')" }}
      ></div>
      {/* <div className="card w-full md:max-w-[50%] p-8 space-y-3 rounded-lg bg-[rgba(0,0,0,0.4)] relative shadow-xl bg-cover bg-no-repeat bg-blend-darken">
       <div class="relative bg-gray-900 h-180 w-500">
</div>

      </div> */}
      {/* <h2 className="text-[40px] font-semibold text-center text-[var(--text-color)] z-50">Ticket Code is: {props.code}</h2>
<Image src="/assets/ticket.png" alt="ticket" width={1000} height={300} className="z-50"/> */}

      <div className="flex justify-start items-center flex-wrap flex-col md:flex-row w-full xl:max-w-[50%] lg:max-w-[70%] rounded-xl bg-white z-50 min-h-[300px] overflow-hidden">
        <div className="bg-black text-white py-5 md:py-0 md:min-h-[300px] flex justify-around items-center flex-row-reverse md:flex-col w-full md:w-[15%]">
          <p className="-rotate-0 md:-rotate-90 text-xl">{props.code}</p>
          <p className="-rotate-0 md:-rotate-90 text-xl">Entry Code:</p>
        </div>
        <div className="w-full border-r-0 md:w-[60%] p-8 text-black md:border-r-2 border-dashed border-black md:min-h-[250px] flex justify-center items-baseline flex-col">
          <div className="flex w-full">
          <div className="w-[70%] flex justify-center items-baseline flex-col pb-8">
            <p className="text-2xl md:text-4xl font-bold">KAIRAAN'24</p>
            <p className="md:text-xl uppercase font-semibold tracking-wider">
              Starry Night
            </p> 
          </div>

          <div className="w-[30%] flex justify-end">
            <Image src="/assets/qr-code.png" alt="QR-Code" width={100} height={100} className="w-full object-contain" />
          </div>
          </div>
          <p className="font-semibold">Time: 5pm-9pm</p>
            <p className="font-semibold">Venue: National Law University, Odisha</p>
          <p className="mt-5 text-base uppercase font-semibold bg-black py-2 px-6 text-white w-fit tracking-wider">
            21st to 23rd March'24
          </p>
        </div>

        <div className="text-black md:min-h-[250px] flex justify-around items-center md:flex-col w-full md:w-[25%] pb-10 p-4 md:pb-0">

          <div className="flex justify-center items-center flex-col">
            <p className="font-semibold text-sm md:text-xl">Order by</p> <br />
            <p className="font-bold -mt-[25px] text-sm md:text-base">Name</p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <p className="font-semibold text-sm md:text-xl">Payment Status</p> <br />
            <p className="font-bold -mt-[25px] text-sm md:text-base">Paid</p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <p className="font-semibold text-sm md:text-xl">Order Date</p> <br />
            <p className="font-bold -mt-[25px] text-sm md:text-base">20/02/24</p>
          </div>
        </div>
      </div>

      <p className="text-white text-center z-30 w-full md:w-1/2 p-2 mt-5">Here is your event ticket. Please have your ticket ready for gate entry. You can choose to either bring a printed copy or show this digital version. All event details are available on our website. We're excited to see you there!</p>
    </section>
  );
};

export default GeneratedTicket;
