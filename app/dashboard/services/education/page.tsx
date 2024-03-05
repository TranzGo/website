"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";

function Education() {
    const [showProduct, setShowProduct] = useState("");
    const [showNIN, setShowNIN] = useState("");
    const [NIN, setNIN] = useState("");
    const [showPopup, setShowPopup] = useState(false);
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
                        {showPopup && (
                            <div className="flex flex-col w-80 h-[168px] rounded-lg bg-white text-black fixed shadow-md z-50 px-4 mt-7">
                                <div className="flex fle-row mt-2 justify-end items-end text-right">
                                    <CgCloseR onClick={() => { setShowPopup(false); }} className="text-black font-thin" />
                                </div>
                                <p className="mt-1 text-[15px] items-center text-center font-medium text-gray-800">This Service will have a charge of &#8358; 5,000.</p>
                                <div className="flex flex-col text-[12.5px] text-black justify-center items-center text-center">
                                    <p>Click continue and you will recieve an sms</p>
                                    <p>of your Jamb e-Pin. Use your e-Pin to</p>
                                    <p>access the Jamb form platform and provide</p>
                                    <p> all info needed</p>
                                </div>
                                <Link href="#" className="mt-1 mx-auto items-center text-center w-64 py-1 bg-green-600 text-white rounded-lg font-semibold">Continue</Link>
                            </div>
                        )}
                        <input type="text" placeholder="8119234856710618" value={NIN} onChange={(e) => { setNIN(e.target.value); }} className="bg-white mt-2 pl-2 w-80 h-10 rounded-lg" />
                        <div className="flex flex-col mt-24 space-y-2">
                            <button onClick={() => { setShowPopup(true); }} className="bg-green-600 w-80 h-10 rounded-lg flex flex-row justify-center items-center text-center text-white font-semibold">Get Jamb e-Pin</button>
                            <button className="bg-green-600 w-80 h-10 rounded-lg flex flex-row justify-center items-center text-center text-white font-semibold">I have Jamb e-Pin</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Education;