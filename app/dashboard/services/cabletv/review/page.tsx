"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function ReviewCableTV() {
    const [showPackage, setShowPackage] = useState("");
    const [pkg, setPkg] = useState("");
    const [IUCNumber, setIUCNumber] = useState("");
    const [saveBeneficiary, setSaveBeneficiary] = useState(false);
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/services"><BackIcon className="text-black text-2xl" /></Link>
                    <p className="text-black font-bold">Review</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <div className="flex flex-col bg-white w-72 h-80 rounded-lg mx-auto mt-5">
                    <p className="mt-2 mb-2 text-blue-400 text-3xl font-bold mx-auto">DStv</p>
                    <div className="flex flex-row justify-between items-center mx-4">
                        <p className="text-sm text-gray-500">Biller</p>
                        <p className="text-black font-semibold text-sm">DSTV</p>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-4 mt-4 border-t">
                        <p className="text-sm text-gray-500 mt-4">Package</p>
                        <p className="text-black font-semibold text-sm mt-4">PREMIUM</p>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-4 mt-4 border-t">
                        <p className="text-sm text-gray-500 mt-4">Amount</p>
                        <p className="text-black font-semibold text-sm mt-4">29,500.00</p>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-4 mt-4 border-t">
                        <p className="text-sm text-gray-500 mt-4">IUC Number</p>
                        <p className="text-black font-semibold text-sm mt-4">2010226021</p>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-4 mt-4 border-t">
                        <p className="text-sm text-gray-500 mt-4">Reference</p>
                        <p className="text-black font-semibold text-sm mt-4">08054200231</p>
                    </div>
                </div>
                <button className="w-72 h-10 mx-auto mt-20 bg-green-600 rounded-lg text-white font-semibold">Pay</button>
            </div>
        </div>
    );
}

export default ReviewCableTV;