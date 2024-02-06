import React from "react";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md"
import { TfiEmail as EmailIcon } from "react-icons/tfi";
import { FaUser as UserIcon, FaPhoneAlt as PhoneIcon, FaLock as PasswordIcon } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Register() {
    return (
        <div>
            <div className="flex items-start justify-start text-left mt-8 ml-5">
                <Link href="/app/signin-socials">
                    <button><BackIcon className="text-4xl text-green-600 rounded-xl border-solid border-2 border-green-600 hover:bg-green-300" /></button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="mb-2">
                    <h2 className="text-black font-bold text-xl">Register</h2>
                </div>
                <div className="text-center text-sm text-black font-medium mb-6 w-72">
                    <p>Your all-in-one telecom solution! Buy airtime, data, pay bills, and convert airtime to cash effortlessly.</p>
                </div>
                <div className="flex flex-row flex-shrink items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-96 h-10 rounded-2xl border-solid border-2 border-green-600 mb-5">
                    <UserIcon className="text-xl mr-4" />
                    <input className="text-green-600 text-sm font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-lg outline-none border-green-600 placeholder:text-green-600" type="text" id="fullName" name="fullName" placeholder="Full Name"></input>
                </div>
                <div className="flex flex-row flex-shrink items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-96 h-10 rounded-2xl border-solid border-2 border-green-600 mb-5">
                    <EmailIcon className="text-xl mr-4" />
                    <input className="text-green-600 text-sm font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-lg outline-none border-green-600 placeholder:text-green-600" type="email" id="email" name="email" placeholder="Email"></input>
                </div>
                <div className="flex flex-row flex-shrink items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-96 h-10 rounded-2xl border-solid border-2 border-green-600 mb-5">
                    <PhoneIcon className="text-xl mr-4" />
                    <input className="text-green-600 text-sm font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-lg outline-none border-green-600 placeholder:text-green-600" type="phone" id="phoneNumber" name="phoneNumber" placeholder="Phone"></input>
                </div>
                <div className="flex flex-row flex-shrink items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-96 h-10 rounded-2xl border-solid border-2 border-green-600 mb-5">
                    <PasswordIcon className="text-xl mr-4" />
                    <input className="text-green-600 text-sm font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-lg outline-none border-green-600 placeholder:text-green-600" type="password" id="pwd" name="pwd" placeholder="Password"></input>
                </div>
                <div className="flex flex-row flex-shrink items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-96 h-10 rounded-2xl border-solid border-2 border-green-600 mb-6">
                    <PasswordIcon className="text-xl mr-4" />
                    <input className="text-green-600 text-sm font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-lg outline-none border-green-600 placeholder:text-green-600" type="password" id="confirmPwd" name="confirmPwd" placeholder="Confirm Password"></input>
                </div>
                <div className="text-sm mb-7">
                    <p className="text-black">I already have an account <Link className="text-green-600" href="/app/login">Sign In</Link></p>
                </div>
                <div className="flex-shrink">
                    <button className="text-white font-bold bg-green-600 hover:bg-green-700 py-2 w-72 h-10 rounded-2xl mb-10">Submit</button>
                </div>
            </div>
        </div>

    );
}

export default Register;