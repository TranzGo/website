import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon, MdOutlineFingerprint as FingerprintIcon } from "react-icons/md"
import { TfiEmail as EmailIcon } from "react-icons/tfi";
import { FaLock as PasswordIcon } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Login() {
    return (
        <div>
            <div className="flex items-start justify-start text-left mt-8 ml-5">
                <Link href="/app">
                    <button><BackIcon className="text-4xl text-green-600 rounded-xl border-solid border-2 border-green-600 hover:bg-green-300" /></button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center mt-28">
                <div>
                    <Image
                        src="/tranzgoo.png"
                        alt="TranzGoo Logo"
                        width={150}
                        height={36}
                    />
                </div>
                <div className="mb-7">
                    <h2 className="text-black font-bold text-xl">Login</h2>
                </div>
                <div className="flex flex-row flex-shrink items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-96 h-10 rounded-2xl border-solid border-2 border-green-600 mb-7">
                    <EmailIcon className="text-xl mr-4" />
                    <input className="text-green-600 text-sm font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-lg outline-none border-green-600 placeholder:text-green-600" type="email" id="email" name="email" placeholder="Email"></input>
                </div>
                <div className="flex flex-row flex-shrink items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-96 h-10 rounded-2xl border-solid border-2 border-green-600 mb-8">
                    <PasswordIcon className="text-xl mr-4" />
                    <input className="text-green-600 text-sm font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-lg outline-none border-green-600 placeholder:text-green-600" type="password" id="pwd" name="pwd" placeholder="Password"></input>
                </div>
                <div className="flex-shrink">
                    <button className="text-white font-bold bg-green-600 hover:bg-green-700 py-2 w-96 h-10 rounded-2xl mb-7">Login</button>
                </div>
                <div className="flex sm:hidden">
                    <button>
                        <FingerprintIcon className="font-bold text-6xl text-green-600 hover:text-green-700 mb-10" />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Login;