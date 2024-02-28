"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function Electricity() {
    const [meterNumber, setMeterNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [NIN, setNIN] = useState("");
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/services"><BackIcon className="text-black text-2xl" /></Link>
                    <p className="text-black font-bold">Electricity</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="text-xs text-gray-500 mt-6">Meter Number</p>
                <input value={meterNumber} onChange={(e) => { setMeterNumber(e.target.value) }} placeholder="Enter Your Meter Number" className="h-10 w-80 bg-white rounded-lg text-black mt-2 pl-3 items-center" />
                <p className="text-xs text-gray-500 mt-4">Distribution Company</p>
                <select defaultValue="Select Distribution Company" className="w-80 h-10 bg-white rounded-lg text-black mt-2 pl-3 items-center">
                    <option value="Select Distribution Company">Select Distribution Company</option>
                    <option value="AEDC">Abuja Electricity Distribution Company (AEDC)</option>
                    <option value="BEDC">Benin Electricity Distribution Company (BEDC)</option>
                    <option value="EEDC">Enugu Electricity Distribution Company (EEDC)</option>
                    <option value="EKEDC">Eko Electricity Distribution Company (EKEDC)</option>
                    <option value="IBEDC">Ibadan Electricity Distribution Company (IBEDC)</option>
                    <option value="IKEDC">Ikeja Electricity Distribution Company (IKEDC)</option>
                    <option value="JEDC">Jos Electricity Distribution Company (JEDC)</option>
                    <option value="KAEDCO">Kaduna Electricity Distribution Company (KAEDCO)</option>
                    <option value="KEDCO">Kano Electricity Distribution Company (KEDCO)</option>
                    <option value="PHED">Port Harcourt Electricity Distribution Company (PHED)</option>
                    <option value="ABEDC">Aba Electricity Distribution Company (ABEDC)</option>
                </select>
                <p className="text-xs text-gray-500 mt-4">Amount</p>
                <input value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="10,000" className="h-10 w-80 bg-white rounded-lg text-black mt-2 pl-3 items-center" />
            </div>
        </div>
    );
}

export default Electricity;