import { useState, useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import FancyLI from "./atoms/FancyLI";
import ProjectTile from "./atoms/ProjectTile";
var data = require('./data/software')

// Get unique meta_tags
const uniqueMetaTagsSet = new Set();
data.forEach(item => {
    if (item.meta_tags) {
        item.meta_tags.forEach(tag => uniqueMetaTagsSet.add(tag));
    }
});
const uniqueMetaTags = Array.from(uniqueMetaTagsSet);

// Get unique tech_tags
const uniqueTechTagsSet = new Set();
data.forEach(item => {
    if (item.tech_tags) {
        item.tech_tags.forEach(tag => uniqueTechTagsSet.add(tag));
    }
});
const uniqueTechTags = Array.from(uniqueTechTagsSet);

export default function Software(props) {
    const contentRef = useRef(null);
    const suggestRef = useRef(null);
    const projectsRef = useRef(null)

    const tl = gsap.timeline()

    const [userType, setUserType] = useState(null)
    const [projects, setProjects] = useState(data)
    const [deselectedTags, setDeselectedTags] = useState([])
    const [animating, setAnimating] = useState(false)

    // Initial ask
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


        tl.to(
            suggestRef.current,
            { scale: 0, opacity: 0, duration: 1, ease: "circ.in" }
        )
            .to(
                suggestRef.current,
                { opacity: 0, duration: 0.1, display: 'none' }
            )
            .to(
                contentRef.current,
                { opacity: 1, duration: 2, display: 'flex' }
            )

        orderProjects()

    }, [userType])

    // useEffect(() => {

    //     tl.to('.project', {
    //         opacity: 0,
    //         duration: 0,
    //     })
    //         .to('.project', {
    //             stagger: 0.5,
    //             opacity: 1,
    //             duration: 1
    //         }).delay(1)

    // }, [projects]);

    useEffect(() => {
        const oldProjects = [...data];

        const newProjects = oldProjects.filter(proj => {
            return !proj.meta_tags.some(tag => deselectedTags.includes(tag)) &&
                !proj.tech_tags.some(tag => deselectedTags.includes(tag));
        });

        const oldNames = projects.map((proj) => {
            return proj.name
        })

        const newNames = newProjects.map((proj) => {
            return proj.name
        })

        const areEqual = JSON.stringify(oldNames.sort()) === JSON.stringify(newNames.sort());

        if (areEqual) {
            return;
        }
        handleProjectAnimation(newProjects)

    }, [deselectedTags])

    const handleProjectAnimation = (newProjects) => {
        if (animating) {
            return
        } else {
            setAnimating(true)
        }

        tl.to('.project', {
            opacity: 0,
            duration: 0.2,
            stagger: 0.2,
            onComplete: (() => { setProjects(newProjects); })
            // scale: 0
        })
            .to('.project', {
                stagger: 0.2,
                opacity: 1,
                duration: 0.5,
                onComplete: (() => { setAnimating(false); })
            })
    }

    const handleFilterCategory = (tag) => {
        const oldCategories = [...deselectedTags];
        const found = oldCategories.includes(tag)


        var newCategories;
        if (found) {
            newCategories = oldCategories.filter(category => category !== tag)
            setDeselectedTags(newCategories)
        } else {
            newCategories = [...oldCategories, tag]
            setDeselectedTags(newCategories)
        }

        return
    }

    const orderProjects = () => {
        if (!userType) {
            return
        }

        const oldProjects = [...projects];

        const newProjects = oldProjects.sort((obj1, obj2) => {
            return obj2[`${userType}_score`] - obj1[`${userType}_score`]
        })


        setProjects(newProjects)
        return
    }

    return (
        <div className="flex max-h-screen bg-white h-screen overflow-hidden">
            <div className="hidden flex-row w-screen h-screen" ref={contentRef}>

                <div className="flex-col mx-6 w-4/5">
                    {/* Header */}
                    <h1 className="text-d-green text-[100px] tracking-[-0.25rem]" id='software-bottom-border'>software</h1>

                    {/* Content */}
                    <div className="overflow-y-scroll">
                        <ul ref={projectsRef}>
                            {projects.map((proj, idx) => {
                                return <div className="project" key={idx}>
                                    <ProjectTile info={proj} />
                                </div>

                            })}
                        </ul>
                    </div>
                </div>

                {/* Side navigation */}
                <div className="flex flex-col h-screen w-1/5 justify-around relative" id='software-right-nav-border'>

                    {/* Navigation */}
                    <div className="h-4/5 flex flex-col justify-center text-center px-10">
                        <div>
                            {uniqueMetaTags.map((tag, idx) => {
                                return <h4 key={idx} className={`cursor-pointer nav-tag ${deselectedTags.includes(tag) ? 'nav-tag-deselected line-through' : ''}`}
                                    onClick={() => handleFilterCategory(tag)}>{tag}</h4>
                            })}
                        </div>
                        <div>
                            {uniqueTechTags.map((tag, idx) => {
                                return <h4 key={idx} className={`cursor-pointer nav-tag ${deselectedTags.includes(tag) ? 'nav-tag-deselected line-through' : ''}`}
                                    onClick={() => handleFilterCategory(tag)}>{tag}</h4>
                            })}
                        </div>
                    </div>

                    {/* Deco */}
                    <div className="h-1/5 flex flex-row justify-end pr-4 content-end items-end pb-4">
                        <svg width="135" height="135" viewBox="0 0 135 135" fill="#889886" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H38.6221V38.682H0V0ZM48.1889 0H86.8111V38.682H48.1889V0ZM115.689 0C105.041 0 96.3779 8.66294 96.3779 19.3111V19.3712C96.3779 30.0193 105.041 38.682 115.689 38.682C126.337 38.682 135 30.0193 135 19.3712V19.3111C135 8.66294 126.337 0 115.689 0ZM19.3111 48.1591C8.66294 48.1591 0 56.8221 0 67.4702V67.5303C0 78.1784 8.66294 86.8411 19.3111 86.8411C29.9592 86.8411 38.6221 78.1784 38.6221 67.5303V67.4702C38.6221 56.8221 29.9592 48.1591 19.3111 48.1591ZM48.1889 48.1591H86.8111V86.8409H48.1889V48.1591ZM96.3779 48.1591H135V86.8409H96.3779V48.1591ZM0 96.3183H38.6221V135H0V96.3183ZM67.5 96.3183C56.8519 96.3183 48.1889 104.981 48.1889 115.629V115.689C48.1889 126.337 56.8519 135 67.5 135C78.1481 135 86.8111 126.337 86.8111 115.689V115.629C86.8111 104.981 78.1481 96.3183 67.5 96.3183ZM96.3779 96.3183H135V135H96.3779V96.3183Z" fill="#889886" />
                        </svg>

                    </div>


                </div>
            </div>

            <div className="flex flex-col w-screen h-screen justify-center grow items-center" ref={suggestRef}>
                <div className="mb-2 text-brown">
                    <h3>who <br />are <br />you?</h3>
                </div>
                <ul>
                    <FancyLI text={'dev'} id={0} onClick={() => setUserType('dev')} />
                    <FancyLI text={'recruiter'} id={1} onClick={() => setUserType('recruiter')} />
                    <FancyLI text={'designer'} id={2} onClick={() => setUserType('designer')} />
                    <FancyLI text={'none of these'} id={3} onClick={() => setUserType('none')} />
                </ul>
            </div>
        </div>
    )
}