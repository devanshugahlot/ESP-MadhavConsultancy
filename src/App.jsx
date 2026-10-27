import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import EnquiryModal from './components/EnquiryModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import SmoothScrollProvider from './components/SmoothScrollProvider';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import BusinessPage from './pages/BusinessPage';
import GrowthPage from './pages/GrowthPage';
import SkillsESPPage from './pages/SkillsESPPage';
import CareerPage from './pages/CareerPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FounderProfilePage from './pages/FounderProfilePage';
import LegalPage from './pages/LegalPage';

function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let attempts = 0;
      const maxAttempts = 20; // Retry every 100ms up to ~2 seconds
      const getTargetElement = () => {
        if (location.hash === '#skills') {
          return (
            document.getElementById('master-portal-filings') ||
            document.getElementById('skills')
          );
        }
        if (location.hash === '#tree-branches' || location.hash === '#select-branch') {
          return (
            document.getElementById('tree-branches') ||
            document.getElementById('select-branch')
          );
        }
        try {
          return document.querySelector(location.hash);
        } catch {
          return document.getElementById(location.hash.slice(1));
        }
      };

      const intervalId = window.setInterval(() => {
        attempts += 1;
        const element = getTargetElement();
        if (element) {
          window.clearInterval(intervalId);
          if (window.lenis) {
            // Smoothly scroll using Lenis, accounting for fixed navbar height of 96px
            window.lenis.scrollTo(element, { offset: -96 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else if (attempts >= maxAttempts) {
          window.clearInterval(intervalId);
        }
      }, 100);

      return () => window.clearInterval(intervalId);
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
        {/* Core Vertical & Informational Routes */}
        <Route path="/" element={<Home onEnquiryOpen={onEnquiryOpen} />} />
        <Route path="/business" element={<BusinessPage onEnquiryOpen={onEnquiryOpen} />} />
        <Route path="/growth" element={<GrowthPage onEnquiryOpen={onEnquiryOpen} />} />
        <Route path="/skills-esp" element={<SkillsESPPage onEnquiryOpen={onEnquiryOpen} />} />
        <Route path="/skills" element={<Navigate to="/skills-esp" replace />} />
        <Route path="/career" element={<CareerPage onEnquiryOpen={onEnquiryOpen} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:founderSlug" element={<FounderProfilePage onEnquiryOpen={onEnquiryOpen} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Navigate to="/#faq" replace />} />

        {/* Legal Policy Routes */}
        <Route path="/privacy-policy" element={<LegalPage />} />
        <Route path="/terms-and-conditions" element={<LegalPage />} />
        <Route path="/disclaimer" element={<LegalPage />} />

        {/* Dedicated Service Detail Pages */}
        <Route path="/:serviceSlug" element={<ServiceDetailPage onEnquiryOpen={onEnquiryOpen} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [preloading, setPreloading] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    // Subtle preloader sequence on first client load
    setPreloading(true);
    const timer = window.setTimeout(() => setPreloading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <SmoothScrollProvider>
      <Preloader visible={preloading} />
      <ScrollRestoration />
      <Navbar onEnquiryOpen={() => setEnquiryOpen(true)} />
      <AnimatedRoutes onEnquiryOpen={() => setEnquiryOpen(true)} />
      <Footer onEnquiryOpen={() => setEnquiryOpen(true)} />
      <FloatingActions />
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </SmoothScrollProvider>
  );
}
