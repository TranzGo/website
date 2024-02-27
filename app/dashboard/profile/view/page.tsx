"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

function ViewProfile() {
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
                <div className="flex flex-row ml-4 mt-3">
                    <Image src="/avatar.png" alt="avatar" height={76} width={76} />
                    <div className="flex flex-col space-y-1 ml-4 text-black font-bold text-[11px] mt-7">
                        <p>View photo</p>
                        <p>Upload photo</p>
                    </div>
                </div>
                <Link href="/dashboard/profile/edit" className="flex flex-row ml-4 mt-4 items-center">
                    <div className="p-[6px] rounded-full bg-white mr-2">
                        <Image src="/personal_info.png" alt="personal_info icon" height={16} width={16} />
                    </div>
                    <p className="text-black font-semibold text-xs">Edit Profile</p>
                </Link>
                <Link href="#" className="flex flex-row ml-4 mt-3 items-center">
                    <div className="p-[6px] rounded-full bg-white mr-2">
                        <Image src="/teenyicons_id.png" alt="id icon" height={16} width={16} />
                    </div>
                    <p className="text-black font-semibold text-xs">Customize TranzGO ID</p>
                </Link>
            </div>
        </div>
    );
}

export default ViewProfile;