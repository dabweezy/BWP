"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

const BlurImage = ({ height, width, src, className, alt, ...rest }: any) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        className
      )}
      style={{
        height: height || "100%",
        width: width || "100%",
      }}
    >
      <Image
        src={src}
        alt={alt || "Background of a beautiful view"}
        fill
        className="object-cover"
        {...rest}
      />
    </div>
  );
};

const Card = ({ card, index, layout }: { card: Card; index: number; layout?: boolean }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    setHovered(false);
  });

  return (
    <div
      ref={ref}
      className="relative group flex items-center justify-center"
      style={{
        height: "500px",
        width: "400px",
        padding: "20px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 h-full w-full rounded-lg bg-white transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl",
          hovered && "z-20 scale-105"
        )}
        style={{
          zIndex: hovered ? 20 : 10 - index,
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <BlurImage
            src={card.src}
            alt={card.title}
            height="100%"
            width="100%"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="text-sm font-medium text-white/80 mb-2">
              {card.category}
            </div>
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {card.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ items, initialScroll = 0 }: { items: JSX.Element[]; initialScroll?: number }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = initialScroll;
    }
  }, [initialScroll]);

  return (
    <div
      ref={scrollRef}
      className="flex items-center gap-8 overflow-x-auto overflow-y-visible scrollbar-hide py-8 px-4"
      style={{
        scrollSnapType: "x mandatory",
        height: "580px",
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-center" style={{ scrollSnapAlign: "start" }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export { Carousel, Card, BlurImage };
