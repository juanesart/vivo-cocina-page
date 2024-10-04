import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

const ButtonWps = () => {
    return (
        <div className='fixed right-10 bottom-10 z-10'>
            <Link
                href='https://wa.link/vujv8i'
                target='_blank'
            >
                <FaWhatsapp className='hover:scale-125 duration-300 bg-green-500 p-2 rounded-full' size={60} fill='white' />
            </Link>
        </div>
    );
}

export default ButtonWps;