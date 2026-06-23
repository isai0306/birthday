import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Butterfly({ color = "#ff5cd6", size = 40, onClick, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 120 120",
      onClick,
      className: `cursor-pointer ${className}`,
      style: { filter: `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 18px ${color}88)` },
      whileHover: { scale: 1.25 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "butterflyWingGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#fff5fd" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "40%", stopColor: "#ff7fe5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "80%", stopColor: "#d926b7" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#70097a" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "butterflyVeinGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ffffff", stopOpacity: "0.95" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#ffbceb", stopOpacity: "0.45" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.g,
          {
            style: { transformOrigin: "60px 60px" },
            animate: { rotateY: [0, 68, 0] },
            transition: { duration: 0.45, repeat: Infinity, ease: "easeInOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M60 55 C40 25 15 18 10 38 C5 55 25 65 60 70 Z",
                  fill: "url(#butterflyWingGrad)",
                  opacity: "0.95"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M60 55 Q35 38 18 36 M60 55 Q32 48 16 48 M60 55 Q36 58 26 60 M60 55 Q45 64 35 65",
                  stroke: "url(#butterflyVeinGrad)",
                  strokeWidth: "1.5",
                  fill: "none",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M60 62 C45 70 20 72 20 88 C20 102 45 102 60 78 Z",
                  fill: "url(#butterflyWingGrad)",
                  opacity: "0.9"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M60 62 Q40 80 26 86 M60 62 Q48 88 38 94 M60 62 Q55 90 50 96",
                  stroke: "url(#butterflyVeinGrad)",
                  strokeWidth: "1.2",
                  fill: "none",
                  opacity: "0.75"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.g,
          {
            style: { transformOrigin: "60px 60px" },
            animate: { rotateY: [0, -68, 0] },
            transition: { duration: 0.45, repeat: Infinity, ease: "easeInOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M60 55 C80 25 105 18 110 38 C115 55 95 65 60 70 Z",
                  fill: "url(#butterflyWingGrad)",
                  opacity: "0.95"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M60 55 Q85 38 102 36 M60 55 Q88 48 104 48 M60 55 Q84 58 94 60 M60 55 Q75 64 85 65",
                  stroke: "url(#butterflyVeinGrad)",
                  strokeWidth: "1.5",
                  fill: "none",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M60 62 C75 70 100 72 100 88 C100 102 75 102 60 78 Z",
                  fill: "url(#butterflyWingGrad)",
                  opacity: "0.9"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M60 62 Q80 80 94 86 M60 62 Q72 88 82 94 M60 62 Q65 90 70 96",
                  stroke: "url(#butterflyVeinGrad)",
                  strokeWidth: "1.2",
                  fill: "none",
                  opacity: "0.75"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "60", cy: "62", rx: "2", ry: "20", fill: "#3a0f3a" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "40", r: "3", fill: "#3a0f3a" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M59 38 Q52 28 46 25", stroke: "#3a0f3a", strokeWidth: "1.2", fill: "none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M61 38 Q68 28 74 25", stroke: "#3a0f3a", strokeWidth: "1.2", fill: "none" })
      ]
    }
  );
}
const landingAngel = "/assets/landing-angel-cyBNUlvm.png";
const loginAngel = "/assets/login-angel-BGw85tgs.png";
const NAME = "Reena";
const FINAL_LINES = [`Hey ${NAME}…`, "Today is all about celebrating you.", "If butterflies are tiny pieces of joy,", "then you are the whole sky full of them.", "Happy Birthday! Thank you for existing 💖🎂"];
const GARDEN_BUTTERFLIES = [{
  id: 1,
  title: "Your Kind Heart",
  emoji: "🦋💖",
  color: "#ff8fe5",
  message: "The most beautiful thing about you isn't something anyone can see. It's the kindness you carry in your heart and the way you make people feel valued.",
  animation: "pink-sparkles"
}, {
  id: 2,
  title: "My Angel",
  emoji: "🦋👼",
  color: "#ffc837",
  message: "Some people enter our lives and leave memories. You entered mine and brought peace. You have the kind of soul that makes the world feel a little brighter.",
  animation: "golden-particles"
}, {
  id: 3,
  title: "Your Smile",
  emoji: "🦋🌸",
  color: "#ff7ac6",
  message: "Your smile has a way of turning ordinary moments into my favorite memories. It's impossible not to feel happy when you're happy.",
  animation: "floating-hearts"
}, {
  id: 4,
  title: "Your Presence",
  emoji: "🦋✨",
  color: "#00f6ff",
  message: "You don't even realize it, but your presence makes difficult days easier, quiet moments warmer, and life a little more beautiful.",
  animation: "light-rays"
}, {
  id: 5,
  title: "A Rare Soul",
  emoji: "🦋💫",
  color: "#e287ff",
  message: "In a world full of people, it's rare to meet someone who is beautiful both inside and out. That's what makes you so special.",
  animation: "twinkling-stars"
}, {
  id: 6,
  title: "Pure Heart",
  emoji: "🦋🌷",
  color: "#ff4f81",
  message: "Your kindness, your innocence, and the way you care about others are the reasons people feel comfortable around you. You have a genuinely beautiful soul.",
  animation: "rose-petals"
}, {
  id: 7,
  title: "My Favorite Notification",
  emoji: "🦋💝",
  color: "#ff6bbd",
  message: "I won't lie... Seeing your name pop up on my screen always makes me smile a little more than it should.",
  animation: "notification"
}, {
  id: 8,
  title: "One More Secret",
  emoji: "🦋👑",
  color: "#ffd700",
  message: "If I had to describe you in one word, it would be Angel. Not because you're perfect, but because of the kindness, warmth, and happiness you bring wherever you go.",
  animation: "large-wings"
}];
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
function FramedImage({
  src,
  alt,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-full min-h-0 w-full items-center justify-center overflow-hidden bg-black p-2 sm:p-3 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt, draggable: false, className: "h-full w-full object-contain" }) });
}
function GlowButterfly({
  size = 48,
  glow = "#ff5cd6"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Butterfly, { color: glow, size });
}
function EffectOverlay({
  type
}) {
  if (type === "pink-sparkles") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl", children: Array.from({
      length: 20
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute h-2 w-2 rounded-full bg-pink-300", style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      boxShadow: "0 0 8px #ffbde5"
    }, initial: {
      scale: 0,
      opacity: 0
    }, animate: {
      scale: [0, 1.5, 0],
      opacity: [0, 1, 0]
    }, transition: {
      duration: 1.5 + Math.random() * 1,
      repeat: Infinity,
      delay: Math.random() * 2
    } }, i)) });
  }
  if (type === "golden-particles") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl", children: Array.from({
      length: 20
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute h-1.5 w-1.5 rounded-full bg-amber-300", style: {
      left: `${Math.random() * 100}%`,
      bottom: "10%"
    }, initial: {
      y: 0,
      opacity: 0,
      scale: 0.5
    }, animate: {
      y: -350,
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.2]
    }, transition: {
      duration: 2.5 + Math.random() * 1.5,
      repeat: Infinity,
      delay: Math.random() * 2.5
    } }, i)) });
  }
  if (type === "floating-hearts") {
    const emojis = ["❤️", "💖", "💕", "🌸"];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl", children: Array.from({
      length: 15
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute text-lg", style: {
      left: `${Math.random() * 100}%`,
      bottom: "5%"
    }, initial: {
      y: 0,
      opacity: 0,
      scale: 0.4
    }, animate: {
      y: -380,
      x: [0, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 80],
      opacity: [0, 1, 0],
      scale: [0.4, 1, 0.6]
    }, transition: {
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 3
    }, children: emojis[i % emojis.length] }, i)) });
  }
  if (type === "light-rays") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl flex items-center justify-center -z-10 opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-[500px] w-[500px] rounded-full", style: {
      background: "conic-gradient(from 0deg, transparent, rgba(0, 246, 255, 0.4), transparent, rgba(0, 246, 255, 0.4), transparent)"
    }, animate: {
      rotate: 360
    }, transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    } }) });
  }
  if (type === "twinkling-stars") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl", children: Array.from({
      length: 20
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute text-yellow-200", style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }, initial: {
      scale: 0,
      opacity: 0
    }, animate: {
      scale: [0, 1.2, 0],
      opacity: [0, 0.9, 0],
      rotate: [0, 180]
    }, transition: {
      duration: 2 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 3
    }, children: "✦" }, i)) });
  }
  if (type === "rose-petals") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl", children: Array.from({
      length: 15
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute text-lg", style: {
      left: `${Math.random() * 100}%`,
      top: "-5%"
    }, initial: {
      y: 0,
      opacity: 0,
      rotate: 0
    }, animate: {
      y: 450,
      x: [0, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 100],
      opacity: [0, 1, 0],
      rotate: [0, 360]
    }, transition: {
      duration: 4 + Math.random() * 3,
      repeat: Infinity,
      delay: Math.random() * 4
    }, children: "🌸" }, i)) });
  }
  if (type === "large-wings") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl flex items-center justify-center -z-10 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      scale: 0.5,
      opacity: 0
    }, animate: {
      scale: [0.5, 1.4, 0.5],
      opacity: [0, 0.6, 0]
    }, transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButterfly, { size: 280, glow: "#ffd700" }) }) });
  }
  if (type === "golden-aura") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-amber-400/5 animate-pulse" }),
      Array.from({
        length: 25
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute text-amber-300", style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }, initial: {
        scale: 0,
        opacity: 0
      }, animate: {
        scale: [0, 1.3, 0],
        opacity: [0, 1, 0],
        y: [0, -40]
      }, transition: {
        duration: 2 + Math.random() * 1.5,
        repeat: Infinity,
        delay: Math.random() * 2
      }, children: "✨" }, i))
    ] });
  }
  return null;
}
function Sparkles({
  count = 40
}) {
  const items = reactExports.useMemo(() => Array.from({
    length: count
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    s: Math.random() * 2.5 + 1,
    d: Math.random() * 3
  })), [count]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "absolute rounded-full bg-amber-200/60", style: {
    left: `${s.x}%`,
    top: `${s.y}%`,
    width: s.s,
    height: s.s,
    boxShadow: `0 0 ${s.s * 4}px rgba(212,175,55,0.4)`
  }, animate: {
    opacity: [0, 0.7, 0],
    scale: [0.4, 1.2, 0.4]
  }, transition: {
    duration: 3 + Math.random() * 2,
    delay: s.d,
    repeat: Infinity,
    ease: "easeInOut"
  } }, s.id)) });
}
function Landing({
  onContinue
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { className: "relative z-10 flex min-h-[100svh] flex-col items-center justify-between overflow-hidden bg-black px-6 pb-12 pt-16", initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    duration: 0.9
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 bg-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FramedImage, { src: landingAngel, alt: "Dear Angel", className: "min-h-full pb-24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative z-10 mt-8 text-center", initial: {
      y: -24,
      opacity: 0
    }, animate: {
      y: 0,
      opacity: 1
    }, transition: {
      delay: 0.4,
      duration: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm uppercase tracking-[0.35em] text-white/50", children: "A birthday surprise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl font-semibold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] sm:text-6xl md:text-7xl", children: "hey Dear.." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "relative z-10", initial: {
      y: 24,
      opacity: 0
    }, animate: {
      y: 0,
      opacity: 1
    }, transition: {
      delay: 1,
      duration: 0.8
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onContinue, className: "rounded-full px-10 py-3.5 font-display text-lg font-semibold text-black shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-transform hover:scale-105 active:scale-[0.98]", style: {
      background: "linear-gradient(135deg, #f5e6b8, #d4af37)"
    }, children: "Continue ✨" }) })
  ] }, "landing");
}
function Auth({
  onSuccess
}) {
  const [isRegistering, setIsRegistering] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const [errorMsg, setErrorMsg] = reactExports.useState(null);
  const [heartPopup, setHeartPopup] = reactExports.useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please fill in all fields! 🌸");
      return;
    }
    setErrorMsg("Wait... If you want to enter my heart, you must register first! 😉💖");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setHeartPopup(true);
    setTimeout(() => {
      setHeartPopup(false);
      onSuccess();
    }, 3500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[100svh] w-full flex items-center justify-center bg-black p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.8)] flex flex-col md:flex-row min-h-[520px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-[45%] min-h-[300px] md:min-h-0 md:self-stretch overflow-hidden bg-black border-b md:border-b-0 md:border-r border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FramedImage, { src: loginAngel, alt: "Dear Angel", className: "min-h-[300px] md:min-h-full" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center items-center relative bg-[#0a0a0a] border-l border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !isRegistering ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "w-full max-w-sm flex flex-col gap-6", initial: {
        x: 50,
        opacity: 0
      }, animate: {
        x: 0,
        opacity: 1
      }, exit: {
        x: -50,
        opacity: 0
      }, transition: {
        duration: 0.5
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.2)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl animate-pulse", children: "👑" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-white drop-shadow-sm", children: "Sign In" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 font-medium tracking-wide", children: "Enter to begin your surprise" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "flex flex-col gap-4", children: [
          errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            scale: 0.9,
            opacity: 0
          }, animate: {
            scale: 1,
            opacity: 1
          }, className: "text-xs font-semibold text-amber-100/90 bg-amber-950/40 border border-amber-500/30 rounded-xl p-3 text-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: errorMsg }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
              setErrorMsg(null);
              setIsRegistering(true);
            }, className: "text-amber-300 underline hover:text-amber-200", children: "Register here →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-white/80 uppercase tracking-wider pl-1", children: "Email ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "email@example.com", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-white/80 uppercase tracking-wider pl-1", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", placeholder: "••••••••", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-white/70 font-semibold px-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded border-white/30 text-rose-500 bg-white/10 focus:ring-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Remember me" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-amber-300", children: "Forgot Password?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-full py-3 font-display text-base font-bold text-black shadow-[0_0_24px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform mt-2", style: {
            background: "linear-gradient(135deg, #f5e6b8, #d4af37)"
          }, children: "LOGIN" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-white/60 font-semibold", children: [
          "Don't have access?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setErrorMsg(null);
            setIsRegistering(true);
          }, className: "text-amber-300 hover:underline", children: "Register here" })
        ] })
      ] }, "login-card") : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "w-full max-w-sm flex flex-col gap-6", initial: {
        x: 50,
        opacity: 0
      }, animate: {
        x: 0,
        opacity: 1
      }, exit: {
        x: -50,
        opacity: 0
      }, transition: {
        duration: 0.5
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.2)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl animate-pulse", children: "💝" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-white drop-shadow-sm", children: "Register" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleRegister, className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-white/80 uppercase tracking-wider pl-1", children: "Your Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Your name", value: name, onChange: (e) => setName(e.target.value), required: true, className: "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-white/80 uppercase tracking-wider pl-1", children: "Email ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "email@example.com", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-white/80 uppercase tracking-wider pl-1", children: "Choose Secret Key (Password)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", placeholder: "••••••••", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 backdrop-blur transition-all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-full py-3 font-display text-base font-bold text-black shadow-[0_0_24px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform mt-2", style: {
            background: "linear-gradient(135deg, #f5e6b8, #d4af37)"
          }, children: "REGISTER" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-white/60 font-semibold", children: [
          "Already registered? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsRegistering(false), className: "text-amber-300 hover:underline", children: "Login here" })
        ] })
      ] }, "register-card") }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: heartPopup && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative w-full max-w-sm rounded-3xl border border-white/20 bg-gradient-to-b from-[#1a1a1a] to-black p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-white flex flex-col items-center gap-4", initial: {
      scale: 0.8,
      opacity: 0,
      y: 50
    }, animate: {
      scale: 1,
      opacity: 1,
      y: 0
    }, exit: {
      scale: 0.8,
      opacity: 0,
      y: 50
    }, transition: {
      type: "spring",
      stiffness: 200,
      damping: 18
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-3xl", children: Array.from({
        length: 15
      }).map((_, i) => {
        const angle = i / 15 * Math.PI * 2;
        const r = 100 + Math.random() * 80;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "absolute text-xl", initial: {
          x: 0,
          y: 0,
          opacity: 0
        }, animate: {
          x: Math.cos(angle) * r,
          y: Math.sin(angle) * r,
          opacity: [0, 1, 0]
        }, transition: {
          duration: 2.5,
          repeat: Infinity,
          delay: i * 0.08
        }, children: "❤️" }, i);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl animate-bounce", children: "👼❤️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold drop-shadow-md", children: "Already in my Heart!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg italic font-medium leading-relaxed max-w-xs text-white/80", children: '"Wait, why are you registering? You are already in my heart, Reena... enter anytime. 😉💖"' })
    ] }) }) })
  ] });
}
function Intro({
  onYes
}) {
  const [noPos, setNoPos] = reactExports.useState({
    x: 0,
    y: 0
  });
  const dodge = () => {
    const x = (Math.random() - 0.5) * 320;
    const y = (Math.random() - 0.5) * 280;
    setNoPos({
      x,
      y
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { className: "relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center", initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0,
    scale: 0.96
  }, transition: {
    duration: 0.8
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute", style: {
        left: "30%",
        top: "32%"
      }, animate: {
        y: [0, -12, 0],
        rotate: [-6, 6, -6]
      }, transition: {
        duration: 4,
        repeat: Infinity
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButterfly, { size: 56 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute", style: {
        left: "62%",
        top: "30%"
      }, animate: {
        y: [0, -16, 0],
        rotate: [6, -6, 6]
      }, transition: {
        duration: 5,
        repeat: Infinity
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButterfly, { size: 40 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute", style: {
        left: "38%",
        top: "60%"
      }, animate: {
        y: [0, 14, 0],
        rotate: [-4, 8, -4]
      }, transition: {
        duration: 6,
        repeat: Infinity
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButterfly, { size: 48 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute", style: {
        left: "70%",
        top: "62%"
      }, animate: {
        y: [0, -18, 0],
        rotate: [4, -8, 4]
      }, transition: {
        duration: 5.5,
        repeat: Infinity
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButterfly, { size: 36 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { className: "font-display text-5xl font-semibold text-white drop-shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:text-6xl md:text-7xl", initial: {
      y: 20,
      opacity: 0
    }, animate: {
      y: 0,
      opacity: 1
    }, transition: {
      delay: 0.3,
      duration: 1
    }, children: [
      "Happy Birthday ",
      NAME,
      "! ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block", children: "🎂" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { className: "mt-6 font-display text-lg italic text-white/70 sm:text-xl", initial: {
      y: 20,
      opacity: 0
    }, animate: {
      y: 0,
      opacity: 1
    }, transition: {
      delay: 1,
      duration: 1
    }, children: "Are you ready for your birthday surprise? ✨" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative mt-10 flex items-center gap-5", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 1.6,
      duration: 0.8
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onYes, className: "rounded-full px-8 py-3 font-display text-lg text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-transform hover:scale-105", style: {
        background: "linear-gradient(135deg, #f5e6b8, #d4af37)"
      }, children: "Yes 💕" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { onMouseEnter: dodge, onTouchStart: dodge, onClick: dodge, animate: {
        x: noPos.x,
        y: noPos.y
      }, transition: {
        type: "spring",
        stiffness: 260,
        damping: 18
      }, className: "rounded-full bg-white/10 px-8 py-3 font-display text-lg text-white/80 backdrop-blur border border-white/15 transition-colors hover:bg-white/15", children: "No 💔" })
    ] })
  ] }, "intro");
}
function Cards({
  onDone
}) {
  const [currentCard, setCurrentCard] = reactExports.useState(1);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetch("http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "7f8197"
      },
      body: JSON.stringify({
        sessionId: "7f8197",
        location: "index.tsx:Cards",
        message: "Cards phase mounted",
        data: {
          currentCard,
          isOpen
        },
        hypothesisId: "H3",
        timestamp: Date.now()
      })
    }).catch(() => {
    });
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { className: "relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 py-12 text-center", initial: {
    opacity: 0,
    y: 24
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -24
  }, transition: {
    duration: 0.6
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-semibold text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] sm:text-4xl", children: isOpen ? "Your Picture Card 💝" : "Your Picture Cards 🖼️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-base italic text-white/70 sm:text-lg", children: isOpen ? "From a heart that beats for you..." : "Tap the card below to reveal your photo 💌" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 flex w-full max-w-[340px] items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { onClick: () => setIsOpen(true), className: "relative flex h-[420px] w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-amber-400/30 bg-[#141414] p-6 shadow-[0_20px_60px_rgba(212,175,55,0.15)]", initial: {
      opacity: 0,
      scale: 0.92
    }, animate: {
      opacity: 1,
      scale: 1
    }, exit: {
      opacity: 0,
      scale: 0.92
    }, transition: {
      duration: 0.45
    }, whileHover: {
      y: -4,
      borderColor: "rgba(212,175,55,0.5)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 text-xs font-semibold text-amber-200 bg-black/60 rounded-full px-3 py-1 shadow-sm border border-white/10", children: [
        "Card ",
        currentCard,
        " of 2"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          y: [0, -12, 0],
          scale: [1, 1.05, 1]
        }, transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButterfly, { size: 140 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-white drop-shadow-md", children: "Tap to open" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 font-medium", children: "Inside lies a little piece of my heart 💌" })
        ] })
      ] })
    ] }, `closed-card-${currentCard}`) : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative flex min-h-[500px] w-full flex-col items-center justify-between rounded-3xl border-2 border-amber-400/30 bg-[#141414] p-5 shadow-[0_20px_60px_rgba(212,175,55,0.15)]", initial: {
      opacity: 0,
      scale: 0.92
    }, animate: {
      opacity: 1,
      scale: 1
    }, exit: {
      opacity: 0,
      scale: 0.92
    }, transition: {
      duration: 0.45
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 rounded-full bg-amber-600/80 px-3 py-1 font-display text-xs font-bold text-white shadow-sm backdrop-blur", children: cardData[currentCard].tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-[240px] w-full shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-black shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FramedImage, { src: cardData[currentCard].image, alt: "Reena", className: "h-full" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-base md:text-lg italic font-semibold text-white/90 leading-relaxed drop-shadow-sm", children: [
        '"',
        cardData[currentCard].dialog,
        '"'
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleNext, className: "w-full rounded-full py-2.5 font-display text-sm font-semibold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]", style: {
        background: "linear-gradient(135deg, #f5e6b8, #d4af37)"
      }, children: currentCard === 1 ? "Next Gift 🎁" : "Blow the Candles 🎂" })
    ] }, `opened-card-${currentCard}`) }) })
  ] }, "cards");
}
function Garden({
  onDone
}) {
  const [discovered, setDiscovered] = reactExports.useState(/* @__PURE__ */ new Set());
  const [activeB, setActiveB] = reactExports.useState(null);
  const [butterflies, setButterflies] = reactExports.useState([]);
  const [showGolden, setShowGolden] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
        xPath: [`${startX}vw`, `${(startX + 25) % 85 + 5}vw`, `${(startX + 55) % 85 + 5}vw`, `${(startX + 75) % 85 + 5}vw`, `${startX}vw`],
        yPath: [`${startY}vh`, `${Math.max(15, Math.min(80, startY + (Math.random() - 0.5) * 35))}vh`, `${Math.max(15, Math.min(80, startY + (Math.random() - 0.5) * 35))}vh`, `${Math.max(15, Math.min(80, startY + (Math.random() - 0.5) * 35))}vh`, `${startY}vh`]
      };
    });
    setButterflies(arr);
  }, []);
  reactExports.useEffect(() => {
    if (discovered.size >= 8 && !showGolden) {
      setShowGolden(true);
      fetch("http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "7f8197"
        },
        body: JSON.stringify({
          sessionId: "7f8197",
          location: "index.tsx:Garden.showGolden",
          message: "golden butterfly unlocked",
          data: {
            discoveredSize: discovered.size,
            discoveredIds: [...discovered]
          },
          hypothesisId: "H1",
          timestamp: Date.now()
        })
      }).catch(() => {
      });
    }
  }, [discovered, showGolden]);
  const openButterfly = (b) => {
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
        fetch("http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Debug-Session-Id": "7f8197"
          },
          body: JSON.stringify({
            sessionId: "7f8197",
            location: "index.tsx:Garden.handleCloseCard",
            message: "golden butterfly closed, calling onDone",
            data: {
              butterflyId: activeB.id
            },
            hypothesisId: "H2",
            timestamp: Date.now()
          })
        }).catch(() => {
        });
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { className: "relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pt-12 pb-10 text-center overflow-hidden", initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    duration: 0.7
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "z-10 max-w-xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { className: "font-display text-2xl md:text-4xl font-semibold text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] leading-tight", initial: {
        y: -20,
        opacity: 0
      }, animate: {
        y: 0,
        opacity: 1
      }, transition: {
        duration: 0.8
      }, children: "Catch the butterflies to discover what makes you so special 🦋✨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-display text-sm md:text-base italic text-white/80", children: [
        "Discovered: ",
        Math.min(discovered.size, 8),
        " / 8 · Tap each butterfly to read its secret"
      ] }),
      showGolden && !activeB && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { className: "mt-3 font-display text-base font-semibold text-amber-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]", initial: {
        opacity: 0,
        y: 8
      }, animate: {
        opacity: 1,
        y: 0
      }, children: "✨ Golden Butterfly appeared! Tap it in the center ✨" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-0", children: butterflies.map((b) => {
      const isCaught = discovered.has(b.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !isCaught && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "pointer-events-auto absolute cursor-pointer", initial: {
        x: `${b.startX}vw`,
        y: `${b.startY}vh`
      }, animate: {
        x: b.xPath,
        y: b.yPath,
        rotate: [0, 8, -8, 4, 0]
      }, transition: {
        duration: b.duration,
        delay: b.delay,
        repeat: Infinity,
        ease: "easeInOut"
      }, onClick: () => openButterfly(b), whileHover: {
        scale: 1.15
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButterfly, { size: b.size, glow: b.color }) }) }, b.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showGolden && !activeB && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "fixed inset-0 z-30 flex items-center justify-center pointer-events-none", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { type: "button", className: "pointer-events-auto flex flex-col items-center justify-center cursor-pointer", initial: {
      scale: 0.5,
      opacity: 0
    }, animate: {
      scale: 1,
      opacity: 1,
      y: [0, -10, 0]
    }, transition: {
      scale: {
        type: "spring",
        stiffness: 200,
        damping: 16
      },
      y: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }, onClick: () => openButterfly(GOLDEN_BUTTERFLY), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-32 w-32 rounded-full bg-amber-400/25 blur-2xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButterfly, { size: 100, glow: "#ffd700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 font-display text-sm font-bold text-amber-200 tracking-wider bg-black/70 px-4 py-2 rounded-full border border-amber-400/50 shadow-[0_0_30px_rgba(212,175,55,0.4)]", children: "TAP GOLDEN BUTTERFLY 🌹" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeB && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm pointer-events-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: `relative w-full max-w-[340px] overflow-hidden rounded-3xl border border-white/15 bg-[#111] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl text-center flex flex-col items-center justify-between ${activeB.animation === "notification" ? "border-amber-300/30 bg-[#1a1a1a] text-left shadow-[0_15px_30px_rgba(0,0,0,0.5)]" : ""}`, initial: {
      scale: 0.9,
      opacity: 0,
      y: 35
    }, animate: {
      scale: 1,
      opacity: 1,
      y: 0
    }, exit: {
      scale: 0.9,
      opacity: 0,
      y: 35
    }, transition: {
      type: "spring",
      stiffness: 220,
      damping: 22
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EffectOverlay, { type: activeB.animation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCloseCard, className: "absolute top-4 right-4 z-20 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold", children: "✕" }),
      activeB.animation === "notification" ? (
        /* iOS notification style card */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-amber-400/80 font-bold border-b border-white/10 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "💬" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Secret Message" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "just now" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-white", children: activeB.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-medium text-white/80 leading-relaxed", children: activeB.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCloseCard, className: "mt-2 w-full rounded-full py-2 font-display text-sm font-semibold text-black shadow-md hover:scale-[1.01] active:scale-[0.98] transition-transform", style: {
            background: "linear-gradient(135deg, #f5e6b8, #d4af37)"
          }, children: "Close Notification 💌" })
        ] })
      ) : (
        /* Standard beautiful romantic cards */
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center w-full gap-5 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl animate-bounce", children: activeB.emoji.slice(2) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-white drop-shadow-md", children: activeB.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-base md:text-lg italic font-semibold text-white/90 leading-relaxed whitespace-pre-line px-1", children: [
            '"',
            activeB.message,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCloseCard, className: "w-full rounded-full py-2.5 font-display text-sm font-semibold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform", style: {
            background: "linear-gradient(135deg, #f5e6b8, #d4af37)"
          }, children: activeB.id === 9 ? "Open Picture Cards 🖼️" : "Keep Exploring ✨" })
        ] })
      )
    ] }) }) })
  ] }, "garden");
}
function BirthdayCake({
  onDone
}) {
  const candleCount = 5;
  const [litCount, setLitCount] = reactExports.useState(candleCount);
  const [blowing, setBlowing] = reactExports.useState(false);
  const [wishMade, setWishMade] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetch("http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "7f8197"
      },
      body: JSON.stringify({
        sessionId: "7f8197",
        location: "index.tsx:BirthdayCake",
        message: "Cake phase mounted",
        data: {
          litCount
        },
        hypothesisId: "H4",
        timestamp: Date.now()
      })
    }).catch(() => {
    });
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
          fetch("http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Debug-Session-Id": "7f8197"
            },
            body: JSON.stringify({
              sessionId: "7f8197",
              location: "index.tsx:BirthdayCake",
              message: "all candles blown, going to final",
              data: {},
              hypothesisId: "H4",
              timestamp: Date.now()
            })
          }).catch(() => {
          });
          onDone();
        }, 1800);
      }
    }, 350);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { className: "relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 py-12 text-center", initial: {
    opacity: 0,
    y: 24
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -24
  }, transition: {
    duration: 0.6
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-semibold text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] sm:text-4xl", children: "Happy Birthday! 🎂" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-base italic text-white/70 sm:text-lg", children: wishMade ? "Make a wish... the candles are going out! ✨" : "Make a wish, then blow out the candles 🌬️" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-10 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 flex items-end justify-center gap-3 sm:gap-4", children: Array.from({
        length: candleCount
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: i < litCount && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "mb-0.5 text-xl sm:text-2xl", initial: {
          scale: 0,
          opacity: 0
        }, animate: {
          scale: [1, 1.15, 1],
          opacity: 1,
          y: [0, -2, 0]
        }, exit: {
          scale: 0,
          opacity: 0,
          y: -20
        }, transition: {
          scale: {
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          },
          y: {
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          },
          exit: {
            duration: 0.4
          }
        }, children: "🔥" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 rounded-full bg-gradient-to-b from-amber-100 to-amber-300 sm:w-2", style: {
          height: i % 2 === 0 ? 36 : 28
        } })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-44 rounded-t-2xl bg-gradient-to-b from-rose-300 to-rose-500 shadow-lg sm:w-52" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-52 rounded-t-xl bg-gradient-to-b from-amber-200 to-amber-400 shadow-xl sm:w-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-60 items-center justify-center rounded-b-2xl bg-gradient-to-b from-amber-400 to-amber-600 shadow-2xl sm:w-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold text-amber-950 sm:text-xl", children: "Dear Reena 🎂" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: litCount === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: Array.from({
        length: 20
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "absolute text-lg", initial: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 0
      }, animate: {
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        opacity: [1, 0],
        scale: [0, 1.5],
        rotate: Math.random() * 360
      }, transition: {
        duration: 1.5,
        delay: i * 0.04
      }, children: ["🎉", "✨", "💖", "🎊", "⭐"][i % 5] }, i)) }) })
    ] }),
    litCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { onClick: blowCandles, disabled: blowing, className: "rounded-full px-10 py-3.5 font-display text-lg font-semibold text-black shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-transform hover:scale-105 active:scale-[0.98] disabled:opacity-60", style: {
      background: "linear-gradient(135deg, #f5e6b8, #d4af37)"
    }, whileTap: {
      scale: 0.95
    }, children: blowing ? "Blowing... 🌬️" : "Blow the Candles 🌬️" }),
    litCount === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { className: "font-display text-2xl text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]", initial: {
      opacity: 0,
      scale: 0.8
    }, animate: {
      opacity: 1,
      scale: 1
    }, children: "Wish granted! ✨💖" })
  ] }, "cake");
}
function Final() {
  const [lineIdx, setLineIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (lineIdx < FINAL_LINES.length - 1) {
      const t = setTimeout(() => setLineIdx(lineIdx + 1), 1800);
      return () => clearTimeout(t);
    }
  }, [lineIdx]);
  const hearts = Array.from({
    length: 24
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { className: "relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 py-12 text-center", initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, transition: {
    duration: 0.9
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: hearts.map((_, i) => {
      const angle = i / hearts.length * Math.PI * 2;
      const r = 260 + Math.random() * 120;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "absolute text-2xl", initial: {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.4
      }, animate: {
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
        opacity: [0, 1, 0],
        scale: [0.4, 1.3, 0.8]
      }, transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: i * 0.06
      }, children: ["💖", "💕", "🌸", "✨", "🦋"][i % 5] }, i);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-xl space-y-5", children: [
      FINAL_LINES.slice(0, lineIdx + 1).map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { className: i === 0 ? "font-display text-4xl text-white drop-shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:text-5xl" : "font-display text-xl italic text-white/80 sm:text-2xl", initial: {
        opacity: 0,
        y: 18
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.9
      }, children: line }, i)),
      lineIdx === FINAL_LINES.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "flex justify-center pt-6", initial: {
        scale: 0,
        rotate: -20,
        opacity: 0
      }, animate: {
        scale: 1,
        rotate: 0,
        opacity: 1
      }, transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 0.4
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlowButterfly, { size: 110 }) })
    ] })
  ] }, "final");
}
function SerenadePage() {
  const [phase, setPhase] = reactExports.useState("landing");
  const audioRef = reactExports.useRef(null);
  const [muted, setMuted] = reactExports.useState(true);
  const goToPhase = (next) => {
    fetch("http://127.0.0.1:7590/ingest/606baceb-1c0d-44c2-be05-501dfb56b034", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "7f8197"
      },
      body: JSON.stringify({
        sessionId: "7f8197",
        location: "index.tsx:SerenadePage.goToPhase",
        message: "phase transition",
        data: {
          from: phase,
          to: next
        },
        hypothesisId: "H1",
        timestamp: Date.now()
      })
    }).catch(() => {
    });
    setPhase(next);
  };
  reactExports.useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [phase]);
  const toggleMute = () => {
    setMuted((m) => {
      const next = !m;
      if (audioRef.current) {
        audioRef.current.muted = next;
        if (!next) audioRef.current.play().catch(() => {
        });
      }
      return next;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-[100svh] overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 30 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: toggleMute, className: "fixed right-4 top-4 z-50 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/10", "aria-label": muted ? "Unmute music" : "Mute music", children: muted ? "🔇" : "🎵" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      phase === "landing" && /* @__PURE__ */ jsxRuntimeExports.jsx(Landing, { onContinue: () => goToPhase("auth") }, "landing"),
      phase === "auth" && /* @__PURE__ */ jsxRuntimeExports.jsx(Auth, { onSuccess: () => goToPhase("intro") }, "auth"),
      phase === "intro" && /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, { onYes: () => goToPhase("garden") }, "intro"),
      phase === "garden" && /* @__PURE__ */ jsxRuntimeExports.jsx(Garden, { onDone: () => goToPhase("cards") }, "garden"),
      phase === "cards" && /* @__PURE__ */ jsxRuntimeExports.jsx(Cards, { onDone: () => goToPhase("cake") }, "cards"),
      phase === "cake" && /* @__PURE__ */ jsxRuntimeExports.jsx(BirthdayCake, { onDone: () => goToPhase("final") }, "cake"),
      phase === "final" && /* @__PURE__ */ jsxRuntimeExports.jsx(Final, {}, "final")
    ] })
  ] });
}
export {
  SerenadePage as component
};
