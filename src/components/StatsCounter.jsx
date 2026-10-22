import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function StatsCounter({ value, suffix = '', label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    let frameId;
    const start = performance.now();
    const duration = 1400;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <div ref={ref} className="rounded-3xl border border-navy/10 bg-white p-5 shadow-soft">
      <p className="text-3xl font-black text-navy sm:text-4xl">
        {count.toLocaleString('en-IN')}
        <span className="text-orange">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-bold text-slate-500">{label}</p>
    </div>
  );
}
