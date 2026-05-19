import { Phone, MessageCircle } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function StickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch"
      style={{ backgroundColor: '#1A1610', borderTop: '1px solid #2A2018' }}
    >
      <a
        href="tel:+359899199526"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-xs font-semibold transition-opacity hover:opacity-80"
        style={{ color: '#FDFAF6', borderRight: '1px solid #2A2018' }}
      >
        <Phone size={14} />
        <span className="hidden xs:inline">Обади ми се</span>
        <span className="xs:hidden">Обади</span>
      </a>

      <a
        href="viber://chat?number=+359899199526"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-xs font-semibold transition-opacity hover:opacity-80"
        style={{ color: '#C4A87A', borderRight: '1px solid #2A2018' }}
      >
        <MessageCircle size={14} />
        Viber
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61575199230748&locale=bg_BG"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-xs font-semibold transition-opacity hover:opacity-80"
        style={{ color: '#7A9CC4', borderRight: '1px solid #2A2018' }}
      >
        <FacebookIcon />
        Facebook
      </a>

      <a
        href="https://wa.me/359899199526"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-xs font-semibold transition-opacity hover:opacity-80"
        style={{ color: '#8AB48A' }}
      >
        <MessageCircle size={14} />
        WhatsApp
      </a>
    </div>
  );
}
