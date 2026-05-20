import { useEffect, useRef } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.classList.add('animate-fade-up');
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-14"
      style={{ backgroundColor: '#F8F2E8', minHeight: '90vh' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20 flex items-center min-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">

          {/* ── Left: Text content ── */}
          <div ref={contentRef} className="order-2 lg:order-1 text-center lg:text-left">
            <p
              className="text-[11px] font-bold tracking-[0.22em] uppercase mb-8"
              style={{ color: '#A07030' }}
            >
              &nbsp;&nbsp;·&nbsp;&nbsp;
            </p>

            <h1
              className="font-serif text-3xl lg:text-4xl xl:text-[2.8rem] font-bold leading-[1.15] mb-6"
              style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
            >
              Превръщам паниката, тревожността и натрапчивите мисли в стабилност и увереност — без лекарства
            </h1>

            <p
              className="text-[11px] font-bold tracking-[0.2em] uppercase mb-9"
              style={{ color: '#7A6A58' }}
            >
              Магистър психолог&nbsp;·&nbsp;Психотерапевт&nbsp;·&nbsp;Психоаналитик&nbsp;·&nbsp;Сексолог
            </p>

            <p
              className="text-base lg:text-[17px] mb-10 max-w-[420px] mx-auto lg:mx-0"
              style={{ color: '#4A3D30', lineHeight: '1.8' }}
            >
              Психотерапевтични консултации и иновативна невро-стимулираща терапия, за ума и мозъка едновременно.
            </p>

            {/* Primary CTA */}
            <a
              href="tel:+359899199526"
              className="flex items-center justify-center gap-3 py-4 px-8 rounded-xl text-white font-semibold text-base mb-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg mx-auto lg:mx-0"
              style={{ backgroundColor: '#A07030', maxWidth: '440px' }}
            >
              <Phone size={17} />
              Обади ми се
            </a>

            {/* Social buttons */}
            <div className="flex flex-wrap gap-3 lg:gap-3 justify-center lg:justify-start">
              <a
                href="viber://chat?number=+359899199526"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: '#8B6F47' }}
              >
                <MessageCircle size={15} />
                Viber
              </a>
              <a
                href="https://wa.me/359899199526"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: '#7A6A58' }}
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575199230748"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: '#6B5A48' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* ── Right: Photo with placeholder ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background shape */}
              <div
                className="absolute -inset-5 rounded-3xl"
                style={{ backgroundColor: '#E8D5B4', opacity: 0.5 }}
              />

              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ maxWidth: '380px', width: '100%' }}
              >
                <img
                  src="/Hero_image.jpg"
                  alt="Марина Панайотова — психотерапевт"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: '3/4', maxHeight: '520px' }}
                />
              </div>

              {/* Stats badge */}
              <div
                className="absolute -bottom-4 -right-3 lg:-right-6 rounded-2xl px-5 py-4 shadow-xl text-white"
                style={{ backgroundColor: '#A07030', zIndex: 2 }}
              >
                <p
                  className="font-serif text-3xl font-bold leading-none"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  6+
                </p>
                <p className="text-xs font-medium mt-1 opacity-90 whitespace-nowrap">
                  години опит
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
