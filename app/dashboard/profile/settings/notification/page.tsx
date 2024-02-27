"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { TbBellRinging as NotificationsIcon } from "react-icons/tb";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function Notification() {
    const [pushNotification, setPushNotification] = useState(false);
    const [emailNotification, setEmailNotification] = useState(false);
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/profile/settings"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-semibold">Notification</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <div className="flex flex-col ml-3 mt-6">
                    <div className="flex flex-row items-center mb-4">
                        <div className="bg-white rounded-full p-2 mr-3">
                            <NotificationsIcon className="text-green-600" />
                        </div>
                        <div className="flex flex-col text-black">
                            <p className="font-bold text-sm">Push Notification</p>
                            <p className="text-[10px]">Enable or disable your Push Notification</p>
                        </div>
                        {pushNotification ? <BsToggleOn onClick={() => setPushNotification(!pushNotification)} className="ml-auto mr-5 text-green-600 text-4xl" /> : <BsToggleOff onClick={() => setPushNotification(!pushNotification)} className="ml-auto mr-5 text-green-600 text-4xl" />}
                    </div>
                    <div className="flex flex-row items-center mb-4">
                        <div className="bg-white rounded-full p-2 mr-3">
                            <NotificationsIcon className="text-green-600" />
                        </div>
                        <div className="flex flex-col text-black">
                            <p className="font-bold text-sm">Email Notification</p>
                            <p className="text-[10px]">Enable or disable your Email Notification</p>
                        </div>
                        {emailNotification ? <BsToggleOn onClick={() => setEmailNotification(!emailNotification)} className="ml-auto mr-5 text-green-600 text-4xl" /> : <BsToggleOff onClick={() => setEmailNotification(!emailNotification)} className="ml-auto mr-5 text-green-600 text-4xl" />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;