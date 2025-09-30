"use client";
import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const storedState = localStorage.getItem("isPlaying");
        if (storedState !== null) {
            setIsPlaying(storedState === "true");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("isPlaying", isPlaying.toString());

        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch((e) => console.warn("🔇 Audio autoplay blocked:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <nav className="w-full z-50 py-2">
            <div className="container flex justify-end items-center gap-2">
                {/* ✅ ปุ่มเปิด/ปิดเสียง */}
                <button
                    onClick={() => setIsPlaying((prev) => !prev)}
                    className="flex items-center justify-center w-10 h-10 rounded-md shadow-sm border-2 border-gray-200 bg-white hover:bg-gray-200 transition dark:bg-black text-white dark:border-0"
                >
                    {isPlaying ? "🔊" : "🔈"}
                </button>

                {/* ✅ Dark Mode & Profile */}
                <DarkMode />
                <DropdownListMenu />

                {/* ✅ Background Music */}
                <audio ref={audioRef} loop>
                    <source src="/music/soft-piano.mp3" type="audio/mp3" />
                </audio>
            </div>
        </nav>
    );
};

export default Navbar;
