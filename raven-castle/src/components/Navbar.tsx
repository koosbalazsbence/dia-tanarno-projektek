import Link from "next/link"

// components
import ThemeSwitch from "./ThemeSwitch"
import Tickets from "./Button"
import LanguageDropdown from "./LanguageDropdown"

export default function Navbar() {
    return (
        <header className="w-[95%] flex items-center justify-between mx-auto h-24 p-4 font-playfair">
            <Link href="/" className="leadingHeader text-5xl dark:text-[#bfa826] hover:text-[#bfa826] transition duration-200 ease-in-out">Hollóvár</Link>
            <div className="flex justifFy-center items-center gap-10 p-4">
                <Link href="/events" className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out">Programok</Link>
                <Link href="/opening" className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out">Nyitvatarás</Link>
                <Link href="/contact" className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out">Kapcsolatok</Link>
                <Link href="/pricing" className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out">Árak</Link>
                <LanguageDropdown />
                <Tickets />
                <ThemeSwitch />
            </div>
        </header>
    )
};
