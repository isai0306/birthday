import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Butterfly } from "../components/Butterfly";
import landingAngel from "../assets/photos/landing-angel.png";
import loginAngel from "../assets/photos/login-angel.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "hey Dear.. — Happy Birthday ✨" },
      { name: "description", content: "A black-themed birthday surprise made just for you." },
      { property: "og:title", content: "Butterfly Serenade 🦋" },
      { property: "og:description", content: "A dreamy interactive love note made just for you." },
    ],
  }),
  component: SerenadePage,
});

const NAME = "Reena";

const FINAL_LINES = [
  `Hey ${NAME}…`,
  "Today is all about celebrating you.",
  "If butterflies are tiny pieces of joy,",
  "then you are the whole sky full of them.",
  "Happy Birthday! Thank you for existing 💖🎂",
];

const GARDEN_BUTTERFLIES = [
  {
    id: 1,
    title: "Your Kind Heart",
    emoji: "🦋💖",
    color: "#ff8fe5",
    message: "The most beautiful thing about you isn't something anyone can see. It's the kindness you carry in your heart and the way you make people feel valued.",
    animation: "pink-sparkles"
  },
  {
    id: 2,
    title: "My Angel",
    emoji: "🦋👼",
    color: "#ffc837",
    message: "Some people enter our lives and leave memories. You entered mine and brought peace. You have the kind of soul that makes the world feel a little brighter.",
    animation: "golden-particles"
  },
  {
    id: 3,
    title: "Your Smile",
    emoji: "🦋🌸",
    color: "#ff7ac6",
    message: "Your smile has a way of turning ordinary moments into my favorite memories. It's impossible not to feel happy when you're happy.",
    animation: "floating-hearts"
  },
  {
    id: 4,
    title: "Your Presence",
    emoji: "🦋✨",
    color: "#00f6ff",
    message: "You don't even realize it, but your presence makes difficult days easier, quiet moments warmer, and life a little more beautiful.",
    animation: "light-rays"
  },
  {
    id: 5,
    title: "A Rare Soul",
    emoji: "🦋💫",
    color: "#e287ff",
    message: "In a world full of people, it's rare to meet someone who is beautiful both inside and out. That's what makes you so special.",
    animation: "twinkling-stars"
  },
  {
    id: 6,
    title: "Pure Heart",
    emoji: "🦋🌷",
    color: "#ff4f81",
    message: "Your kindness, your innocence, and the way you care about others are the reasons people feel comfortable around you. You have a genuinely beautiful soul.",
    animation: "rose-petals"
  },
  {
    id: 7,
    title: "My Favorite Notification",
    emoji: "🦋💝",
    color: "#ff6bbd",
    message: "I won't lie... Seeing your name pop up on my screen always makes me smile a little more than it should.",
    animation: "notification"
  },
  {
    id: 8,
    title: "One More Secret",
    emoji: "🦋👑",
    color: "#ffd700",
    message: "If I had to describe you in one word, it would be Angel. Not because you're perfect, but because of the kindness, warmth, and happiness you bring wherever you go.",
    animation: "large-wings"
  }
];

const GOLDEN_BUTTERFLY = {
  id: 9,
  title: "A Little Truth",
  emoji: "🦋🌹",
  color: "#ffd700",
  message: `Before creating this page, I spent a lot of time thinking about what makes you special.

Then I realized...

It's not just your smile.
It's not just your beauty.

It's the way you care.
The way you listen.
The way you make people feel important.

You have one of the purest hearts I've ever known.

And honestly...

That's why you'll always be my Angel. 👼❤️`,
  animation: "golden-aura"
};

type Phase = "landing" | "auth" | "intro" | "garden" | "cards" | "cake" | "final";

function FramedImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full min-h-0 w-full items-center justify-center overflow-hidden bg-black p-2 sm:p-3 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

/* ---------- Glowing Butterfly SVG wrapper ---------- */
function GlowButterfly({ size = 48, glow = "#ff5cd6" }: { size?: number; glow?: string }) {
  return <Butterfly color={glow} size={size} />;
}

