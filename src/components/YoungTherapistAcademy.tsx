import { MessageCircle, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  'Менторство от практикуващ психотерапевт с реален клиничен опит',
  'Работа с трудни случаи — как да реагираш уверено в кабинета',
  'Изграждане на автентична терапевтична идентичност',
  'Практически инструменти, готови за прилагане веднага',
  'Онлайн формат — работим от всяка точка на страната и чужбина',
];

export default function YoungTherapistAcademy() {
  const headerRef  = useScrollReveal(0);
  const bodyRef    = useScrollReveal(100);
  const featRef    = useScrollReveal(180);
  const ctaRef     = useScrollReveal(240);

  return (
    <section id="academy" className="py-24 lg:py-32" style={{ backgroundColor: '#F2E8D8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <div
            className="inline-flex items-center text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: 'rgba(160,112,48,0.12)', color: '#A07030', border: '1px solid rgba(160,112,48,0.22)' }}
          >
            За психолози
          </div>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-3"
            style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
          >
            The Young Therapist Academy
          </h2>
          <p
            className="text-base lg:text-lg font-medium"
            style={{ color: '#A07030' }}
          >
            Менторска академия за психолози в началото на практиката
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — body text */}
          <div ref={bodyRef}>
            <div className="space-y-4 mb-10">
              <p className="text-sm lg:text-[15px]" style={{ color: '#6B5A48', lineHeight: '1.82' }}>
                Ти си психолог, завършил университета. Имаш знанията. Но изведнъж разбираш, че теорията не е достатъчна. Не знаеш как да изградиш практика. Не знаеш как да работиш с трудните случаи. Чувстваш се сам в кабинета.
              </p>
              <p className="text-sm lg:text-[15px]" style={{ color: '#6B5A48', lineHeight: '1.82' }}>
                The Young Therapist Academy е създадена точно за теб — менторска програма, която подкрепя начинаещите психолози в изграждането на уверена, устойчива и автентична практика. Програмата е достъпна изцяло онлайн и може да се комбинира с книгата „Когато теорията вече не е достатъчна" за максимален ефект.
              </p>
            </div>

            {/* CTA */}
            <div ref={ctaRef}>
              <p className="text-xs mb-4" style={{ color: '#9A8A72' }}>
                Свържи се за повече информация и условия за включване
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="viber://chat?number=+359899199526"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: '#7360F2', color: '#FFFFFF' }}
                >
                  <MessageCircle size={16} />
                  Viber
                </a>
                <a
                  href="https://wa.me/359899199526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
              <p className="text-xs mt-3" style={{ color: '#9A8A72' }}>
                0899 199 526&nbsp;·&nbsp;09:00–17:00 ч.
              </p>
            </div>
          </div>

          {/* Right — features */}
          <div
            ref={featRef}
            className="rounded-2xl border p-7 lg:p-8"
            style={{ backgroundColor: '#FDFAF6', borderColor: '#E0CEB4' }}
          >
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: '#A07030' }}>
              Какво включва програмата
            </p>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: 'rgba(160,112,48,0.12)', color: '#A07030' }}
                  >
                    <Check size={11} />
                  </span>
                  <span className="text-sm lg:text-[15px]" style={{ color: '#6B5A48', lineHeight: '1.7' }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 pt-6 rounded-lg p-4"
              style={{ borderTop: '1px solid #E0CEB4', backgroundColor: 'rgba(160,112,48,0.05)' }}
            >
              <p className="text-xs" style={{ color: '#8B7A60', lineHeight: '1.7' }}>
                Програмата може да се комбинира с книгата{' '}
                <span className="font-medium" style={{ color: '#7A5020' }}>
                  „Когато теорията вече не е достатъчна"
                </span>{' '}
                за максимален ефект.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
