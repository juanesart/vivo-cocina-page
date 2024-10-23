import Service from "./Service";
import Service2 from "./Service2";
import ServiceQuad from "./ServiceQuad";
import { GiChiliPepper } from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { LuSandwich } from "react-icons/lu";
import { FaBowlFood } from "react-icons/fa6";
import paella1 from "../assets/paella1.webp";
import parfait1 from "../assets/parfait1.webp";
import sandwich1 from "../assets/sandwich1.webp";
import almuerzo1 from "../assets/almuerzo1.webp";
import bebidas from "../assets/bebidas.webp";
import mariscos from "../assets/mariscos.webp";
import mexicano from "../assets/mexicano.webp";
import bebidasQ from "../assets/bebidasQ.webp";

const Services = () => {
    return (
        <div id="services" className="">
            <div className="max-w-[1200px] mx-auto py-20">
                <h1 className="text-3xl py-20 text-primary font-bold text-center ">Servicios</h1>
                <div id="mexicanos" className="">
                    <Service
                        title="REFRIGERIOS MEXICANOS"
                        colorTitle={"text-secondary"}
                        colorBg={"bg-bgMexicano"}
                        imgSrc={mexicano}>
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

                            </div>
                        </div>
                    </Service>
                </div>
                <div id="saludables" className="">
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

                            </div>
                        </div>
                    </ Service>
                </div>
                <div id="sandwiches" className="">
                    <Service
                        title="SANDWICH REFRIGERIOS"
                        colorTitle={"text-orange-600"}
                        colorBg={"bg-bgSand"}
                        imgSrc={sandwich1}>
                        <div className="py-8 font-medium">
                            <div className="flex gap-2 items-center">
                                <LuSandwich fill="orange" />
                                <h3 className="font-bold text-orange-600 text-xl">SANDWICH INTEGRAL:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Pan Integral Artesanal, Queso Mozzarella, Tomate, Rúcula y Salsa Miel Mostaza.
                                </p>

                            </div>
                        </div>
                        <div className="py-8 font-medium">
                            <div className="flex gap-2 items-center">
                                <LuSandwich fill="orange" />
                                <h3 className="font-bold text-orange-600 text-xl">SANDWICH AGRIDULCE:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Pan Agridulce, Queso Mozzarella, Jamón de Cerdo, Salsa Agridulce y Lechuga fresca.
                                </p>

                            </div>
                        </div>
                        <div className="py-8 font-medium">
                            <div className="flex gap-2 items-center">
                                <LuSandwich fill="orange" />
                                <h3 className="font-bold text-orange-600 text-xl">SANDWICH AMERICANO:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Pan de Cereal; Queso Americano, Jamón de Pollo, Lechuga crespa y Salsa Tártara.
                                </p>

                            </div>
                        </div>
                    </Service>
                </div>
                <div id="almuerzos" className="">
                    <Service2
                        title="ALMUERZOS Y CENAS EMPACADOS"
                        colorTitle={"text-[#f57758]"}
                        colorBg={"bg-bgCenas"}
                        imgSrc={almuerzo1}
                        imgSrc2={mariscos}>
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

                            </div>
                        </div>
                    </Service2>
                </div>
                <div id="paellas" className="">
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

                            </div>
                        </div>
                    </Service>
                </div>
                <div id="bebidas" className="">
                    <ServiceQuad
                        title="ESTACION DE BEBIDAS FRÍAS A LA MINUTA"
                        colorTitle={"text-[#f55878]"}
                        colorBg={"bg-bgBebidas"}
                        imgSrc={bebidasQ}>
                        <div className="py-8 font-medium">
                            <h2 className="font-bold text-[#58b7f5] text-2xl">SODAS:</h2>
                            <div className="flex gap-2 items-center">
                                <FaBowlFood fill="#3c68f8" />
                                <h3 className="font-bold text-[#3c68f8] text-xl">PASIÓN:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Soda, Sandía, Fresa, Zumo de limón, Cereza, Hierbabuena y Hielo.
                                </p>

                            </div>
                        </div>
                        <div className="py-8 font-medium">
                            <div className="flex gap-2 items-center">
                                <FaBowlFood fill="#3c68f8" />
                                <h3 className="font-bold text-[#3c68f8] text-xl">BOSQUE:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Soda, Kiwi, Manzana verde, Uva verde, Zumo de limón, Cereza, Hierbabuena y Hielo.
                                </p>

                            </div>
                        </div>
                        <div className="py-8 font-medium">
                            <div className="flex gap-2 items-center">
                                <FaBowlFood fill="#3c68f8" />
                                <h3 className="font-bold text-[#3c68f8] text-xl">FRUTA ROJA:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Soda, Fresa, Manzana roja, Uva roja, Zumo de limón, Cereza, Hierbabuena y Hielo.
                                </p>

                            </div>
                        </div>
                        <div className="py-8 font-medium">
                            <h2 className="font-bold text-[#f57758] text-2xl">GRANIZADOS:</h2>
                            <div className="flex gap-2 items-center">
                                <FaBowlFood fill="#7758f5" />
                                <h3 className="font-bold text-[#7758f5] text-xl">BOSTÓN:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Hielo Granizados, Sandía, Fresa, Zumo de Cereza, Limón y Hierbabuena.
                                </p>

                            </div>
                        </div>
                        <div className="py-8 font-medium">
                            <div className="flex gap-2 items-center">
                                <FaBowlFood fill="#7758f5" />
                                <h3 className="font-bold text-[#7758f5] text-xl">LAURELES:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Hielo Granizado, Piña, Kiwi, Zumo de Naranja, Limón y Menta.
                                </p>

                            </div>
                        </div>
                        <div className="py-8 font-medium">
                            <div className="flex gap-2 items-center">
                                <FaBowlFood fill="#7758f5" />
                                <h3 className="font-bold text-[#7758f5] text-xl">CANDELARIA:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Hielo Granizado, Mango, Melón, Zumo de Naranja, Limón y Hierbabuena.
                                </p>

                            </div>
                        </div>
                        <div className="py-8 font-medium">
                            <h2 className="font-bold text-[#f558d6] text-2xl">SANGRÍAS:</h2>
                            <div className="flex gap-2 items-center">
                                <FaBowlFood fill="#7758f5" />
                                <h3 className="font-bold text-[#7758f5] text-xl">DAMA TINTA:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Vino Tinto, Jugo de Naranja, Mix de Frutas Rojas y Hielo.
                                </p>

                            </div>
                        </div>
                        <div className="py-8 font-medium">
                            <div className="flex gap-2 items-center">
                                <FaBowlFood fill="#7758f5" />
                                <h3 className="font-bold text-[#7758f5] text-xl">CABALLERO BLANCO:</h3>
                            </div>
                            <div className="flex py-2 gap-4">
                                <p>
                                    Vino Blanco, Jugo de Naranja, Mix de frutas verdes y Hielo.
                                </p>

                            </div>
                        </div>
                    </ServiceQuad>
                </div>
            </div>
        </div>
    );
}

export default Services;