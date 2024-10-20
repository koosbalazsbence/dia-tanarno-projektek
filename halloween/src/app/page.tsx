"use client"
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import LayoutGrid from "../components/LayoutGrid"
import { Moon, Sun } from "lucide-react"

export default function HalloweenPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen p-12 ${darkMode ? 'bg-gray-900' : 'bg-orange-100'} transition-colors duration-500`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl md:text-6xl font-bold ${darkMode ? 'text-[#d76b00]' : 'text-purple-800'} font-halloween`}>
            Pumpkin Spice <span>avagy mit jelent számomra a Halloween...</span>
          </h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className={`${darkMode ? 'bg-orange-500 text-gray-900 hover:bg-gray-800' : 'bg-purple-800 text-orange-100 hover:bg-orange-100'} rounded-full p-2 outline-none`}
          >
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </header>

        <Card className={`${darkMode ? 'bg-gray-900 text-orange-100' : 'bg-orange-200 text-purple-900'} mb-8`}>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-spooky">A halloween számomra</CardTitle>
            <CardDescription className={`${darkMode ? 'text-gray-400' : 'text-purple-700'}`}>
              A Halloween és Mindenszentek és Halottak napja
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg space-y-4">
            <p>
              A Halloweent már kisgyerekkorman - amire legalább is még emlékszem, nem nagyon tartottuk/ünnepeltük meg, vagyis azt ami Amerikában szokás, hogy házró-házra járunk és beöltözünk. Annyit csináltunk, hogy Októberben beöltöztünk az iskolában és ott tudtuk egymást ilyesztegetni, és mindenféle más programokon részt venni. Az például nagyon tetszett.
            </p>
            <p>
              Iskolában voltak propramok mint például tökfaragás, vagy amint már említettem korábban be lehetett öltözni valamilyen jelmezbe és hogyha a jelmez elég ilyesztő volt, akkor lehetett a jelmezes versenyen nyerni.
            </p>
          </CardContent>
        </Card>
        <Card className={`${darkMode ? 'bg-gray-900 text-orange-100' : 'bg-orange-200 text-purple-900'} mb-8`}>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-spooky">A korbábbi évek kezdeményezései itt Szeghalmon</CardTitle>
          </CardHeader>
          <CardContent className='text-lg'>
            <p>
              Az elmúlt évben viszont volt itt Szeghalmon egy kezdeményezés, ahol ezt a halloweeni érzést át tudtam élni. Be lehetett öltözni valami ilyesztőnek és ezzel a jelmezzel díjakat nyerni. Illetve ezt megelőzően volt ruhás felvonulás is itt a parkban. További programok is voltak. A helyieknek nagyon tesztett, különösen a gyerekeknek.
            </p>
            <p className='mt-4'>Az elkészült képek itt tekinthetőek meg:</p>
            <div className="text-center">
              <a className='text-orange-500' href="https://www.facebook.com/mariadela.puszedli/posts/pfbid02BTZWub8vLpgwPefHFQjCkckQ4L4tnCasW9nvhUYDWEsvm65rC3mh4JSVLhhXUoT3l">I. sorozat</a>
              <br />
              <a className='text-orange-500' href="https://www.facebook.com/mariadela.puszedli/posts/pfbid02rcavL4rHndUsw5AsE15PUymNLCvRn7QxHmc6MUM45FJaFXi9ee62yfsaVzpV6DFtl">II. sorozat</a></div>
            <LayoutGrid />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className={`${darkMode ? 'bg-gray-800 text-orange-100' : 'bg-orange-200 text-purple-900'}`}>
            <CardHeader>
              <CardTitle className="text-xl font-spooky">A Halloween Magyarországon</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A Halloween egyre népszerűbb ünnep Magyarországon, bár nem rendelkezik mély kulturális hagyományokkal a magyar társadalomban. Az ünnep eredetileg az angolszász országokból, elsősorban az Egyesült Államokból terjedt el, és a fiatalabb generációk, valamint a kereskedelem népszerűsítették. Október 31-én tartják, és jellemzően jelmezbálokkal, tökfaragással, valamint ijesztő dekorációkkal ünneplik.
              </p>
            </CardContent>
          </Card>

          <Card className={`${darkMode ? 'bg-gray-800 text-orange-100' : 'bg-orange-200 text-purple-900'}`}>
            <CardHeader>
              <CardTitle className="text-xl font-spooky">...és Amerikában</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Az Egyesült Államokban a Halloween az egyik legnépszerűbb ünnep, amelyet minden évben október 31-én tartanak. Az ünnep eredete a kelta Samhain fesztiválra vezethető vissza, amikor az emberek úgy hitték, hogy ezen az éjszakán a szellemek világának kapui megnyílnak, és a holtak szellemei visszatérnek a földre. A kereszténység elterjedésével a Samhain fokozatosan összeolvadt a Mindenszentek előestéjével, az „All Hallows’ Eve”-vel, ami később Halloweenné rövidült.
              </p>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 text-center">
          <p className={`${darkMode ? 'text-orange-500' : 'text-purple-800'} font-halloween text-4xl`}>
            Boldog Halloweent! 🎃👻
          </p>
        </footer>
      </div>
    </div>
  )
}