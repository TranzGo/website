"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiHandWavingFill, PiSwap } from "react-icons/pi";
import { TbBellRinging as NotificationsIcon, TbWorldSearch } from "react-icons/tb";
import { IoMdEye, IoMdEyeOff, IoIosSend, IoIosMore, IoIosHome } from "react-icons/io";
import { FaPlusCircle, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { FcServices } from "react-icons/fc";
import { GoHistory } from "react-icons/go";

function Send() {
    const [showBalance, setShowBalance] = useState(true);
    return (
        <div>
            <div className="flex flex-col w-80 mx-auto">
                <p className="text-black font-bold justify-center items-center text-center mt-32">Send</p>
                <p className="text-black justify-center items-center text-center mt-2 text-sm">Transfer funds to another user on TranzGOO</p>
                <p className="text-green-600 justify-center items-center text-center mt-3 text-md font-bold">TranzGOO ID</p>
                <input type="text" placeholder="*  *  *  *  *  *" className="mt-1 border-2 border-green-600 rounded-lg w-72 py-1 mx-auto justify-center items-center text-center"></input>
                <p className="text-green-600 justify-center items-center text-center mt-3 text-md font-bold">Amount</p>
                <input type="number" step={100} placeholder="0.00" className="mt-1 border-2 border-green-600 rounded-lg w-72 py-1 mx-auto justify-center items-center text-center"></input>
                <button onClick={() => { }} className="mt-24 font-bold text-white bg-green-600 rounded-lg w-72 py-1 mx-auto justify-center items-center text-center">Send</button>
            </div>
        </div>
    );
}

export default Send;