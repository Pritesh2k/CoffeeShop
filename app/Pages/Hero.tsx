"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { products } from "../Data/products";

interface Product {
  title: string;
  image: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
}

interface NavProps {
  smootherRef?: any;
}

export default function Hero({ smootherRef }: NavProps) {

  const heroRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const newBadgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Animate hero background
      gsap.to(imageRef.current, {
        scale: 1,
        delay: 3.5,
        duration: 2,
        ease: "expo.out",
      });

      // Animate product panels with stagger
      gsap.from(panelRefs.current, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 4.5,
      });

      // Animate NEW badge at the same time as panels start
      if (newBadgeRef.current) {
        gsap.from(newBadgeRef.current, {
          opacity: 0,
          x: -50, // slide in from left
          duration: 1,
          ease: "power3.out",
          delay: 4.5, // same as panels
        });
      }
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

      {/* Products Panel */}
      <div className="absolute top-[10vh] right-[5vw] w-[40vw] h-[65vh] rounded-xl overflow-visible">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => { panelRefs.current[index] = el; }}
            className="absolute w-[10vw] h-[10vw] rounded-lg bg-red-600 overflow-hidden"
            style={product.position}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />
            <div className="absolute flex justify-start items-end w-full h-full p-3 text-3xl font-thin text-white">
              {product.title}
            </div>
          </div>
        ))}

        {/* NEW badge */}
        <div
          ref={newBadgeRef}
          className="absolute ml-1 top-20 justify-start items-center text-xl font-thin text-white flex w-40 h-10"
          style={{ textShadow: "2px 2px 4px rgba(255,255,255,0.8)" }}
        >
          NEW MENU
        </div>
      </div>
    </section>
  );
}
