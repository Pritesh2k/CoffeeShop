"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import HomePage from "./Pages/HomePage";
import NavBar from "./Pages/NavBar";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    // Initialize ScrollSmoother
    smootherRef.current = ScrollSmoother.create({
      smooth: 1.5,
      effects: false,
    });

    return () => {
      smootherRef.current?.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="fixed top-0 left-1/2">
          <NavBar />
        </div>
        {/* Sections */}
        <section id="home" className="h-screen flex items-center justify-center">

        </section>

        <section id="shop" className="h-screen flex items-center justify-center bg-gray-700 text-white text-4xl">
          Shop Section
        </section>

        <section id="findus" className="h-screen flex items-center justify-center bg-gray-800 text-white text-4xl">
          Find Us Section
        </section>
      </div>
    </div>
  );
}
