"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface NavProps {
  smootherRef: React.RefObject<ScrollSmoother | null>;
}

export default function Nav({ smootherRef }: NavProps) {
  const sections = ["gallery", "menu", "location"];

  const handleScrollTo = (id: string) => {
    if (!smootherRef.current) return;
    try {
      smootherRef.current.scrollTo(`#${id}`, true);
    } catch (e) {
      console.warn("ScrollSmoother not ready:", e);
    }
  };

  const navButtonsRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  const splashRef = useRef<HTMLDivElement | null>(null);
  const titleHoldeRef = useRef<HTMLDivElement | null>(null);
  const luxRef = useRef<HTMLDivElement | null>(null);
  const coffeeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!luxRef.current || !coffeeRef.current || !titleHoldeRef.current || !splashRef.current || !navButtonsRef.current || !underlineRef.current) return;

    const ctx = gsap.context(() => {
      const buttons = gsap.utils.toArray<HTMLButtonElement>(navButtonsRef.current!.children);

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 2,
      });

      // Set initial positions
      gsap.set(luxRef.current, { y: 80, opacity: 0 });
      gsap.set(coffeeRef.current, { x: -60, opacity: 0 });
      gsap.set(buttons, { y: -50, opacity: 0 }); // buttons start above
      gsap.set(underlineRef.current, { width: 0, opacity: 0 }); // underline hidden

      // Animate LUX and COFFEE
      tl.to(luxRef.current, { y: 0, opacity: 1, duration: 1.2 })
        .to(coffeeRef.current, { x: 0, opacity: 1, duration: 1.2 }, "-=0.8")
        .to(splashRef.current, { opacity: 0, duration: 2.5, ease: "power3.inOut" }, "-=1.5")
        .to(titleHoldeRef.current, {
          top: "0",
          left: "0",
          xPercent: -25,
          yPercent: -20,
          scale: 0.5,
          duration: 1.5,
        }, "-=1")
        // Buttons fade in from top with stagger
        .to(buttons, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=1");

      // Hover effect for underline + text color change
      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          const { offsetLeft, offsetWidth } = btn;

          // Animate underline
          gsap.to(underlineRef.current, {
            x: offsetLeft,
            width: offsetWidth,
            opacity: 1,
            duration: 0.3,
            ease: "power3.out",
          });

          // Change hovered button color to light brown (#D2A679)
          gsap.to(btn, {
            color: "#EDE0D4",
            duration: 0.3,
            ease: "power3.out",
          });
        });

        btn.addEventListener("mouseleave", () => {
          // Hide underline
          gsap.to(underlineRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
          });

          // Reset button color to white
          gsap.to(btn, {
            color: "#ffffff",
            duration: 0.3,
            ease: "power3.out",
          });
        });
      });

    }, splashRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Splash background */}
      <div
        ref={splashRef}
        className="absolute top-0 left-0 z-50 flex justify-evenly items-center w-screen h-screen font-(--font-roboto) bg-[#231C1A]"
      />

      {/* Title */}
      <div
        ref={titleHoldeRef}
        onClick={() => handleScrollTo("home")}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-51 flex justify-center items-center w-[60vw] h-[40vh] gap-1"
      >
        <div ref={luxRef} className="font-bold text-[15vw] text-white">LUX</div>
        <div ref={coffeeRef} className="font-thin text-[10vw] text-white">Coffee</div>
      </div>

      {/* Nav Buttons */}
      <div
        ref={navButtonsRef}
        className="absolute bottom-0 right-0 z-51 flex justify-evenly items-center w-[25vw] h-[10vh] gap-4 rounded-lg"
      >
        {sections.map((section) => (
          <button
            key={section}
            className="text-white text-xl rounded-lg"
            onClick={() => handleScrollTo(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
        {/* Shared underline */}
        <div
          ref={underlineRef}
          className="absolute bottom-5 left-0 h-1 bg-[#231C1A]"
        />
      </div>
    </>
  );
}
