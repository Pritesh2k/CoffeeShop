"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const tasteRef = useRef<HTMLHeadingElement | null>(null);
  const priceRef = useRef<HTMLHeadingElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top", // start pin after 1/4 scroll
          end: "+=250%", // longer pin duration for sticky CTA
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Zoom effect on image
      tl.fromTo(
        imageRef.current,
        { scale: 1.5 },
        { scale: 1, ease: "none", duration: 1 }
      );

      // Fade in Great Taste
      tl.fromTo(
        tasteRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: "power3.out", duration: 1 }
      );

      // Fade in Great Price
      tl.fromTo(
        priceRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: "power3.out", duration: 1 },
        ">0.2"
      );

      // Fade in CTA
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: "power3.out", duration: 1 },
        ">0.2"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[150vh] w-full overflow-hidden"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 scale-[1.2]">
        <Image
          src="/coffeeHero.png"
          alt="Lux Coffee Hero"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text & CTA */}
      <div className="absolute top-80 right-10 w-[50vw] h-[50vh] flex flex-col items-end justify-center gap-6">
        <h1
          ref={tasteRef}
          className="text-[#F9F9F7] text-6xl md:text-8xl font-semibold opacity-0"
        >
          Great Taste
        </h1>

        <h1
          ref={priceRef}
          className="text-[#F9F9F7] text-6xl md:text-8xl font-semibold opacity-0"
        >
          Great Price
        </h1>

        <button
          ref={ctaRef}
          className="mt-6 px-8 py-3 border border-white text-white uppercase tracking-widest opacity-0 transition-all duration-300 hover:bg-white hover:text-black"
        >
          Menu
        </button>
      </div>
    </section>
  );
}
