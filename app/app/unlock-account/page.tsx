"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineFingerprint as FingerprintIcon } from "react-icons/md"
import { FiDelete as DeleteIcon } from "react-icons/fi";
import { IoIosHome as HomeIcon } from "react-icons/io";

function UnlockAccount() {
    const [pinA, setPinA] = useState("");
    const [pinB, setPinB] = useState("");
    const [pinC, setPinC] = useState("");
    const [pinD, setPinD] = useState("");
    // create an array of 4 elements,
    // each time a number is pressed add that number to the array,
    // delete removes the last number from the array,
    // when the array gets filled up compare the pin and login
    return (
        <div>
            <div className="flex flex-row ml-8 sm:ml-0 text-left sm:text-center items-start sm:items-center justify-start sm:justify-center mt-20">
                <div className="mr-5 rounded-full">
                    <Image
                        src="/user-icon.png"
                        alt="User Profile Picture"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="font-extrabold">Hello John Doe</p>
                    <p className="font-medium">Continue to account</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-20">
                <div className="flex flex-row w-44 justify-between mb-12">
                    <input style={{ "backgroundColor": "#ECEBEB" }} className="text-center font-bold w-8 h-8 rounded-md shadow-md shadow-black border-solid border-2 border-green-200" type="text" value={pinA}></input>
                    <input style={{ "backgroundColor": "#ECEBEB" }} className="text-center font-bold w-8 h-8 rounded-md shadow-md shadow-black border-solid border-2 border-green-200" type="text" value={pinB}></input>
                    <input style={{ "backgroundColor": "#ECEBEB" }} className="text-center font-bold w-8 h-8 rounded-md shadow-md shadow-black border-solid border-2 border-green-200" type="text" value={pinC}></input>
                    <input style={{ "backgroundColor": "#ECEBEB" }} className="text-center font-bold w-8 h-8 rounded-md shadow-md shadow-black border-solid border-2 border-green-200" type="text" value={pinD}></input>
                </div>
                <div className="flex flex-row w-56 justify-between mb-10">
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">1</button>
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">2</button>
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">3</button>
                </div>
                <div className="flex flex-row w-56 justify-between mb-10">
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">4</button>
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">5</button>
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">6</button>
                </div>
                <div className="flex flex-row w-56 justify-between mb-10">
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">7</button>
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">8</button>
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">9</button>
                </div>
                <div className="flex flex-row w-56 justify-between mb-5">
                    <FingerprintIcon className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 rounded-lg" />
                    <button className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 bg-white hover:bg-green-100 rounded-lg border-solid border-2 border-green-600">0</button>
                    <DeleteIcon className="text-center text-green-600 hover:text-green-700 font-bold w-10 h-10 rounded-lg" />
                </div>
                <div>
                    <p>Not you? <Link className="text-green-600 hover:text-green-700" href="#">Switch Account</Link></p>
                </div>
            </div>
        </div>

    );
}

export default UnlockAccount;