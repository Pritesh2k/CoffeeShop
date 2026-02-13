"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface NavProps {
  smootherRef?: any;
}

export default function Hero({ smootherRef }: NavProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const textRef1 = useRef<HTMLDivElement | null>(null);
  const textRef2 = useRef<HTMLDivElement | null>(null);
  const textRef3 = useRef<HTMLDivElement | null>(null);

  const boldText1 = useRef<HTMLDivElement | null>(null);
  const thinText1 = useRef<HTMLDivElement | null>(null);

  const boldText2 = useRef<HTMLDivElement | null>(null);
  const thinText2 = useRef<HTMLDivElement | null>(null);

  const boldText3 = useRef<HTMLDivElement | null>(null);
  const thinText3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" }
      });

      // Background zoom
      tl.to(imageRef.current, {
        scale: 1,
        delay: 3.75,
        duration: 2,
        ease: "expo.out",
      })
        .to(textRef1.current, { opacity: 1, duration: 0 }, "-=0.3")
        .fromTo(boldText1.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, "-=0.2")
        .fromTo(thinText1.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=1")
        .to(thinText1.current, { x: 100, opacity: 0, duration: 1.2 })
        .to(boldText1.current, { x: 100, opacity: 0, duration: 1.2 }, "-=1")

        .to(textRef2.current, { opacity: 1, duration: 0 }, "-=0.3")
        .fromTo(boldText2.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, "-=0.2")
        .fromTo(thinText2.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=1")
        .to(thinText2.current, { x: 100, opacity: 0, duration: 1.2 })
        .to(boldText2.current, { x: 100, opacity: 0, duration: 1.2 }, "-=1")

        .to(textRef3.current, { opacity: 1, duration: 0 }, "-=0.3")
        .fromTo(boldText3.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 }, "-=0.2")
        .fromTo(thinText3.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=1")
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <div ref={imageRef} className="absolute inset-0 scale-1000">
        <Image
          src="/coffeeHero.png"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/30" />

      <div ref={textRef1} className="absolute top-1/2 right-1/3 -translate-y-1/3 translate-x-2/3 flex w-[40vw] h-[20vh] font-(--var-roboto) text-white opacity-0">
        <div ref={boldText1} className="flex justify-center items-center w-[20vw] h-[20vh] text-6xl font-bold opacity-0">Authentic</div>
        <div ref={thinText1} className="flex justify-start items-center w-[20vw] h-[20vh] -ml-5 text-6xl font-thin opacity-0">Taste</div>
      </div>

      <div ref={textRef2} className="absolute top-1/2 right-1/3 -translate-y-1/3 translate-x-2/3 flex w-[40vw] h-[20vh] font-(--var-roboto) text-white opacity-0">
        <div ref={boldText2} className="flex justify-center items-center w-[20vw] h-[20vh] text-6xl font-bold opacity-0">Naturally</div>
        <div ref={thinText2} className="flex justify-start items-center w-[20vw] h-[20vh] -ml-8 text-6xl font-thin opacity-0">Sourced</div>
      </div>

      <div ref={textRef3} className="absolute top-1/2 right-1/3 -translate-y-1/3 translate-x-2/3 flex w-[40vw] h-[20vh] font-(--var-roboto) text-white opacity-0">
        <div ref={boldText3} className="flex justify-center items-center w-[20vw] h-[20vh] text-6xl font-bold opacity-0">Low on</div>
        <div ref={thinText3} className="flex justify-start items-center w-[20vw] h-[20vh] -ml-15 text-6xl font-thin opacity-0">Price</div>
      </div>

    </section>
  );
}
