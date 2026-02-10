import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function TypingText({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000,
  className = "",
}: TypingTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Safety check for empty words array
    if (!words || words.length === 0) return;

    const word = words[currentWordIndex];

    const type = () => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return word.substring(0, prev.length - 1);
        } else {
          return word.substring(0, prev.length + 1);
        }
      });
    };

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText === word) {
      // Finished typing, pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      const randomSpeed = speed + (Math.random() * 50 - 25);
      timer = setTimeout(type, randomSpeed);
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className={`${className} inline-flex items-center`}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="w-[3px] h-[1em] bg-accent ml-1 inline-block"
      />
    </span>
  );
}
