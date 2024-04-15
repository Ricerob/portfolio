import { Link } from "react-router-dom";

export default function ProjectTile({ info }) {


    return (
        <div className="flex flex-row min-h-[10rem] m-5 software-project relative my-8 py-4" >
            {/* Star SVG */}
            <div className="flex flex-col w-min px-2 py-2">
                <svg width="35" height="35" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 51C27.1631 51 28.5259 49.7771 28.7568 48.0462C31.0434 32.6308 33.1453 30.4846 47.9743 28.8001C49.6834 28.5924 51 27.1617 51 25.5001C51 23.8153 49.7066 22.4308 47.9973 22.1769C33.2608 20.1231 31.4362 18.3231 28.7568 2.9309C28.4565 1.22318 27.1399 0 25.5 0C23.8139 0 22.4741 1.22318 22.197 2.95385C19.9566 18.3463 17.8547 20.4924 3.04888 22.1769C1.29344 22.4079 0 23.7924 0 25.5001C0 27.1617 1.24726 28.5462 3.0027 28.8001C17.7621 30.9001 19.5637 32.6769 22.197 48.0693C22.5435 49.8 23.8831 51 25.5 51Z" fill="#889886" />
                </svg>
            </div>
            {/* Info Col */}
            <div className="flex flex-col grow">
                <div>
                    <h4 className="font-stix tracking-[-0.1rem]">{info.name}</h4>
                </div>
                <div className="flex flex-row grow">
                    <p className="font-helvetica">{info.description}</p>
                </div>
                <div className="">
                    <p className="text-d-green">{`${info?.tech_tags.concat(info?.meta_tags).join(", ")}`}</p>
                </div>
            </div>
            {/* Image Col */}
            <div className="hidden md:flex flex-col max-w-[35%] rounded px-5">
                {info.images.length > 0 && <img className="border-[1px] rounded border-d-green max-h-[200px]" src={info.images[0]}/>}
            </div>
            {/* Link Col */}
            <div className={`flex flex-col p-3 relative`} >
                <Link target="_blank" rel="noopener noreferrer" to={info?.link} className="bg-l-brown w-5 flex flex-col grow rounded-full cursor-pointer justify-between items-center" id='project-link-box'>
                    <div className="p-3">
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.2017 4.07141L1.64709 0.268745C1.39056 0.0930086 1.1321 0 0.917263 0C0.501922 0 0.244995 0.333341 0.244995 0.891312V9.10998C0.244995 9.66731 0.501598 10 0.915968 10C1.13113 10 1.38546 9.90691 1.64255 9.73069L7.19975 5.9281C7.55714 5.68316 7.75505 5.35354 7.75505 4.99956C7.75513 4.64581 7.55948 4.31628 7.2017 4.07141Z" fill="#FFFFF4" />
                        </svg>

                    </div>
                    <div className="p-3">
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.2017 4.07141L1.64709 0.268745C1.39056 0.0930086 1.1321 0 0.917263 0C0.501922 0 0.244995 0.333341 0.244995 0.891312V9.10998C0.244995 9.66731 0.501598 10 0.915968 10C1.13113 10 1.38546 9.90691 1.64255 9.73069L7.19975 5.9281C7.55714 5.68316 7.75505 5.35354 7.75505 4.99956C7.75513 4.64581 7.55948 4.31628 7.2017 4.07141Z" fill="#FFFFF4" />
                        </svg>

                    </div>
                </Link>
                <div className="hidden md:block software-project-link-border absolute bottom-0 right-0 h-full bg-green-900 transform"></div>
            </div>
        </div>
    )
}