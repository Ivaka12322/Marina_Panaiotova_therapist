import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

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
          марина панайотова — психолог и психотерапевт
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
            href="https://www.facebook.com/profile.php?id=61575199230748&locale=bg_BG"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: '#6B5A48' }}
          >
            <FacebookIcon />
            Facebook
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
