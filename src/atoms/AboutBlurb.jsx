

export default function AboutBlurb({title, subtitle, dates, description}) {

    return (
        <div className="bg-l-green w-100 h-min flex flex-row my-3 p-2 justify-between">
            <div className="flex flex-col max-w-1/2 overflow-y-auto p-1 justify-start">
                <h2 className="text-d-green font-baskerville tracking-[-0.2rem]">{title}</h2>
                <h5 className="text-white">{subtitle}</h5>
                <p className="text-white font-stix m-0 pb-6">{dates}</p>
            </div>
            <div className="flex flex-col justify-start text-white w-2/5">
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}