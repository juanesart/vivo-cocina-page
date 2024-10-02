import Service from "./Service";
import { GiChiliPepper } from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { LuSandwich } from "react-icons/lu";

const Services = () => {
    return (
        <div id="services" className="">
            <div className="max-w-[960px] mx-auto py-20">
                <h1 className="text-3xl pb-20 text-primary font-bold text-center ">Servicios</h1>
                <Service
                    title="REFRIGERIOS TEXANOS"
                    colorTitle={"text-secondary"}
                    colorBg={"bg-hoverPri"}
                    imgSrc="https://i.postimg.cc/vZZspHHx/texano1.jpg">
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <GiChiliPepper fill="red" />
                            <h3 className="font-bold text-secondary text-xl">BURRITO JUÁREZ:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Tortilla de trigo, Pico de gallo, Jamón de cerdo, Queso rallado, Lechuga, Salsa Ahumada y Cilantro.<br />
                                <span className="font-bold">Bebida: </span> Jugo en presentación en caja.
                            </p>
                            <p className="flex flex-1 items-end">$15.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <GiChiliPepper fill="red" />
                            <h3 className="font-bold text-secondary text-xl">NACHOS TEXANOS:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Nachos de Maíz (frito), Frijol Negro, Guacamole, Salsa de la casa, Pico de gallo, Queso rallado y Cilantro.<br />
                                <span className="font-bold">Bebida: </span> Jugo en presentación en caja.
                            </p>
                            <p className="flex flex-1 items-end">$15.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <GiChiliPepper fill="red" />
                            <h3 className="font-bold text-secondary text-xl">FLAUTAS SINALOA:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Tortilla de trigo (frita), Pollo desmechado, Pico de gallo, Lechuga, Sour cream, Queso rallado y Cilantro.<br />
                                <span className="font-bold">Bebida: </span> Jugo en presentación en caja.
                            </p>
                            <p className="flex flex-1 items-end">$15.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <GiChiliPepper fill="red" />
                            <h3 className="font-bold text-secondary text-xl">QUESADILLAS MEXICANAS:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Tortilla de trigo, Carne Molida, Queso derretido, Pico de gallo, Lechuga, Queso rallado y Cilantro.<br />
                                <span className="font-bold">Bebida: </span> Jugo en presentación en caja.
                            </p>
                            <p className="flex flex-1 items-end">$15.000</p>
                        </div>
                    </div>
                </Service>
                <Service
                    title="REFRIGERIOS SALUDABLES"
                    colorTitle={"text-green-600"}
                    colorBg={"bg-bgSalud"}
                    imgSrc="https://i.postimg.cc/brgHGjDW/parfait1.jpg">
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <PiPlant fill="green" />
                            <h3 className="font-bold text-green-600 text-xl">PARFAIT:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Yogurt, Granola, Frutas Deshidratadas, Uva roja,  mango, banano, sandía y Fresa.<br />
                                <span className="font-bold">Bebida: </span> Agua en presentación botella.
                            </p>
                            <p className="flex flex-1 items-end">$14.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <PiPlant fill="green" />
                            <h3 className="font-bold text-green-600 text-xl">WRAP:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Tortilla de Trigo, Queso Mozzarella, Jamón Ahumado, Lechuga, Tomate y Salsa Mayo-mostaza.<br />
                                <span className="font-bold">Bebida: </span> Hatsu en presentación caja.
                            </p>
                            <p className="flex flex-1 items-end">$13.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <PiPlant fill="green" />
                            <h3 className="font-bold text-green-600 text-xl">COPA DE FRUTAS:</h3>
                        </div>
                        <div className="flex justify-between py-2 gap-4">
                            <p>
                                Patilla, Piña, Banano y Hierbabuena.<br />
                                <span className="font-bold">Bebida: </span> Jugo de Naranja en  presentación caja.
                            </p>
                            <p className="flex flex-1 items-end">$12.000</p>
                        </div>
                    </div>
                </ Service>
                <Service
                    title="SANDWICH REFRIGERIOS"
                    colorTitle={"text-orange-600"}
                    colorBg={"bg-bgSand"}
                    imgSrc="https://i.postimg.cc/brgHGjDW/parfait1.jpg">
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <LuSandwich fill="orange" />
                            <h3 className="font-bold text-orange-600 text-xl">SANDWISH INTEGRAL:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Pan Integral Artesanal, Queso Mozzarella, Tomate, Rúcula y Salsa Miel Mostaza.
                            </p>
                            <p className="flex flex-1 items-end">$14.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <LuSandwich fill="orange" />
                            <h3 className="font-bold text-orange-600 text-xl">SANDWISH AGRIDULCE:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Pan Agridulce, Queso Mozzarella, Jamón de Cerdo, Salsa Agridulce y Lechuga fresca.
                            </p>
                            <p className="flex flex-1 items-end">$14.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <LuSandwich fill="orange" />
                            <h3 className="font-bold text-orange-600 text-xl">SANDWISH AMERICANO:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Pan de Cereal; Queso Americano, Jamón de Pollo, Lechuga crespa y Salsa Tártara.
                            </p>
                            <p className="flex flex-1 items-end">$14.000</p>
                        </div>
                    </div>
                </Service>
            </div>
        </div>
    );
}

export default Services;