import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileCheck2 } from 'lucide-react';
import { documentTabs } from '../assets/siteData';

export default function DocumentsTabs() {
  const [active, setActive] = useState(documentTabs[0].id);
  const activeTab = documentTabs.find((tab) => tab.id === active) || documentTabs[0];

  return (
    <div className="mt-10 rounded-[2rem] border border-navy/10 bg-white p-4 shadow-soft">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {documentTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
              active === tab.id ? 'bg-navy text-white shadow-soft' : 'bg-soft text-navy hover:text-orange'
            }`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.id}
          className="mt-4 grid gap-3 rounded-3xl bg-soft p-5 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22 }}
        >
          {activeTab.items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-slate-700">
              <FileCheck2 className="h-5 w-5 flex-none text-orange" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
