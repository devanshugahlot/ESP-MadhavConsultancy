import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-orange text-white shadow-orangeGlow hover:-translate-y-0.5 hover:shadow-orangeGlowStrong',
  secondary:
    'border border-navy/15 bg-white text-navy hover:border-orange/60 hover:text-orange hover:-translate-y-0.5',
  ghost:
    'border border-white/15 bg-white/10 text-white backdrop-blur-xl hover:border-orange/70 hover:text-orange',
  subtle:
    'border border-navy/10 bg-soft text-navy hover:border-orange/50 hover:bg-white hover:text-orange',
};

export default function Button({
  children,
  href,
  to,
  icon: Icon,
  variant = 'primary',
  className = '',
  magnetic = true,
  type = 'button',
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });

  function handlePointerMove(event) {
    if (!magnetic) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  const sharedProps = {
    className: `group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] transition duration-300 ${variants[variant]} ${className}`,
    style: magnetic ? { x: springX, y: springY } : undefined,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    whileTap: { scale: 0.98 },
    ...props,
  };

  const content = (
    <>
      {Icon ? (
        <Icon className="h-4 w-4 transition duration-300 group-hover:scale-110" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {content}
      </motion.a>
    );
  }

  if (to) {
    const MotionLink = motion(Link);
    return (
      <MotionLink to={to} {...sharedProps}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} {...sharedProps}>
      {content}
    </motion.button>
  );
}
