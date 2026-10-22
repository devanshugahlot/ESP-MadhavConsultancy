import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand } from "../assets/siteData";
import Logo from "./Logo";

export default function Preloader({ visible }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;

    setProgress(0);
    const duration = 1200; // time to reach 100% in ms
    const startTime = performance.now();

    let frameId;
    function updateProgress(now) {
      const elapsed = now - startTime;
      const computed = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(computed);

      if (computed < 100) {
        frameId = requestAnimationFrame(updateProgress);
      }
    }

    frameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frameId);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <>
          {/* Background staggered curtain (Orange) */}
          <motion.div
            className="fixed inset-0 z-[119] bg-orange"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.08,
            }}
          />
          {/* Main loader panel (Navy) */}
          <motion.div
            className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-navy text-white"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="grid place-items-center gap-6 text-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-orangeGlow">
                <Logo className="h-16 w-16" isFooter={true} />
                <motion.span
                  className="absolute inset-0 rounded-3xl border border-orange/50"
                  animate={{ scale: [1, 1.2], opacity: [0.8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>

              <div>
                <p className="text-xl font-extrabold tracking-[0.16em]  text-white">
                  {brand.name}
                </p>
                <p className="mt-2 text-xs font-semibold tracking-wider text-white/50 uppercase">
                  {brand.tagline}
                </p>
              </div>

              {/* Progress Count and Indicator */}
              <div className="mt-4 flex flex-col items-center gap-3">
                <span className="text-sm font-bold tracking-widest text-orange uppercase">
                  Initializing
                </span>
                <div className="text-4xl font-black tabular-nums text-white">
                  {progress}%
                </div>
                <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-orange transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
