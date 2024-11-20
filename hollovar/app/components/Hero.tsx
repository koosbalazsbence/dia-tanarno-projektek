type HeroProps = {
  title: string
}

export const Hero: React.FC<HeroProps> = ({ title }) => (
  <div className="text-4xl text-center p-12 font-serif bg-colorGold text-white">
    <h1 className="uppercase font-semibold mb-0">{title}</h1>
    <h2 className="bg-white w-[10%] min-w-[70px] h-[3px] relative m-auto mt-3 rounded-full"></h2>
  </div>
)
