// components
import Tickets from "./Button"

export default function Navbar() {
    return (
        <header className="flex items-center justify-around p-4 font-playfair">
            <h1 className="text-4xl">Hollóvár</h1>
            <div className="flex justify-center items-center gap-12 p-4">
                <h2 className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out">Programok</h2>
                <h2 className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out">Nyitvatarás</h2>
                <h2 className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out">Kapcsolatok</h2>
                <h2 className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out">Árak</h2>
                <Tickets />
            </div>
        </header>
    )
};