/* ---------- Effect overlay component for the custom card animations ---------- */
function EffectOverlay({ type }: { type: string }) {
  if (type === "pink-sparkles") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-pink-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 8px #ffbde5"
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5 + Math.random() * 1,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "golden-particles") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-amber-300"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "10%"
            }}
            initial={{ y: 0, opacity: 0, scale: 0.5 }}
            animate={{
              y: -350,
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.2]
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 2.5
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "floating-hearts") {
    const emojis = ["❤️", "💖", "💕", "🌸"];
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "5%"
            }}
            initial={{ y: 0, opacity: 0, scale: 0.4 }}
            animate={{
              y: -380,
              x: [0, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 80],
              opacity: [0, 1, 0],
              scale: [0.4, 1, 0.6]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            {emojis[i % emojis.length]}
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === "light-rays") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl flex items-center justify-center -z-10 opacity-30">
        <motion.div
          className="h-[500px] w-[500px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent, rgba(0, 246, 255, 0.4), transparent, rgba(0, 246, 255, 0.4), transparent)"
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (type === "twinkling-stars") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.9, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === "rose-petals") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-5%"
            }}
            initial={{ y: 0, opacity: 0, rotate: 0 }}
            animate={{
              y: 450,
              x: [0, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 100],
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === "large-wings") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl flex items-center justify-center -z-10 opacity-20">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.4, 0.5], opacity: [0, 0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <GlowButterfly size={280} glow="#ffd700" />
        </motion.div>
      </div>
    );
  }

  if (type === "golden-aura") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-amber-400/5 animate-pulse" />
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.3, 0],
              opacity: [0, 1, 0],
              y: [0, -40]
            }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
}

