import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Homepage from "./home/page";
import "./globals.css";


export default function Home() {
  return (
    <div>
      <div>
          <Navbar />
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}
