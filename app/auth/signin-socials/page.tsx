import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md"
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { AiOutlineApple as AppleIcon } from "react-icons/ai";
import { TfiMicrosoftAlt as MicrosoftIcon } from "react-icons/tfi";

function SignInSocials() {
    return (
        <div>
            <div className="flex items-start justify-start text-left mt-8 ml-5">
                <Link href="/auth">
                    <button><BackIcon className="text-4xl text-green-600 rounded-xl border-solid border-2 border-green-600 hover:bg-green-300" /></button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center mt-28">
                <div className="mb-8">
                    <Image
                        src="/tranzgoo.png"
                        alt="TranzGoo Logo"
                        width={150}
                        height={36}
                    />
                </div>
                <div>
                    <button className="flex flex-row items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-2xl border-solid border-2 border-green-600 mb-7"><GoogleIcon className="text-2xl mr-5" />Continue with Google</button>
                </div>
                <div>
                    <button className="flex flex-row items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-2xl border-solid border-2 border-green-600 mb-7"><AppleIcon className="text-3xl text-green-600 mr-4" />Continue with Apple</button>
                </div>
                <div>
                    <button className="flex flex-row items-center justify-center text-center text-green-600 font-bold bg-white hover:bg-green-100 py-2 w-80 rounded-2xl border-solid border-2 border-green-600 mb-7"><MicrosoftIcon className="text-2xl mr-5" />Continue with Microsoft</button>
                </div>
                <div>
                    <Link href="/auth/register">
                        <button className="text-white font-bold bg-green-600 hover:bg-green-700 py-2 w-80 rounded-2xl mb-10">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default SignInSocials;