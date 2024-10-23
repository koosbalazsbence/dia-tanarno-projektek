import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen font-monospace flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold tracking-tight sm:text-[10rem]">
                    404
                </h1>
                <p className="text-2xl font-semibold dark:text-[#bfa826]">
                    A keresett oldal nem található.
                </p>
                <Link href="/" prefetch={false}>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="text-xl mt-6"
                    >
                        Vissza a kezdőlapra
                    </Button>
                </Link>
            </div>
        </div>
    )
};
