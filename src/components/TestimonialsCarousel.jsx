import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';
import { successStories, testimonials } from '../assets/siteData';

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 3600);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
      <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-[#e7f8ef] p-4 shadow-soft">
        <div className="mb-4 flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-3 text-sm font-black text-navy">
          <MessageCircle className="h-5 w-5 text-orange" />
          Client Feedback
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[active].name}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) setActive((active + 1) % testimonials.length);
              if (info.offset.x > 60) setActive((active - 1 + testimonials.length) % testimonials.length);
            }}
            className="whatsapp-bubble"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -36 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-3 flex gap-1 text-orange">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-xl font-bold leading-8 text-navy">"{testimonials[active].quote}"</p>
            <div className="mt-5">
              <p className="font-black text-navy">{testimonials[active].name}</p>
              <p className="text-sm font-semibold text-slate-500">{testimonials[active].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-5 left-5 flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`h-2.5 rounded-full transition-all ${active === index ? 'w-8 bg-orange' : 'w-2.5 bg-navy/20'}`}
              onClick={() => setActive(index)}
              aria-label={`Show testimonial from ${item.name}`}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {successStories.map((story, index) => (
          <motion.div
            key={story}
            className="rounded-3xl border border-navy/10 bg-white p-5 shadow-soft"
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">Success Story</p>
            <p className="mt-3 text-lg font-bold leading-8 text-navy">{story}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
