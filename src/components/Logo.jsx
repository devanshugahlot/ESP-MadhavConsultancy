import { motion } from 'framer-motion';
import logoImg from '../assets/logo.jpg';

export default function Logo({ className = 'h-11 w-11', isFooter = false }) {
  return (
    <div className={`relative ${className} flex items-center justify-center rounded-full overflow-hidden bg-white`}>
      {/* Background glow overlay on hover */}
      <div className="absolute inset-[-4px] rounded-full bg-orange/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      
      <motion.img
        src={logoImg}
        alt="Madhav Consultancy Logo"
        className="relative z-10 h-full w-full object-cover rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
}
