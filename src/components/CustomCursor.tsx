"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or small screens
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest(
        "[data-cursor], button, a, input, select, textarea, [role='button']"
      );

      if (interactiveEl) {
        setIsHovering(true);
        const customText = interactiveEl.getAttribute("data-cursor");
        setCursorText(customText || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#4F7CFF] transition-transform duration-75 ease-out shadow-[0_0_12px_#4F7CFF]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />

      {/* Outer contextual halo */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[rgba(79,124,255,0.4)] transition-all duration-300 ease-out flex items-center justify-center ${
          isHovering
            ? cursorText
              ? "w-20 h-20 -ml-10 -mt-10 bg-[rgba(14,18,27,0.85)] border-[#4F7CFF] shadow-[0_0_24px_rgba(79,124,255,0.3)] backdrop-blur-xs"
              : "w-10 h-10 -ml-5 -mt-5 bg-[rgba(79,124,255,0.08)] border-[#4F7CFF]"
            : "w-7 h-7 -ml-3.5 -mt-3.5 bg-transparent opacity-40"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono tracking-widest text-[#F5F7FA] uppercase select-none font-semibold">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
