import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTikTok, AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <div id='footer' className='bg-black z-50'>
            <div className="max-w-[1200px] p-8 flex md:flex-row items-center flex-col md:items-end justify-between mx-auto text-white">
                <div className="">
                    <Link href={'#'}>
                        <img src="https://i.postimg.cc/jjmvvB2N/logo-PVivo.png"
                            className=" w-[64px] " alt="logo" />
                    </Link>
                </div>
                <div className="">
                    <ul className='flex flex-col items-center text-center'>
                        <li className='hover:text-[#EB2877] duration-300'>
                            <Link
                                href='https://www.instagram.com/vivopaellas?igsh=MWJlbmxwZjA2M3U0OA=='
                                target='_blank'
                            >
                                <p className='flex font-medium items-center gap-1'>
                                    <AiOutlineInstagram />
                                    vivopaellas
                                </p>
                            </Link>
                        </li>
                        <li className='hover:text-[#405de6] duration-300'>
                            <Link
                                href='https://www.facebook.com/share/65eNG8sgdszX8u5B/'
                                target='_blank'
                            >
                                <p className='flex font-medium items-center gap-1'>
                                    <AiOutlineFacebook />
                                    vivopaellas
                                </p>
                            </Link>
                        </li>
                        <li>
                            <p className='flex font-medium items-center gap-1'>
                                <AiOutlineMail />
                                vivococinarte@gmail.com
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;