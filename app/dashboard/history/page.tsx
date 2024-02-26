"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaRedoAlt } from "react-icons/fa";

function History() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/services"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="bg-black text-white text-xs rounded-xl p-1 items-center text-center w-16 mx-auto mt-4 mb-4">Feb 2024</p>
                <div className="flex flex-col bg-white rounded-lg p-1 mx-auto w-80 h-[78px] mb-3">
                    <p className="flex text-[10px] font-semibold text-black justify-end mt-1 pr-5">JOINT ADMISSION AND MATRICULATION BOARD</p>
                    <div className="flex flex-row justify-end mt-1 pr-5">
                        <div className="flex flex-col text-[11px] mr-4 text-black">
                            <p>Sat</p>
                        </div>
                        <p className="text-[10px] font-semibold text-black mr-1">(JAMB)</p>
                        <p className="text-[10px] text-black">20242254142BE - ROBERTS CHRISTIANA NOWO</p>
                    </div>
                    <div className="flex flex-row justify-end mt-[2px] pr-5">
                        <div className="flex flex-col text-[11px] mr-4 text-black">
                            <p className="font-medium">10</p>
                        </div>
                        <div className="flex flex-row w-32 h-6 rounded-lg bg-green-300 mr-[88px] justify-between px-2">
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="text-[6px] text-black">Paid via</p>
                                <p className="text-[7px] text-black font-semibold">Voucher</p>
                            </div>
                            <button className="flex flex-row items-center text-[8px] text-red-600"><FaRedoAlt className="text-[9px] mr-[2px]" />Recharge again</button>
                        </div>
                        <p className="text-[11px] text-black">&#8358; 4,000</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-lg p-1 mx-auto w-80 h-[78px] mb-3">
                    <p className="flex text-[10px] font-semibold text-black justify-end mt-1 pr-5">MTN Recharge to</p>
                    <div className="flex flex-row justify-between mt-1 pl-3 pr-5">
                        <div className="flex flex-col text-[11px] text-black">
                            <p>Sun</p>
                        </div>
                        <p className="text-[10px] text-black">08130514123</p>
                    </div>
                    <div className="flex flex-row justify-end mt-[2px] pr-5">
                        <div className="flex flex-col text-[11px] mr-4 text-black">
                            <p className="font-medium">11</p>
                        </div>
                        <div className="flex flex-row w-32 h-6 rounded-lg bg-green-300 mr-[88px] justify-between px-2">
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="text-[6px] text-black">Paid via</p>
                                <p className="text-[7px] text-black font-semibold">Voucher</p>
                            </div>
                            <button className="flex flex-row items-center text-[8px] text-red-600"><FaRedoAlt className="text-[9px] mr-[2px]" />Recharge again</button>
                        </div>
                        <p className="text-[11px] text-black">&#8358; 1,000</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-lg p-1 mx-auto w-80 h-[78px] mb-3">
                    <p className="flex text-[10px] font-semibold text-black justify-end mt-1 pr-5">MTN Recharge to</p>
                    <div className="flex flex-row justify-between mt-1 pl-3 pr-5">
                        <div className="flex flex-col text-[11px] text-black">
                            <p>Sun</p>
                        </div>
                        <p className="text-[10px] text-black">08130514123</p>
                    </div>
                    <div className="flex flex-row justify-end mt-[2px] pr-5">
                        <div className="flex flex-col text-[11px] mr-6 text-black">
                            <p className="font-medium">11</p>
                        </div>
                        <div className="flex flex-row w-32 h-6 rounded-lg bg-green-300 mr-[88px] justify-between px-2">
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="text-[6px] text-black">Paid via</p>
                                <p className="text-[7px] text-black font-semibold">Voucher</p>
                            </div>
                            <button className="flex flex-row items-center text-[8px] text-red-600"><FaRedoAlt className="text-[9px] mr-[2px]" />Recharge again</button>
                        </div>
                        <p className="text-[11px] text-black">&#8358; 400</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-lg p-1 mx-auto w-80 h-[78px] mb-3">
                    <p className="flex text-[10px] font-semibold text-black justify-end mt-1 pr-5">MTN Recharge to</p>
                    <div className="flex flex-row justify-between mt-1 pl-3 pr-5">
                        <div className="flex flex-col text-[11px] text-black">
                            <p>Sun</p>
                        </div>
                        <p className="text-[10px] text-black">08130514123</p>
                    </div>
                    <div className="flex flex-row justify-end mt-[2px] pr-5">
                        <div className="flex flex-col text-[11px] mr-6 text-black">
                            <p className="font-medium">11</p>
                        </div>
                        <div className="flex flex-row w-32 h-6 rounded-lg bg-green-300 mr-[88px] justify-between px-2">
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="text-[6px] text-black">Paid via</p>
                                <p className="text-[7px] text-black font-semibold">Voucher</p>
                            </div>
                            <button className="flex flex-row items-center text-[8px] text-red-600"><FaRedoAlt className="text-[9px] mr-[2px]" />Recharge again</button>
                        </div>
                        <p className="text-[11px] text-black">&#8358; 200</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-lg p-1 mx-auto w-80 h-[78px] mb-3">
                    <p className="flex text-[10px] font-semibold text-black justify-end mt-1 pr-5">MTN Recharge to</p>
                    <div className="flex flex-row justify-between mt-1 pl-3 pr-5">
                        <div className="flex flex-col text-[11px] text-black">
                            <p>Sun</p>
                        </div>
                        <p className="text-[10px] text-black">08130514123</p>
                    </div>
                    <div className="flex flex-row justify-end mt-[2px] pr-5">
                        <div className="flex flex-col text-[11px] mr-4 text-black">
                            <p className="font-medium">11</p>
                        </div>
                        <div className="flex flex-row w-32 h-6 rounded-lg bg-green-300 mr-[88px] justify-between px-2">
                            <div className="flex flex-col justify-center items-center text-center">
                                <p className="text-[6px] text-black">Paid via</p>
                                <p className="text-[7px] text-black font-semibold">Voucher</p>
                            </div>
                            <button className="flex flex-row items-center text-[8px] text-red-600"><FaRedoAlt className="text-[9px] mr-[2px]" />Recharge again</button>
                        </div>
                        <p className="text-[11px] text-black">&#8358; 6,500</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;