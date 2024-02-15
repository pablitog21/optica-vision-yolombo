'use client'

import { useEffect, useRef, useState } from 'react';
import { adPromo } from '@/constants';

const Modal = () => {
    const [showModal, setShowModal] = useState(true);
    const promo = adPromo[0]; // Suponiendo que solo tienes un elemento en el array
    const modalRef = useRef<HTMLDivElement>(null);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        if (showModal) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [showModal]);

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                    <div className="relative" ref={modalRef} style={{ marginTop: '10vh' }}>
                        <div className="absolute top-0 right-0 flex items-center justify-center" style={{ marginRight: '0.5rem', marginTop: '0.5rem' }}>
                            <button className="w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full bg-gray-300 flex items-center justify-center" onClick={handleCloseModal}>
                                <span className="text-lg">X</span>
                            </button>
                        </div>
                        <img className="object-contain w-auto h-auto max-h-[87vh] max-w-[80vw]" src={promo.src} alt="Promo" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;


