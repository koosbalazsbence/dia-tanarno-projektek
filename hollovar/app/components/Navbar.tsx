import { imperialScript } from "@/app/ui/fonts"
import { playfairDisplay } from "@/app/ui/fonts"
import Link from "next/link"

type CustomLinkProps = {
  href: string
  children: React.ReactNode
}

export default function Navbar() {
  const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => (
    <Link
      href={href}
      className="text-2xl transition duration-300 ease-in-out hover:text-colorGold"
    >
      {children}
    </Link>
  )

  return (
    <header
      className={`${playfairDisplay.className} flex justify-between items-center mx-auto h-24 p-4`}
    >
      <Link href="/" className={`${imperialScript.className} text-5xl`}>
        Hollóvár
      </Link>
      <div className="hidden justify-center items-center gap-10 p-4 lg:flex">
        <CustomLink href="/programs">Programok</CustomLink>
        <CustomLink href="/opening">Nyitvatartás</CustomLink>
        <CustomLink href="/contact">Kapcsolatok</CustomLink>
        <CustomLink href="/pricing">Árak</CustomLink>
      </div>
    </header>
  )
}
