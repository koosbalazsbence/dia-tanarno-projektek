
// components
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="absolute font-inter flex flex-col items-center gap-2 text-5xl text-white">
        <h1>Élmény.</h1>
        <h1>Kaland.</h1>
        <h1>Felfedezés.</h1>
        <button className="bg-[#3E6027] px-12 py-2 mt-6 font-bold rounded-sm uppercase text-3xl">A Vár Bemutatása</button>
      </div>
      <HeroImage />
    </div>
  );
}
