
export default function FancyLI({ text, onClick }) {

    return (
        <div className="flex flex-row p-1 cursor-pointer fancy-li text-brown" onClick={onClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#513D2A" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C12.4074 6.45115 17.5488 11.5926 24 12C17.5488 12.4074 12.4074 17.5488 12 24C11.5926 17.5488 6.45115 12.4074 0 12C6.45115 11.5926 11.5926 6.45115 12 0Z" fill="black" />
            </svg>

            <p className="pl-1" >{text}</p>
        </div>
    )
}