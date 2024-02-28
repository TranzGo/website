"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function CableTV() {
    const [showPackage, setShowPackage] = useState("");
    const [pkg, setPkg] = useState("");
    const [IUCNumber, setIUCNumber] = useState("");
    const [saveBeneficiary, setSaveBeneficiary] = useState(false);
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/services"><BackIcon className="text-black text-2xl" /></Link>
                    <p className="text-black font-bold">Cable TV</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="text-xs text-gray-500 mt-6">Select TV</p>
                <select value={showPackage} onChange={(e) => { setShowPackage(e.target.value); }} className="bg-white mt-2 w-80 h-10 rounded-lg">
                    <option></option>
                    <option value="DSTV">DSTV</option>
                    <option value="GOTV">GOTV</option>
                    <option value="StarTimes">StarTimes</option>
                    <option value="ShowMax">ShowMax</option>
                    <option value="Netflix">Netflix</option>
                </select>
                {showPackage != "" && (
                    <div>
                        <p className="text-xs text-gray-500 mt-2">Select Package</p>
                        <select value={pkg} onChange={(e) => { setPkg(e.target.value); }} className="bg-white mt-2 w-80 h-10 rounded-lg">
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                )}
                {showPackage != "" && (
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500 mt-2">IUCNumber</p>
                        <input type="text" placeholder="2010226021" value={IUCNumber} onChange={(e) => { setIUCNumber(e.target.value); }} className="bg-white mt-2 pl-2 w-80 h-10 rounded-lg" />
                        <p className="text-xs text-gray-500 mt-2">Save as Beneficiary</p>
                        {saveBeneficiary ? <BsToggleOn onClick={() => setSaveBeneficiary(!saveBeneficiary)} className="text-green-600 text-4xl mr-2" /> : <BsToggleOff onClick={() => setSaveBeneficiary(!saveBeneficiary)} className="text-green-600 text-4xl mr-2" />}
                        <div className="flex flex-col mt-24 space-y-2">
                            <Link href="#" className="bg-green-600 w-80 h-10 rounded-lg flex flex-row justify-center items-center text-center text-white font-semibold">Proceed</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CableTV;