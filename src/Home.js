import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap'
import { Link } from "react-router-dom";


export default function Home(props) {
    const textRef = useRef(null);
    const introRef = useRef(null);
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);

    const animated = sessionStorage.getItem('rr-animated')


    useEffect(() => {
        const smWidth = window.screen.availWidth < 768;
        const tl = gsap.timeline()

        if (!smWidth) {
            tl.fromTo(
                textRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.75, ease: "elastic.in" }
            )
                .to(textRef.current, { duration: 0.3, fontFamily: "Satoshi", scale: 1.1, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.3, fontFamily: "Whisper", scale: 1.2, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.3, fontFamily: "Archivo", scale: 1.4, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.3, fontFamily: "Rubik Bubbles", scale: 1.2, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.3, fontFamily: "DM Serif Display", scale: 1.1, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.5, fontFamily: "Libre Baskerville", scale: 1, ease: "sine.inOut" }) // Make the display font once imported
                .to(textRef.current, { duration: 1 })
                .to(
                    textRef.current,
                    { opacity: 0, duration: 1 },
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
                    { opacity: 1, duration: 4, onComplete: (() => sessionStorage.setItem('rr-animated', true)) }
                );
        }
        else {
            tl.fromTo(
                textRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.75, ease: "elastic.in" }
            )
                .to(textRef.current, { duration: 0.3, fontFamily: "Satoshi", scale: 1.1, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.3, fontFamily: "Whisper", scale: 1.2, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.3, fontFamily: "Archivo", scale: 1.4, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.3, fontFamily: "Rubik Bubbles", scale: 1.2, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.3, fontFamily: "DM Serif Display", scale: 1.1, ease: "sine.inOut" })
                .to(textRef.current, { duration: 0.5, fontFamily: "Libre Baskerville", scale: 1, ease: "sine.inOut" }) // Make the display font once imported
                .to(textRef.current, { duration: 1 })
                .to(
                    textRef.current,
                    { opacity: 0, duration: 1 },
                    // Wait for 1 second before starting the next animation
                )
                .to(
                    introRef.current,
                    { opacity: 0, duration: 0.1, display: 'none' }, // Fade out and hide the intro
                    // Delay after the previous animation
                )
                .fromTo(
                    mobileRef.current,
                    { opacity: 0, display: 'flex' },
                    { opacity: 1, duration: 4, onComplete: (() => sessionStorage.setItem('rr-animated', true)) }
                );
        }


        return () => {
            tl.kill();
        };
    }, []);



    return (
        <div className="flex max-h-screen bg-white h-screen overflow-hidden">

            <div ref={introRef} className="absolute min-h-screen w-screen">
                <div ref={textRef} className="text-4xl text-d-green flex justify-center min-h-screen items-center grow">
                    Robby Rice
                </div>
            </div>

            <div ref={desktopRef} className="hidden">
                <div className="flex flex-col mx-10 mt-2">

                    {/* Header row */}
                    <div className="flex relative flex-row w-screen h-min" id='landing-name-bottom-border'>
                        <div className="w-3/4 flex justify-between">
                            <h1 id='intro-name'>Robby Rice</h1>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" id='landing-star-svg'>
                                <path d="M25.5 51C27.1631 51 28.5259 49.7771 28.7568 48.0462C31.0434 32.6308 33.1453 30.4846 47.9743 28.8001C49.6834 28.5924 51 27.1617 51 25.5001C51 23.8153 49.7066 22.4308 47.9973 22.1769C33.2608 20.1231 31.4362 18.3231 28.7568 2.9309C28.4565 1.22318 27.1399 0 25.5 0C23.8139 0 22.4741 1.22318 22.197 2.95385C19.9566 18.3463 17.8547 20.4924 3.04888 22.1769C1.29344 22.4079 0 23.7924 0 25.5001C0 27.1617 1.24726 28.5462 3.0027 28.8001C17.7621 30.9001 19.5637 32.6769 22.197 48.0693C22.5435 49.8 23.8831 51 25.5 51Z" fill="#889886" />
                            </svg>

                        </div>
                        <div className="w-1/4">
                            {/* Empty space */}
                        </div>
                    </div>

                    {/* Photo Row */}
                    <div className="flex relative flex-row w-screen h-3/5 ">
                        <div className="w-3/4 overflow-hidden h-auto " id='image-row-right-border'>
                            <img id='monstera-img' src='/monster.jpg' alt='monstera black and white' />
                            <img id='water-img' src='/wata.JPG' alt='water reflection' />
                            <img id='butterfly-img' src='/bfly.jpg' alt='butterfly black and white' />
                            <div className="absolute bottom-0 left-0 flex justify-between w-full">
                                <h3 className="font-stix text-brown" id='curated'>curated works</h3>
                                <svg id='circle-svg' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_40_61)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M43.24 23C43.24 34.1782 34.1782 43.24 23 43.24C11.8217 43.24 2.76 34.1782 2.76 23C2.76 11.8217 11.8217 2.76 23 2.76C34.1782 2.76 43.24 11.8217 43.24 23ZM46 23C46 35.7024 35.7024 46 23 46C10.2974 46 0 35.7024 0 23C0 10.2974 10.2974 0 23 0C35.7024 0 46 10.2974 46 23ZM23 25.53C24.3973 25.53 25.53 24.3973 25.53 23C25.53 21.6027 24.3973 20.47 23 20.47C21.6027 20.47 20.47 21.6027 20.47 23C20.47 24.3973 21.6027 25.53 23 25.53Z" fill="#889886" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_40_61">
                                            <rect width="46" height="46" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-1/4 h-auto" id="image-row-empty-border">
                            <img className="hidden xl:flex" id='terrace-img' src='thru.png' alt='black and white of an arch' />
                        </div>
                    </div>

                    {/* Action Row */}
                    <div className="w-screen" id='action-row-top-border'>
                        <div className="mt-5 flex flex-row gap-10">
                            <h4 className="intro-link"><Link to='/software'>software</Link></h4>
                            <h4 className="intro-link"><Link to='/me'>me</Link></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={mobileRef} className="hidden">
                <div className="flex flex-col mt-2">
                    {/* Header row */}
                    <div className="w-screen h-11 flex flex-row items-center mt-3 mx-4">
                        <h1 id='intro-name-mobile'>Robby Rice</h1>
                    </div>
                    {/* image row */}
                    <div className="flex flex-row justify-end relative mt-20 overflow-hidden w-screen mx-4">
                        <img id='monstera-img-mobile' src='/monster.jpg' alt='monstera black and white' />
                    </div>

                    {/* svg row */}
                    <div className="flex w-screen justify-end right-0 m-6 pr-10">
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" id='landing-star-svg-mobile'>
                            <path d="M25.5 51C27.1631 51 28.5259 49.7771 28.7568 48.0462C31.0434 32.6308 33.1453 30.4846 47.9743 28.8001C49.6834 28.5924 51 27.1617 51 25.5001C51 23.8153 49.7066 22.4308 47.9973 22.1769C33.2608 20.1231 31.4362 18.3231 28.7568 2.9309C28.4565 1.22318 27.1399 0 25.5 0C23.8139 0 22.4741 1.22318 22.197 2.95385C19.9566 18.3463 17.8547 20.4924 3.04888 22.1769C1.29344 22.4079 0 23.7924 0 25.5001C0 27.1617 1.24726 28.5462 3.0027 28.8001C17.7621 30.9001 19.5637 32.6769 22.197 48.0693C22.5435 49.8 23.8831 51 25.5 51Z" fill="#889886" />
                        </svg>
                    </div>

                    {/* image row */}
                    <div className="flex flex-row justify-begin relative mt-10 overflow-hidden w-screen mr-4">
                        <img id='water-img-mobile' src='/wata.JPG' alt='water reflection' className="grey" />
                    </div>

                    {/* links row */}
                    <div className="flex flex-row">
                        <div className="mt-5 flex flex-row gap-10 ml-3">
                            <h4 className="intro-link"><Link to='/software'>software</Link></h4>
                            <h4 className="intro-link"><Link to='/me'>me</Link></h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}