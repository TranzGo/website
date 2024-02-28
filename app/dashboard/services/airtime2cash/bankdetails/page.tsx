"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

function BankDetails() {
    const [bankName, setBankName] = useState("");
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="#"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-bold">Bank Details</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="text-xs text-gray-400 mx-auto mt-4">Please fill correctly</p>
                <p className="text-xs text-gray-400 mt-5">Bank Name</p>
                <input type="text" value={bankName} onChange={(e) => { setBankName(e.target.value); }} placeholder="Access Bank" className="flex flex-row bg-white text-black mt-3 h-10 rounded-lg justify-between items-center px-4"></input>
                <p className="text-xs text-gray-400 mt-4">Account Name</p>
                <input type="text" value={accountName} onChange={(e) => { setAccountName(e.target.value); }} placeholder="Jachimma P." className="flex flex-row bg-white text-black mt-3 h-10 rounded-lg justify-between items-center px-4"></input>
                <p className="text-xs text-gray-400 mt-4">Account Number</p>
                <input type="text" value={accountNumber} onChange={(e) => { setAccountNumber(e.target.value); }} placeholder="2135907016" className="flex flex-row bg-white text-black mt-3 h-10 rounded-lg justify-between items-center px-4"></input>
                <button className="mt-20 bg-green-700 text-white font-bold justify-center items-center text-center h-10 rounded-lg">Next</button>
            </div>
        </div>
    );
}

export default BankDetails;