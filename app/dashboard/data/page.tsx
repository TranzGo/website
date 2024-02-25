"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { PiUserList } from "react-icons/pi";

function BuyData() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [useOwnNumber, setUseOwnNumber] = useState(false);
    const [saveBeneficiary, setSaveBeneficiary] = useState(false);
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="#"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-bold">Buy Data Bundle</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="text-xs text-gray-400 mt-8">Select Provider</p>
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
                <p className="text-xs text-gray-400 mt-10">Phone Number</p>
                <div className="flex flex-row bg-white text-black mt-2 h-10 rounded-lg justify-between items-center px-4">
                    <input type="tel" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value); }} placeholder="Enter Your Phone Number" className="w-[280px]"></input>
                    <PiUserList className="text-lg" />
                </div>
                <div className="flex flex-row justify-between mt-2">
                    <p className="flex flex-row justify-center items-center text-center text-gray-400 text-[9px]">{useOwnNumber ? <BsToggleOn onClick={() => setUseOwnNumber(!useOwnNumber)} className="text-green-600 text-xl mr-2" /> : <BsToggleOff onClick={() => setUseOwnNumber(!useOwnNumber)} className="text-green-600 text-xl mr-2" />}Own Number</p>
                    <p className="text-sm text-gray-400">Beneficiary</p>
                </div>
                <p className="text-xs text-gray-400 mt-5">Save as Beneficiary</p>
                {saveBeneficiary ? <BsToggleOn onClick={() => setSaveBeneficiary(!saveBeneficiary)} className="text-green-600 text-4xl mr-2" /> : <BsToggleOff onClick={() => setSaveBeneficiary(!saveBeneficiary)} className="text-green-600 text-4xl mr-2" />}
                <p className="text-xs text-gray-400 mt-2">Select plan</p>
                <select defaultValue="Select plan" className="bg-white text-gray-500 mt-2 h-10 rounded-lg pl-3">
                    <option value="Select plan">Select plan</option>
                    <option value="US">MTN 50MB - CG - 30days</option>
                    <option value="US">MTN 150MB - CG - 30days</option>
                    <option value="US">MTN 250MB - CG - 30days</option>
                    <option value="US">MTN 500MB - SME - 30days</option>
                    <option value="US">MTN 500MB - CG - 30days</option>
                    <option value="US">MTN 1GB - SME - 30days</option>
                    <option value="US">MTN 1GB - CG - 30days</option>
                </select>
                <button className="mt-20 bg-green-700 text-white font-bold justify-center items-center text-center h-10 rounded-lg">Continue</button>
            </div>
        </div>
    );
}

export default BuyData;