import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '../assets/siteData';
import SliderContainer from './SliderContainer';

export default function GalleryLightbox() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <SliderContainer>
        {galleryImages.map((image) => (
          <motion.button
            key={image.src}
            type="button"
            className="gallery-tile w-full"
            onClick={() => setActiveImage(image)}
            whileHover={{ y: -6 }}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </motion.button>
        ))}
      </SliderContainer>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[115] grid place-items-center bg-navy/85 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setActiveImage(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-navy transition hover:text-orange"
              onClick={() => setActiveImage(null)}
              aria-label="Close gallery image"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[84vh] w-full max-w-5xl rounded-3xl object-contain shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28 }}
              onMouseDown={(event) => event.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
