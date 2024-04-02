import { useState, useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import FancyLI from "./atoms/FancyLI";

export default function Software(props) {
    const contentRef = useRef(null);
    const suggestRef = useRef(null);

    const tl = gsap.timeline()

    const [filteredCategories, setFilteredCatagories] = useState([])
    const [userType, setUserType] = useState(null)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        tl.fromTo(
            suggestRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "circ.out" }
        )
    }, [])

    // Listening to changes on userType state
    useEffect(() => {
        if (!userType) {
            return;
        }

        console.log(userType)

        tl.to(
            suggestRef.current,
            {scale: 0, opacity: 0, duration: 1, ease: "circ.in"}
        )
        .to(
            suggestRef.current,
            {opacity: 0, duration: 0.1, display: 'none'}
        )
        .to(
            contentRef.current,
            {opacity: 1, duration: 2, display: 'flex'}
        )

    }, [userType])

    const handleFilterCategory = (category) => {
        const oldCategories = [...filteredCategories];
        const found = oldCategories.find(category)

        if (found) {
            const newCategories = oldCategories.filter(c => c !== category)
            setFilteredCatagories(newCategories)
        } else {
            const newCategories = [...oldCategories, category]
            setFilteredCatagories(newCategories)
        }
    }

    return (
        <div className="flex max-h-screen bg-white h-screen overflow-hidden">
            <div className="hidden flex-row w-screen h-screen" ref={contentRef}>

                <div className="flex-col mx-6 w-4/5">
                    {/* Header */}
                    <h1 className="text-d-green text-[100px] tracking-[-0.25rem]" id='software-bottom-border'>software</h1>

                    {/* Content */}
                    <div>

                    </div>
                </div>

                {/* Side navigation */}
                <div className="flex flex-col h-screen w-1/5 justify-around relative" id='software-right-nav-border'>

                    {/* Navigation */}
                    <div className="h-4/5 flex flex-col justify-center text-center px-10">
                        <h4>full stack</h4>
                        <h4>professional</h4>
                    </div>

                    {/* Deco */}
                    <div className="h-1/5">

                    </div>


                </div>
            </div>

            <div className="flex flex-col w-screen h-screen justify-center grow items-center" ref={suggestRef}>
                <div className="mb-2 text-brown">
                    <h3>who <br/>are <br/>you?</h3>
                </div>
                <ul>
                    <FancyLI text={'dev'} id={0} onClick={() => setUserType('dev')}/>
                    <FancyLI text={'recruiter'} id={1} onClick={() => setUserType('recruiter')}/>
                    <FancyLI text={'designer'} id={2} onClick={() => setUserType('designer')}/>
                    <FancyLI text={'none of these'} id={3} onClick={() => setUserType('none')}/>
                </ul>
            </div>
        </div>
    )
}