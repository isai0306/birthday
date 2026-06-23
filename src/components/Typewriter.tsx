import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onDone?: () => void;
}

export function Typewriter({ text, speed = 50, delay = 0, className = "", onDone }: TypewriterProps) {
  const [out, setOut] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (out.length >= text.length) {
      onDone?.();
      return;
    }
    const t = setTimeout(() => setOut(text.slice(0, out.length + 1)), speed);
    return () => clearTimeout(t);
  }, [started, out, text, speed, onDone]);

  return (
    <span className={className}>
      {out}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="ml-0.5 inline-block"
      >
        |
      </motion.span>
    </span>
  );
}
