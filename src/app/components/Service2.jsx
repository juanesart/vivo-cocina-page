import React from 'react';
import Image from 'next/image';

const Service2 = ({ children, title, colorTitle, colorBg, imgSrc, imgSrc2, ...props }) => {
    return (
        <div id="servicio">
            <div className="max-w-[1200px] block1 py-10 mx-auto">
                <div className={`p-8 rounded-3xl ${colorBg}`}>
                    <h1 className={`text-3xl ${colorTitle} font-bold text-center py-5`}>{title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-5  text-xl gap-2 flex-wrap">
                        <div className="col-span-3">
                            {children}
                        </div>
                        <div className="flex gap-4 md:col-span-2 md:flex-col justify-between">
                            <Image src={imgSrc}
                                className="object-cover rounded-full opacity-85 w-1/2 md:w-full hover:opacity-100"
                                alt={title} />
                            <Image src={imgSrc2}
                                className="object-cover rounded-full opacity-85 w-1/2 md:w-full hover:opacity-100"
                                alt={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service2;