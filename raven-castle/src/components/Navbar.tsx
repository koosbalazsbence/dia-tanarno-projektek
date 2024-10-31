"use client"

// components
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ThemeSwitch from "./ThemeSwitch"
import Tickets from "./Button"
import LanguageDropdown from "./LanguageDropdown"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-between mx-auto h-24 p-4 font-playfair"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Link
        href="/"
        className="leadingHeader text-5xl dark:text-[#bfa826] hover:text-[#bfa826] transition duration-200 ease-in-out"
      >
        Hollóvár
      </Link>
      <nav className="hidden xl:block">
        <div className="flex justify-center items-center gap-10 p-4">
          <Link
            href="/programs"
            className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out"
          >
            Programok
          </Link>
          <Link
            href="/opening"
            className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out"
          >
            Nyitvatarás
          </Link>
          <Link
            href="/contact"
            className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out"
          >
            Kapcsolatok
          </Link>
          <Link
            href="/pricing"
            className="text-2xl hover:text-[#bfa826] transition duration-200 ease-in-out"
          >
            Árak
          </Link>
          <LanguageDropdown />
          <Tickets />
          <ThemeSwitch />
        </div>
      </nav>
      <motion.button
        onClick={toggleMenu}
        className="xl:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="xl:hidden mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {["Programok", "Nyitvatarás", "Kapcsolatok", "Árak"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
