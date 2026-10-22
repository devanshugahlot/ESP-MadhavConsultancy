import { useRef, useState, useEffect, Children } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SliderContainer({ children }) {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const arrayChildren = Children.toArray(children);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Calculate active slide index
    const totalItems = arrayChildren.length;
    if (totalItems > 0) {
      const itemWidth = scrollWidth / totalItems;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, totalItems - 1));
    }
  };

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth * 0.85 : clientWidth * 0.85;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    // Check initial scroll bounds after render
    handleScroll();
    
    // Add window resize handler to update buttons
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [arrayChildren.length]);

  return (
    <div className="relative mt-8 group/slider">
      {/* Scrollable Track */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        data-lenis-prevent
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {arrayChildren.map((child, index) => (
          <div
            key={index}
            className="w-[85vw] sm:w-[46vw] lg:w-[31.2vw] flex-none snap-start snap-always"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Left Navigation Arrow */}
      {showLeft && (
        <button
          type="button"
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden md:grid h-12 w-12 place-items-center rounded-full border border-navy/10 bg-white text-navy shadow-soft hover:bg-orange hover:text-white hover:border-orange transition-all duration-300 opacity-0 group-hover/slider:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Right Navigation Arrow */}
      {showRight && (
        <button
          type="button"
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:grid h-12 w-12 place-items-center rounded-full border border-navy/10 bg-white text-navy shadow-soft hover:bg-orange hover:text-white hover:border-orange transition-all duration-300 opacity-0 group-hover/slider:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Indicator Pagination Dots */}
      <div className="mt-4 flex justify-center gap-1.5">
        {arrayChildren.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              if (!containerRef.current) return;
              const { scrollWidth } = containerRef.current;
              const itemWidth = scrollWidth / arrayChildren.length;
              containerRef.current.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'w-6 bg-orange' : 'w-2 bg-navy/20'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
