import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const reviews = [
  { src: '/1.png' },
  { src: '/2.jpg' },
  { src: '/3.jpg' },
  { src: '/4.jpg' },
  { src: '/5.jpg' },
  { src: '/6.jpg' },
  { src: '/7.jpg' },
  { src: '/8.jpg' },
  { src: '/9.jpg' },
  { src: '/10.jpg' },
  { src: '/11.jpg' },
];

// row-span values: 2 = tall, 1 = normal — creates the asymmetric mosaic
const rowSpans = [2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1];

export default function Reviews() {
  const [active, setActive] = useState<number | null>(null);
  const headerRef = useScrollReveal(0);
  const gridRef   = useScrollReveal(140);

  const close = useCallback(() => setActive(null), []);
  const prev  = useCallback(() => setActive(i => i !== null ? (i - 1 + reviews.length) % reviews.length : 0), []);
  const next  = useCallback(() => setActive(i => i !== null ? (i + 1) % reviews.length : 0), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  return (
    <section id="reviews" className="py-24 lg:py-32" style={{ backgroundColor: '#F2E8D8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div ref={headerRef} className="mb-14">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#A07030' }}>
            Отзиви
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
          >
            Какво казват<br />
            <span className="italic" style={{ color: '#A07030' }}>моите клиенти</span>
          </h2>
        </div>

        {/* Asymmetric masonry grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '185px',
            gap: '12px',
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              style={{ gridRow: `span ${rowSpans[i] ?? 1}` }}
              onClick={() => setActive(i)}
            >
              <img
                src={review.src}
                alt="Review photo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={e => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff' }}
            aria-label="Затвори"
          >
            <X size={19} />
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff' }}
            aria-label="Предишен"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Modal card */}
          <div
            className="relative mx-16 rounded-2xl overflow-hidden shadow-2xl modal-in"
            style={{ maxWidth: '580px', width: '100%' }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={reviews[active].src}
              alt="Review"
              className="w-full object-contain"
              style={{ maxHeight: '72vh' }}
            />
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff' }}
            aria-label="Следващ"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
