import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MessageCircle, Send, X, Sparkles } from 'lucide-react';
import Button from './Button';
import { brand, defaultWhatsAppMessage, espProgram, services, whatsappLink } from '../assets/siteData';

function buildLeadMessage(values) {
  return [
    `*New Enquiry - Madhav Consultancy*`,
    `👤 *Name:* ${values.name || 'Not shared'}`,
    `📱 *Phone / WhatsApp:* ${values.phone || 'Not shared'}`,
    `📍 *City:* ${values.city || 'Not shared'}`,
    `🎯 *Interest / Service:* ${values.service || 'ESP – Earning Skill Program'}`,
    `💬 *Message:* ${values.message || 'Please contact me with details.'}`,
  ].join('\n');
}

export function EnquiryForm({ compact = false, onSubmitted }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      city: '',
      service: 'ESP – Earning Skill Program (4-Week Cohort)',
      message: '',
    },
  });

  function onSubmit(values) {
    window.open(whatsappLink(buildLeadMessage(values)), '_blank', 'noopener,noreferrer');
    reset();
    onSubmitted?.();
  }

  return (
    <form className={`grid gap-4 ${compact ? '' : 'rounded-3xl border border-navy/10 bg-white p-6 shadow-soft'}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-1.5">
        <label className="form-label" htmlFor={compact ? 'compact-name' : 'name'}>
          Full Name *
        </label>
        <input
          id={compact ? 'compact-name' : 'name'}
          className="form-input"
          placeholder="e.g. Amit Sharma"
          {...register('name', { required: 'Please enter your name.' })}
        />
        {errors.name ? <span className="form-error">{errors.name.message}</span> : null}
      </div>

      <div className="grid gap-1.5">
        <label className="form-label" htmlFor={compact ? 'compact-phone' : 'phone'}>
          WhatsApp Number *
        </label>
        <input
          id={compact ? 'compact-phone' : 'phone'}
          className="form-input"
          inputMode="tel"
          placeholder="+91 98765 43210"
          {...register('phone', { required: 'Please enter your phone number.' })}
        />
        {errors.phone ? <span className="form-error">{errors.phone.message}</span> : null}
      </div>

      <div className="grid gap-1.5">
        <label className="form-label" htmlFor={compact ? 'compact-city' : 'city'}>
          City / Location
        </label>
        <input
          id={compact ? 'compact-city' : 'city'}
          className="form-input"
          placeholder="e.g. Jaipur, Rajasthan (or Online)"
          {...register('city')}
        />
      </div>

      <div className="grid gap-1.5">
        <label className="form-label" htmlFor={compact ? 'compact-service' : 'service'}>
          Program or Service Interested In
        </label>
        <select id={compact ? 'compact-service' : 'service'} className="form-input" {...register('service')}>
          <optgroup label="Educational & Coaching Program">
            <option value="ESP – Earning Skill Program (4-Week Cohort)">
              ESP – Earning Skill Program (4-Week Cohort)
            </option>
            <option value="1-on-1 Career & Business Mentorship">
              1-on-1 Career & Business Mentorship (with Lokesh Verma)
            </option>
          </optgroup>
          <optgroup label="Business & Compliance Services">
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title} ({service.branch})
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className="grid gap-1.5">
        <label className="form-label" htmlFor={compact ? 'compact-message' : 'message'}>
          Message / Requirement
        </label>
        <textarea
          id={compact ? 'compact-message' : 'message'}
          className="form-input min-h-[90px] resize-y"
          placeholder="Tell us about your batch inquiry or business requirements."
          {...register('message')}
        />
      </div>

      <Button type="submit" icon={Send} className="w-full">
        Send to WhatsApp Now
      </Button>

      <p className="text-center text-[11px] text-slate-400">
        🔒 Your details are kept strictly confidential. Messages open directly with Trainer & Mentor Lokesh Verma.
      </p>
    </form>
  );
}

export default function EnquiryModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (window.lenis) {
      window.lenis.stop();
    }
    return () => {
      document.body.style.overflow = previousOverflow;
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[110] grid place-items-center bg-navy/70 p-4 backdrop-blur-xl overflow-y-auto overscroll-contain"
          data-lenis-prevent="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-[2.5rem] bg-soft p-6 sm:p-8 shadow-2xl border border-white/20"
            data-lenis-prevent="true"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
          >
            <button
              type="button"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-navy/10 bg-white text-navy transition hover:border-orange hover:text-orange shadow-sm"
              onClick={onClose}
              aria-label="Close enquiry form"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mb-6 pr-12">
              <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-orange/10 border border-orange/20 px-3 py-1 text-xs font-black text-orange uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Quick WhatsApp Callback</span>
              </div>
              <h2 id="enquiry-title" className="text-2xl sm:text-3xl font-black text-navy font-display">
                Enquire for ESP or Business Services
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                Share your details and chat directly with Trainer & Mentor Lokesh Verma in Jaipur.
              </p>
            </div>
            <EnquiryForm compact onSubmitted={onClose} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
