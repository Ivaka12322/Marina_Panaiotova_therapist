import { Phone, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTASection() {
  const ref = useScrollReveal(0);

  return (
    <section id="contact" className="py-12 lg:py-20" style={{ backgroundColor: '#A07030' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div ref={ref}>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ color: '#FDFAF6', fontFamily: 'Playfair Display, serif' }}
          >
            Готови ли сте да направите<br />
            първата стъпка?
          </h2>

          <p
            className="text-base lg:text-[17px] mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(253,250,246,0.78)', lineHeight: '1.8' }}
          >
            Обадете се, пишете ни на Viber или WhatsApp — отговарям лично.
            <span className="hidden md:inline"><br />Всяка консултация е в пълна конфиденциалност.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+359899199526"
              className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: '#FDFAF6', color: '#A07030' }}
            >
              <Phone size={15} />
              0899 199 526
            </a>
            <a
              href="viber://chat?number=+359899199526"
              className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: '#8B6F47', color: '#fff' }}
            >
              <MessageCircle size={15} />
              Viber
            </a>
            <a
              href="https://wa.me/359899199526"
              className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: '#7A6A58', color: '#fff' }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575199230748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: '#6B5A48', color: '#fff' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>

          <p className="mt-8 text-sm" style={{ color: 'rgba(253,250,246,0.52)' }}>
            Отговарям в делничните дни между 09:00 и 17:00 ч.
          </p>
        </div>
      </div>
    </section>
  );
}
