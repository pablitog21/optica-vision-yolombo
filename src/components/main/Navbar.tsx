'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);

            // Cierra el menú móvil si está abierto al desplazarse
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        // Aquí puedes realizar cualquier acción adicional al hacer clic en una opción
        // No cierres el menú móvil
    };

    return (
        <div className={`w-full h-[55px] fixed top-0 shadow-lg shadow-[#03001417]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10 transition-all duration-300 ${visible ? '' : '-translate-y-full'}`}>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto'>
                <a href="#about" className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/assets/images/name-vision-y.png"
                        alt="logo"
                        width={120}
                        height={80}
                        className='cursor-pointer hover:animate-slowspin'
                    />
                </a>
                <div className='md:hidden'>
                    <button onClick={toggleMobileMenu} className='text-black focus:outline-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className='hidden md:flex items-center space-x-4 text-black'>
                    <a href="/" className={`text-black hover:text-gray-400 font-semibold transition duration-300 ${selectedOption === 'about' ? 'text-blue-900' : ''}`} onClick={() => handleOptionClick('about')}>Inicio</a>
                    <a href="/services" className={`text-black hover:text-gray-400 font-semibold transition duration-300 ${selectedOption === 'services' ? 'text-blue-900' : ''}`} onClick={() => handleOptionClick('services')}>Servicios</a>
                    <a href="/contact" className={`text-black hover:text-gray-400 font-semibold transition duration-300 ${selectedOption === 'contact' ? 'text-blue-900' : ''}`} onClick={() => handleOptionClick('contact')}>Contact</a>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[55px] right-0 bg-[#03001417] text-black text-center py-4 mt-2 rounded-md w-40">
                    <a href="/" className={`block py-2 hover:bg-gray-800 ${selectedOption === 'about' ? 'bg-blue-900' : ''}`} onClick={() => handleOptionClick('about')}>Inicio</a>
                    <a href="/services" className={`block py-2 hover:bg-gray-800 ${selectedOption === 'services' ? 'bg-blue-900' : ''}`} onClick={() => handleOptionClick('services')}>Servicios</a>
                    <a href="/contact" className={`block py-2 hover:bg-gray-800 ${selectedOption === 'contact' ? 'bg-blue-900' : ''}`} onClick={() => handleOptionClick('contact')}>Contact</a>
                </div>
            )}
        </div>
    )
}

export default Navbar
