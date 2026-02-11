import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Interface for individual star properties
interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
}

// Generate random star positions and animation properties
const generateStars = (): Star[] =>
  Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 3,
  }));

/**
 * SpaceBackground Component
 * Renders an animated space background with:
 * 1. Deep space gradient
 * 2. Twinkling stars
 * 3. Moving glowing blobs (planets/nebula effect)
 * 4. Noise texture overlay
 */
export default function SpaceBackground() {
  // Subtle animated grid squares (centered, moving right, fading out, 4x5)
  // Subtle color palette for grid squares
  const softColors = [
    "rgba(120, 180, 255, 0.13)", // soft blue
    "rgba(180, 255, 220, 0.13)", // soft green
    "rgba(255, 220, 120, 0.13)", // soft yellow
    "rgba(200, 120, 255, 0.13)", // soft purple
    "rgba(255, 120, 180, 0.13)", // soft pink
    "rgba(255,255,255,0.10)", // white (for some)
  ];

  // Calculate number of columns and rows based on viewport size
  const cols = 8;
  const rows = 5;
  const total = cols * rows;
  const gridSquares = (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.05, 0.25, 0.05] }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatDelay: 10,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-10 pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}>
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: "1vw",
          width: "100vw",
          height: "100vh",
        }}>
        {[...Array(total)].map((_, i) => {
          const shouldFlip = i % 3 === 0;
          const color = softColors[i % softColors.length];
          return (
            <motion.div
              key={i}
              className="rounded-xl"
              style={{
                width: "100%",
                height: "100%",
                background: color,
                boxShadow:
                  (Math.floor(i / cols) + i) % 2 === 0
                    ? "0 2px 32px 0 rgba(255,255,255,0.08)"
                    : "0 2px 20px 0 rgba(0,0,0,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "background 0.3s",
                willChange: shouldFlip ? "transform" : undefined,
              }}
              animate={shouldFlip ? { rotateY: [0, 180, 0] } : {}}
              transition={
                shouldFlip
                  ? {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 8 + (i % 4),
                      ease: "easeInOut",
                    }
                  : {}
              }
            />
          );
        })}
      </div>
    </motion.div>
  );

  const [stars, setStars] = useState<Star[]>([]);

  // Initialize stars on mount to avoid hydration mismatch
  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Twinkling stars */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: 0.85,
              filter: "blur(0.5px)",
            }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {gridSquares}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(88,28,135,0.35)_0%,rgba(16,185,129,0.12)_60%,rgba(37,99,235,0.18)_100%)] bg-blend-plus-lighter opacity-80" />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-blue-900/20 rounded-full blur-[160px] mix-blend-plus-lighter"
      />
      {/* Subtle glassy shine overlay for gloss effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 60%, rgba(255,255,255,0.10) 100%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
