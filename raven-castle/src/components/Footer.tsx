import ScrollToTopButton from './ScrollToTopBtn';
import Link from 'next/link'
import { Twitter, Linkedin, Github, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
    const footerDate = new Date();
    return (
        <footer className="bottom-0 left-0 right-0 text-center py-8 font-monospace">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-8">
                    <div className="mb-4">
                        <Link href="/" className="flex items-center">
                            <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold text-xl mr-1">
                                H
                            </div>
                            <span className="text-xl font-semibold">ollóvár</span>
                        </Link>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/events" className="hover:underline">Programok</Link>
                        <Link href="/license" className="hover:underline">Licensz</Link>
                        <Link href="/sponsors" className="hover:underline">Szponzorok</Link>
                        <Link href="/pricing" className="hover:underline">Árak</Link>
                        <Link href="/privacy" className="hover:underline">Privacy</Link>
                        <Link href="/terms" className="hover:underline">Terms</Link>
                        <Link href="/cookie" className="hover:underline">Cookie-k</Link>
                    </nav>
                </div>
                <hr className='border-dashed py-4 w-3/4 mx-auto' />
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex items-center gap-4">
                        <p className="text-sm">&copy; {footerDate.getFullYear()} - Minden jog fenntrartva!</p>
                        <ScrollToTopButton />
                    </div>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <Link href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" aria-label="Twitter"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></Link>
                        <Link href="#" aria-label="GitHub"><Github className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
};