"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgCloseR } from "react-icons/cg";

function Success() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <Link href="/dashboard" className="flex flex-row mt-12 justify-end items-end text-right">
                    <CgCloseR className="text-black font-thin h-10 w-5" />
                </Link>
                <Image src="/success.png" alt="success" width={74} height={74} className="mx-auto mt-7" />
                <div className="flex flex-col mx-auto mt-16">
                    <p className="text-green-600 font-bold text-2xl">Transaction Successful</p>
                    <Image src="/confetti.png" alt="confetti" width={60} height={60} className="mx-auto mt-16" />
                    <p className="text-green-600 mt-2 mx-auto text-lg">Hooray!!</p>
                    <p className="text-green-600 mt-2 mx-auto text-lg">Your transaction has been</p>
                    <p className="text-green-600 mt-2 mx-auto text-lg">completed</p>
                </div>
                <div className="flex flex-col mt-14 bg-green-50 shadow-lg h-20 items-center">
                    <p className="text-xs text-gray-600 mt-[15px]">How was your transaction experience?</p>
                    <div className="flex flex-row mt-2">
                        <Image src="/Like.png" alt="Like" width={30} height={30} className="mx-3" />
                        <Image src="/Dislike.png" alt="Dislike" width={30} height={30} className="mx-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;