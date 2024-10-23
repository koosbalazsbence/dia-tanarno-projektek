export default function Quote() {
    return (
        // <div className="flex flex-col items-center justify-center text-center bg-gradient-to-t from-white to-gray-400 h-96 px-24 pt-20 text-3xl">
        <div className="min-h-96 flex flex-col items-center justify-center text-center px-24 pt-20 md:text-3xl text-lg">
            {/* Szöveg, és a felfedezés lebonyolítója, koordinátora. aki várja szívesen a látogatókat. */}
            <p className="font-playfair italic">
                &quot;Ahogy belefogunk a vár restaurálásába, nem csak köveket helyezünk vissza, hanem történeteket élesztünk fel, emlékeket örökítünk át a jövő nemzedékeinek. Mert a múlt megőrzése nem csupán kötelességünk, hanem örökségünk. Szerencsére mostanra már a látogatók számára is betekintés nyílik eme csodás emlékműbe.&quot;
            </p>
            <p className="mt-4 text-md font-normal">- dr. Varga István</p>
        </div>
    )
};
