"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

function Airtime2Cash() {
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="#"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-bold">Airtime2Cash</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="text-xs text-gray-400 mt-6">Select Provider</p>
                <div className="flex flex-row justify-between items-center text-center mt-3">
                    <button className="border-2 border-green-600 px-2 py-1 w-[70px] h-12 rounded-xl">
                        <Image src="/airtel.jpg" alt="airtel logo" width={54} height={40}></Image>
                    </button>
                    <button className="border-2 border-green-600 px-2 py-1 w-[70px] h-12 rounded-xl">
                        <Image src="/mtn.jpg" alt="mtn logo" width={54} height={40}></Image>
                    </button>
                    <button className="border-2 border-green-600 px-2 py-1 w-[70px] h-12 rounded-xl">
                        <Image src="/9mobile.jpg" alt="9mobile logo" width={54} height={40}></Image>
                    </button>
                    <button className="border-2 border-green-600 px-2 py-1 w-[70px] h-12 rounded-xl">
                        <Image src="/glo.jpg" alt="glo logo" width={54} height={40}></Image>
                    </button>
                </div>
                <p className="text-xs text-gray-400 mt-5">Amount to Convert</p>
                <input type="number" min={1000} step={100} value={amount} onChange={(e) => { setAmount(e.target.value); }} placeholder="Min, &#8358;1000" className="flex flex-row bg-white text-black mt-3 h-10 rounded-lg justify-between items-center px-4"></input>
                <p className="text-xs text-gray-400 mt-4">Phone Number</p>
                <input type="tel" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value); }} placeholder="09012345618" className="flex flex-row bg-white text-black mt-3 h-10 rounded-lg justify-between items-center px-4"></input>
                <button className="mt-20 bg-green-700 text-white font-bold justify-center items-center text-center h-10 rounded-lg">Next</button>
            </div>
        </div>
    );
}

export default Airtime2Cash;