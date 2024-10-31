// components
import HeroBackgournd from "@/components/HeroBackground"
import Sponsors from "@/components/Sponsors"
import Quote from "@/components/Quote"
import BookingArticle from "@/components/BookingArticle"

export default function Home() {
  return (
    <>
      <HeroBackgournd />
      <div>
        <Sponsors />
      </div>
      <div>
        <Quote />
      </div>
      <BookingArticle />
    </>
  )
}
