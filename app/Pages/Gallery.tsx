"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Gallery() {
    const imageRef = useRef<HTMLDivElement | null>(null);

    return (
        <section
            id="gallery"
            className="relative h-[215vh] w-full flex items-center justify-center text-[#2A2A2D] px-4 overflow-hidden"
        >
            {/* Background Image */}
            <div ref={imageRef} className="absolute inset-0 -z-10">
                <Image
                    src="/terraWall.png"
                    alt="Gallery Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Main Hero Image */}
            <div className="absolute top-15 left-1/3 md:left-1/3 lg:left-1/6 w-[40vw] md:w-[35vw] lg:w-[30vw] h-[50vh] md:h-[55vh] lg:h-[60vh] z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src="/coffeeHarvest.png"
                    alt="Coffee Harvest"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="absolute top-15 right-1/3 md:right-1/3 lg:right-1/5 w-[40vw] md:w-[35vw] lg:w-[30vw] h-[50vh] md:h-[55vh] lg:h-[60vh] z-10 rounded-3xl overflow-hidden shadow-2xl p-5 bg-red-500"></div>

            <div className="absolute top-175 right-1/3 md:right-1/3 lg:right-1/6 w-[40vw] md:w-[35vw] lg:w-[30vw] h-[50vh] md:h-[55vh] lg:h-[60vh] z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src="/coffeeHarvest.png"
                    alt="Coffee Harvest"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="absolute top-175 left-1/3 md:left-1/3 lg:left-1/5 w-[40vw] md:w-[35vw] lg:w-[30vw] h-[50vh] md:h-[55vh] lg:h-[60vh] z-10 rounded-3xl overflow-hidden shadow-2xl p-5 bg-red-500"></div>

            <div className="absolute top-335 left-1/3 md:left-1/3 lg:left-1/6 w-[40vw] md:w-[35vw] lg:w-[30vw] h-[50vh] md:h-[55vh] lg:h-[60vh] z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src="/coffeeHarvest.png"
                    alt="Coffee Harvest"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="absolute top-335 right-1/3 md:right-1/3 lg:right-1/5 w-[40vw] md:w-[35vw] lg:w-[30vw] h-[50vh] md:h-[55vh] lg:h-[60vh] z-10 rounded-3xl overflow-hidden shadow-2xl p-5 bg-red-500"></div>
        </section>
    );
}
