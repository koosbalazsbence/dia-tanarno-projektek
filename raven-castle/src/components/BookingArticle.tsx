
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
                <h1 className="text-center text-3xl m-12">Fedezze fel a várat és foglaljon időpontot még ma!</h1>
                <div className="grid grid-cols-1 w-full lg:grid-cols-3 gap-4 px-4 py-8 items-center justify-items-center dark:bg-gray-700 dark:shadow-lg">
                    <div className="w-full h-full grid p-2 pt-4 mx-4">
                        <h1 className="w-full text-2xl text-center">Nyitvatartás</h1>
                        <Table className="w-3/4 mx-auto border-collapse">
                            <TableHeader>
                                <TableRow className="light:bg-gray-200 uppercase text-sm">
                                    <TableHead className="py-3 px-6 text-left">Nap</TableHead>
                                    <TableHead className="py-3 px-6 text-center">Nyitvatartás</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-sm">
                                <TableRow className="border-b border-gray-200">
                                    <TableCell className="py-3 px-6 text-left">Hétfő</TableCell>
                                    <TableCell className="py-3 px-6 text-center">Zárva</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-200">
                                    <TableCell className="py-3 px-6 text-left">Kedd</TableCell>
                                    <TableCell className="py-3 px-6 text-center">10:00 - 16:00</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-200">
                                    <TableCell className="py-3 px-6 text-left">Szerda</TableCell>
                                    <TableCell className="py-3 px-6 text-center">10:00 - 16:00</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-200">
                                    <TableCell className="py-3 px-6 text-left">Csütörtök</TableCell>
                                    <TableCell className="py-3 px-6 text-center">10:00 - 16:00</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-200">
                                    <TableCell className="py-3 px-6 text-left">Péntek</TableCell>
                                    <TableCell className="py-3 px-6 text-center">10:00 - 16:00</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-200">
                                    <TableCell className="py-3 px-6 text-left">Szombat</TableCell>
                                    <TableCell className="py-3 px-6 text-center">10:00 - 18:00</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-200">
                                    <TableCell className="py-3 px-6 text-left">Vasárnap</TableCell>
                                    <TableCell className="py-3 px-6 text-center">10:00 - 18:00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <p className="text-sm mt-4 text-center font-semibold">Kérjük, érkezés előtt tájékozódjon a vár esetleges változásairól vagy karbantartásáról!</p>
                    </div>
                    <div className="w-full h-full grid p-2 pt-4 mx-4">
                        <h1 className="text-2xl text-center pb-4">Megközelítés</h1>
                        <h2>Ha szeretné felfedezni ezt a különleges történelmi helyszínt, több módon is megközelítheti:</h2>
                        <div className="">
                            <p className="m-4 p-1"><span className="font-semibold">Autóval és gyalogosan</span>: Induljon el Kőrétegpuszta irányába, ahol a várhoz legközelebbi parkoló található. Innen egy 2 km-es, enyhén emelkedő ösvény vezet át az erdőn, amely a vár bejáratához visz.</p>
                            <p className="m-4 p-1"><span className="font-semibold">Helyi buszjárattal</span>: Bükkalja központi buszmegállójából indul egy különjárat, amely egészen a parkolóig közlekedik hétvégenként. A busz a főszezonban naponta többször is jár, így ideális választás azoknak, akik tömegközlekedéssel érkeznek.</p>
                            <p className="m-4 p-1"><span className="font-semibold">Kerékpárral</span>: Az aktív kirándulók számára egy újonnan kijelölt kerékpárút is rendelkezésre áll, amely a Madarasdomb pihenőhelytől indul. Az útvonal több kilátópontot is érint, így a bringázás közben is megcsodálhatja a tájat.</p>
                            <p className="m-4 p-1"><span className="font-semibold">Vezetett túra</span>: A helyi turisztikai iroda heti két alkalommal vezetett túrákat szervez a várhoz, amely magában foglalja a buszos utazást és a túravezetést az erdőn keresztül.</p>
                        </div>
                    </div>
                    <div className="w-full h-full grid p-2 pt-4 mx-4">
                        <h1 className="text-2xl text-center">Időpontfoglalás</h1>
                        <p className="text-center text-lg font-semibold">Egyeztessen kollégáinkkal telefonon!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
