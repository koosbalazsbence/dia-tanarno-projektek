"use client";
import { LayoutGrid } from "./ui/layout-grid";

export default function LayoutGridDemo() {
    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Telihold
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A telihold, mint a Halloween egyik szimbóluma, sok évszázados hagyományokkal rendelkezik. A telihold a boszorkányok hatalmát és erejét jelképezte, akik a hold által vezérelve cselekedtek. A Halloweenkor a telihold a szellemek, a boszorkányok és a varázslók idejét jelzi, akik a sötétségben élnek.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Csontvázak
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A Halloweenkor a csontvázak is megjelennek, mint a halál szimbólumai. A csontvázak a halál legyőzhetetlenségét jelképezik, és emlékeztetnek minket arra, hogy a halál mindenkivel megtörténhet. A csontvázak a Halloweenkor a szellemek, a boszorkányok és a varázslók idejét jelzik, akik a sötétségben élnek.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Tökfaragás
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A Halloweenkor a tökfaragás is egy népszerű tevékenység. A tököt kivájják, és a belső részét kidobják, majd a tököt különböző mintákban kivágják. A tököt ezután egy gyertyával megvilágítják, és az ablakban elhelyezik. A tökfaragás a Halloweenkor a szellemek, a boszorkányok és a varázslók idejét jelzi, akik a sötétségben élnek. A tökfaragás egy régi szokás, amelyet a kelta nép gyakorolt, és a Halloweenkor a szellemek, a boszorkányok és a varázslók idejét jelzi, akik a sötétségben élnek.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Öltözékek
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Halloweenkor az öltözékek különösen fontos szerepet játszanak. Az emberek gyakran választanak ijesztő vagy vicces jelmezeket, hogy részt vegyenek az ünnepi mulatságokban. A legnépszerűbb öltözékek közé tartoznak a szellemek, vámpírok, boszorkányok, és zombik, de sokan választanak popkulturális ikonokat vagy filmkaraktereket is. Az öltözékek célja, hogy megijesszék vagy szórakoztassák a többi résztvevőt, és lehetőséget adnak arra, hogy egy estére valaki mássá váljanak.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail:
            "https://images.unsplash.com/photo-1481819434877-23b892ca68ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "https://images.unsplash.com/photo-1541550353839-95e417a9f95b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            "https://images.unsplash.com/photo-1540593151139-583128ef5a84?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

