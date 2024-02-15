'use client'

import Head from 'next/head';
import { useEffect, useRef } from 'react';

const VideoPage = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.src = 'https://www.youtube.com/embed/Bznxx12Ptl0?autoplay=1&loop=1&playlist=Bznxx12Ptl0&mute=1';
        }
    }, []);

    const handleLoad = () => {
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Head>
                <title>Reproducción Automática de Video</title>
            </Head>
            <div className="w-3/4">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                        ref={iframeRef}
                        className="absolute top-0 left-0 w-full h-full" // Cambiar el tamaño del video aquí
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={handleLoad}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoPage;