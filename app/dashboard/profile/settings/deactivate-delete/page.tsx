"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";

function DeactivateDelete() {
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <div className="flex flex-row mt-4 justify-between items-center text-center">
                    <Link href="/dashboard/profile/settings"><BackIcon className="text-green-600 font-bold text-2xl" /></Link>
                    <p className="text-black font-semibold">Deactivate/Delete Account</p>
                    <Link href="/dashboard" className="text-md py-1 w-8 h-[26px] justify-center items-center text-center text-green-600 hover:text-green-700">
                        <IoIosHome />
                    </Link>
                </div>
                <RiDeleteBin6Fill className="mx-auto mt-14 text-red-900 text-9xl" />
                <p className="mt-6 mb-4 mx-auto text-red-900 font-semibold text-lg">Deactivate/Delete Account</p>
                <div className="text-black text-xs flex flex-col justify-center items-center text-center">
                    <p>Are you sure you want to Deactivate/</p>
                    <p>Delete your account?</p>
                    <p>This action cannot be undone</p>
                </div>
                <button className="text-white flex flex-row justify-center items-center text-center bg-red-900 mt-6 rounded-lg font-bold h-10 w-72 mx-auto">Delete Account</button>
            </div>
        </div>
    );
}

export default DeactivateDelete;