/* ---------- Ambient floating sparkles ---------- */
function Sparkles({ count = 40 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 2.5 + 1,
        d: Math.random() * 3,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-amber-200/60"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, boxShadow: `0 0 ${s.s * 4}px rgba(212,175,55,0.4)` }}
          animate={{ opacity: [0, 0.7, 0], scale: [0.4, 1.2, 0.4] }}
          transition={{ duration: 3 + Math.random() * 2, delay: s.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ---------- Landing: hero image + hey Dear.. ---------- */
function Landing({ onContinue }: { onContinue: () => void }) {
  return (
    <motion.section
      key="landing"
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-between overflow-hidden bg-black px-6 pb-12 pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-black">
        <FramedImage src={landingAngel} alt="Dear Angel" className="min-h-full pb-24" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 mt-8 text-center"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <p className="font-display text-sm uppercase tracking-[0.35em] text-white/50">
          A birthday surprise
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] sm:text-6xl md:text-7xl">
          hey Dear..
        </h1>
      </motion.div>

      <motion.div
        className="relative z-10"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button
          onClick={onContinue}
          className="rounded-full px-10 py-3.5 font-display text-lg font-semibold text-black shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-transform hover:scale-105 active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, #f5e6b8, #d4af37)" }}
        >
          Continue ✨
        </button>
      </motion.div>
    </motion.section>
  );
}

/* ---------- Auth: Split screen login / registration ---------- */
function Auth({ onSuccess }: { onSuccess: () => void }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [heartPopup, setHeartPopup] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please fill in all fields! 🌸");
      return;
    }
    // Show login message — stays visible until user chooses to register
    setErrorMsg("Wait... If you want to enter my heart, you must register first! 😉💖");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setHeartPopup(true);
    setTimeout(() => {
      setHeartPopup(false);
      onSuccess();
    }, 3500);
  };

  return (
    <div className="relative min-h-[100svh] w-full flex items-center justify-center bg-black p-4 md:p-8">
      <div className="relative z-10 w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.8)] flex flex-col md:flex-row min-h-[520px]">
        
        {/* Left Side: Login image beside card */}
        <div className="w-full md:w-[45%] min-h-[300px] md:min-h-0 md:self-stretch overflow-hidden bg-black border-b md:border-b-0 md:border-r border-white/10">
          <FramedImage src={loginAngel} alt="Dear Angel" className="min-h-[300px] md:min-h-full" />
        </div>

        {/* Right Side: Auth Card */}
        <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center items-center relative bg-[#0a0a0a] border-l border-white/10">
          <AnimatePresence mode="wait">
            {!isRegistering ? (
              <motion.div
                key="login-card"
                className="w-full max-w-sm flex flex-col gap-6"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Profile Placeholder Icon */}
                <div className="flex flex-col items-center gap-3">
                  <div className="h-20 w-20 rounded-full border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.2)]">
                    <span className="text-3xl animate-pulse">👑</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white drop-shadow-sm">Sign In</h2>
                  <p className="text-xs text-white/50 font-medium tracking-wide">Enter to begin your surprise</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  {errorMsg && (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-xs font-semibold text-amber-100/90 bg-amber-950/40 border border-amber-500/30 rounded-xl p-3 text-center space-y-2"
                    >
                      <p>{errorMsg}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setErrorMsg(null);
                          setIsRegistering(true);
                        }}
                        className="text-amber-300 underline hover:text-amber-200"
                      >
                        Register here →
                      </button>
                    </motion.div>
                  )}

                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider pl-1">Email ID</label>
                    <input 
                      type="text" 
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider pl-1">Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-white/70 font-semibold px-1">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="rounded border-white/30 text-rose-500 bg-white/10 focus:ring-0" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="hover:text-amber-300">Forgot Password?</a>
                  </div>

                  <button 
                    type="submit"
                    className="w-full rounded-full py-3 font-display text-base font-bold text-black shadow-[0_0_24px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform mt-2"
                    style={{ background: "linear-gradient(135deg, #f5e6b8, #d4af37)" }}
                  >
                    LOGIN
                  </button>
                </form>

                <div className="text-center text-xs text-white/60 font-semibold">
                  Don't have access?{" "}
                  <button
                    onClick={() => {
                      setErrorMsg(null);
                      setIsRegistering(true);
                    }}
                    className="text-amber-300 hover:underline"
                  >
                    Register here
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="register-card"
                className="w-full max-w-sm flex flex-col gap-6"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Profile Placeholder Icon */}
                <div className="flex flex-col items-center gap-3">
                  <div className="h-20 w-20 rounded-full border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.2)]">
                    <span className="text-3xl animate-pulse">💝</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white drop-shadow-sm">Register</h2>
                </div>

                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider pl-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider pl-1">Email ID</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-white/80 uppercase tracking-wider pl-1">Choose Secret Key (Password)</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full rounded-full py-3 font-display text-base font-bold text-black shadow-[0_0_24px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform mt-2"
                    style={{ background: "linear-gradient(135deg, #f5e6b8, #d4af37)" }}
                  >
                    REGISTER
                  </button>
                </form>

                <div className="text-center text-xs text-white/60 font-semibold">
                  Already registered? <button onClick={() => setIsRegistering(false)} className="text-amber-300 hover:underline">Login here</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Heart Popup modal overlay */}
      <AnimatePresence>
        {heartPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <motion.div 
              className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-gradient-to-b from-[#1a1a1a] to-black p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-white flex flex-col items-center gap-4"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              {/* Floating Hearts inside popup */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {Array.from({ length: 15 }).map((_, i) => {
                  const angle = (i / 15) * Math.PI * 2;
                  const r = 100 + Math.random() * 80;
                  return (
                    <motion.span
                      key={i}
                      className="absolute text-xl"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{ x: Math.cos(angle) * r, y: Math.sin(angle) * r, opacity: [0, 1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.08 }}
                    >
                      ❤️
                    </motion.span>
                  );
                })}
              </div>

              <span className="text-5xl animate-bounce">👼❤️</span>
              <h3 className="font-display text-2xl font-bold drop-shadow-md">Already in my Heart!</h3>
              <p className="font-display text-lg italic font-medium leading-relaxed max-w-xs text-white/80">
                "Wait, why are you registering? You are already in my heart, Reena... enter anytime. 😉💖"
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Intro: Hey {name} + Yes/No (No runs away) ---------- */
function Intro({ onYes }: { onYes: () => void }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const dodge = () => {
    const x = (Math.random() - 0.5) * 320;
    const y = (Math.random() - 0.5) * 280;
    setNoPos({ x, y });
  };

  return (
    <motion.section
      key="intro"
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.8 }}
    >
      {/* halo butterflies */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div className="absolute" style={{ left: "30%", top: "32%" }} animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }} transition={{ duration: 4, repeat: Infinity }}>
          <GlowButterfly size={56} />
        </motion.div>
        <motion.div className="absolute" style={{ left: "62%", top: "30%" }} animate={{ y: [0, -16, 0], rotate: [6, -6, 6] }} transition={{ duration: 5, repeat: Infinity }}>
          <GlowButterfly size={40} />
        </motion.div>
        <motion.div className="absolute" style={{ left: "38%", top: "60%" }} animate={{ y: [0, 14, 0], rotate: [-4, 8, -4] }} transition={{ duration: 6, repeat: Infinity }}>
          <GlowButterfly size={48} />
        </motion.div>
        <motion.div className="absolute" style={{ left: "70%", top: "62%" }} animate={{ y: [0, -18, 0], rotate: [4, -8, 4] }} transition={{ duration: 5.5, repeat: Infinity }}>
          <GlowButterfly size={36} />
        </motion.div>
      </div>

      <motion.h1
        className="font-display text-5xl font-semibold text-white drop-shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:text-6xl md:text-7xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Happy Birthday {NAME}! <span className="inline-block">🎂</span>
      </motion.h1>

      <motion.p
        className="mt-6 font-display text-lg italic text-white/70 sm:text-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Are you ready for your birthday surprise? ✨
      </motion.p>

      <motion.div
        className="relative mt-10 flex items-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <button
          onClick={onYes}
          className="rounded-full px-8 py-3 font-display text-lg text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-transform hover:scale-105"
          style={{ background: "linear-gradient(135deg, #f5e6b8, #d4af37)" }}
        >
          Yes 💕
        </button>
        <motion.button
          onMouseEnter={dodge}
          onTouchStart={dodge}
          onClick={dodge}
          animate={{ x: noPos.x, y: noPos.y }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="rounded-full bg-white/10 px-8 py-3 font-display text-lg text-white/80 backdrop-blur border border-white/15 transition-colors hover:bg-white/15"
        >
          No 💔
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

/* ---------- Cards: opening cards with images and sweet dialogues ---------- */
function Cards({ onDone }: { onDone: () => void }) {
  const [currentCard, setCurrentCard] = useState<1 | 2>(1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'7f8197'},body:JSON.stringify({sessionId:'7f8197',location:'index.tsx:Cards',message:'Cards phase mounted',data:{currentCard,isOpen},hypothesisId:'H3',timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }, []);

  const cardData = {
    1: {
      image: landingAngel,
      dialog: "To the most beautiful angel, Reena... You make my heart flutter like a million butterflies. 💖",
      tag: "My Angel 🌸"
    },
    2: {
      image: loginAngel,
      dialog: "In a sky full of stars, you are the one I choose to look at. Thank you for bringing so much glow into my life. ✨",
      tag: "My Crush 👑"
    }
  };

  const handleNext = () => {
    if (currentCard === 1) {
      setIsOpen(false);
      setCurrentCard(2);
    } else {
      onDone();
    }
  };

  return (
    <motion.section
      key="cards"
      className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 py-12 text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8 w-full max-w-md">
        <h2 className="font-display text-3xl font-semibold text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] sm:text-4xl">
          {isOpen ? "Your Picture Card 💝" : "Your Picture Cards 🖼️"}
        </h2>
        <p className="mt-3 font-display text-base italic text-white/70 sm:text-lg">
          {isOpen ? "From a heart that beats for you..." : "Tap the card below to reveal your photo 💌"}
        </p>
      </div>

      <div className="relative z-20 flex w-full max-w-[340px] items-center justify-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key={`closed-card-${currentCard}`}
              onClick={() => setIsOpen(true)}
              className="relative flex h-[420px] w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-amber-400/30 bg-[#141414] p-6 shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -4, borderColor: "rgba(212,175,55,0.5)" }}
            >
              <div className="absolute top-4 right-4 text-xs font-semibold text-amber-200 bg-black/60 rounded-full px-3 py-1 shadow-sm border border-white/10">
                Card {currentCard} of 2
              </div>
              <div className="flex flex-col items-center gap-6">
                <motion.div
                  animate={{ y: [0, -12, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GlowButterfly size={140} />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">Tap to open</h3>
                  <p className="text-sm text-white/80 font-medium">Inside lies a little piece of my heart 💌</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`opened-card-${currentCard}`}
              className="relative flex min-h-[500px] w-full flex-col items-center justify-between rounded-3xl border-2 border-amber-400/30 bg-[#141414] p-5 shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45 }}
            >
              {/* Card Tag */}
              <span className="absolute top-4 left-4 rounded-full bg-amber-600/80 px-3 py-1 font-display text-xs font-bold text-white shadow-sm backdrop-blur">
                {cardData[currentCard].tag}
              </span>

              {/* Card Photo */}
              <div className="mt-6 h-[240px] w-full shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-black shadow-lg">
                <FramedImage
                  src={cardData[currentCard].image}
                  alt="Reena"
                  className="h-full"
                />
              </div>

              {/* Sweet dialog */}
              <div className="my-3 px-2">
                <p className="font-display text-base md:text-lg italic font-semibold text-white/90 leading-relaxed drop-shadow-sm">
                  "{cardData[currentCard].dialog}"
                </p>
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="w-full rounded-full py-2.5 font-display text-sm font-semibold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #f5e6b8, #d4af37)" }}
              >
                {currentCard === 1 ? "Next Gift 🎁" : "Blow the Candles 🎂"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

/* ---------- Garden: Butterfly Secret Garden ---------- */
interface GardenProps {
  onDone: () => void;
}

function Garden({ onDone }: GardenProps) {
  const [discovered, setDiscovered] = useState<Set<number>>(new Set());
  const [activeB, setActiveB] = useState<any | null>(null);
  const [butterflies, setButterflies] = useState<any[]>([]);
  const [showGolden, setShowGolden] = useState(false);

  // Initialize butterfly positions and paths
  useEffect(() => {
    const arr = GARDEN_BUTTERFLIES.map((b) => {
      const startX = Math.random() * 75 + 10;
      const startY = Math.random() * 55 + 15;
      return {
        ...b,
        startX,
        startY,
        size: 44 + Math.random() * 16,
        duration: 16 + Math.random() * 12,
        delay: Math.random() * 2,
        xPath: [
          `${startX}vw`,
          `${(startX + 25) % 85 + 5}vw`,
          `${(startX + 55) % 85 + 5}vw`,
          `${(startX + 75) % 85 + 5}vw`,
          `${startX}vw`
        ],
        yPath: [
          `${startY}vh`,
          `${Math.max(15, Math.min(80, startY + (Math.random() - 0.5) * 35))}vh`,
          `${Math.max(15, Math.min(80, startY + (Math.random() - 0.5) * 35))}vh`,
          `${Math.max(15, Math.min(80, startY + (Math.random() - 0.5) * 35))}vh`,
          `${startY}vh`
        ]
      };
    });
    setButterflies(arr);
  }, []);

  // Show golden butterfly when all 8 are discovered
  useEffect(() => {
    if (discovered.size >= 8 && !showGolden) {
      setShowGolden(true);
      // #region agent log
      fetch('http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'7f8197'},body:JSON.stringify({sessionId:'7f8197',location:'index.tsx:Garden.showGolden',message:'golden butterfly unlocked',data:{discoveredSize:discovered.size,discoveredIds:[...discovered]},hypothesisId:'H1',timestamp:Date.now()})}).catch(()=>{});
      // #endregion
    }
  }, [discovered, showGolden]);

  const openButterfly = (b: typeof GARDEN_BUTTERFLIES[number]) => {
    setActiveB(b);
    if (b.id !== 9) {
      setDiscovered((prev) => {
        const next = new Set(prev);
        next.add(b.id);
        return next;
      });
    }
  };

  const handleCloseCard = () => {
    if (activeB) {
      if (activeB.id === 9) {
        setActiveB(null);
        // #region agent log
        fetch('http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'7f8197'},body:JSON.stringify({sessionId:'7f8197',location:'index.tsx:Garden.handleCloseCard',message:'golden butterfly closed, calling onDone',data:{butterflyId:activeB.id},hypothesisId:'H2',timestamp:Date.now()})}).catch(()=>{});
        // #endregion
        onDone();
      } else {
        setDiscovered((prev) => {
          const next = new Set(prev);
          next.add(activeB.id);
          return next;
        });
        setActiveB(null);
      }
    }
  };

  return (
    <motion.section
      key="garden"
      className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pt-12 pb-10 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Title */}
      <div className="z-10 max-w-xl mx-auto">
        <motion.h2 
          className="font-display text-2xl md:text-4xl font-semibold text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Catch the butterflies to discover what makes you so special 🦋✨
        </motion.h2>
        <p className="mt-2 font-display text-sm md:text-base italic text-white/80">
          Discovered: {Math.min(discovered.size, 8)} / 8 · Tap each butterfly to read its secret
        </p>
        {showGolden && !activeB && (
          <motion.p
            className="mt-3 font-display text-base font-semibold text-amber-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✨ Golden Butterfly appeared! Tap it in the center ✨
          </motion.p>
        )}
      </div>

      {/* Floating Butterflies container */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {butterflies.map((b) => {
          const isCaught = discovered.has(b.id);
          return (
            <AnimatePresence key={b.id}>
              {!isCaught && (
                <motion.div
                  className="pointer-events-auto absolute cursor-pointer"
                  initial={{ x: `${b.startX}vw`, y: `${b.startY}vh` }}
                  animate={{
                    x: b.xPath,
                    y: b.yPath,
                    rotate: [0, 8, -8, 4, 0]
                  }}
                  transition={{
                    duration: b.duration,
                    delay: b.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  onClick={() => openButterfly(b)}
                  whileHover={{ scale: 1.15 }}
                >
                  <GlowButterfly size={b.size} glow={b.color} />
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* Golden Butterfly — fixed center overlay (avoids transform bugs) */}
      <AnimatePresence>
        {showGolden && !activeB && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              className="pointer-events-auto flex flex-col items-center justify-center cursor-pointer"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
              transition={{
                scale: { type: "spring", stiffness: 200, damping: 16 },
                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              }}
              onClick={() => openButterfly(GOLDEN_BUTTERFLY)}
            >
              <div className="absolute h-32 w-32 rounded-full bg-amber-400/25 blur-2xl animate-pulse" />
              <GlowButterfly size={100} glow="#ffd700" />
              <span className="mt-3 font-display text-sm font-bold text-amber-200 tracking-wider bg-black/70 px-4 py-2 rounded-full border border-amber-400/50 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                TAP GOLDEN BUTTERFLY 🌹
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Placeholder spacer */}
      <div className="h-20" />

      {/* Card Popup Modal */}
      <AnimatePresence>
        {activeB && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm pointer-events-auto">
            <motion.div
              className={`relative w-full max-w-[340px] overflow-hidden rounded-3xl border border-white/15 bg-[#111] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl text-center flex flex-col items-center justify-between ${
                activeB.animation === "notification" 
                  ? "border-amber-300/30 bg-[#1a1a1a] text-left shadow-[0_15px_30px_rgba(0,0,0,0.5)]" 
                  : ""
              }`}
              initial={{ scale: 0.9, opacity: 0, y: 35 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 35 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              {/* Effect overlays */}
              <EffectOverlay type={activeB.animation} />

              {/* Close button */}
              <button
                onClick={handleCloseCard}
                className="absolute top-4 right-4 z-20 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold"
              >
                ✕
              </button>

              {activeB.animation === "notification" ? (
                /* iOS notification style card */
                <div className="w-full flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-amber-400/80 font-bold border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">💬</span>
                      <span>Secret Message</span>
                    </div>
                    <span>just now</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-white">
                      {activeB.title}
                    </h3>
                    <p className="font-body text-sm font-medium text-white/80 leading-relaxed">
                      {activeB.message}
                    </p>
                  </div>
                  <button
                    onClick={handleCloseCard}
                    className="mt-2 w-full rounded-full py-2 font-display text-sm font-semibold text-black shadow-md hover:scale-[1.01] active:scale-[0.98] transition-transform"
                    style={{ background: "linear-gradient(135deg, #f5e6b8, #d4af37)" }}
                  >
                    Close Notification 💌
                  </button>
                </div>
              ) : (
                /* Standard beautiful romantic cards */
                <div className="flex flex-col items-center w-full gap-5 z-10">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl animate-bounce">{activeB.emoji.slice(2)}</span>
                    <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">
                      {activeB.title}
                    </h3>
                  </div>

                  <p className="font-display text-base md:text-lg italic font-semibold text-white/90 leading-relaxed whitespace-pre-line px-1">
                    "{activeB.message}"
                  </p>

                  <button
                    onClick={handleCloseCard}
                    className="w-full rounded-full py-2.5 font-display text-sm font-semibold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
                    style={{ background: "linear-gradient(135deg, #f5e6b8, #d4af37)" }}
                  >
                    {activeB.id === 9 ? "Open Picture Cards 🖼️" : "Keep Exploring ✨"}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

/* ---------- Birthday Cake: blow out candles ---------- */
function BirthdayCake({ onDone }: { onDone: () => void }) {
  const candleCount = 5;
  const [litCount, setLitCount] = useState(candleCount);
  const [blowing, setBlowing] = useState(false);
  const [wishMade, setWishMade] = useState(false);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'7f8197'},body:JSON.stringify({sessionId:'7f8197',location:'index.tsx:BirthdayCake',message:'Cake phase mounted',data:{litCount},hypothesisId:'H4',timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }, []);

  const blowCandles = () => {
    if (blowing || litCount === 0) return;
    setBlowing(true);
    setWishMade(true);

    let remaining = litCount;
    const interval = setInterval(() => {
      remaining -= 1;
      setLitCount(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        setTimeout(() => {
          // #region agent log
          fetch('http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'7f8197'},body:JSON.stringify({sessionId:'7f8197',location:'index.tsx:BirthdayCake',message:'all candles blown, going to final',data:{},hypothesisId:'H4',timestamp:Date.now()})}).catch(()=>{});
          // #endregion
          onDone();
        }, 1800);
      }
    }, 350);
  };

  return (
    <motion.section
      key="cake"
      className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 py-12 text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8 max-w-lg">
        <h2 className="font-display text-3xl font-semibold text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] sm:text-4xl">
          Happy Birthday! 🎂
        </h2>
        <p className="mt-3 font-display text-base italic text-white/70 sm:text-lg">
          {wishMade
            ? "Make a wish... the candles are going out! ✨"
            : "Make a wish, then blow out the candles 🌬️"}
        </p>
      </div>

      {/* Cake */}
      <div className="relative mb-10 flex flex-col items-center">
        {/* Candles */}
        <div className="mb-1 flex items-end justify-center gap-3 sm:gap-4">
          {Array.from({ length: candleCount }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <AnimatePresence>
                {i < litCount && (
                  <motion.div
                    className="mb-0.5 text-xl sm:text-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: 1,
                      y: [0, -2, 0],
                    }}
                    exit={{ scale: 0, opacity: 0, y: -20 }}
                    transition={{
                      scale: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
                      y: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
                      exit: { duration: 0.4 },
                    }}
                  >
                    🔥
                  </motion.div>
                )}
              </AnimatePresence>
              <div
                className="w-1.5 rounded-full bg-gradient-to-b from-amber-100 to-amber-300 sm:w-2"
                style={{ height: i % 2 === 0 ? 36 : 28 }}
              />
            </div>
          ))}
        </div>

        {/* Cake layers */}
        <div className="relative">
          <div className="h-8 w-44 rounded-t-2xl bg-gradient-to-b from-rose-300 to-rose-500 shadow-lg sm:w-52" />
          <div className="h-10 w-52 rounded-t-xl bg-gradient-to-b from-amber-200 to-amber-400 shadow-xl sm:w-60" />
          <div className="flex h-12 w-60 items-center justify-center rounded-b-2xl bg-gradient-to-b from-amber-400 to-amber-600 shadow-2xl sm:w-72">
            <span className="font-display text-lg font-bold text-amber-950 sm:text-xl">
              Dear Reena 🎂
            </span>
          </div>
        </div>

        {/* Confetti after blow */}
        <AnimatePresence>
          {litCount === 0 && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-lg"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 300,
                    opacity: [1, 0],
                    scale: [0, 1.5],
                    rotate: Math.random() * 360,
                  }}
                  transition={{ duration: 1.5, delay: i * 0.04 }}
                >
                  {["🎉", "✨", "💖", "🎊", "⭐"][i % 5]}
                </motion.span>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {litCount > 0 && (
        <motion.button
          onClick={blowCandles}
          disabled={blowing}
          className="rounded-full px-10 py-3.5 font-display text-lg font-semibold text-black shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-transform hover:scale-105 active:scale-[0.98] disabled:opacity-60"
          style={{ background: "linear-gradient(135deg, #f5e6b8, #d4af37)" }}
          whileTap={{ scale: 0.95 }}
        >
          {blowing ? "Blowing... 🌬️" : "Blow the Candles 🌬️"}
        </motion.button>
      )}

      {litCount === 0 && (
        <motion.p
          className="font-display text-2xl text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Wish granted! ✨💖
        </motion.p>
      )}
    </motion.section>
  );
}

/* ---------- Final: heart burst + closing lines ---------- */
function Final() {
  const [lineIdx, setLineIdx] = useState(0);
  useEffect(() => {
    if (lineIdx < FINAL_LINES.length - 1) {
      const t = setTimeout(() => setLineIdx(lineIdx + 1), 1800);
      return () => clearTimeout(t);
    }
  }, [lineIdx]);

  const hearts = Array.from({ length: 24 });

  return (
    <motion.section
      key="final"
      className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 py-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      {/* heart burst */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {hearts.map((_, i) => {
          const angle = (i / hearts.length) * Math.PI * 2;
          const r = 260 + Math.random() * 120;
          return (
            <motion.span
              key={i}
              className="absolute text-2xl"
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
              animate={{ x: Math.cos(angle) * r, y: Math.sin(angle) * r, opacity: [0, 1, 0], scale: [0.4, 1.3, 0.8] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.06 }}
            >
              {["💖", "💕", "🌸", "✨", "🦋"][i % 5]}
            </motion.span>
          );
        })}
      </div>

      <div className="relative max-w-xl space-y-5">
        {FINAL_LINES.slice(0, lineIdx + 1).map((line, i) => (
          <motion.p
            key={i}
            className={
              i === 0
                ? "font-display text-4xl text-white drop-shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:text-5xl"
                : "font-display text-xl italic text-white/80 sm:text-2xl"
            }
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {line}
          </motion.p>
        ))}

        {lineIdx === FINAL_LINES.length - 1 && (
          <motion.div
            className="flex justify-center pt-6"
            initial={{ scale: 0, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.4 }}
          >
            <GlowButterfly size={110} />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

/* ---------- Page ---------- */
function SerenadePage() {
  const [phase, setPhase] = useState<Phase>("landing");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  const goToPhase = (next: Phase) => {
    // #region agent log
    fetch('http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'7f8197'},body:JSON.stringify({sessionId:'7f8197',location:'index.tsx:SerenadePage.goToPhase',message:'phase transition',data:{from:phase,to:next},hypothesisId:'H1',timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    setPhase(next);
  };

  useEffect(() => {
    // gentle scroll lock per phase
    window.scrollTo({ top: 0 });
  }, [phase]);

  const toggleMute = () => {
    setMuted((m) => {
      const next = !m;
      if (audioRef.current) {
        audioRef.current.muted = next;
        if (!next) audioRef.current.play().catch(() => {});
      }
      return next;
    });
  };

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-black">
      <Sparkles count={30} />

      {/* mute toggle */}
      <button
        onClick={toggleMute}
        className="fixed right-4 top-4 z-50 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/10"
        aria-label={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? "🔇" : "🎵"}
      </button>

      <AnimatePresence mode="wait">
        {phase === "landing" && <Landing key="landing" onContinue={() => goToPhase("auth")} />}
        {phase === "auth" && <Auth key="auth" onSuccess={() => goToPhase("intro")} />}
        {phase === "intro" && <Intro key="intro" onYes={() => goToPhase("garden")} />}
        {phase === "garden" && <Garden key="garden" onDone={() => goToPhase("cards")} />}
        {phase === "cards" && <Cards key="cards" onDone={() => goToPhase("cake")} />}
        {phase === "cake" && <BirthdayCake key="cake" onDone={() => goToPhase("final")} />}
        {phase === "final" && <Final key="final" />}
      </AnimatePresence>
    </main>
  );
}
