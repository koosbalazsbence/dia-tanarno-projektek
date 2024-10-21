"use client";
import { ChevronUp } from "lucide-react";
import scrollToTop from "../components/ui/scrollToTop";

export default function ScrollToTopButton() {
    return (
        <button onClick={scrollToTop}>
            <ChevronUp size={20} />
        </button>
    );
}