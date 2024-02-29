"use client";

const RegistrationRequest = () => {
  return (
    <section className="relative text-white pt-5 min-h-screen flex justify-center items-center flex-col bg-gradient-to-r from-[#2b4992] via-[#87a1c6] to-[#3f5294] p-8 bg-opacity-50">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/assets/b2.jpg')" }}
      ></div>
      <div className="card w-full md:max-w-[50%] p-8 space-y-3 rounded-lg bg-[rgba(0,0,0,0.4)] relative shadow-xl bg-cover bg-no-repeat bg-blend-darken">
        <h1 className="text-[40px] font-semibold text-center text-[var(--text-color)]">
          Stay Tuned
          <br />
          Your Request is Being Processed!
        </h1>
        <p className="text-lg text-center">
          We have received your request, your ticket will be generated and be available here within 24hrs.
          In case of any query please reach out to us at <span className="text-xl">thecultcrew@nluo.ac.in</span>
        </p>
        <br />
      </div>
    </section>
  );
};

export default RegistrationRequest;
