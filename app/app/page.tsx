import React from "react";
import Image from "next/image";

function WelcomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                <Image
                    src="/tranzgoo.png"
                    alt="TranzGoo Logo"
                    width={200}
                    height={48}
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-black font-bold text-2xl">Welcome to TranzGOO</h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center mb-10">
                <p>Your all-in-one telecom solution! Buy airtime, data, pay bills, and convert airtime to cash effortlessly.</p>
                <p>Your seamless telecom experience begins here. Enjoy!</p>
            </div>
            <div>
                <button className="text-white font-bold bg-green-600 hover:bg-green-700 py-2 w-72 rounded-2xl mb-5">Create Account</button>
            </div>
            <div>
                <button className="text-white font-bold bg-green-600 hover:bg-green-700 py-2 w-72 rounded-2xl mb-5">Login</button>
            </div>
        </div>
    );
}

export default WelcomePage;