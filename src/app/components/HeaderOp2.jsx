'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeaderOp2 = () => {
    return (
        <section id='header' className=' bg-white shadow-secondary shadow-lg fixed z-40 top-0 w-full'>
            <div className=" max-w-[1200px] text-primary mx-auto">
                <div className=" flex flex-col p-4 items-center justify-center ">
                    <div className=" text-center items-center ">
                        <Link href={'#'}>
                            <img src="https://i.postimg.cc/jjmvvB2N/logo-PVivo.png"
                                className=" w-[64px] " alt="logo" />
                        </Link>
                    </div>
                    <ul className='flex p-4 md:font-semibold md:text-xl items-center gap-6 justify-between'>
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
                                    <Link href={'#refrigerios'}>Refrigerios</Link>
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
                            <Link href={'#profesionales'}>
                                Contáctanos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HeaderOp2;