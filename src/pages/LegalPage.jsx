import { Link, useParams } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { defaultWhatsAppMessage, legalPages, whatsappLink } from '../assets/siteData';

const routeMap = {
  'privacy-policy': 'privacy',
  'terms-and-conditions': 'terms',
  disclaimer: 'disclaimer',
};

export default function LegalPage() {
  const { page = 'privacy-policy' } = useParams();
  const key = routeMap[page] || 'privacy';
  const content = legalPages[key] || legalPages.privacy;

  const legalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://themadhavconsultancy.com/${page}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://themadhavconsultancy.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": content.title,
            "item": `https://themadhavconsultancy.com/${page}`
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `https://themadhavconsultancy.com/${page}#webpage`,
        "url": `https://themadhavconsultancy.com/${page}`,
        "name": `${content.title} | Madhav Consultancy`,
        "description": content.body,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://themadhavconsultancy.com/#website",
          "name": "Madhav Consultancy",
          "url": "https://themadhavconsultancy.com/"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://themadhavconsultancy.com/#organization"
        }
      }
    ]
  };

  return (
    <PageTransition>
      <SEOHead
        title={`${content.title} | Madhav Consultancy`}
        description={content.body}
        canonical={`/${page}`}
        schema={legalSchema}
      />
      <section className="inner-hero min-h-[70vh]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-navy sm:text-6xl">{content.title}</h1>
          <div className="mt-8 rounded-[2rem] border border-navy/10 bg-white p-6 shadow-soft">
            <p className="text-lg leading-8 text-slate-600">{content.body}</p>
            <p className="mt-5 leading-8 text-slate-600">
              For questions about your specific case, contact Madhav Consultancy directly before sharing sensitive documents.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappLink(defaultWhatsAppMessage)} icon={MessageCircle}>
                WhatsApp Now
              </Button>
              <Link className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-navy transition hover:border-orange hover:text-orange" to="/">
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
