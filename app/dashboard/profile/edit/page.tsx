"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon, MdEmail as EmailIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaUser as UserIcon, FaPhoneAlt as PhoneIcon } from "react-icons/fa";

function EditProfile() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/profile"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-semibold">Edit Profile</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <p className="text-black text-xs mt-8 ml-2 mb-1">Name</p>
                <div className="h-8 w-80 rounded-xl border border-solid border-green-600 bg-white text-green-600 flex flex-row items-center">
                    <UserIcon className="mx-6 text-xl" />
                    <input type="text" placeholder="  John Doe" className="w-72 rounded-xl" />
                </div>
                <p className="text-black text-xs mt-4 ml-2 mb-1">Email</p>
                <div className="h-8 w-80 rounded-xl border border-solid border-green-600 bg-white text-green-600 flex flex-row items-center">
                    <EmailIcon className="mx-6 text-xl" />
                    <input type="email" placeholder="  johndoe@gmail.com" className="w-72 rounded-xl" />
                </div>
                <p className="text-black text-xs mt-4 ml-2 mb-1">Phone</p>
                <div className="h-8 w-80 rounded-xl border border-solid border-green-600 bg-white text-green-600 flex flex-row items-center">
                    <PhoneIcon className="mx-6 text-xl" />
                    <input type="tel" placeholder="  08012345678" className="w-72 rounded-xl" />
                </div>
                <button className="h-8 w-80 bg-green-700 text-white rounded-lg mt-24 items-center text-center font-semibold">Confirm</button>
            </div>
        </div>
    );
}

export default EditProfile;