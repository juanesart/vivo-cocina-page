import Service from "./Service";
import { GiChiliPepper } from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { LuSandwich } from "react-icons/lu";
import { FaBowlFood } from "react-icons/fa6";
import paella1 from "../assets/paella1.webp";
import texano1 from "../assets/texano1.jpeg";
import parfait1 from "../assets/parfait1.webp";
import sandwich1 from "../assets/sandwich1.webp";
import almuerzo1 from "../assets/almuerzo1.webp";
import cena from "../assets/cena.webp";
import ServiceLarge from "./ServiceLarge";

const Services = () => {
    return (
        <div id="services" className="">
            <div className="max-w-[1200px] mx-auto py-20">
                <h1 className="text-3xl py-20 text-primary font-bold text-center ">Servicios</h1>
                <Service
                    title="REFRIGERIOS TEXANOS"
                    colorTitle={"text-secondary"}
                    colorBg={"bg-bgPaella"}
                    imgSrc={texano1}>
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
                    colorTitle={"text-green-500"}
                    colorBg={"bg-bgSalud"}
                    imgSrc={parfait1}>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <PiPlant fill="green" />
                            <h3 className="font-bold text-green-500 text-xl">PARFAIT:</h3>
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
                            <h3 className="font-bold text-green-500 text-xl">WRAP:</h3>
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
                            <h3 className="font-bold text-green-500 text-xl">COPA DE FRUTAS:</h3>
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
                    imgSrc={sandwich1}>
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
                <Service
                    title="ALMUERZOS Y CENAS EMPACADOS"
                    colorTitle={"text-[#f57758]"}
                    colorBg={"bg-bgCenas"}
                    imgSrc={almuerzo1}>
                    <div className="py-8 font-medium">
                        <h2 className="font-bold text-[#f57758] text-2xl">CARNES:</h2>
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#3c68f8" />
                            <h3 className="font-bold text-[#3c68f8] text-xl">PASTA A LA NAPOLITANA:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Pasta corta en Salsa Napolitana, Pollo a la parrilla, Queso Mozarela, Hojas de Albahaca, Almendras y rodajas de Pan francés.
                            </p>
                            <p className="flex flex-1 items-end">$25.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#3c68f8" />
                            <h3 className="font-bold text-[#3c68f8] text-xl">CORDON BLUE DE POLLO:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Roll de Pollo, Espinaca y Queso Mozarela, Vegetales salteados, Puré de papas y Aceite de Albahaca.
                            </p>
                            <p className="flex flex-1 items-end">$25.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#3c68f8" />
                            <h3 className="font-bold text-[#3c68f8] text-xl">PAELLA DE POLLO:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Arroz con base de Pollo, Pernil de pollo, Chorizo de cerdo, Vegetales, Limón y rodajas de Pan Baguette.
                            </p>
                            <p className="flex flex-1 items-end">$25.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <h2 className="font-bold text-[#f57758] text-2xl">MARISCOS:</h2>
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#7758f5" />
                            <h3 className="font-bold text-[#7758f5] text-xl">PAELLA DE MARISCOS:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Arroz con base de pescado, Camarón, Mejillón negro, Vegetales, Limón y rodajas de pan Baguette.
                            </p>
                            <p className="flex flex-1 items-end">$35.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#7758f5" />
                            <h3 className="font-bold text-[#7758f5] text-xl">CEVICHE DE PESCADO:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Filete de pescado corvina en Leche de Tigre, Mazorcas y Tomates Cherry asados.
                            </p>
                            <p className="flex flex-1 items-end">$25.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#7758f5" />
                            <h3 className="font-bold text-[#7758f5] text-xl">PASTA MEDITERRANEA:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Pasta larga en Salsa de mariscos, Camarones asados, Mejillón negro, Queso Parmesano, Aceite de perejil y rodajas de Pan francés.
                            </p>
                            <p className="flex flex-1 items-end">$30.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#7758f5" />
                            <h3 className="font-bold text-[#7758f5] text-xl">ABROCHETAS DE LANGOSTINOS:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p>
                                Langostinos al gril, Tomates Cherry, ajíes dulces asados, Zuccini.
                            </p>
                            <p className="flex flex-1 items-end">$25.000</p>
                        </div>
                    </div>
                </Service>
                <Service
                    title="PAELLAS PARA EVENTOS"
                    colorBg="bg-hoverPri"
                    colorTitle="text-[#f57758]"
                    imgSrc={paella1}>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#f57758" />
                            <h3 className="font-bold text-[#f57758] text-xl">PAELLA VIVO:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p> Langosta, Pulpo, Anillos de Calamar, Mejillón negro, Almeja blanca, Gambas, Muslitos de Pollo, Chorizo Español, Vegetales, Ajíes asados y Arroz parbolizado.
                                <br />
                                Porción por persona:
                            </p>
                            <p className="flex flex-1 items-end">$50.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#f57758" />
                            <h3 className="font-bold text-[#f57758] text-xl">PAELLA MAR:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p> Camarón, Pulpo, Anillos de Calamar, Mejillón negro, Almeja blanca, Gambas, Chorizo Español, Vegetales, Ajíes asados y Arroz parbolizado.
                                <br />
                                Porción por persona:
                            </p>
                            <p className="flex flex-1 items-end">$45.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#f57758" />
                            <h3 className="font-bold text-[#f57758] text-xl">PAELLA MAR Y TIERRA:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p> Camarón, Pulpo, Anillos de Calamar, Mejillón negro, Gambas, Muslitos de Pollo, Vegetales, Ajíes asados, Chorizo Español y Arroz parbolizado.
                                <br />
                                Porción por persona:
                            </p>
                            <p className="flex flex-1 items-end">$45.000</p>
                        </div>
                    </div>
                    <div className="py-8 font-medium">
                        <div className="flex gap-2 items-center">
                            <FaBowlFood fill="#f57758" />
                            <h3 className="font-bold text-[#f57758] text-xl">PAELLA TIERRA:</h3>
                        </div>
                        <div className="flex py-2 gap-4">
                            <p> Pernil de Cerdo, Muslitos de Pollo, Costilla de Cerdo, Chorizo Español, Vegetales, Ajíes asados y Arroz parbolizado.
                                <br />
                                Porción por persona:
                            </p>
                            <p className="flex flex-1 items-end">$45.000</p>
                        </div>
                    </div>
                </Service>
            </div>
        </div>
    );
}

export default Services;