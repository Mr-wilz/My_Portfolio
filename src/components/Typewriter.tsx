import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  finalPauseDuration?: number;
  onComplete?: () => void;
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 55,
  deletingSpeed = 22,
  pauseDuration = 3200,
  finalPauseDuration = 4500,
  onComplete,
  className = "",
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0 || isFinished) return;

    const isLastWord = wordIndex === words.length - 1;
    const currentWord = words[wordIndex % words.length];

    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    } else {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Full word typed
        if (isLastWord) {
          timer = setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, finalPauseDuration);
        } else {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, finalPauseDuration, isFinished, onComplete]);

  return (
    <span className={`inline-flex items-center flex-wrap justify-center ${className}`}>
      <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent drop-shadow-md">
        {text}
      </span>
      {!isFinished && (
        <span
          className="ml-2 inline-block h-[1.1em] w-[4px] animate-pulse rounded-full bg-gradient-to-b from-indigo-400 to-cyan-400 font-normal shadow-[0_0_16px_rgba(129,140,248,0.9)]"
          aria-hidden="true"
        />
      )}
    </span>
  );
}

