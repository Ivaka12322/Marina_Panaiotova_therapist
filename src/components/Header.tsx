import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FacebookIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ViberIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.996 0C5.729 0 .671 4.934.671 11.047c0 3.12 1.304 5.95 3.416 8.005L2.671 23l4.104-1.354A11.39 11.39 0 0011.996 22.1c6.267 0 11.325-4.934 11.325-11.053C23.321 4.934 18.263 0 11.996 0zm5.87 15.788c-.247.684-.797 1.247-1.493 1.49-.545.193-1.234.348-3.455-.744-2.78-1.373-4.573-4.2-4.71-4.393-.137-.193-1.14-1.512-1.14-2.883 0-1.37.718-2.042 1.003-2.334.247-.254.647-.37 1.032-.37.125 0 .238.007.34.012.298.013.449.03.645.5.247.59.849 2.044.921 2.19.073.146.146.344.044.548-.096.21-.18.303-.326.472-.146.169-.285.298-.43.48-.134.16-.285.33-.116.628.169.297.75 1.237 1.611 2.003 1.107.987 2.022 1.303 2.352 1.439.248.103.544.077.72-.11.221-.237.493-.632.769-1.021.198-.276.447-.31.71-.21.267.096 1.691.795 1.98.94.291.146.484.218.556.338.071.12.071.689-.176 1.374z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
          <span className="hidden sm:inline">марина панайотова — психолог и психотерапевт</span>
          <span className="sm:hidden">марина панайотова</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-5">
          {/* Mobile: icon-only links */}
          <a
            href="viber://chat?number=+359899199526"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full transition-opacity hover:opacity-60"
            style={{ color: '#8B6F47' }}
            aria-label="Viber"
          >
            <ViberIcon size={18} />
          </a>
          <a
            href="https://wa.me/359899199526"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full transition-opacity hover:opacity-60"
            style={{ color: '#25D366' }}
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61575199230748&locale=bg_BG"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full transition-opacity hover:opacity-60"
            style={{ color: '#1877F2' }}
            aria-label="Facebook"
          >
            <FacebookIcon size={18} />
          </a>

          {/* Desktop: text links (unchanged) */}
          <a
            href="viber://chat?number=+359899199526"
            className="hidden sm:flex text-sm font-medium transition-opacity hover:opacity-60"
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
            className="hidden sm:flex text-sm font-medium transition-opacity hover:opacity-60"
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
