const About = () => {
    return (
        <div id="about" className="bg-primary">
            <div className="max-w-[960px] mx-auto">

                <p className="text-2xl py-20 font-bold text-white block1">Somos una Empresa que nace con la idea de brindar un servicio único, para convertirse en realidad con la alta calidad de nuestras preparaciones y productos, con el propósito de superar las expectativas de nuestros clientes. Desarrollando día a día, técnicas de cocción que nos permitan brindar alimentos que conserven sus nutrientes.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 block1">
                    <img src="https://i.postimg.cc/rmJGTSSG/about-Img1.jpg"
                        className="w-full h-full object-cover rounded-full opacity-75 hover:opacity-100"
                        alt="aboutImage1" />
                    <img src="https://i.postimg.cc/hjyrxLfD/about-Img2.jpg"
                        className="w-full h-full object-cover rounded-full opacity-75 hover:opacity-100"
                        alt="" />
                    <img src="https://i.postimg.cc/dVYxJ9Cp/about-Img3.jpg"
                        className="w-full h-full object-cover rounded-full opacity-75 hover:opacity-100"
                        alt="" />
                </div>
                <p className="text-2xl py-20 font-bold text-white block1">Lleva la alta cocina a tus eventos con nuestros exclusivos refrigerios de autor, preparados con productos frescos y elaborados a la minuta para garantizar la máxima calidad. Sorprende a tus invitados con sabores únicos, presentados en empaques biodegradables de lujo que cuidan el medio ambiente sin comprometer la elegancia.</p>
            </div>
        </div>
    );
}

export default About;