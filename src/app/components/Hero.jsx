'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
    const frases = [
        "Deleita tu paladar con refrigerios de Autor",
        "Lleva la alta cocina a tus eventos",
        "Productos frescos",
        "Elaborados a la minuta para tus eventos",
        "Empacados en material biodegradable de lujo"
    ]

    const [fraseActual, setFraseActual] = useState(0);
    const [fadeClass, setFadeClass] = useState("fade-in");

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass("");
            setTimeout(() => {
                setFraseActual((prevIndex) => (prevIndex + 1) % frases.length);
                setFadeClass("fade-in");
            }, 800);
        }, 3000);
        return () => clearInterval(interval);
    }, [frases.length]);

    return (
        <div id="hero">
            <div className="max-w-[960px] mx-auto">
                <div className=" absolute top-0 -z-10 right-0 lg:right-80">
                    <img src="https://i.postimg.cc/KjfcNDdW/elipsedecor.png"
                        alt="" />
                </div>
                <div className="grid grid-cols-1 gap-4 py-[180px] md:grid-cols-2">
                    <div className="flex flex-col">
                        <div className="justify-center min-h-[400px] ">
                            <p className={`slider-text ${fadeClass} text-5xl py-20 font-bold text-primary`} >
                                {frases[fraseActual]}
                            </p>
                        </div>
                        <Link className=''
                            href={'https://wa.link/vujv8i'}
                            target='_blank'>
                            <span className="text-3xl font-bold text-white bg-secondary px-4 py-2 rounded-3xl duration-300 hover:text-primary">!Agendate ya!</span>
                        </Link>
                    </div>
                    <div className="">
                        <img src="https://i.postimg.cc/6qsd71fh/hero-Image.jpg"
                            className=" rounded-3xl"
                            alt="heroimage" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;