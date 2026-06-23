import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Butterfly } from "./Butterfly";

const COLORS = ["#f9a8d4", "#e9d5ff", "#fbcfe8", "#fde68a", "#fecaca", "#ddd6fe"];

interface FlyingButterfly {
  id: number;
  color: string;
  size: number;
  startX: number;
  duration: number;
  delay: number;
  yPath: number[];
  secret?: string;
}

const SECRETS = [
  "You make my world softer ✨",
  "Your smile = sunshine 🌸",
  "Thinking of you again 💗",
  "You're magic 🦋",
  "Forever grateful for you 👼",
  "My favorite person 💖",
];

export function FlyingButterflies({ count = 6 }: { count?: number }) {
  const [butterflies, setButterflies] = useState<FlyingButterfly[]>([]);
  const [popup, setPopup] = useState<{ x: number; y: number; text: string } | null>(null);

  useEffect(() => {
    const arr: FlyingButterfly[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      color: COLORS[i % COLORS.length],
      size: 28 + Math.random() * 24,
      startX: Math.random() * 100,
      duration: 18 + Math.random() * 14,
      delay: Math.random() * 8,
      yPath: [
        20 + Math.random() * 60,
        20 + Math.random() * 60,
        20 + Math.random() * 60,
        20 + Math.random() * 60,
      ],
      secret: SECRETS[i % SECRETS.length],
    }));
    setButterflies(arr);
  }, [count]);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
        {butterflies.map((b) => (
          <motion.div
            key={b.id}
            className="pointer-events-auto absolute"
            initial={{ x: `${b.startX}vw`, y: "50vh" }}
            animate={{
              x: [`${b.startX}vw`, `${(b.startX + 30) % 100}vw`, `${(b.startX + 60) % 100}vw`, `${(b.startX + 90) % 100}vw`, `${b.startX}vw`],
              y: b.yPath.map((y) => `${y}vh`).concat(`${b.yPath[0]}vh`),
              rotate: [0, 10, -10, 5, 0],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Butterfly
              color={b.color}
              size={b.size}
              onClick={(e?: any) => {
                const evt = e as MouseEvent | undefined;
                setPopup({
                  x: evt?.clientX ?? window.innerWidth / 2,
                  y: evt?.clientY ?? window.innerHeight / 2,
                  text: b.secret!,
                });
                setTimeout(() => setPopup(null), 2500);
              }}
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {popup && (
          <motion.div
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full glass px-5 py-2 text-sm font-medium text-foreground"
            style={{ left: popup.x, top: popup.y }}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
          >
            {popup.text}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
