import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import { processSteps } from '../assets/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const mobile = window.matchMedia('(max-width: 767px)').matches;

      // Animation logic: the connector line is scaled from its origin as the
      // steps scroll into view, creating a "drawn" process path without layout shifts.
      gsap.fromTo(
        lineRef.current,
        mobile ? { scaleY: 0 } : { scaleX: 0 },
        {
          ...(mobile ? { scaleY: 1 } : { scaleX: 1 }),
          ease: 'none',
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top 72%',
            end: 'bottom 45%',
            scrub: 0.6,
          },
        },
      );

      gsap.fromTo(
        '.process-card',
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top 70%',
            once: true,
          },
        },
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative mt-12">
      <div className="process-line">
        <span ref={lineRef} className="process-line-fill" />
      </div>
      <div className="grid gap-5 md:grid-cols-4">
        {processSteps.map((step, index) => (
          <article key={step.title} className="process-card relative rounded-3xl border border-navy/10 bg-white p-5 shadow-soft">
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-lg font-black text-white">
                0{index + 1}
              </span>
              <CheckCircle2 className="h-6 w-6 text-orange" />
            </div>
            <h3 className="text-xl font-black text-navy">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
