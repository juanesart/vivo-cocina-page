import React from 'react';
import Image from 'next/image';

const ServiceLarge = ({ children, title, colorTitle, colorBg, imgSrc, ...props }) => {
    return (
        <div id="servicio">
            <div className="max-w-[1200px] block1 py-20 mx-auto">
                <div className={`p-8 rounded-3xl ${colorBg}`}>
                    <h1 className={`text-3xl ${colorTitle} font-bold text-center py-5`}>{title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xl">
                        <div className=" col-span-2">
                            {children}
                        </div>
                        <div className="w-full h-full">
                            <Image src={imgSrc}
                                className="object-cover opacity-85 hover:opacity-100"
                                alt={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceLarge;