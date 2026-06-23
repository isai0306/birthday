import { motion } from "framer-motion";

interface ButterflyProps {
  color?: string;
  size?: number;
  onClick?: (e?: any) => void;
  className?: string;
}

export function Butterfly({ color = "#ff5cd6", size = 40, onClick, className = "" }: ButterflyProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      style={{ filter: `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 18px ${color}88)` }}
      whileHover={{ scale: 1.25 }}
    >
      <defs>
        {/* Wing base gradient */}
        <linearGradient id="butterflyWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff5fd" />
          <stop offset="40%" stopColor="#ff7fe5" />
          <stop offset="80%" stopColor="#d926b7" />
          <stop offset="100%" stopColor="#70097a" />
        </linearGradient>
        {/* Vein glow */}
        <linearGradient id="butterflyVeinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffbceb" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      
      {/* Left Wing Group */}
      <motion.g 
        style={{ transformOrigin: "60px 60px" }} 
        animate={{ rotateY: [0, 68, 0] }} 
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Left Forewing */}
        <path 
          d="M60 55 C40 25 15 18 10 38 C5 55 25 65 60 70 Z" 
          fill="url(#butterflyWingGrad)" 
          opacity="0.95" 
        />
        {/* Left Forewing Veins */}
        <path 
          d="M60 55 Q35 38 18 36 M60 55 Q32 48 16 48 M60 55 Q36 58 26 60 M60 55 Q45 64 35 65" 
          stroke="url(#butterflyVeinGrad)" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.8" 
        />
        {/* Left Hindwing */}
        <path 
          d="M60 62 C45 70 20 72 20 88 C20 102 45 102 60 78 Z" 
          fill="url(#butterflyWingGrad)" 
          opacity="0.9" 
        />
        {/* Left Hindwing Veins */}
        <path 
          d="M60 62 Q40 80 26 86 M60 62 Q48 88 38 94 M60 62 Q55 90 50 96" 
          stroke="url(#butterflyVeinGrad)" 
          strokeWidth="1.2" 
          fill="none" 
          opacity="0.75" 
        />
      </motion.g>

      {/* Right Wing Group */}
      <motion.g 
        style={{ transformOrigin: "60px 60px" }} 
        animate={{ rotateY: [0, -68, 0] }} 
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Right Forewing */}
        <path 
          d="M60 55 C80 25 105 18 110 38 C115 55 95 65 60 70 Z" 
          fill="url(#butterflyWingGrad)" 
          opacity="0.95" 
        />
        {/* Right Forewing Veins */}
        <path 
          d="M60 55 Q85 38 102 36 M60 55 Q88 48 104 48 M60 55 Q84 58 94 60 M60 55 Q75 64 85 65" 
          stroke="url(#butterflyVeinGrad)" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.8" 
        />
        {/* Right Hindwing */}
        <path 
          d="M60 62 C75 70 100 72 100 88 C100 102 75 102 60 78 Z" 
          fill="url(#butterflyWingGrad)" 
          opacity="0.9" 
        />
        {/* Right Hindwing Veins */}
        <path 
          d="M60 62 Q80 80 94 86 M60 62 Q72 88 82 94 M60 62 Q65 90 70 96" 
          stroke="url(#butterflyVeinGrad)" 
          strokeWidth="1.2" 
          fill="none" 
          opacity="0.75" 
        />
      </motion.g>

      {/* Body & Antennae */}
      <ellipse cx="60" cy="62" rx="2" ry="20" fill="#3a0f3a" />
      <circle cx="60" cy="40" r="3" fill="#3a0f3a" />
      <path d="M59 38 Q52 28 46 25" stroke="#3a0f3a" strokeWidth="1.2" fill="none" />
      <path d="M61 38 Q68 28 74 25" stroke="#3a0f3a" strokeWidth="1.2" fill="none" />
    </motion.svg>
  );
}
