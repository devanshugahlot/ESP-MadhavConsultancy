import { motion } from 'framer-motion';
import { featureIcons } from './ServiceCard';

export default function FeatureGrid({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = featureIcons[item.icon] || featureIcons.BadgeCheck;
        return (
          <motion.article
            key={item.title}
            className="rounded-3xl border border-navy/10 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-cardHover"
            whileHover={{ y: -6 }}
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange/10 text-orange">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-black text-navy">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
