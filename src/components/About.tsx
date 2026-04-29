import { Phone, MessageCircle, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const leftRef  = useScrollReveal(0);
  const rightRef = useScrollReveal(120);

  return (
    <section id="about" className="py-16 lg:py-24" style={{ backgroundColor: '#F8F2E8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">

          {/* Left — text in placeholder box */}
          <div
            ref={leftRef}
            className="p-6 lg:p-10 rounded-2xl"
            style={{ backgroundColor: '#FDFAF6', border: '1px solid #E0CEB4' }}
          >
            <h2
              className="font-serif text-3xl lg:text-5xl font-bold leading-tight mb-6 lg:mb-8"
              style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
            >
              Аз съм{' '}
              <span className="italic" style={{ color: '#A07030' }}>
                Марина<br />Панайотова
              </span>
            </h2>

            <div className="space-y-4 mb-6 lg:mb-9" style={{ color: '#4A3D30', lineHeight: '1.85' }}>
              <p className="text-[14px] lg:text-[17px]">
                В практиката си виждам нещо много важно: хората рядко идват при мен, защото са „слаби". Те идват, защото твърде дълго са носили всичко сами. <strong style={{ color: '#1A1610' }}>Функционирали са. Издържали са. Усмихвали са.</strong>
              </p>
              <p className="text-[14px] lg:text-[17px]">
                И в един момент тялото и психиката им просто са започнали да казват: <em style={{ color: '#1A1610' }}>„Повече не мога така."</em>
              </p>
              <p className="text-[14px] lg:text-[17px]">
                Затова моят подход не е повсеместен и не е еднакъв за всички. Работя индивидуално, според човека срещу мен — неговата история, неговата чувствителност, неговото темпо.
              </p>
            </div>

            {/* Credential tags */}
            <div className="flex flex-wrap gap-2">
              {['Магистър психолог', 'Психоаналитик', 'Сексолог', 'Специалист по електротерапия'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                  style={{
                    border: '1px solid rgba(160,112,48,0.4)',
                    color: '#7A5020',
                    backgroundColor: 'rgba(160,112,48,0.08)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — awards + CTAs */}
          <div ref={rightRef} className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <div className="space-y-4">
              {[
                {
                  img: '/Златна_Фирма_2025_image.jpg',
                  title: 'Златна Фирма 2025',
                  sub:   'Сред най-добрите фирми и съветници по клиентски намер',
                },
                {
                  img: '/Орхи_Здраве_2024_&_2025_image.jpg',
                  title: 'Орхи Здраве 2024 & 2025',
                  sub:   'Лауреат, 1-во място в сектор „Здравеопазване"',
                },
              ].map((award) => (
                <div
                  key={award.title}
                  className="flex items-center gap-4 p-5 rounded-2xl border"
                  style={{ borderColor: '#E0CEB4', backgroundColor: '#FDFAF6' }}
                >
                  <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={award.img} alt={award.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm" style={{ color: '#1A1610' }}>{award.title}</p>
                    <p className="text-xs mt-0.5 truncate" style={{ color: '#7A6A58' }}>{award.sub}</p>
                  </div>
                  <Award size={18} className="flex-shrink-0" style={{ color: '#A07030' }} />
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+359899199526"
                className="flex items-center justify-center gap-3 w-full py-4 px-8 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: '#A07030' }}
              >
                <Phone size={17} />
                Обади ми се
              </a>
              <div className="flex gap-3">
                <a
                  href="viber://chat?number=+359899199526"
                  className="flex items-center justify-center gap-2 flex-1 py-3 px-5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: '#8A7A6A' }}
                >
                  <MessageCircle size={14} />
                  Viber
                </a>
                <a
                  href="https://wa.me/359899199526"
                  className="flex items-center justify-center gap-2 flex-1 py-3 px-5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: '#7A6A58' }}
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
