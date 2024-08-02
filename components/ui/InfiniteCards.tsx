"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      const directionValue = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty(
        "--animation-direction",
        directionValue
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
          duration = "80s";
          break;
        default:
          duration = "40s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to right, transparent, white 20%, white 80%, transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4, 7, 29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                Collaborating with Darsh was an absolute pleasure. His
                professionalism, promptness, and dedication to delivering
                exceptional results were evident throughout our project. Darsh's
                enthusiasm for every facet of development truly stands out. If
                you're seeking to elevate your website and elevate your brand,
                Darsh is the ideal partner.
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img src="/profile.png" alt="profile" />
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    Om Khedekar
                  </span>
                  <span className="text-sm leading-[1.6] text-white-200 font-normal">
                    Photographer & Cinematographer
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
