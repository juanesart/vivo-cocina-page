import React from 'react';
import Image from 'next/image';

const ServiceQuad = ({ children, title, colorTitle, colorBg, imgSrc, ...props }) => {
    return (
        <div id="servicio">
            <div className="max-w-[1200px] block1 py-10 mx-auto">
                <div className={`p-8 rounded-3xl ${colorBg}`}>
                    <h1 className={`text-3xl ${colorTitle} font-bold text-center py-5`}>{title}</h1>
                    <div className="flex flex-col md:flex-row items-start text-xl gap-2 flex-wrap">
                        <div className="flex-1">
                            {children}
                        </div>
                        <div className="sm:max-w-[40%] ">
                            <Image src={imgSrc}
                                className="object-cover rounded-3xl opacity-85 hover:opacity-100"
                                alt={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceQuad;