"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaRedoAlt } from "react-icons/fa";

function Profile() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/services"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-semibold">Profile</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <div className="flex flex-row justify-between items-center mt-3 px-4">
                    <div className="flex flex-col justify-start text-black">
                        <p className="font-bold">Profile</p>
                        <p className="text-[10px]">Manage your TranzGOO account from here</p>
                    </div>
                    <Link href="#"><Image src="/edit.png" alt="edit icon" height={24} width={24} /></Link>
                </div>
                <Image src="/avatar.png" alt="avatar" height={44} width={44} className="ml-4 mt-8" />
                <div className="flex flex-row ml-4">
                    <div className="flex flex-col text-black justify-start">
                        <p className="font-bold">John Doe</p>
                        <p className="text-xs">johndoe@gmail.com</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;