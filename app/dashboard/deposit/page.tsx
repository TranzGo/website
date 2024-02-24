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
                    <Link href="/dashboard" className="text-green-600 font-bold text-3xl"><BackIcon /></Link>
                    <p className="text-black font-bold">Fund Account</p>
                    <NotificationsIcon className="text-lg border-2 border-solid border-green-600 bg-white rounded-lg w-6 h-6 p-[2px] justify-center items-center text-center text-green-600 hover:text-green-700" />
                </div>
                <p className="w-60 justify-center items-center text-center mx-auto text-xs text-black font-medium">Transfer to any of the account numbers below to fund your account.</p>
                <p className="text-sm text-green-600 font-bold mx-auto">Account Name: TranzGo LLC</p>
                <div className="w-80 h-28 bg-green-700 mt-4 mb-3 rounded-3xl flex flex-col">
                    <p className="text-white font-bold ml-8 mt-5">Moniepoint</p>
                    <p className="ml-9 text-black text-xs mt-2">Account no.</p>
                    <div className="flex flex-row items-center text-center">
                        <p className="ml-8 text-white font-bold">1234567890</p>
                        <p className="flex flex-col items-center text-center text-white text-xs ml-36 mt-1"><IoIosCopy className="text-md" />Copy</p>
                    </div>
                </div>
                <div className="w-80 h-28 bg-green-700 mb-3 rounded-3xl flex flex-col">
                    <p className="text-white font-bold ml-8 mt-5">Wema Bank</p>
                    <p className="ml-9 text-black text-xs mt-2">Account no.</p>
                    <div className="flex flex-row items-center text-center">
                        <p className="ml-8 text-white font-bold">1234567890</p>
                        <p className="flex flex-col items-center text-center text-white text-xs ml-36 mt-1"><IoIosCopy className="text-md" />Copy</p>
                    </div>
                </div>
                <div className="w-80 h-28 bg-green-700 mb-3 rounded-3xl flex flex-col">
                    <p className="text-white font-bold ml-8 mt-5">Fidelity Bank</p>
                    <p className="ml-9 text-black text-xs mt-2">Account no.</p>
                    <div className="flex flex-row items-center text-center">
                        <p className="ml-8 text-white font-bold">1234567890</p>
                        <p className="flex flex-col items-center text-center text-white text-xs ml-36 mt-1"><IoIosCopy className="text-md" />Copy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FundAccount;