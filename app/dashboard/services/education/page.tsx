"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

function Education() {
    const [showProduct, setShowProduct] = useState("");
    const [showNIN, setShowNIN] = useState("");
    const [NIN, setNIN] = useState("");
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/services"><BackIcon className="text-black text-2xl" /></Link>
                    <p className="text-black font-bold">Education</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="text-xs text-gray-500 mt-6">Category</p>
                <select value={showProduct} onChange={(e) => { setShowProduct(e.target.value); }} className="bg-white mt-2 w-80 h-10 rounded-lg">
                    <option></option>
                    <option value="Jamb Registration Pin">Jamb Registration Pin</option>
                    <option value="WAEC Checker Pin">WAEC Checker Pin</option>
                    <option value="WAEC Registration Pin">WAEC Registration Pin</option>
                </select>
                {showProduct != "" && (
                    <div>
                        <p className="text-xs text-gray-500 mt-2">Select Product</p>
                        <select value={showNIN} onChange={(e) => { setShowNIN(e.target.value); }} className="bg-white mt-2 w-80 h-10 rounded-lg">
                            <option></option>
                            <option value="Jamb Registration Pin">JAMB 2024/2025 UTME and Direct Entry</option>
                        </select>
                    </div>
                )}
                {showNIN != "" && (
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500 mt-2">NIN</p>
                        <input type="text" placeholder="8119234856710618" value={NIN} onChange={(e) => { setNIN(e.target.value); }} className="bg-white mt-2 pl-2 w-80 h-10 rounded-lg" />
                        <div className="flex flex-col mt-24 space-y-2">
                            <Link href="#" className="bg-green-600 w-80 h-10 rounded-lg flex flex-row justify-center items-center text-center text-white font-semibold">Get Jamb e-Pin</Link>
                            <Link href="#" className="bg-green-600 w-80 h-10 rounded-lg flex flex-row justify-center items-center text-center text-white font-semibold">I have Jamb e-Pin</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Education;