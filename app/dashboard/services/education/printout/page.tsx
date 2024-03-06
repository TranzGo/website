"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegEdit, FaShareSquare } from "react-icons/fa";
import { MdOutlineFingerprint as FingerprintIcon } from "react-icons/md";
import { BiDownload } from "react-icons/bi";

function PrintOut() {
    const [phoneNumber, setPhoneNumber] = useState("");
    return (
        <div>
            <div className="flex flex-col w-[320px] mx-auto">
                <div className="flex flex-col mx-auto mt-6 w-[320px] h-[640px] bg-white rounded-xl shadow-gray-500 shadow-md text-black">
                    <div className="flex flex-row mt-2 justify-between px-4">
                        <Image src="/jamb_logo.png" alt="DSTV Logo" height={52} width={48} className="items-center" />
                        <div className="flex flex-col text-green-800 font-semibold text-xs items-end text-right">
                            <p>JOINT ADMISSION AND</p>
                            <p>MATRICULATION BOARD</p>
                            <p className="text-black text-[10px] font-normal">...enhancing Academic Excellence</p>
                        </div>
                    </div>
                    <p className="text-[11px] text-green-600 mt-1 mx-auto font-medium">UNIFIED TERTIARY MATRICULATION EXAMINATION</p>
                    <p className="text-[12px] text-gray-500 font-bold mt-1 mx-auto w-72 bg-gray-100 border rounded-xl shadow-lg shadow-gray-100 py-[2px] items-center text-center">Examination Slip</p>
                    <p className="ml-4 mt-1 text-[9px] text-black">Date: Tuesday, March 5, 2024</p>
                    <div className="flex flex-col text-black text-[11px] ml-4 mt-2">
                        <p className="font-bold text-sm">Personal Details:</p>
                        <div className="flex flex-col ml-1">
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Surname:</p>
                                <p>Roberts</p>
                            </div>
                            <div className="flex flex-row justify-between pr-5">
                                <div className="flex flex-col">
                                    <div className="flex flex-row space-x-3">
                                        <p className="font-semibold">First Name:</p>
                                        <p>Christiana</p>
                                    </div>
                                    <div className="flex flex-row space-x-3">
                                        <p className="font-semibold">Other Name:</p>
                                        <p>Nowo</p>
                                    </div>
                                    <div className="flex flex-row space-x-3">
                                        <p className="font-semibold">Date of Birth:</p>
                                        <p>18/11/2007</p>
                                    </div>
                                </div>
                                <Image src="/woman.png" alt="woman" height={52} width={48} className="items-center" />
                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Gender:</p>
                                <p>Female</p>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">LGA/State:</p>
                                <p>Obio-Akpor Rivers State</p>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Telephone No:</p>
                                <p>08167978550</p>
                            </div>
                            <div className="flex flex-row pr-5">
                                <p className="font-semibold">Email:</p>
                                <p className="ml-3">christianaroberts@gmail.com</p>
                                <FaRegEdit className="items-center text-center text-black text-sm ml-20" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row text-black text-[11px] ml-4 mt-3">
                        <p className="font-bold text-sm">Biometric Review:</p>
                        <div className="flex flex-col text-green-600 items-center text-center ml-4">
                            <FingerprintIcon className="font-bold text-2xl text-green-600 hover:text-green-700" />
                            <p>Verified</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-black text-[11px] ml-4 mt-2">
                        <p className="font-bold text-sm">Examination Details:</p>
                        <div className="flex flex-col ml-1">
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Registration Number:</p>
                                <p>20242254142BE</p>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Examination Number:</p>
                                <p>C15714041</p>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Center Number:</p>
                                <p>024</p>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Examination Town:</p>
                                <p>Obio-Akpor Rivers State</p>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Examination Center Name:</p>
                                <p>Akpor community grammar school, Rivers State</p>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Examination Date:</p>
                                <p>Thursday, May 18, 2024</p>
                            </div>
                            <div className="flex flex-row space-x-3">
                                <p className="font-semibold">Examination Time:</p>
                                <p>01:30pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row text-black text-[11px] ml-4 mt-2 space-x-5">
                        <p className="font-bold text-sm">UTME Subject:</p>
                        <div className="flex flex-col font-semibold mt-1">
                            <p>Use of English</p>
                            <p>Physics</p>
                            <p>Biology</p>
                            <p>Chemistry</p>
                        </div>
                    </div>
                    <FaRegEdit className="items-center text-center text-black text-sm ml-72" />
                    <div className="flex flex-row space-x-2 items-center text-center mt-3 ml-20">
                        <button className="flex flex-row bg-green-600 w-48 rounded-lg text-white justify-center items-center text-center text-[12px] font-semibold py-[1px]">
                            Download
                            <BiDownload className="ml-6 text-xl" />
                        </button>
                        <FaShareSquare className="text-black text-2xl" />
                    </div>
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