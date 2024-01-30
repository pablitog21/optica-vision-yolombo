import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#03001417]/50  bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#about" className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/assets/images/name-vision-y.png"
                        alt="logo"
                        width={150}
                        height={100}
                        className='cursor-pointer hover:animate-slowspin'
                    />
                </a>
                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-80'>
                    <div className='flex items-center justify-between w-full h-auto bg-[#3880a7] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-50'>
                        <a href="#about-me" className='cursor-pointer transition duration-300 hover:text-white hover:bg-blue-500 px-2 py-1 rounded-full'>Inicio</a>
                        <a href="#servicios" className='cursor-pointer transition duration-300 hover:text-white hover:bg-blue-500 px-2 py-1 rounded-full'>Servicios</a>
                        <a href="#promociones" className='cursor-pointer transition duration-300 hover:text-white hover:bg-blue-500 px-2 py-1 rounded-full'>Promociones</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar