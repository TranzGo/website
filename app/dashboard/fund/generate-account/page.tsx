"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbBellRinging as NotificationsIcon, TbWorldSearch } from "react-icons/tb";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";

function FundAccount() {
    const [showBalance, setShowBalance] = useState(true);
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/fund" className="text-green-600 font-bold text-3xl"><BackIcon /></Link>
                    <p className="text-black font-bold">Fund Account</p>
                    <NotificationsIcon className="text-lg border-2 border-solid border-green-600 bg-white rounded-lg w-6 h-6 p-[2px] justify-center items-center text-center text-green-600 hover:text-green-700" />
                </div>
                <p className="w-60 justify-center items-center text-center mx-auto text-xs text-black font-medium mt-3">Generate Your Unique Bank</p>
                <p className="text-xs text-black font-medium mx-auto">Account</p>
                <p className="flex flex-row justify-center items-center text-center text-green-600 font-bold text-xs mt-1">Click the button below to generate your</p>
                <p className="flex flex-row justify-center items-center text-center text-green-600 font-bold text-xs">unique bank account on our app.</p>
                <button className="mx-auto mt-6 mb-8 items-center text-center font-semibold text-white text-sm bg-green-600 w-80 h-8 rounded-xl">Generate Bank Account</button>
                <div className="flex flex-col justify-start space-y-3 ml-1">
                    <div className="text-green-600 font-bold text-[13px]">
                        <p>Easily save and send money to your unique</p>
                        <p>account within your bank app.</p>
                    </div>
                    <div className="text-green-600 font-bold text-[13px]">
                        <p>No additional charges for depositing funds</p>
                        <p>into your unique account.</p>
                    </div>
                    <div className="text-green-600 font-bold text-[13px]">
                        <p>Simplified tracking and management of</p>
                        <p>transactions specific to your unique account.</p>
                    </div>
                    <div className="text-green-600 font-bold text-[13px]">
                        <p>Enhanced security and privacy for your</p>
                        <p>financial activities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FundAccount;