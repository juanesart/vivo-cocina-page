import React from 'react';

const Service = ({ children, title, colorTitle, colorBg, imgSrc, ...props }) => {
    return (
        <div id="servicio">
            <div className="max-w-[960px] block1 py-20 mx-auto">
                <div className={`p-8 rounded-3xl ${colorBg}`}>
                    <h1 className={`text-3xl ${colorTitle} font-bold text-center py-5`}>{title}</h1>
                    <div className="flex items-start gap-2 flex-wrap">
                        <div className="flex-1">
                            {children}
                        </div>
                        <div className="max-w-[40%] ">
                            <img src={imgSrc}
                                className="object-cover h-auto w-full  rounded-full opacity-85 hover:opacity-100"
                                alt={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;