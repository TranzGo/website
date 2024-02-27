"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function Profile() {
    const [darkMode, setDarkMode] = useState(false);
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
                    <Link href="/dashboard/profile/view"><Image src="/edit.png" alt="edit icon" height={24} width={24} /></Link>
                </div>
                <Image src="/avatar.png" alt="avatar" height={44} width={44} className="ml-4 mt-6" />
                <div className="flex flex-row ml-4 justify-between">
                    <div className="flex flex-col text-black justify-start">
                        <p className="font-bold">John Doe</p>
                        <p className="text-xs">johndoe@gmail.com</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mr-6 text-black">
                        <p className="font-bold text-[10px]">TG ID</p>
                        <p className="text-[10px]">A200231</p>
                    </div>
                </div>
                <p className="ml-4 mt-3 text-black font-semibold text-[10px]">General settings</p>
                <div className="ml-4 mt-3 flex flex-col">
                    <Link href="#" className="flex flex-row items-center mb-4">
                        <div className="p-[8px] rounded-full bg-white flex flex-row">
                            <Image src="/personal_info.png" alt="personal_info icon" height={14} width={14} />
                        </div>
                        <div className="flex flex-col text-black ml-2">
                            <p className="text-[11px] font-bold">Personal Information</p>
                            <p className="text-[9px]">Edit your nformation</p>
                        </div>
                        <MdKeyboardArrowRight className="ml-auto mr-5 text-green-600 text-2xl font-semibold" />
                    </Link>
                    <Link href="#" className="flex flex-row items-center mb-4">
                        <div className="p-[3px] rounded-full bg-white flex flex-row">
                            <Image src="/refer.png" alt="refer icon" height={24} width={24} />
                        </div>
                        <div className="flex flex-col text-black ml-2">
                            <p className="text-[11px] font-bold">Refer a friend</p>
                            <p className="text-[9px]">Get rewards when you tell a friend</p>
                        </div>
                        <MdKeyboardArrowRight className="ml-auto mr-5 text-green-600 text-2xl font-semibold" />
                    </Link>
                    <Link href="/dashboard/profile/settings" className="flex flex-row items-center mb-4">
                        <div className="p-[5px] rounded-full bg-white flex flex-row">
                            <Image src="/settings.png" alt="settings icon" height={20} width={20} />
                        </div>
                        <div className="flex flex-col text-black ml-2">
                            <p className="text-[11px] font-bold">Settings</p>
                            <p className="text-[9px]">Security, Notification</p>
                        </div>
                        <MdKeyboardArrowRight className="ml-auto mr-5 text-green-600 text-2xl font-semibold" />
                    </Link>
                    <div className="flex flex-row items-center mb-4">
                        <div className="p-[6px] rounded-full bg-white flex flex-row">
                            <Image src="/dark_mode.png" alt="dark_mode icon" height={18} width={18} />
                        </div>
                        <div className="flex flex-col text-black ml-2">
                            <p className="text-[11px] font-bold">Dark Mode</p>
                            <p className="text-[9px]">Use the toggle to turn on/off</p>
                        </div>
                        {darkMode ? <BsToggleOn onClick={() => setDarkMode(!darkMode)} className="ml-auto mr-5 text-green-600 text-4xl" /> : <BsToggleOff onClick={() => setDarkMode(!darkMode)} className="ml-auto mr-5 text-green-600 text-4xl" />}
                    </div>
                    <Link href="#" className="flex flex-row items-center mb-4">
                        <div className="p-[6px] rounded-full bg-white flex flex-row">
                            <Image src="/bx_support.png" alt="bx_support icon" height={18} width={18} />
                        </div>
                        <div className="flex flex-col text-black ml-2">
                            <p className="text-[11px] font-bold">Support</p>
                            <p className="text-[9px]">Contact Us</p>
                        </div>
                        <MdKeyboardArrowRight className="ml-auto mr-5 text-green-600 text-2xl font-semibold" />
                    </Link>
                    <Link href="#" className="flex flex-row items-center mb-4">
                        <div className="p-[6px] rounded-full bg-white flex flex-row">
                            <Image src="/legal.png" alt="legal icon" height={18} width={18} />
                        </div>
                        <div className="flex flex-col text-black ml-2">
                            <p className="text-[11px] font-bold">Legal</p>
                            <p className="text-[9px]">Application rules, legal and policies</p>
                        </div>
                        <MdKeyboardArrowRight className="ml-auto mr-5 text-green-600 text-2xl font-semibold" />
                    </Link>
                    <Link href="#" className="flex flex-row items-center mb-4">
                        <div className="p-[6px] rounded-full bg-white flex flex-row">
                            <Image src="/logout.png" alt="logout icon" height={18} width={18} />
                        </div>
                        <div className="flex flex-col text-black ml-2">
                            <p className="text-[11px] font-bold">Logout</p>
                            <p className="text-[9px]"></p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;