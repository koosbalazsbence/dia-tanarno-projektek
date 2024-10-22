import Image from "next/image";
import castleHeroImage from "@/assets/castle-hero.jpg";

export default function HeroImage() {
    return (
        <div>
            <Image
                src={castleHeroImage}
                alt="castle-hero-background"
                className="w-full h-full object-cover opacity-25"
            />
        </div>
    )
};
