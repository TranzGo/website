"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiHandWavingFill, PiSwap } from "react-icons/pi";
import { TbBellRinging as NotificationsIcon, TbWorldSearch } from "react-icons/tb";
import { IoMdEye, IoMdEyeOff, IoIosSend, IoIosMore } from "react-icons/io";
import { FaPlusCircle, FaPhoneAlt } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

function UnlockAccount() {
    const [showBalance, setShowBalance] = useState(true);
    return (
        <div>
            <div className="flex flex-col w-96 mx-auto">
                <div className="flex flex-row mt-4">
                    <div className="rounded-full mr-4 items-start text-left">
                        <Image
                            src="/user-icon.png"
                            alt="User Profile Picture"
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="flex flex-col text-black mr-28">
                        <p className="flex flex-row items-center text-center font-extrabold">Good morning <PiHandWavingFill className="ml-2 text-3xl text-yellow-500" /></p>
                        <p className="font-medium">John Doe</p>
                        <p className="font-thin text-sm">A200231</p>
                    </div>
                    <NotificationsIcon className="text-2xl border-2 border-solid border-green-600 bg-white rounded-xl w-10 h-10 p-1 justify-center items-center text-center text-green-600 hover:text-green-700" />
                </div>
                <div className="flex flex-col mt-4 h-40 rounded-3xl bg-green-700">
                    <p className="text-white ml-6 mt-4 font-bold text-lg">Account Balance</p>
                    <div className="flex flex-row ml-6 text-white items-center">
                        <p className="font-bold text-2xl">&#8358; {showBalance ? '1,000,000' : '*********'}</p>
                        {showBalance ? <IoMdEye onClick={() => setShowBalance(!showBalance)} className="ml-2" /> : <IoMdEyeOff onClick={() => setShowBalance(!showBalance)} className="ml-2" />}
                    </div>
                    <div className="flex flex-row ml-6 mt-4 space-x-4 text-green-700">
                        <Link href="#" className="flex flex-row justify-center items-center text-xl py-2 font-bold rounded-xl bg-white w-32 ml-[2px]"><IoIosSend className="mr-2 text-3xl" />Send</Link>
                        <Link href="#" className="flex flex-row justify-center items-center text-xl py-2 font-bold rounded-xl bg-white w-48"><FaPlusCircle className="mr-2" />Fund Account</Link>
                    </div>
                </div>
                <p className="flex flex-row mt-4 justify-start items-center text-left font-bold text-green-700 text-xl"><FaBolt className="mr-2 text-2xl text-green-500" />Quick Access</p>
                <div className="flex flex-row justify-center space-x-2 mt-6">
                    <Link href="#" className="border-solid border-2 border-green-600 rounded-lg p-2 bg-white flex flex-col justify-center items-center text-xl text-green-600"><FaPhoneAlt />Airtime</Link>
                    <Link href="#" className="border-solid border-2 border-green-600 rounded-lg p-2 bg-white flex flex-col justify-center items-center text-xl text-green-600"><TbWorldSearch />Data</Link>
                    <Link href="#" className="border-solid border-2 border-green-600 rounded-lg p-2 bg-white flex flex-col justify-center items-center text-xl text-green-600"><PiSwap />Airtime2Cash</Link>
                    <Link href="#" className="border-solid border-2 border-green-600 rounded-lg p-2 bg-white flex flex-col justify-center items-center text-xl text-green-600"><IoIosMore />More</Link>
                </div>
                <div className="flex justify-center items-center text-center mt-4">
                    <Image
                        src="/flyer.png"
                        alt="User Profile Picture"
                        width={360}
                        height={320}
                    />
                </div>
            </div>
        </div>
    );
}

export default UnlockAccount;