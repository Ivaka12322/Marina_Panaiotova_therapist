import { MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const books = [
  {
    badge: 'Психотерапия — за читатели',
    badgeStyle: { backgroundColor: 'rgba(160,112,48,0.1)', color: '#7A5020', border: '1px solid rgba(160,112,48,0.22)' },
    title: 'Когато тялото каже „Стига"',
    subtitle: 'Психотерапевтична система за трайно освобождаване от тревожност, паник атаки и натрапчиви мисли',
    desc: [
      'За всеки, уморен да живее в постоянно напрежение. Практическо ръководство, основано на метода Calm Override — стъпка по стъпка към реален и траен покой.',
      'Книгата разкрива механизма, по който тревожността се поддържа в тялото и ума, и предлага конкретни инструменти за нейното трайно преработване. Написана на достъпен език, с клинични примери и практически упражнения.',
      'Основана на метода Calm Override — авторски подход за реконструкция на мислите, разработен в рамките на над 6 години клинична практика.',
    ],
    image: '/image.png',
    imageAlt: 'Книга — Когато тялото каже Стига',
  },
  {
    badge: 'За психолози и терапевти',
    badgeStyle: { backgroundColor: 'rgba(74,100,130,0.1)', color: '#2A4060', border: '1px solid rgba(74,100,130,0.22)' },
    title: 'Когато теорията вече не е достатъчна',
    subtitle: 'За онези моменти в кабинета, за които никой не те е подготвил',
    desc: [
      'Книга за начинаещи психолози в първите им години на практика. Честна, практична и написана от някой, който е бил там.',
      'Разглежда реалните предизвикателства пред начинаещия терапевт: работа с трудни случаи, управление на собствените реакции в сесията, изграждане на терапевтична идентичност и справяне с несигурността.',
      'Идеален спътник към менторската програма The Young Therapist Academy.',
    ],
    image: '/image_copy.png',
    imageAlt: 'Книга — Когато теорията вече не е достатъчна',
  },
];

export default function Books() {
  const headerRef = useScrollReveal(0);
  const b0 = useScrollReveal(80);
  const b1 = useScrollReveal(180);
  const cardRefs = [b0, b1];

  return (
    <section id="books" className="py-24 lg:py-32" style={{ backgroundColor: '#F8F2E8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div ref={headerRef} className="mb-14">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#A07030' }}>
            Публикации
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2
              className="font-serif text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
            >
              Книги от<br />
              <span className="italic" style={{ color: '#A07030' }}>Марина Панайотова</span>
            </h2>
            <p className="text-sm max-w-sm" style={{ color: '#6B5A48', lineHeight: '1.75' }}>
              Написани от практика — за хора, търсещи промяна, и за психолози, търсещи увереност.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {books.map((book, i) => (
            <div
              key={i}
              ref={cardRefs[i]}
              className="rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#FDFAF6', borderColor: '#E0CEB4' }}
            >
              {/* Book image */}
              <div
                className="relative overflow-hidden"
                style={{ backgroundColor: '#F0E6D4', aspectRatio: '16/9' }}
              >
                <img
                  src={book.image}
                  alt={book.imageAlt}
                  className="w-full h-full object-contain p-8"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(253,250,246,0.6) 100%)' }}
                />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <span
                  className="inline-block text-xs font-bold tracking-wide uppercase mb-4 px-3 py-1 rounded-full"
                  style={book.badgeStyle}
                >
                  {book.badge}
                </span>

                <h3
                  className="font-serif text-xl lg:text-2xl font-bold mb-2 leading-snug"
                  style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
                >
                  {book.title}
                </h3>
                <p className="text-sm mb-5 font-medium" style={{ color: '#A07030', lineHeight: '1.5' }}>
                  {book.subtitle}
                </p>

                <div className="space-y-3 mb-7">
                  {book.desc.map((p, j) => (
                    <p key={j} className="text-sm" style={{ color: '#6B5A48', lineHeight: '1.78' }}>
                      {p}
                    </p>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #E0CEB4', paddingTop: '20px' }}>
                  <a
                    href="viber://chat?number=+359899199526"
                    className="inline-flex items-center gap-2.5 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    style={{ backgroundColor: '#A07030', color: '#FFFFFF' }}
                  >
                    <MessageCircle size={15} />
                    Поръчай чрез Viber
                  </a>
                  <p className="text-xs mt-3" style={{ color: '#9A8A72' }}>
                    Продава се изцяло онлайн
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
