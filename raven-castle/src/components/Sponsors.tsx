"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// const cards = [
//     { id: 1, header: "⌛ S.A.N.D.", text: "Seekers of Ancient Nobilities & Discoveries" },
//     { id: 2, header: "🌟 G.L.O.W.", text: "Guardians of Lost Origins & Wonders" },
//     { id: 3, header: "🏴‍☠️ T.R.E.A.S.U.R.E.", text: "Trailblazers of Realms, Explorations, and Artifacts Secured Under Royal Edicts" },
//     { id: 4, header: "👑 C.R.O.W.N.", text: "Castle Researchers of Otherworldly Wisdom & Nobilities" },
//     { id: 5, header: "🗺 R.U.I.N.", text: "Relic Uncovering & Investigation Network" },
// ]

const cards = [
  {
    id: 1,
    header: "⌛ H.O.M.O.K.",
    text: "Hatalmas Ősi Megbízatások és Oltalmak Keresői",
  },
  { id: 2, header: "🌟 F.E.N.Y. ", text: "Felfedezők Elveszett Nemzetek" },
  {
    id: 3,
    header: "🏴‍☠️ K.I.N.C.S.",
    text: "Királyságok, Istenségek, Nagy Csodák Szerzői",
  },
  {
    id: 4,
    header: "👑 K.O.R.O.N.A.",
    text: "Kastélykutatók Ősi Rejtelmek és Nemességek Atyjaitól",
  },
  {
    id: 5,
    header: "🗺 R.O.M.",
    text: "Régiségek, Oltalmak és Mítoszok Kutatóhálózata",
  },
]

const useInfiniteScroll = (itemWidth: number, itemCount: number) => {
  const [loopCount, setLoopCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    const totalWidth = itemWidth * itemCount
    const scrollWidth = totalWidth * 2

    const animate = async () => {
      await controls.start({
        x: [-totalWidth, 0],
        transition: {
          x: { duration: 25, ease: "linear", repeat: Infinity },
        },
      })
    }

    animate()

    return () => {
      controls.stop()
    }
  }, [controls, itemWidth, itemCount])

  return { x, containerRef, loopCount, controls }
}

export default function Sponsors() {
  const itemWidth = 350
  const itemHeight = 165
  const { x, containerRef, controls } = useInfiniteScroll(
    itemWidth,
    cards.length
  )

  return (
    <div className="flex flex-col items-center p-12">
      <h1 className="text-2xl text-center">
        Kutatók, régészek, csoportok akik a felfedezést elősegítették.
      </h1>
      <div className="w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex mt-12"
          style={{ x }}
          animate={controls}
        >
          {[...cards, ...cards].map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              className="flex-shrink-0 px-2"
              style={{ width: itemWidth, height: itemHeight }}
            >
              <Card className="h-full backdrop-blur-2xl bg-gradient-to-br from-[#1a202c] to-[#2d3748] border-gray-700 hover:bg-gray-900 transition-colors duration-300 text-white">
                <CardContent className="flex flex-col items-center justify-center h-full p-6">
                  <h1 className="text-2xl text-center font-extrabold">
                    {card.header}
                  </h1>
                  <p className="font-inte text-center text-sm mt-2">
                    {card.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
