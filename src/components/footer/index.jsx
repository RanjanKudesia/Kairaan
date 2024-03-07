"use client";
import Link from "next/link";


export default function Footer() {
  return (
    <>
      <footer className="bg-[var(--primary-color)] pt-10 text-center text-white relative z-50 p-5">
        <p className="uppercase tracking-widest">National Law University, Odisha</p>
        <p className="mb-4">Kathajodi Campus, SEC - 13, CDA, Cuttack – 753015, Odisha (India)</p>
        <Link href="/policy" className="underline">Terms and Conditions</Link>
        <p className="text-sm py-5">Copyright 2024</p>
      </footer>
    </>
  );
}
