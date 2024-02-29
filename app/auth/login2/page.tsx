"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon, MdOutlineFingerprint as FingerprintIcon } from "react-icons/md"
import { TfiEmail as EmailIcon } from "react-icons/tfi";
import { FaLock as PasswordIcon } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Login2() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    return (
        <div>
            <div className="flex items-start justify-start text-left mt-8 ml-5">
                <Link href="/auth">
                    <button><BackIcon className="text-4xl text-green-600 rounded-xl border-solid border-2 border-green-600 hover:bg-green-300" /></button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center mt-28">
                <div>
                    <Image
                        src="/tranzgoo.png"
                        alt="TranzGO Logo"
                        width={150}
                        height={36}
                    />
                </div>
                <div className="flex flex-col mb-7 justify-center items-center text-black">
                    <h2 className="font-bold text-xl">Welcome to TranzGO</h2>
                    <p>johndoe@gmail.com</p>
                    <p className="mt-1 text-green-600 font-bold text-sm">Change account?</p>
                </div>
                <div className="flex flex-row flex-shrink items-center w-96 h-9 rounded-xl bg-white border-2 border-solid border-green-600 px-5 text-green-600 ">
                    <PasswordIcon />
                    <input type="password" id="pwd" name="pwd" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} className="ml-4 w-80 text-green-600 text-sm font-bold placeholder:text-green-600 items-center outline-none" />
                    {showPassword ? <IoMdEye onClick={() => { setShowPassword(!showPassword) }} /> : <IoMdEyeOff onClick={() => { setShowPassword(!showPassword) }} />}
                </div>
                <p className="mb-8 mt-1 text-green-600 text-sm ml-60">Forgot password?</p>
                <div className="flex-shrink">
                    <button className="text-white font-bold bg-green-600 hover:bg-green-700 w-96 h-9 rounded-xl">Sign in with Touch ID</button>
                </div>
                <p className="mt-4 text-green-600">Create account</p>
            </div>
        </div>

    );
}

export default Login2;