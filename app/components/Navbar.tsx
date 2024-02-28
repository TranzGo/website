"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    return (
        <div className="flex justify-between p-4 max-w-6xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <Image
                        src="/tranzgoo.png"
                        alt="TranzGO Logo"
                        width={150}
                        height={36}
                    />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5 text-gray-800 font-bold">
                    <Link href="/">Home</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">FAQs</Link>
                    <Link href="#">Contact Us</Link>
                </div>
            </div>
            <div className="hidden md:inline-flex items-center space-x-2">
                <Link href="/auth/signin-socials" className="text-black font-bold border px-4 py-3 rounded-xl border-black hover:bg-green-100">Sign in</Link>
                <Link href="/auth/register" className="text-white bg-slate-900 hover:bg-slate-950 font-semibold rounded-xl px-4 py-3">Create free account</Link>
            </div>
            {/* Mobile Button */}
            <div onClick={toggleMenu} className="flex md:hidden z-20 text-black items-center">
                {showMenu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </div>
            {/* Mobile Menu */}
            <div className={
                showMenu ?
                    "flex flex-col md:hidden z-10 absolute top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-green-100 text-center ease-in duration-300"
                    :
                    "flex flex-col md:hidden z-10 absolute top-0 left-[-100%] right-0 bottom-0 justify-center items-center w-full h-screen bg-green-100 text-center ease-in duration-300"
            }>
                <ul className="text-black font-semibold">
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="#">About</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="#">Blog</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="#">FAQs</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="#">Contact Us</Link>
                    </li>
                </ul>
                <div className="flex flex-col items-center space-y-4 mt-6">
                    <Link href="/auth/signin-socials" className="text-black font-bold border px-4 py-3 w-80 rounded-xl border-black bg-green-100 hover:bg-green-200">Sign in</Link>
                    <Link href="/auth/register" className="text-white font-semibold px-4 py-3 w-80 rounded-xl bg-slate-900 hover:bg-slate-950">Create free account</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;