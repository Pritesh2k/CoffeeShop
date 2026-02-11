"use client";

import { ScrollSmoother } from "gsap/ScrollSmoother";

interface NavProps {
  smootherRef: React.RefObject<ScrollSmoother | null>;
}

export default function Nav({ smootherRef }: NavProps) {
  const sections = ["home", "menu", "gallery", "location"];

  const handleScrollTo = (id: string) => {
    // ✅ Guard against undefined
    if (!smootherRef.current) return;

    try {
      smootherRef.current.scrollTo(`#${id}`, true);
    } catch (e) {
      console.warn("ScrollSmoother not ready:", e);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        <button
          onClick={() => handleScrollTo("home")}
          className="text-2xl font-semibold tracking-tight text-[#F9F9F7]"
        >
          Lux Coffee
        </button>

        <ul className="flex items-center gap-8 text-[#E7E1DB] text-base font-medium">
          {sections
            .filter((id) => id !== "home")
            .map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleScrollTo(id)}
                  className="relative transition-all duration-125 ease-out hover:text-white hover:scale-105 hover:tracking-wide"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
