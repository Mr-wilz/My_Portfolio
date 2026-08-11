import { motion } from "framer-motion";

const softColors = [
  "rgba(0, 180, 255, 0.13)", // soft blue
  "rgba(180, 255, 220, 0.13)", // soft green
  "rgba(0, 220, 120, 0.13)", // soft yellow
  "rgba(0.5, 120, 255, 0.13)", // soft purple
  "rgba(255, 120, 180, 0.13)", // soft pink
  "rgba(255, 0, 255,0.10)", // white (for some)
];

const cols = 8;
const rows = 5;
const total = cols * rows;
const gridSquares = (
  <motion.div
    initial={{ opacity: 0.5 }}
    animate={{ opacity: [0.05, 0, 0.05] }}
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

export default gridSquares;