'use client'

import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [footerPosition, setFooterPosition] = useState('hidden');

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.offsetHeight;

            if (windowHeight >= bodyHeight) {
                setFooterPosition('fixed');
            } else {
                setFooterPosition('relative');
            }
        };

        handleScroll(); // Se ejecuta una vez al cargar la página para inicializar la posición del footer

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer id="footer" className={`bg-gray-800 text-white p-4 text-center w-full z-50 ${footerPosition === 'fixed' ? 'fixed bottom-0' : ''}`}>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center mb-2">
                    <a>Contáctanos</a>
                    <p className="text-sm">Teléfono: 302 308 6093</p>
                    <p className="text-sm">Email: example@gmail.com</p>
                </div>
                <div className="flex flex-col items-center mb-2">
                    <a>Ubicación</a>
                    <p className="text-sm mt-2">Centro Comercial San Marcos - Local 912</p>
                    <p className="text-sm">Yolombó, Antioquia</p>
                </div>
                <div className="flex flex-col items-center mb-2">
                    <a >Síguenos en</a>
                    <div className="flex mt-2">
                        {/* <a href="https://api.whatsapp.com/send?phone=573023086093" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <img src="/assets/icons/whatsapp-icon.png" alt="WhatsApp" className="w-8 h-8" />
                        </a> */}
                        <a href="https://www.instagram.com/vision_yolombo" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/instagram-icon.png" alt="Instagram" className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="mt-2 text-xs">&copy; 2024 Óptica Visión Yolombó</p>
        </footer>
    )
}

export default Footer