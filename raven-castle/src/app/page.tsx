
// components
import HeroImage from "@/components/HeroImage";
import Sponsors from "@/components/Sponsors";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
        <HeroImage />
        <div className="font-serif absolute top-1/2 z-20 flex flex-col items-center gap-2 text-5xl text-white transform -translate-y-1/2">
          <h1>Élmény.</h1>
          <h1>Kaland.</h1>
          <h1>Felfedezés.</h1>
          <button className="castleIntroBtn font-inter bg-[#3E6027] px-20 py-1 mt-6 rounded-sm uppercase text-lg tracking-widest hover:bg-[#284714] transition duration-200 ease-in-out">
            A Vár Bemutatása
          </button>
        </div>
      </div>
      <div>
        <Sponsors />
      </div>
      <div>
        <Quote />
      </div>
      <div>
        <h1 className="text-center text-3xl">Fedezze fel a várat és foglaljon időpontot még ma!</h1>
      </div>
    </>
  );
}
