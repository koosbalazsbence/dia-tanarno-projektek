import castleHeroImage from "@/assets/castle-hero.jpg";

export default function HeroImage() {
    return (
        <div className="relative min-w-full min-h-screen bg-fixed bg-cover bg-center" style={{
            backgroundImage: `url(${castleHeroImage.src})`,
        }}>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>
    );
}
