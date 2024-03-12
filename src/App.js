import React, { useEffect, useRef } from "react";
import gsap from 'gsap'

function App() {

  const textRef = useRef(null);

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
      .to(textRef.current, { duration: 0.5, fontFamily: "CabinetGrotesk", scale: 1, ease: "sine.inOut" })
      .to(textRef.current, {duration: 1})
      .to(
        textRef.current,
        { scale: 0, opacity: 0, duration: 3, ease: "elastic.out" },
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex flex-row mx-10 content-center min-h-screen justify-center align-center bg-white">
      {/* <p className="font-satoshi text-lg sat">Robby Rice</p>
      <p className='font-whisper text-lg '>Robby Rice</p>
      <p className='font-archivo text-lg '>Robby Rice</p>
      <p className="font-bubbles text-lg">Robby Rice</p>
      <p className="font-dmserif text-lg">Robby Rice</p>
      <p className="font-cabinet text-lg">Robby Rice</p> */}

      <div className="flex justify-center items-center h-screen">
        <div ref={textRef} className="text-4xl text-d-green">
          Robby Rice
        </div>
      </div>

    </div>
  );
}

export default App;
