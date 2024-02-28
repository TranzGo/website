"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

function ReviewData() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/services/data"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-bold">Review</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <div className="mt-4 bg-white shadow-lg w-[300px] h-[340px] mx-auto rounded-xl flex flex-col">
                    <div className="flex flex-row justify-between text-black mt-7 mx-5">
                        <p className="text-sm text-gray-500">Biller</p>
                        <p className="font-semibold text-sm">MTN</p>
                    </div>
                    <div className="flex flex-row justify-between text-black mt-6 mx-5 border-t">
                        <p className="text-sm text-gray-500 mt-4">Product</p>
                        <p className="font-semibold text-sm mt-4">MTN 1GB - SME - 30days</p>
                    </div>
                    <div className="flex flex-row justify-between text-black mt-6 mx-5 border-t">
                        <p className="text-sm text-gray-500 mt-4">Amount</p>
                        <p className="font-semibold text-sm mt-4">&#8358;{700.00}</p>
                    </div>
                    <div className="flex flex-row justify-between text-black mt-6 mx-5 border-t">
                        <p className="text-sm text-gray-500 mt-4">TG ID</p>
                        <p className="font-semibold text-sm mt-4">A200231</p>
                    </div>
                    <div className="flex flex-row justify-between text-black mt-6 mx-5 border-t">
                        <p className="text-sm text-gray-500 mt-4">Reference</p>
                        <p className="font-semibold text-sm mt-4">08054200231</p>
                    </div>
                </div>
                <button className="mt-20 bg-green-700 text-white font-bold justify-center items-center text-center w-[300px] h-10 mx-auto rounded-lg">Pay</button>
            </div>
        </div>
    );
}

export default ReviewData;