"use client";
const isBrowser = () => typeof window !== 'undefined';

export default function ScrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}