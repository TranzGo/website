"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

function PrintOut() {
    const [phoneNumber, setPhoneNumber] = useState("");
    return (
        <div>
            <div className="flex flex-col w-[320px] mx-auto">
                <div className="flex flex-col mx-auto mt-4 w-[320px] h-[500px] bg-white rounded-xl shadow-gray-500 shadow-md text-black">
                    <div className="flex flex-row mt-2 justify-between px-4">
                        <Image src="/jamb_logo.png" alt="DSTV Logo" height={52} width={48} className="items-center" />
                        <div className="flex flex-col text-green-800 font-semibold text-xs items-end text-right">
                            <p>JOINT ADMISSION AND</p>
                            <p>MATRICULATION BOARD</p>
                            <p className="text-black text-[10px] font-normal">...enhancing Academic Excellence</p>
                        </div>
                    </div>
                    <p className="text-[11px] text-green-600 mt-1 mx-auto font-medium">UNIFIED TERTIARY MATRICULATION EXAMINATION</p>
                </div>
                <div className="text-[8px] mx-auto text-green-600 items-center text-center mt-3">
                    <p>2024 &copy; Joint Admissions and Matriculation Board (JAMB)</p>
                </div>
                <Link href="/dashboard/services/education" className="flex flex-row text-[10px] mx-auto text-green-600 items-center text-center mt-4">
                    <FaArrowLeftLong className="mr-1" />
                    <p>Go Back</p>
                </Link>
            </div>
        </div>
    );
}

export default PrintOut;