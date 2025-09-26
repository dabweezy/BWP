"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-[40rem] max-w-full w-full flex items-center justify-center overflow-hidden",
        containerClassName,
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-50 to-orange-100" />
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      
      {/* Content */}
      <div className={cn("relative z-10", className)}>{children}</div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/[0.05]" />
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
        color: "rgb(15 23 42)", // slate-900
      }}
      animate={{
        backgroundSize: "100% 100%",
        color: "rgb(255 255 255)", // white
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
