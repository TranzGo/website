import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { AiFillApple as AppleIcon } from "react-icons/ai";
import { IoLogoGooglePlaystore as PlaystoreIcon } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row space-y-20 md:space-y-0 justify-center md:justify-between items-center md:items-start text-center md:text-start p-12 max-w-6xl mx-auto mt-6">
        <div className="flex flex-col max-w-96 mt-0 md:mt-24">
          <h1 style={{ "color": "#122231" }} className="text-4xl font-bold">Your All-In-One Telecom Solution!</h1>
          <p style={{ "color": "#3D4F60" }} className="mt-4 text-lg">Buy airtime, data, pay bills, and convert airtime to cash effortlessly. Your seamless telecom experience begins here. Enjoy!</p>
          <div className="flex flex-row items-center space-x-2 mt-8">
            <Link style={{ "backgroundColor": "#122231" }} className="text-white rounded-xl p-3 font-bold flex flex-row items-center" href="#"><AppleIcon className="mr-2 text-3xl" /> Get on iPhone</Link>
            <Link style={{ "backgroundColor": "#122231" }} className="text-white rounded-xl p-4 font-bold flex flex-row items-center" href="#"><PlaystoreIcon className="mr-2 text-yellow-400 text-xl" /> Get on Android</Link>
          </div>
        </div>
        <div className="rounded-2xl items-center">
          <Image
            src="/airtime-to-cash.jpg"
            alt="Airtime To Cash"
            width={500}
            height={520}
          />
        </div>
      </div>
    </div>
  );
}
