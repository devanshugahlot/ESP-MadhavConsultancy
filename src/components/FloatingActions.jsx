import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { brand, defaultWhatsAppMessage, espWhatsAppMessage, whatsappLink } from '../assets/siteData';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating Call Button */}
      <a
        className="floating-call pointer-events-auto shadow-lg hover:scale-110 transition-transform duration-200"
        href={brand.callHref}
        aria-label="Call Business Consultant Lokesh Verma"
        title="Call 7976604850"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* Floating WhatsApp Button with Pulse Ripple */}
      <a
        className="floating-whatsapp group pointer-events-auto shadow-xl hover:scale-110 transition-transform duration-200"
        href={whatsappLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Madhav Consultancy"
      >
        <span className="whatsapp-ripple" />
        <MessageCircle className="relative z-10 h-6 w-6" />
        <span className="floating-tooltip whitespace-nowrap">
          Chat with Consultant Lokesh Verma
        </span>
      </a>
    </div>
  );
}
