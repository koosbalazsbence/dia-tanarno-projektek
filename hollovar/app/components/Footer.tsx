import { spaceMono } from "@/app/ui/fonts"
import Link from "next/link"
import Image from "next/image"

type CustomLinkProps = {
  href: string
  children: React.ReactNode
}

type CustomLetterProps = {
  href: string
  children: React.ReactNode
}

export default function Footer() {
  const footerDate = new Date()

  const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => (
    <Link href={href} className="hover:underline">
      {children}
    </Link>
  )

  const CustomLetter: React.FC<CustomLetterProps> = ({ href, children }) => {
    const letter = children
    return (
      <Link href={href} className="flex items-center">
        <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold text-xl mr-1">
          {letter}
        </div>
        <span className="text-xl font-semibold">ollóvár</span>
      </Link>
    )
  }

  return (
    <footer
      className={`${spaceMono.className} w-full bottom-0 left-0 right-0 text-center py-8`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            <CustomLetter href="/">H</CustomLetter>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <CustomLink href="/events">Programok</CustomLink>
            <CustomLink href="/license">Licensz</CustomLink>
            <CustomLink href="/sponsors">Szponzorok</CustomLink>
            <CustomLink href="/pricing">Árak</CustomLink>
            <CustomLink href="/cookie">Cookie-k</CustomLink>
          </nav>
        </div>
        <hr className="border-dashed py-4 w-3/4 mx-auto" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-3">
              <Image src="/copy.svg" alt="logo" width={18} height={18}></Image>{" "}
              {footerDate.getFullYear()} - Minden jog fenntrartva!
            </p>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link
              href="https://www.facebook.com/koos.balazs.bence/"
              target="_blank"
            >
              <Image src="/meta.svg" alt="logo" width={24} height={24}></Image>
            </Link>
            <Link
              href="https://www.instagram.com/koosbalazsbence/"
              target="_blank"
            >
              <Image
                src="/instagram.svg"
                alt="logo"
                width={24}
                height={24}
              ></Image>
            </Link>
            <Link href="https://x.com/koosbalazsbence/" target="_blank">
              <Image src="/x.svg" alt="logo" width={24} height={24}></Image>
            </Link>
            <Link
              href="https://www.linkedin.com/in/koosbalazsbence/"
              target="_blank"
            >
              <Image
                src="/linkedIn.svg"
                alt="logo"
                width={24}
                height={24}
              ></Image>
            </Link>
            <Link href="https://github.com/koosbalazsbence/" target="_blank">
              <Image
                src="/github.svg"
                alt="logo"
                width={24}
                height={24}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
