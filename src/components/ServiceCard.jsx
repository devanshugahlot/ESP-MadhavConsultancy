import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Building2,
  FileCheck2,
  FileText,
  Landmark,
  MessageCircle,
  ReceiptText,
  ShieldCheck,
  Store,
  Utensils,
} from 'lucide-react';
import Button from './Button';
import { whatsappLink } from '../assets/siteData';

const serviceIcons = {
  'GST Registration': ReceiptText,
  'ITR Filing': FileText,
  'MSME Registration': Store,
  'FSSAI License': Utensils,
  'Trademark Registration': BadgeCheck,
  'Company Registration': Building2,
};

export const featureIcons = {
  Zap: FileCheck2,
  IndianRupee: Landmark,
  BadgeCheck,
  ShieldCheck,
  MapPinned: Store,
  Headphones: MessageCircle,
};

export default function ServiceCard({ service, detailed = false }) {
  const cardRef = useRef(null);
  const Icon = serviceIcons[service.title] || FileCheck2;

  function handleMouseMove(event) {
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    cardRef.current.style.setProperty('--rx', `${rotateX}deg`);
    cardRef.current.style.setProperty('--ry', `${rotateY}deg`);
  }

  function resetTilt() {
    cardRef.current.style.setProperty('--rx', '0deg');
    cardRef.current.style.setProperty('--ry', '0deg');
  }

  return (
    <article
      ref={cardRef}
      className={`tilt-card group ${detailed ? 'p-6' : 'p-5'}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div className="flex items-start justify-between gap-4">
        <motion.div
          className="grid h-14 w-14 place-items-center rounded-2xl bg-orange/10 text-orange"
          whileHover={{ rotate: [0, -7, 7, 0], scale: 1.08 }}
          transition={{ duration: 0.45 }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <span className="rounded-full bg-orange/10 px-3 py-1 text-sm font-black text-orange">
          {service.price}
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-black leading-tight text-navy">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>

      {detailed ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <p className="mini-heading">Process</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              {service.process.map((item) => (
                <li key={item} className="flex gap-2">
                  <FileCheck2 className="mt-0.5 h-4 w-4 flex-none text-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mini-heading">Documents</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              {service.documents.map((item) => (
                <li key={item} className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <Button
        href={whatsappLink(service.leadMessage)}
        icon={MessageCircle}
        className="mt-6 w-full"
        magnetic={!detailed}
      >
        WhatsApp
      </Button>
    </article>
  );
}
