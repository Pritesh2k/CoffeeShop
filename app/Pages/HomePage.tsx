"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomePage() {
  const subTitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    if (subTitleRef.current && titleRef.current && periodRef.current) {
      // 1️⃣ Subtitle slides in from left
      tl.from(subTitleRef.current, {
        opacity: 0,
        x: -30,
      })
        // 2️⃣ Title slides in slightly overlapping
        .from(
          titleRef.current,
          {
            opacity: 0,
            x: -30,
          },
          "-=0.75"
        )
        // 3️⃣ Exploding period effect
        .from(
          periodRef.current,
          {
            scale: 0, // starts tiny
            opacity: 0,
            rotation: 360,
            x: 10,
            y: -10,
            duration: 0.5,
            ease: "back.out(2)",
          },
          "-=0.5" // starts just before title finishes
        );
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-100 flex flex-col items-center">
        <div
          ref={subTitleRef}
          className="w-full text-3xl"
          style={{ fontFamily: "var(--font-bangers)" }}
        >
          The Original
        </div>
        <div
          ref={titleRef}
          className="w-full text-5xl text-center mt-2"
          style={{ fontFamily: "var(--font-luckiest)" }}
        >
          BarberShop{" "}
          <span
            ref={periodRef}
            id="titlePeriod"
            className="inline-block"
          >
            .
          </span>
        </div>
      </div>
    </div>
  );
}
