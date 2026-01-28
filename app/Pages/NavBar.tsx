"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function NavBar() {
    const subTitleRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLButtonElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const shopRef = useRef<HTMLButtonElement>(null);
    const findUsRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 1 },
        });

        if (
            subTitleRef.current &&
            titleRef.current &&
            logoRef.current &&
            navRef.current &&
            shopRef.current &&
            findUsRef.current
        ) {
            tl.from(subTitleRef.current, {
                opacity: 0,
                x: -30,
            })
                .from(titleRef.current, { opacity: 0, x: -30 }, "-=0.75")
                .to(
                    logoRef.current,
                    {
                        y: () => {
                            const navRect = navRef.current!.getBoundingClientRect();
                            const logoRect = logoRef.current!.getBoundingClientRect();
                            return (
                                navRect.top +
                                navRect.height / 2 -
                                (logoRect.top + logoRect.height / 2)
                            );
                        },
                        scale: 0.5,
                        duration: 1.2,
                        ease: "expo.inOut",
                    },
                )
                // Reveal nav items
                .to([shopRef.current, findUsRef.current], {
                    opacity: 1,
                    y: -1,
                    duration: 0.2,
                    ease: "power3.out",
                })
                .to(navRef.current, {
                    borderWidth: 1,
                    borderColor: "#461901",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.12)",
                    width: "35dvw",
                    scale: 0.96,
                    duration: 0.7,
                    ease: "power3.out",
                })
                .to(navRef.current, {
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.4)",
                });
        }
    }, []);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center absolute top-0">
            {/* Nav Bar */}
            <div
                ref={navRef}
                className="absolute top-1 w-25 h-20 flex items-center justify-center text-2xl z-10 bg-white rounded-2xl overflow-hidden"
            >
                <ul className="flex gap-90">
                    <button
                        ref={shopRef}
                        className="opacity-0"
                        style={{ fontFamily: "var(--font-dm-serif-text)" }}
                        onClick={() => { alert("Click") }}
                    >
                        Shop
                    </button>
                    <button
                        ref={findUsRef}
                        className="opacity-0"
                        style={{ fontFamily: "var(--font-dm-serif-text)" }}
                        onClick={() => { alert("Click") }}
                    >
                        Find Us
                    </button>
                </ul>
            </div>

            {/* Logo */}
            <button
                ref={logoRef}
                className="flex flex-col items-center relative z-11 w-auto"
                onClick={() => { alert("Click") }}
            >
                <div
                    ref={subTitleRef}
                    className="text-3xl"
                    style={{ fontFamily: "var(--font-dm-serif-text)" }}
                >
                    The Original
                </div>
                <div
                    ref={titleRef}
                    className="text-5xl text-amber-950"
                    style={{ fontFamily: "var(--font-bangers)" }}
                >
                    Coffee
                </div>
            </button>
        </div>
    );
}

export default NavBar;
