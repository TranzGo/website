"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

function ReviewElectricity() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/services/electricity"><BackIcon className="text-black text-2xl" /></Link>
                    <p className="text-black font-bold">Review</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <div className="mt-4 bg-white shadow-lg w-[300px] h-[525px] mx-auto rounded-xl flex flex-col">
                    <Image src="/aedc.png" alt="AEDC Logo" height={64} width={120} className="mx-auto mt-4" />
                    <div className="flex flex-col mt-4 text-black">
                        <p className="mx-auto items-center text-center text-2xl font-thin">TOKEN: 6112-5961-</p>
                        <p className="mx-auto items-center text-center text-2xl font-thin mb-4">7931-4448-1275</p>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">METER NO:</p>
                            <p>45020434863</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">METER NAME:</p>
                            <p>JOHN DOE</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">METER ADDRESS:</p>
                            <p>PLOT 30 FIDELITY ESTATE,</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p>MAITAMA ABUJA, FCT NIGERIA</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">CUSTOMER NO:</p>
                            <p>07044225599</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">TRANSACTION REF:</p>
                            <p>DF744AF843246219868421</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">TIME OF ISSUE:</p>
                            <p>FRI, FEB 23, 2024  19:18</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">RECEIPT NO:</p>
                            <p>11709612</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">COST:</p>
                            <p>&#8358; 10,000</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">VAT:</p>
                            <p>&#8358; 696</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">DEBT:</p>
                            <p>&#8358; 0.00</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">TOTAL:</p>
                            <p>&#8358; 10,696</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">NO. OF UNITS:</p>
                            <p>190.2KWH</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">PAYMENT TYPE:</p>
                            <p>ONLINE</p>
                        </div>
                        <div className="flex flex-row mb-[7px] ml-4 text-xs font-semibold space-x-4">
                            <p className="text-green-600">AGENT:</p>
                            <p>TRANZGOO</p>
                        </div>
                    </div>
                </div>
                <button className="mt-6 bg-green-700 text-white font-bold justify-center items-center text-center w-[300px] h-10 mx-auto rounded-lg">Pay</button>
            </div>
        </div>
    );
}

export default ReviewElectricity;