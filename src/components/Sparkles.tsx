import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function Sparkles({ count = 30 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }));
    setSparkles(arr);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            boxShadow: `0 0 ${s.size * 4}px white`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function FloatingHearts({ count = 8 }: { count?: number }) {
  const hearts = Array.from({ length: count });
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{ left: `${(i * 100) / count + Math.random() * 10}%` }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-20vh", opacity: [0, 1, 1, 0], x: [0, 30, -30, 0] }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 1.8,
            ease: "easeInOut",
          }}
        >
          {["💗", "💖", "🌸", "✨", "🦋"][i % 5]}
        </motion.div>
      ))}
    </div>
  );
}
