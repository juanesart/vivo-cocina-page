import Image from 'next/image';
import cheft from '../assets/cheft2.webp';
import cheftBlur from '../assets/cheftBlur.webp';
import pasabocas from '../assets/pasabocas.webp';
const Extra = () => {
    return (
        <div id="shows" className="">
            <div className="max-w-[1200px] px-4 xl:px-0 mx-auto">
                <div className="">
                    <h2 className="text-3xl font-bold text-center text-orange-500 block1">SHOWS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 block1">
                        <p className="text-xl md:text-3xl font-medium self-center">Shows en vivo de preparación de Paella. Porción por persona.<br />
                            Mínimo 10 personas.
                        </p>
                        <div className="col-span-2 flex  justify-between gap-4 object-cover overflow-hidden">
                            <Image src={cheft}
                                className="object-cover rounded-3xl  shadow-2xl max-w-[48%]" alt="chef" />
                            <Image src={cheftBlur}
                                className="object-cover rounded-3xl shadow-2xl max-w-[48%]" alt="chef" />

                        </div>
                    </div>
                    <div id='pasabocas' className="py-10 ">
                        <h2 className="text-3xl font-bold text-center text-secondary">MESA DE PASABOCAS Y ENTRADAS.</h2>
                        <div className="flex py-10 block1 justify-center">
                            <ul className="list-inside list-disc text-xl md:text-3xl font-medium self-center">
                                <li className='py-2'>TACOS: Tortillas de maíz, Carne de Cerdo, Pico de Gallo, Cebolla, Cilantro y Limón.</li>
                                <li className='py-2'>FAJITAS: Tortillas de trigo, Carne de res Molida, Queso y Lechuga.</li>
                                <li className='py-2'>MONTAÑERA: Arepita blanca, Guacamole, Chorizo, Cebolla, Cilantro y Limón.</li>
                                <li className='py-2'>CARIBE: Patacón de plátano verde, Carme de res desmechada, Cilantro.</li>
                                <li className='py-2'>MADURO: Plátano maduro asado, Bocadillo y Queso rallado.</li>
                                <li className='py-2'>BROSHETTA: Tostadas de pan Francés, Queso Mozzarella, Tomate, Albahaca y Aceite de oliva.</li>
                                <li className='py-2'>QUESADILLA: Tortilla de trigo, queso Mozzarella y Arequipe.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between py-10 ">
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-bold  text-secondary">SALSAS</h2>
                                <ul className="list-inside list-disc text-xl md:text-3xl font-medium self-center">
                                    <li className='py-2'>Guacamole.
                                    </li>
                                    <li className='py-2'>Chipotle.</li>
                                    <li className='py-2'>Criolla.</li>
                                    <li className='py-2'>Tártara.</li>
                                    <li className='py-2'>Miel mostaza.</li>
                                    <li className='py-2'>Mayonesa Ahumada.</li>
                                </ul>
                            </div>
                            <div className="">
                                <Image src={pasabocas}
                                    className="object-cover rounded-3xl shadow-2xl" alt="chef" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Extra;