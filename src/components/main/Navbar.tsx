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
                    <span className='font-bold ml-[50px] hidden md:block text-gray-950'>
                    Óptica Visión Yolombó
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Navbar