import { MapPin, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const locations = [
  {
    city:    'ХАСКОВО',
    line1:   'Бул. Съединение 98, „Лайф център"',
    line2:   'ет. 8, ст. 2, офис 42',
    primary: true,
  },
  {
    city:    'КЪРДЖАЛИ',
    line1:   'кв. Възрожденци',
    line2:   'ул. Дякон Атанасов 6, кабинет 2',
    primary: false,
  },
];

export default function Locations() {
  const headerRef = useScrollReveal(0);
  const cardsRef  = useScrollReveal(140);

  return (
    <section id="locations" className="py-16 lg:py-24" style={{ backgroundColor: '#2C2520' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div ref={headerRef} className="mb-14">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#C4965A' }}>
            Кабинети
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ color: '#F8F2E8', fontFamily: 'Playfair Display, serif' }}
          >
            Ето къде ще те посрещна
          </h2>
          <p className="text-base max-w-xl" style={{ color: '#8A7A6A', lineHeight: '1.8' }}>
            Работя в спокойна, дискретна и професионална среда, в която човек може да каже напрежението и да бъде чут.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="p-8 rounded-2xl transition-all duration-300 hover:shadow-xl"
              style={{ border: '1px solid rgba(196,150,90,0.22)', backgroundColor: 'rgba(255,255,255,0.03)' }}
            >
              <div className="flex items-start gap-3 mb-7">
                <MapPin size={17} className="flex-shrink-0 mt-0.5" style={{ color: '#C4965A' }} />
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#C4965A' }}>
                    {loc.city}
                  </p>
                  <p className="font-medium text-sm lg:text-base" style={{ color: '#F8F2E8' }}>{loc.line1}</p>
                  <p className="text-sm mt-1" style={{ color: '#7A6A5A' }}>{loc.line2}</p>
                </div>
              </div>

              {loc.primary ? (
                <a
                  href="tel:+359899199526"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: '#A07030' }}
                >
                  <Phone size={14} />
                  Запишете час
                </a>
              ) : (
                <a
                  href="tel:+359899199526"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ border: '1px solid rgba(196,150,90,0.45)', color: '#C4965A' }}
                >
                  <Phone size={14} />
                  Запишете час
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
