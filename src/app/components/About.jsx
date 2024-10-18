const About = () => {
    return (
        <div id="about" className="bg-primary">
            <div className="max-w-[1200px] px-4 xl:px-0 items-center grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">

                <div className="w-full border-white border-8 rounded-full overflow-hidden block1">
                    <div className="w-full opacity-80 hover:opacity-100 ease-in-out duration-300 wrapper flex">
                        <img src="https://i.postimg.cc/rmJGTSSG/about-Img1.jpg"
                            className="w-full"
                            alt="aboutImage1" />
                        <img src="https://i.postimg.cc/hjyrxLfD/about-Img2.jpg"
                            className="w-full"
                            alt="aboutImage1" />
                        <img src="https://i.postimg.cc/SxH3kv9T/cheft.jpg"
                            className="w-full"
                            alt="aboutImage1" />
                    </div>
                </div>
                <div className="md:text-3xl md:leading-10 text-xl items-center col-span-2 py-20 font-bold text-white block1">
                    <p>Somos una Empresa que nace con la idea de brindar un servicio único, para convertirse en realidad con la alta calidad de nuestras preparaciones y productos, con el propósito de superar las expectativas de nuestros clientes. Desarrollando día a día, técnicas de cocción que nos permitan brindar alimentos que conserven sus nutrientes.</p>
                    <p>Lleva la alta cocina a tus eventos con nuestros exclusivos refrigerios de autor, preparados con productos frescos y elaborados a la minuta para garantizar la máxima calidad, Sorprende a tus invitados con sabores únicos.</p>
                </div>
            </div>
        </div>
    );
}

export default About;