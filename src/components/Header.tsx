import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: '#FDFAF6',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between"
      >
        <a
          href="#"
          className="font-sans text-sm font-medium tracking-wide"
          style={{ color: '#1A1610' }}
        >
          Марина Панайотова
        </a>

        <div className="flex items-center gap-5">
          <a
            href="viber://chat?number=+359899199526"
            className="text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: '#8B6F47' }}
          >
            Viber
          </a>
          <a
            href="https://wa.me/359899199526"
            className="text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: '#7A6A58' }}
          >
            WhatsApp
          </a>
          <a
            href="tel:+359899199526"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: '#1A1610' }}
          >
            <Phone size={13} />
            0899 199 526
          </a>
        </div>
      </div>
    </header>
  );
}
