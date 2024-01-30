import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full z-50">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-center mb-4">
                    <a href="/contactanos">Contáctanos</a>
                    <p>Telefono 302 308 6093</p>
                    <p>example@gmail.com</p>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <a href="/siguenos">Síguenos en</a>
                    <div className="flex mt-4">
                        <a href="https://api.whatsapp.com/send?phone=573023086093" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <img src="/assets/icons/whatsapp-icon.png" alt="WhatsApp" className="w-8 h-8" />
                        </a>
                        <a href="https://www.instagram.com/vision_yolombo" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/instagram-icon.png" alt="Instagram" className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="mt-4">&copy; 2024 Óptica Visión Yolombó</p>
        </footer>
    )
}

export default Footer