"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

function GetEPin() {
    const [phoneNumber, setPhoneNumber] = useState("");
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <Image src="/jamb_logo.png" alt="DSTV Logo" height={52} width={80} className="mx-auto mt-4 items-center" />
                <div className="flex flex-col mx-auto mt-2 w-80 h-40 bg-white shadow-gray-500 shadow-md items-center text-center text-black">
                    <p className="font-semibold mt-2 text-sm">Verify Profile Code/Payment</p>
                    <div className="flex flex-row space-x-3 items-center mt-6">
                        <input className="border border-black" />
                        <button className="px-2 py-1 bg-green-700 text-white text-xs font-semibold rounded-xl">Get Details</button>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center text-black mt-8 text-[8px] font-medium">
                        <div className="flex flex-row space-x-[2px]">
                            <p>e-Pin was sent to 081******55. I want to</p>
                            <p className="text-green-600">change my number</p>
                        </div>
                        <div className="flex flex-row space-x-[2px]">
                            <p className="text-green-600">Re-Query/Check</p>
                            <p>the status of your online payment if you have paid and could not</p>
                        </div>
                        <div className="flex flex-row">
                            <p>retrieve PIN (Transaction ID/Ref is required)</p>
                        </div>
                    </div>
                </div>
                <div className="text-[8px] mx-auto text-green-600 items-center text-center mt-3">
                    <p>2024 &copy; Joint Admissions and Matriculation Board (JAMB)</p>
                </div>
                <Link href="/dashboard/services/education" className="flex flex-row text-[10px] mx-auto text-green-600 items-center text-center mt-64">
                    <FaArrowLeftLong className="mr-1" />
                    <p>Go Back</p>
                </Link>
            </div>
        </div>
    );
}

export default GetEPin;