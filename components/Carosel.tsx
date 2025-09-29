"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MODEL_ITEMS } from "@/constants";
import { motion, Variants, easeOut, useInView } from "framer-motion";

// Variants
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
  }),
};
export default function ModelCarousel() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  interface ScrollContainer extends HTMLDivElement {}

  type ScrollDirection = "left" | "right";

  const scroll = (direction: ScrollDirection) => {
    const container = scrollRef.current as ScrollContainer | null;
    if (container) {
      const scrollAmount = 320; // Width of one card plus gap
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  interface ScrollToIndexFn {
    (index: number): void;
  }

  const scrollToIndex: ScrollToIndexFn = (index) => {
    const container = scrollRef.current as HTMLDivElement | null;
    if (container) {
      const scrollAmount = 320; // Width of one card plus gap
      container.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // Auto-scroll
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % MODEL_ITEMS.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [isHovered, MODEL_ITEMS.length]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {MODEL_ITEMS.map((model) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-50px" });

            return (
              <div
                key={model.id}
                ref={ref}
                className="flex-none w-100 md:w-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-cover"
                style={{ backgroundImage: `url(${model.image})` }}
              >
                {/* Card Header with Gradient Background */}
                <div className="relative h-48 bg-gradient-to-br overflow-hidden">
                  {/* Model Title */}
                  <motion.h2
                    custom={0}
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="absolute bottom-6 left-6 text-3xl font-bold text-white mb-1"
                  >
                    {model.title}
                  </motion.h2>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <motion.h3
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        className="text-lg font-semibold text-white mb-2"
                      >
                        {model.subtitle}
                      </motion.h3>

                      <motion.p
                        custom={2}
                        variants={textVariants}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        className="text-white text-sm leading-relaxed mb-6"
                      >
                        {model.description}
                      </motion.p>
                    </div>

                    <motion.button
                      custom={3}
                      variants={textVariants}
                      initial="hidden"
                      animate={isInView ? "show" : "hidden"}
                      className="shrink-0 bg-white text-black py-2 px-5 rounded-3xl font-medium hover:bg-amber-50 transition-colors duration-200"
                    >
                      {model.buttonText}
                    </motion.button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Indicator and Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          {/* Dots */}
          <div className="flex justify-center flex-1 gap-3">
            {MODEL_ITEMS.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gray-800 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
