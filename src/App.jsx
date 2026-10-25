import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import EnquiryModal from './components/EnquiryModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import SmoothScrollProvider from './components/SmoothScrollProvider';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const LegalPage = lazy(() => import('./pages/LegalPage'));

function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = window.setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          if (window.lenis) {
            // Smoothly scroll using Lenis, accounting for fixed navbar height of 96px
            window.lenis.scrollTo(element, { offset: -96 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 120);
      return () => window.clearTimeout(id);
    }

    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    return undefined;
  }, [location.pathname, location.hash]);

  return null;
}

function AnimatedRoutes({ onEnquiryOpen }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={`${location.pathname}${location.hash}`}>
        <Route path="/" element={<Home onEnquiryOpen={onEnquiryOpen} />} />
        <Route path="/faq" element={<Navigate to="/#faq" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:page" element={<LegalPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [preloading, setPreloading] = useState(true);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setPreloading(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <SmoothScrollProvider>
      <Preloader visible={preloading} />
      <ScrollRestoration />
      <Navbar onEnquiryOpen={() => setEnquiryOpen(true)} />
      <Suspense fallback={<div className="min-h-screen bg-soft" />}>
        <AnimatedRoutes onEnquiryOpen={() => setEnquiryOpen(true)} />
      </Suspense>
      <Footer onEnquiryOpen={() => setEnquiryOpen(true)} />
      <FloatingActions />
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </SmoothScrollProvider>
  );
}
