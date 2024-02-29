"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

function Electricity() {
    const [meterNumber, setMeterNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [narration, setNarration] = useState("");
    const [saveBeneficiary, setSaveBeneficiary] = useState(false);
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/services"><BackIcon className="text-black text-2xl" /></Link>
                    <p className="text-black font-bold">Electricity</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="text-xs text-gray-500 mt-6">Meter Number</p>
                <input value={meterNumber} onChange={(e) => { setMeterNumber(e.target.value) }} placeholder="Enter Your Meter Number" className="h-8 w-80 bg-white rounded-lg text-black mt-2 pl-3 items-center" />
                <p className="text-xs text-gray-500 mt-4">Distribution Company</p>
                <select defaultValue="Select Distribution Company" className="w-80 h-8 bg-white rounded-lg text-black mt-2 pl-3 items-center">
                    <option value="Select Distribution Company">Select Distribution Company</option>
                    <option value="AEDC">Abuja Electricity Distribution Company (AEDC)</option>
                    <option value="BEDC">Benin Electricity Distribution Company (BEDC)</option>
                    <option value="EEDC">Enugu Electricity Distribution Company (EEDC)</option>
                    <option value="EKEDC">Eko Electricity Distribution Company (EKEDC)</option>
                    <option value="IBEDC">Ibadan Electricity Distribution Company (IBEDC)</option>
                    <option value="IKEDC">Ikeja Electricity Distribution Company (IKEDC)</option>
                    <option value="JEDC">Jos Electricity Distribution Company (JEDC)</option>
                    <option value="KAEDCO">Kaduna Electricity Distribution Company (KAEDCO)</option>
                    <option value="KEDCO">Kano Electricity Distribution Company (KEDCO)</option>
                    <option value="PHED">Port Harcourt Electricity Distribution Company (PHED)</option>
                    <option value="ABEDC">Aba Electricity Distribution Company (ABEDC)</option>
                </select>
                <div className="flex flex-row space-x-3">
                    <p className="text-xs text-gray-500 mt-2 justify-center items-center"><input type="radio" name="plan" value="Prepaid" /> Prepaid</p>
                    <p className="text-xs text-gray-500 mt-2 justify-center items-center"><input type="radio" name="plan" value="Postpaid" /> Postpaid</p>
                </div>
                <p className="text-xs text-gray-500 mt-3">Amount</p>
                <input type="number" step="100" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="&#8358;1,000" className="h-8 w-80 bg-white rounded-lg text-black mt-2 pl-3 items-center" />
                <p className="text-xs text-gray-500 mt-3">Narration</p>
                <input type="text" value={narration} onChange={(e) => { setNarration(e.target.value) }} placeholder="February 2024" className="h-8 w-80 bg-white rounded-lg text-black mt-2 pl-3 items-center" />
                <p className="text-xs text-gray-500 mt-3">Transaction History</p>
                <div className="flex flex-row items-center text-[10px] font-semibold text-gray-900 ml-40">
                    <p className="mr-10">Date From:</p>
                    <p className="mr-6">Date to:</p>
                </div>
                <div className="flex flex-row mt-0 ml-1 text-xs">
                    <div className="flex flex-row items-center text-gray-500"><FaFilter className="mr-1" />Sort</div>
                    <select defaultValue="All Company" className="bg-gray-300 border border-gray-400 rounded-xl w-24 ml-2 py-[1px] text-[10px]">
                        <option value="All Company">All Company</option>
                    </select>
                    <input type="date" name="dateFrom" className="bg-gray-300 border border-gray-400 rounded-xl w-20 ml-2 py-[1px] text-[10px] items-center text-center" />
                    <input type="date" name="dateTo" className="bg-gray-300 border border-gray-400 rounded-xl w-20 ml-2 py-[1px] text-[10px] items-center text-center" />
                </div>
                <div className="mt-2 w-80 h-32 bg-white rounded-lg flex flex-col">
                    <div className="flex flex-row bg-gray-200 border border-gray-400 rounded-t-lg">
                        <p className="py-2 ml-4 pr-6 text-sm border-r border-gray-400">Transaction</p>
                        <p className="py-2 ml-4 pr-12 text-sm border-r border-gray-400">Detail</p>
                        <p className="py-2 ml-4 text-sm">Amount</p>
                    </div>
                    <div className="flex flex-col max-w-80 max-h-[90px] overflow-auto">
                        <div className="flex flex-row my-1 text-[10px]">
                            <div className="flex flex-col px-2 ml-2 pr-6">
                                <p>Ikeja Electricity Dist</p>
                                <p>Company (IKEDC)</p>
                            </div>
                            <div className="flex flex-col px-2 ml-[-8px] pr-12">
                                <p>08/10/2023 -</p>
                                <p>08/11/2023</p>
                            </div>
                            <div className="flex flex-col px-2 ml-[-12px] ">
                                <p>&#8358; 35,000.00</p>
                            </div>
                        </div>
                        <div className="flex flex-row my-1 text-[10px]">
                            <div className="flex flex-col px-2 ml-2 pr-6">
                                <p>Ikeja Electricity Dist</p>
                                <p>Company (IKEDC)</p>
                            </div>
                            <div className="flex flex-col px-2 ml-[-8px] pr-12">
                                <p>08/09/2023 -</p>
                                <p>08/10/2023</p>
                            </div>
                            <div className="flex flex-col px-2 ml-[-12px] ">
                                <p>&#8358; 35,000.00</p>
                            </div>
                        </div>
                        <div className="flex flex-row my-1 text-[10px]">
                            <div className="flex flex-col px-2 ml-2 pr-6">
                                <p>Eko Electricity Dist</p>
                                <p>Company (EKEDC)</p>
                            </div>
                            <div className="flex flex-col px-2 ml-[-4px] pr-12">
                                <p>08/08/2023 -</p>
                                <p>08/09/2023</p>
                            </div>
                            <div className="flex flex-col px-2 ml-[-12px] ">
                                <p>&#8358; 35,000.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">Save as Beneficiary</p>
                {saveBeneficiary ? <BsToggleOn onClick={() => setSaveBeneficiary(!saveBeneficiary)} className="text-green-600 text-4xl mr-2" /> : <BsToggleOff onClick={() => setSaveBeneficiary(!saveBeneficiary)} className="text-green-600 text-4xl mr-2" />}
                <button className="mt-6 bg-green-700 text-white font-semibold justify-center items-center text-center h-10 rounded-lg">Proceed</button>
            </div>
        </div>
    );
}

export default Electricity;