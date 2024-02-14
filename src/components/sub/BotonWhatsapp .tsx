'use client'

import React from 'react';

const BotonWhatsapp = () => {

    const handleClick = () => {

        const mensaje = encodeURIComponent('"Hola, ¿cómo están? Me gustaría programar una cita para una revisión de la vista. ¿Podrían ayudarme a encontrar un horario conveniente? ¡Gracias!"');

        const whatsappURL = `https://api.whatsapp.com/send?phone=573023086093&text=${mensaje}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <img
            src="/assets/icons/whatsapp-icon.png"
            alt="WhatsApp"
            className="fixed bottom-5 right-5 w-10 h-10 cursor-pointer"
            onClick={handleClick}
        />
    );
};

export default BotonWhatsapp;
