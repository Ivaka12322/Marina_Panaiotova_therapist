import { Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const issues = [
  'Тревожност и панически атаки',
  'Ниско самочувствие',
  'Депресивни състояния',
  'Травми от детството',
  'ОКР и натрапливи мисли',
  'Преживяно насилие',
  'ПТСР, стрес и бърнаут',
  'Семейни и партньорски трудности',
  'Зависимости',
  'Безсъние и психично пренапрежение',
];

export default function Issues() {
  const headerRef = useScrollReveal(0);
  const listRef   = useScrollReveal(150);
  const ctaRef    = useScrollReveal(220);

  const col1 = issues.slice(0, 5);
  const col2 = issues.slice(5);

  return (
    <section id="issues" className="py-24 lg:py-32" style={{ backgroundColor: '#F8F2E8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div ref={headerRef} className="mb-12">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#A07030' }}>
            Работя при
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
          >
            Ако се разпознаваш<br />
            в{' '}
            <span className="italic" style={{ color: '#A07030' }}>поне едно</span>
            {' '}от тези
          </h2>
        </div>

        <div
          ref={listRef}
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border mb-12"
          style={{ borderColor: '#E0CEB4' }}
        >
          {[col1, col2].map((col, ci) => (
            <div
              key={ci}
              style={{ borderRight: ci === 0 ? '1px solid #E0CEB4' : 'none' }}
            >
              {col.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-6 py-[14px]"
                  style={{
                    borderBottom: i < col.length - 1 ? '1px solid #E0CEB4' : 'none',
                    backgroundColor: '#FDFAF6',
                  }}
                >
                  <span
                    className="flex-shrink-0 font-semibold text-lg leading-none"
                    style={{ color: '#A07030' }}
                  >
                    •
                  </span>
                  <span className="text-sm lg:text-[15px] font-medium" style={{ color: '#2C1F10' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div ref={ctaRef}>
          <a
            href="tel:+359899199526"
            className="inline-flex items-center gap-3 py-4 px-8 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: '#A07030' }}
          >
            <Phone size={17} />
            Обади ми се
          </a>
        </div>

      </div>
    </section>
  );
}
