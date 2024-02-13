'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

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
                <div className='hidden md:flex items-center space-x-4 text-black'>
                    <a href="#about-me" className='text-black hover:text-gray-400 font-semibold transition duration-300'>About</a>
                    <a href="#services" className='text-black hover:text-gray-400 font-semibold transition duration-300'>Services</a>
                    <a href="#contact" className='text-black hover:text-gray-400 font-semibold transition duration-300'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar