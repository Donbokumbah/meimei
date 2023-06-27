import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white  pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex font-Montserrat flex-col gap-3 shrink-0">
                        <div className="p-2 font-oswald font-medium uppercase text-sm cursor-pointer">
                            Find a store
                        </div>
                        <Link href="/JoinUs">
                        <div className="p-2 font-medium uppercase text-sm cursor-pointer">
                            Join with Us
                        </div>
                        </Link>
                        <div className="p-2 font-medium uppercase text-sm cursor-pointer">
                            sign up for email
                        </div>
                        <div className="p-2 font-medium uppercase text-sm cursor-pointer">
                            send us feedback
                        </div>
                    </div>
                    {/* MENU END */}


                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex text-center flex-col gap-3">
                            <div className="font-Montserrat font-medium uppercase text-sm">
                                Opeaning Weeks
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Monday To Saturday
                            </div>
                            <div className="font-Montserrat font-medium uppercase text-sm">
                                Opeaning Hours
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                8:00 Am To 10:Pm
                            </div>
                            <div className="font-Montserrat font-medium uppercase text-sm">
                                Online Delivery
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                24/7
                            </div>
                            </div>
                        </div>
                        {/* MENU END */}
                    

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex text-center flex-col gap-3">
                            <div className="font-Montserrat font-medium uppercase text-sm">
                                get help
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href="TrackOrder">
                                Order Status
                                </Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Returns
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href="/contact/ContactPage">
                                Contact Us
                                </Link>
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex text-center flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                About <b className="font-Tangerine">Mei Mei</b> 
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Update
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Community
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Investors
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="mb-4 flex gap-4 justify-center md:flex-col md:justify-start">
                    <div className="bg-blue-600 rounded-full">
                        <Link href="https://facebook.com" className="w-10 h-10 rounded-md border flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <FaFacebookF size={20} color="white" />
                        </Link>
                    </div>
                    <div className="bg-blue-500 rounded-full">
                        <Link href="https://twitter.com" className="w-10 h-10 rounded-md border flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <FaTwitter size={20} color="white"/>
                        </Link>
                    </div>
                    <div className="bg-white border border-white rounded-full">
                        <Link href="https://youtube.com" className="w-10 h-10 rounded-md border flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                            <FaYoutube size={20} color="red"/>
                        </Link>
                    </div>
                    <div className="bg-white rounded-full">
                        <Link href="https://instagram.com" className="w-10 h-10 rounded-md border flex items-center justify-center text-pink-600 hover:bg-white/[0.5] cursor-pointer">
                            <FaInstagram size={20} color="original"/>
                        </Link>
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <div className="flex justify-center">
                <Link href='/' className="m-auto ">
                    <span className='w-[40px] md:w-[60px] font-Tangerine text-2xl md:text-3xl'>Mei Mei Fast Food</span>
                </Link>
            </div>
            <div className="flex justify-center">
                <Link href='/' className="m-auto ">
                    <span className='w-[40px] md:w-[60px] font-Tangerine text-2xl md:text-3xl'>Explore Your Very Own Local Cousine</span>
                </Link>
            </div>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] px-2 hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Mei Mei, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="px-2 text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="px-2 text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="px-2 text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        <Link href='/PrivacyPolicy'>
                        PrivacyPolicy
                        </Link>
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;