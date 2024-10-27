import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Tickets() {
    return (
        <Link href="/buy-tickets">
            <Button variant="destructive" size="lg" className="text-xl">
                Jegyvásárlás
            </Button>
        </Link>
    )
}