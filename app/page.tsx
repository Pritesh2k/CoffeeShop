"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
    });

    return () => {
      smootherRef.current?.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    smootherRef.current?.scrollTo(`#${id}`, true); // true = animate smoothly
  };

  return (
    <div id="smooth-wrapper">
      {/* NAV */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F7]/60 backdrop-blur-lg border-b border-black/5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <button
            onClick={() => handleScrollTo("home")}
            className="text-2xl font-semibold tracking-tight text-[#2A2A2D]"
          >
            Lux Coffee
          </button>

          {/* Links */}
          <ul className="flex items-center gap-8 text-[#2A2A2D] text-base font-medium">
            <li>
              <button onClick={() => handleScrollTo("menu")}>Menu</button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("gallery")}>Gallery</button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("location")}>Location</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* CONTENT */}
      <div id="smooth-content">
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-[#F9F9F7] text-[#2A2A2D] text-4xl"
        >
          Home
        </section>

        <section
          id="menu"
          className="h-screen flex items-center justify-center bg-[#F9F9F7] text-[#2A2A2D] text-4xl"
        >
          Menu
        </section>

        <section
          id="gallery"
          className="h-screen flex items-center justify-center bg-[#F9F9F7] text-[#2A2A2D] text-4xl"
        >
          Gallery
        </section>

        <section
          id="location"
          className="h-screen flex items-center justify-center bg-[#F9F9F7] text-[#2A2A2D] text-4xl"
        >
          Location
        </section>
      </div>
    </div>
  );
}
