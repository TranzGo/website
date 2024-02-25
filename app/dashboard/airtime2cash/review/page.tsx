"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

function ReviewAirtime2Cash() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/airtime2cash/bankdetails"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-semibold">Airtime2Cash</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="text-xs text-gray-400 mx-auto mt-3">To</p>
                <p className="text-sm font-bold text-green-600 mx-auto">Jachimma P.</p>
                <p className="text-xs text-gray-400 mx-auto mt-2">Amount</p>
                <p className="text-xs text-gray-800 font-bold mx-auto">NGN 1000.00</p>
                <div className="flex flex-col text-gray-800 mt-4">
                    <div className="bg-white w-80 h-10 mb-2 rounded-lg flex flex-row justify-between px-4 items-center">
                        <p>Conversion Rate</p>
                        <p>82%</p>
                    </div>
                    <div className="bg-white w-80 h-10 mb-2 rounded-lg flex flex-row justify-between px-4 items-center">
                        <p>Payout Amount</p>
                        <p>NGN 820</p>
                    </div>
                    <div className="bg-white w-80 h-10 mb-2 rounded-lg flex flex-row justify-between px-4 items-center">
                        <p>Network</p>
                        <p>MTN Airtime Conversion</p>
                    </div>
                    <div className="bg-white w-80 h-10 mb-2 rounded-lg flex flex-row justify-between px-4 items-center">
                        <p>Phone No.</p>
                        <p>08102961518</p>
                    </div>
                    <div className="bg-white w-80 h-10 mb-2 rounded-lg flex flex-row justify-between px-4 items-center">
                        <p>Bank</p>
                        <p>Access Bank</p>
                    </div>
                    <div className="bg-white w-80 h-10 mb-2 rounded-lg flex flex-row justify-between px-4 items-center">
                        <p>Account Number</p>
                        <p>2135907016</p>
                    </div>
                </div>
                <button className="mt-20 bg-green-700 text-white font-bold justify-center items-center text-center w-[300px] h-10 mx-auto rounded-lg">Confirm</button>
            </div>
        </div>
    );
}

export default ReviewAirtime2Cash;