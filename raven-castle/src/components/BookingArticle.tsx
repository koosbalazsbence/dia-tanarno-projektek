import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function BookingArticle() {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl m-12">
          Fedezze fel a várat és foglaljon időpontot még ma!
        </h1>
        <div className="grid grid-cols-1 mx-auto xl:w-full xl:grid-cols-3 gap-4 px-4 py-8 items-center justify-items-center">
          <div className="xl:w-3/4 md:w-3/6 h-full grid p-2 pt-4 mx-4 backdrop-blur-2xl bg-gradient-to-br from-[#1a202c] to-[#2d3748] border-gray-700 hover:bg-gray-900 transition-colors duration-300 border-2 rounded-lg text-white">
            <h1 className="text-2xl text-center pb-4 pt-2">Nyitvatartás</h1>
            <Table className="w-3/4 mx-auto border-collapse">
              <TableHeader>
                <TableRow className="bg-gray-50 text-gray700 dark:bg-gray-700 uppercase text-sm hover:bg-gray-50">
                  <TableHead className="py-3 px-6 text-left">Nap</TableHead>
                  <TableHead className="py-3 px-6 text-center">
                    Nyitvatartás
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-sm">
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-3 px-6 text-left">Hétfő</TableCell>
                  <TableCell className="py-3 px-6 text-center">Zárva</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-3 px-6 text-left">Kedd</TableCell>
                  <TableCell className="py-3 px-6 text-center">
                    10:00 - 16:00
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-3 px-6 text-left">Szerda</TableCell>
                  <TableCell className="py-3 px-6 text-center">
                    10:00 - 16:00
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-3 px-6 text-left">
                    Csütörtök
                  </TableCell>
                  <TableCell className="py-3 px-6 text-center">
                    10:00 - 16:00
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-3 px-6 text-left">Péntek</TableCell>
                  <TableCell className="py-3 px-6 text-center">
                    10:00 - 16:00
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-3 px-6 text-left">Szombat</TableCell>
                  <TableCell className="py-3 px-6 text-center">
                    10:00 - 18:00
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-3 px-6 text-left">
                    Vasárnap
                  </TableCell>
                  <TableCell className="py-3 px-6 text-center">
                    10:00 - 18:00
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm mt-4 text-center font-semibold">
              Kérjük, érkezés előtt tájékozódjon a vár esetleges változásairól
              vagy karbantartásáról!
            </p>
          </div>
          <div className="xl:w-full md:w-3/6 h-full grid p-2 pt-4 mx-4 backdrop-blur-2xl bg-gradient-to-br from-[#1a202c] to-[#2d3748] border-gray-700 hover:bg-gray-900 transition-colors duration-300 border-2 rounded-lg text-white">
            <h1 className="text-2xl text-center pb-4 pt-2">Megközelítés</h1>
            <h2 className="m-4 p-1">
              Ha szeretné felfedezni ezt a különleges történelmi helyszínt, több
              módon is megközelítheti:
            </h2>
            <div className="text-sm">
              <p className="m-4 transition ease-in-out duration-500 hover:scale-105 hover:bg-gray-900 p-4 rounded-lg">
                <span className="font-bold">Autóval és gyalogosan</span>:
                Induljon el Kőrétegpuszta irányába, ahol a várhoz legközelebbi
                parkoló található. Innen egy 2 km-es, enyhén emelkedő ösvény
                vezet át az erdőn, amely a vár bejáratához visz.
              </p>
              <p className="m-4 transition ease-in-out duration-500 hover:scale-105 hover:bg-gray-900 p-4 rounded-lg">
                <span className="font-bold">Helyi buszjárattal</span>: Bükkalja
                központi buszmegállójából indul egy különjárat, amely egészen a
                parkolóig közlekedik hétvégenként. A busz a főszezonban naponta
                többször is jár, így ideális választás azoknak, akik
                tömegközlekedéssel érkeznek.
              </p>
              <p className="m-4 transition ease-in-out duration-500 hover:scale-105 hover:bg-gray-900 p-4 rounded-lg">
                <span className="font-bold">Kerékpárral</span>: Az aktív
                kirándulók számára egy újonnan kijelölt kerékpárút is
                rendelkezésre áll, amely a Madarasdomb pihenőhelytől indul. Az
                útvonal több kilátópontot is érint, így a bringázás közben is
                megcsodálhatja a tájat.
              </p>
              <p className="m-4 transition ease-in-out duration-500 hover:scale-105 hover:bg-gray-900 p-4 rounded-lg">
                <span className="font-bold">Vezetett túra</span>: A helyi
                turisztikai iroda heti két alkalommal vezetett túrákat szervez a
                várhoz, amely magában foglalja a buszos utazást és a
                túravezetést az erdőn keresztül.
              </p>
            </div>
          </div>
          <div className="xl:w-3/4 md:w-3/6 h-full grid p-2 pt-4 mx-4 backdrop-blur-2xl bg-gradient-to-br from-[#1a202c] to-[#2d3748] border-gray-700 hover:bg-gray-900 transition-colors duration-300 border-2 rounded-lg text-white">
            <h1 className="text-2xl text-center pb-4 pt-2">Időpontfoglalás</h1>
            <p className="text-center text-lg font-semibold">
              Egyeztessen kollégáinkkal telefonon!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
