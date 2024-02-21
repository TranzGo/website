"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF as FacebookIcon, FaInstagram as InstagramIcon, FaTwitter as TwitterIcon, FaLinkedin as LinkedinIcon, FaTiktok as TiktokIcon, FaYoutube as YoutubeIcon } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-green-200">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 px-4 py-8 max-w-6xl mx-auto justify-between mt-8 mb-16">
                <Link href="/">
                    <Image
                        src="/tranzgoo.png"
                        alt="TranzGoo Logo"
                        width={150}
                        height={36}
                    />
                </Link>
                <div className="px-4 flex flex-row space-x-40 sm:space-x-60">
                    <div className="flex flex-col text-left space-y-2 text-sm">
                        <p className="text-slate-800 font-bold">Products</p>
                        <Link href="#" className="text-black">Airtime</Link>
                        <Link href="#" className="text-black">Cable TV</Link>
                        <Link href="#" className="text-black">Data</Link>
                        <Link href="#" className="text-black">Airtime2Cash</Link>
                    </div>
                    <div className="flex flex-col text-left space-y-2 text-sm">
                        <p className="text-slate-800 font-bold">Company</p>
                        <Link href="#" className="text-black">About</Link>
                        <Link href="#" className="text-black">Blog</Link>
                        <Link href="#" className="text-black">FAQs</Link>
                        <Link href="#" className="text-black">Contact Us</Link>
                    </div>
                </div>
                <div className="px-4 flex flex-col text-left space-y-2 text-sm">
                    <p className="text-slate-800 font-bold">Legal</p>
                    <Link href="#" className="text-black">Terms</Link>
                    <Link href="#" className="text-black">Privacy</Link>
                    <Link href="#" className="text-black">Security</Link>
                </div>
                <div className="px-4 flex flex-col text-left md:text-right items-start md:items-end space-y-2 text-sm">
                    <div className="flex flex-row items-center space-x-3 font-extrabold text-md text-slate-700">
                        <Link href="#" ><FacebookIcon /></Link>
                        <Link href="#" ><InstagramIcon /></Link>
                        <Link href="#" ><TwitterIcon /></Link>
                        <Link href="#" ><LinkedinIcon /></Link>
                        <Link href="#" ><TiktokIcon /></Link>
                        <Link href="#" className="text-xl"><YoutubeIcon /></Link>
                    </div>
                    <div className="flex flex-col text-left md:text-right items-start md:items-end space-y-2 text-sm">
                        <Link href="#">Tesmot house, Abdulrahman Okene close,</Link>
                        <Link href="#">Victoria Island, Lagos, Nigeria.</Link>
                        <Link href="mailto:contact@tranzgoo.com">contact@tranzgoo.com</Link>
                        <Link href="tel:+2348065096213">+234 806 509 6213</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;