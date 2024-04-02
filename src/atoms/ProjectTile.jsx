

export default function ProjectTile({ info }) {

    return (
        <div className="flex flex-row min-h-[10rem] border-2 border-red-500 m-3">
            {/* Star SVG */}
            <div className="flex flex-col w-min px-2 py-2">
                <svg width="35" height="35" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 51C27.1631 51 28.5259 49.7771 28.7568 48.0462C31.0434 32.6308 33.1453 30.4846 47.9743 28.8001C49.6834 28.5924 51 27.1617 51 25.5001C51 23.8153 49.7066 22.4308 47.9973 22.1769C33.2608 20.1231 31.4362 18.3231 28.7568 2.9309C28.4565 1.22318 27.1399 0 25.5 0C23.8139 0 22.4741 1.22318 22.197 2.95385C19.9566 18.3463 17.8547 20.4924 3.04888 22.1769C1.29344 22.4079 0 23.7924 0 25.5001C0 27.1617 1.24726 28.5462 3.0027 28.8001C17.7621 30.9001 19.5637 32.6769 22.197 48.0693C22.5435 49.8 23.8831 51 25.5 51Z" fill="#889886" />
                </svg>
            </div>
            {/* Info Col */}
            <div className="flex flex-col grow">
                <div>
                    <h3>{info.name}</h3>
                </div>
                <div className="flex flex-row grow">
                    <p>{info.description}</p>
                </div>
                <div>

                </div>
            </div>
            {/* Image Col */}
            <div className="flex flex-col">

            </div>
            {/* Link Col */}
            <div className="flex flex-col">

            </div>
        </div>
    )
}