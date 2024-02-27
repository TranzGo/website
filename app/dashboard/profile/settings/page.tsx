"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaUser as UserIcon } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { TbBellRinging as NotificationsIcon } from "react-icons/tb";

function Settings() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/profile"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-semibold">Settings</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <div className="flex flex-col ml-3 mt-6">
                    <Link href="/dashboard/profile/settings/account-security" className="flex flex-row items-center mb-4">
                        <div className="bg-white rounded-full p-2 mr-3">
                            <UserIcon className="text-green-600" />
                        </div>
                        <div className="flex flex-col text-black">
                            <p className="font-bold text-sm">Account Security</p>
                            <p className="text-[10px]">Password, Biometrics</p>
                        </div>
                    </Link>
                    <Link href="/dashboard/profile/settings/notification" className="flex flex-row items-center mb-4">
                        <div className="bg-white rounded-full p-2 mr-3">
                            <NotificationsIcon className="text-green-600" />
                        </div>
                        <div className="flex flex-col text-black">
                            <p className="font-bold text-sm">Notification</p>
                            <p className="text-[10px]">Push, Email Notification</p>
                        </div>
                    </Link>
                    <Link href="/dashboard/profile/settings/deactivate-delete" className="flex flex-row items-center mb-4">
                        <div className="bg-white rounded-full p-2 mr-3">
                            <RiDeleteBin6Fill className="text-green-600 text-xl" />
                        </div>
                        <div className="flex flex-col text-black">
                            <p className="font-bold text-sm">Deactivation/Delete</p>
                            <p className="text-[10px]">Delete/Deactivate Account</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Settings;