"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiSwap } from "react-icons/pi";
import { IoIosHome } from "react-icons/io";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { GoHistory } from "react-icons/go";

function Services() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto h-screen">
                <p className="text-black font-bold mt-16 ml-2">Services</p>
                <p className="text-xs text-gray-800 ml-2 mt-1">Explore our range of services</p>
                <div className="flex flex-col justify-center mt-3 mx-2 space-y-3">
                    <div className="flex flex-row justify-between">
                        <div className="bg-white h-24 w-[86px] rounded-lg flex flex-col justify-center items-center text-green-600">
                            <FaPhoneAlt className="text-2xl" />
                            <p className="mt-2 text-xs font-semibold">Airtime</p>
                        </div>
                        <div className="bg-white h-24 w-[86px] rounded-lg flex flex-col justify-center items-center text-green-600">
                            <Image src="/data.png" alt="internet search" width={32} height={32}></Image>
                            <p className="mt-2 text-xs font-semibold">Data</p>
                        </div>
                        <div className="bg-white h-24 w-[86px] rounded-lg flex flex-col justify-center items-center text-green-600">
                            <PiSwap className="text-2xl" />
                            <p className="mt-2 text-xs font-semibold">Airtime2Cash</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="bg-white h-24 w-[86px] rounded-lg flex flex-col justify-center items-center text-green-600">
                            <Image src="/education.png" alt="education" width={32} height={32}></Image>
                            <p className="mt-2 text-xs font-semibold">Education</p>
                        </div>
                        <div className="bg-white h-24 w-[86px] rounded-lg flex flex-col justify-center items-center text-green-600">
                            <Image src="/electricity.png" alt="electricity" width={32} height={32}></Image>
                            <p className="mt-2 text-xs font-semibold">Electricity</p>
                        </div>
                        <div className="bg-white h-24 w-[86px] rounded-lg flex flex-col justify-center items-center text-green-600">
                            <Image src="/cabletv.png" alt="cabletv" width={32} height={32}></Image>
                            <p className="mt-2 text-xs font-semibold">Cable TV</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mx-1 px-4 justify-between items-center text-center text-green-600 text-xs mt-[320px] py-1 border-2 border-slate-100 shadow-2xl rounded-b-2xl">
                    <Link href="/dashboard" className="flex flex-col justify-center items-center text-center"><IoIosHome className="text-lg" />Home</Link>
                    <Link href="/dashboard/services" className="flex flex-col justify-center items-center text-center"><FcServices className="text-lg" />Services</Link>
                    <Link href="#" className="flex flex-col justify-center items-center text-center"><GoHistory className="text-md" />History</Link>
                    <Link href="#" className="flex flex-col justify-center items-center text-center"><FaUserAlt className="text-md" />Profile</Link>
                </div>
            </div>
        </div>
    );
}

export default Services;