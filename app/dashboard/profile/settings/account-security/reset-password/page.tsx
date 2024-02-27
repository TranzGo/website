"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaLock as PasswordIcon } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function ResetPassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [showOldPassword, setShowOldPassword] = useState(true);
    const [newPassword, setNewPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(true);
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(true);
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/profile/settings/account-security"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-semibold">Change Password</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <div className="flex flex-col w-80 mt-8 space-y-3">
                    <div className="flex flex-row h-8 bg-white border border-solid border-green-600 rounded-xl px-5 items-center text-green-600">
                        <PasswordIcon />
                        <input type="password" placeholder="Password" value={oldPassword} onChange={(e) => { setOldPassword(e.target.value); }} className="ml-3 w-60" />
                        {showOldPassword ? <IoMdEye onClick={() => { setShowOldPassword(!showOldPassword) }} /> : <IoMdEyeOff onClick={() => { setShowOldPassword(!showOldPassword) }} />}
                    </div>
                    <div className="flex flex-row h-8 bg-white border border-solid border-green-600 rounded-xl px-5 items-center text-green-600">
                        <PasswordIcon />
                        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => { setNewPassword(e.target.value); }} className="ml-3 w-60" />
                        {showNewPassword ? <IoMdEye onClick={() => { setShowNewPassword(!showNewPassword) }} /> : <IoMdEyeOff onClick={() => { setShowNewPassword(!showNewPassword) }} />}
                    </div>
                    <div className="flex flex-row h-8 bg-white border border-solid border-green-600 rounded-xl px-5 items-center text-green-600">
                        <PasswordIcon />
                        <input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={(e) => { setConfirmNewPassword(e.target.value); }} className="ml-3 w-60" />
                        {showConfirmNewPassword ? <IoMdEye onClick={() => { setShowConfirmNewPassword(!showConfirmNewPassword) }} /> : <IoMdEyeOff onClick={() => { setShowConfirmNewPassword(!showConfirmNewPassword) }} />}
                    </div>
                </div>
                <button className="mt-28 flex flex-row justify-center items-center text-center text-white font-semibold bg-green-700 h-10 rounded-xl">Proceed</button>
            </div>
        </div>
    );
}

export default ResetPassword;