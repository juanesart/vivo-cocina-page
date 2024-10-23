'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { FiPhone } from "react-icons/fi"

const HeaderBlack = () => {
    return (
        <section id='header' className=' bg-black shadow-secondary shadow-lg fixed z-40 top-0 w-full'>
            <div className=" max-w-[1200px] text-white mx-auto">
                <div className=" flex flex-col p-4 items-center justify-center ">
                    <div className=" text-center items-center ">
                        <Link href={'#'}>
                            <img src="https://i.postimg.cc/jjmvvB2N/logo-PVivo.png"
                                className=" w-[70px] " alt="logo" />
                        </Link>
                    </div>
                    <ul className='flex p-2 md:font-semibold md:text-xl items-center gap-6 justify-between'>
                        <li className='hover:text-secondary duration-300'>
                            <Link href={'#about'}>
                                Nosotros
                            </Link>
                        </li>
                        <li className='hover:text-secondary relative group duration-300'>
                            <Link href={'#services'}>
                                Servicios
                            </Link>
                            <ul className='absolute hidden group-hover:block bg-white shadow-lg p-4 rounded-lg'>
                                <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200 duration-300'>
                                    <Link href={'#refrigerios'}>Refrigerios Mexicanos</Link>
                                </li>
                                <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200 duration-300'>
                                    <Link href={'#refrigerios'}>Refrigerios Saludables</Link>
                                </li>
                                <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200 duration-300'>
                                    <Link href={'#refrigerios'}>sandwich Refrigerios</Link>
                                </li>
                                <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200 duration-300'>
                                    <Link href={'#almuerzos'}>Almuerzos</Link>
                                </li>
                                <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200 duration-300'>
                                    <Link href={'#paellas'}>Paellas</Link>
                                </li>
                                <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200 duration-300'>
                                    <Link href={'#bebidas'}>Bebidas</Link>
                                </li>
                                <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200 duration-300'>
                                    <Link href={'#shows'}>Shows</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='hover:text-secondary duration-300'>
                            <Link href='https://wa.link/vujv8i'
                                target='_blank'>
                                Contáctanos
                            </Link>
                        </li>
                    </ul>
                    <ul className='flex  md:font-semibold md:text-lg items-center gap-6 justify-between'>
                        <li className='hover:text-[#ff0069]'>
                            <Link href='https://www.instagram.com/vivopaellas?igsh=MWJlbmxwZjA2M3U0OA=='
                                target='_blank'
                                className='flex items-center'>
                                <AiOutlineInstagram size={20} />
                                <p className='hidden md:block'>vivopaellas</p>
                            </Link>
                        </li>
                        <li className='hover:text-[#405de6]'>
                            <Link href='https://www.facebook.com/share/65eNG8sgdszX8u5B/'
                                target='_blank'
                                className='flex items-center'>
                                <AiOutlineFacebook size={20} />
                                <p className='hidden md:block'>vivopaellas</p>
                            </Link>
                        </li>
                        <li className=''>
                            <Link href='#'
                                target='_blank'
                                className='flex items-center'>
                                <AiOutlineMail size={20} />
                                <p className='hidden md:block'>vivococinarte@gmail.com</p>
                            </Link>
                        </li>
                        <li className=''>
                            <Link href='https://wa.link/vujv8i'
                                target='_blank'
                                className='flex items-center'>
                                <FiPhone size={20} fill='white' />
                                3009454328
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HeaderBlack;