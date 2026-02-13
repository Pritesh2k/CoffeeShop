"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Gallery() {
    const imageRef = useRef<HTMLDivElement | null>(null);

    return (
        <section
            id="gallery"
            className="relative h-screen w-full flex items-center justify-center bg-[#B59683] px-4 overflow-hidden"
        >

        </section>
            
    );
}
