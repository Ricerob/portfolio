import React, { useEffect, useRef } from "react";
import gsap from 'gsap'


export default function Home(props) {
    const textRef = useRef(null);
    const introRef = useRef(null);
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline()

        tl.fromTo(
            textRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.in" }
        )
            .to(textRef.current, { duration: 0.25, fontFamily: "Satoshi", scale: 1.1, ease: "sine.inOut" })
            .to(textRef.current, { duration: 0.25, fontFamily: "Whisper", scale: 1.2, ease: "sine.inOut" })
            .to(textRef.current, { duration: 0.25, fontFamily: "Archivo", scale: 1.3, ease: "sine.inOut" })
            .to(textRef.current, { duration: 0.25, fontFamily: "Rubik Bubbles", scale: 1.2, ease: "sine.inOut" })
            .to(textRef.current, { duration: 0.25, fontFamily: "DM Serif Display", scale: 1.1, ease: "sine.inOut" })
            .to(textRef.current, { duration: 0.5, fontFamily: "CabinetGrotesk", scale: 1, ease: "sine.inOut" }) // Make the display font once imported
            .to(textRef.current, { duration: 1 })
            .to(
                textRef.current,
                { scale: 0, opacity: 0, duration: 1, ease: "elastic.out" },
                 // Wait for 1 second before starting the next animation
            )
            .to(
                introRef.current,
                { opacity: 0, duration: 0.1, display: 'none' }, // Fade out and hide the intro
                 // Delay after the previous animation
            )
            .fromTo(
                desktopRef.current,
                { opacity: 0, display: 'flex' },
                { opacity: 1, duration: 0.1 } // Fade in the main content div
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="flex max-h-screen bg-white h-screen">

            <div ref={introRef} className="absolute top-1/2 left-1/2 max-h-screen">
                <div ref={textRef} className="text-4xl text-d-green">
                    Robby Rice
                </div>
            </div>

            <div ref={desktopRef} className="hidden">
                <div className="flex flex-row mx-10 mt-2 mb-4">
                    <div className="">
                        <h1 id='intro-name'>Robby Rice</h1>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div ref={mobileRef}>

            </div>

        </div>
    );
}