import React from "react";
import Image from "next/image";
import Link from "next/link";

function WelcomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                <Image
                    src="/tranzgoo.png"
                    alt="TranzGO Logo"
                    width={200}
                    height={48}
                />
            </div>
            <div className="flex flex-col items-center justify-center mb-2">
                <h2 className="text-black font-bold text-2xl">Welcome to TranzGO</h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center mb-10 font-medium text-sm text-black">
                <p>Your all-in-one telecom solution! Buy airtime, data, pay bills, and convert airtime to cash effortlessly.</p>
                <p>Your seamless telecom experience begins here. Enjoy!</p>
            </div>
            <div>
                <Link href="/auth/signin-socials">
                    <button className="text-white font-bold bg-green-600 hover:bg-green-700 py-2 w-72 rounded-2xl mb-5">Create Account</button>
                </Link>
            </div>
            <div>
                <Link href="/auth/login">
                    <button className="text-white font-bold bg-green-600 hover:bg-green-700 py-2 w-72 rounded-2xl mb-5">Login</button>
                </Link>
            </div>
        </div>
    );
}

export default WelcomePage;