import gsap from 'gsap'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function AboutBlurb({last, transition, title, subtitle, dates, description, show, next, onClick }) {

    const containerRef = useRef(null)

    
    if (!show && !next) {
        return <></>
    }
    return (
        <div ref={containerRef} className='flex flex-col'>
            <div className={`bg-l-green w-100 h-min flex flex-row my-3 p-2 justify-between ${next ? 'bg-gradient-to-t from-white from-90%' : ''}`}>
                {show && <div className="flex flex-col max-w-1/2 overflow-y-auto p-1 justify-start">
                    <h2 className="text-d-green font-baskerville tracking-[-0.2rem]">{title}</h2>
                    <h5 className="text-white">{subtitle}</h5>
                    <p className="text-white font-stix m-0 pb-6">{dates}</p>
                </div>}
                <div className="flex flex-col justify-start text-white w-2/5">
                    <p className="text-sm">{description}</p>
                </div>
            </div>
            {show && <div className='w-100 flex-row justify-center flex' onClick={onClick}>
                <p className={`${last ? 'bobbing-animation': ''}`} id={'about-transition-word'}>{transition}</p>
            </div>}
        </div>

    )
}