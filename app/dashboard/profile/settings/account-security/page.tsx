"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon, MdOutlineFingerprint as FingerprintIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

function AccountSecurity() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/profile/settings"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-semibold">Account Security</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <div className="flex flex-col ml-3 mt-6">
                    <Link href="/dashboard/profile/settings/account-security/reset-password" className="flex flex-row items-center mb-4">
                        <div className="bg-white rounded-full p-2 mr-3">
                            <Image src="/reset.png" alt="reset icon" height={16} width={16} />
                        </div>
                        <div className="flex flex-col text-black">
                            <p className="font-bold text-sm">Reset Password</p>
                            <p className="text-[10px]">Update your password</p>
                        </div>
                    </Link>
                    <Link href="/dashboard/profile/settings/account-security/reset-pin" className="flex flex-row items-center mb-4">
                        <div className="bg-white rounded-full p-2 mr-3">
                            <Image src="/reset.png" alt="reset icon" height={16} width={16} />
                        </div>
                        <div className="flex flex-col text-black">
                            <p className="font-bold text-sm">Reset Pin</p>
                            <p className="text-[10px]">Update your TranzGo PIN</p>
                        </div>
                    </Link>
                    <Link href="/dashboard/profile/settings/account-security/biometrics" className="flex flex-row items-center mb-4">
                        <div className="bg-white rounded-full p-1 mr-3">
                            <FingerprintIcon className="text-green-600 text-2xl" />
                        </div>
                        <div className="flex flex-col text-black">
                            <p className="font-bold text-sm">Biometrics</p>
                            <p className="text-[10px]">Activate Face ID or Biometrics</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AccountSecurity;