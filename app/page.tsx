"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Nav from "./Pages/Nav";
import Hero from "./Pages/Hero";
import MenuSection from "./Pages/Menu";
import GallerySection from "./Pages/Gallery";
import LocationSection from "./Pages/Location";

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

  return (
    <div id="smooth-wrapper">
      <Nav smootherRef={smootherRef} />

      <div id="smooth-content">
        <Hero smootherRef={smootherRef}/>
        <MenuSection />
        <GallerySection />
        <LocationSection />
      </div>
    </div>
  );
}
