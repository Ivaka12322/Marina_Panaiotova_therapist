import { Phone, MessageCircle, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FacebookIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const bioText = [
  'Казвам се Марина Панайотова и съм магистър психолог, психотерапевт, сертифициран психоаналитик и сексолог с практика в областта на тревожно-депресивните разстройства, личностното развитие, работата с травма и неврологичната рехабилитация.',
  'Работя на границата между психотерапията и невронауката, защото вярвам, че устойчивата промяна настъпва, когато работим едновременно с психиката и мозъка.',
  'Създател съм на Calm Override — първият метод в България за реконструкция на мислите при тревожност и паник атаки.',
  'Автор съм на две книги и основател на The Young Therapist Academy — менторска академия за начинаещи психолози.',
  'Работя с уважение и без осъждане. Хората, които идват при мен, вече са достатъчно строги към себе си. Аз съм тук с една цел — да се чувстваш по-добре в собствения си живот.',
];

export default function About() {
  const leftRef  = useScrollReveal(0);
  const rightRef = useScrollReveal(120);

  return (
    <section id="about" className="py-10 lg:py-16" style={{ backgroundColor: '#F8F2E8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">

          {/* Left — bio text */}
          <div
            ref={leftRef}
            className="p-5 lg:p-8 rounded-2xl text-center lg:text-left"
            style={{ backgroundColor: '#FDFAF6', border: '1px solid #E0CEB4' }}
          >
            <h2
              className="font-serif text-3xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6"
              style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
            >
              Аз съм{' '}
              <span className="italic" style={{ color: '#A07030' }}>
                Марина<br />Панайотова
              </span>
            </h2>

            {/* Photo — visible on mobile above text, on desktop inside the card */}
            <div className="mb-6 rounded-xl overflow-hidden lg:hidden" style={{ maxHeight: '320px' }}>
              <img
                src="/image.png"
                alt="Марина Панайотова"
                className="w-full object-cover object-top"
                style={{ maxHeight: '320px' }}
              />
            </div>

            <div className="space-y-3 mb-5 lg:mb-7" style={{ color: '#4A3D30', lineHeight: '1.85' }}>
              {bioText.map((para, i) => (
                <p key={i} className="text-[14px] lg:text-[16px]">
                  {para}
                </p>
              ))}
            </div>

          </div>

          {/* Right — photo + awards + CTAs */}
          <div ref={rightRef}>

            {/* Photo — desktop only */}
            <div className="hidden lg:block mb-6 rounded-2xl overflow-hidden">
              <img
                src="/image.png"
                alt="Марина Панайотова"
                className="w-full object-cover object-top"
                style={{ maxHeight: '360px' }}
              />
            </div>

            {/* Mobile: Compact CTA layout */}
            <div className="space-y-3 lg:hidden mb-6">
              {[
                { img: '/Златна_Фирма_2025_image.jpg', title: 'Златна Фирма 2025' },
                { img: '/Орхи_Здраве_2024_&_2025_image.jpg', title: 'Орхи Здраве 2024 & 2025' },
              ].map((award) => (
                <div
                  key={award.title}
                  className="flex items-center gap-3 p-4 rounded-2xl border"
                  style={{ borderColor: '#E0CEB4', backgroundColor: '#FDFAF6' }}
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={award.img} alt={award.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm" style={{ color: '#1A1610' }}>{award.title}</p>
                  </div>
                  <Award size={16} className="flex-shrink-0" style={{ color: '#A07030' }} />
                </div>
              ))}

              <a
                href="tel:+359899199526"
                className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: '#A07030' }}
              >
                <Phone size={16} />
                Обади ми се
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="viber://chat?number=+359899199526"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: '#8B6F47' }}
                >
                  <MessageCircle size={14} />
                  Viber
                </a>
                <a
                  href="https://wa.me/359899199526"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: '#7A6A58' }}
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=61575199230748&locale=bg_BG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: '#6B5A48' }}
              >
                <FacebookIcon size={14} />
                Facebook
              </a>
            </div>

            {/* Desktop: Awards + CTAs */}
            <div className="hidden lg:block">
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
                    className="flex items-center gap-4 p-5 rounded-2xl"
                    style={{ border: '1px solid #E0CEB4', backgroundColor: '#FDFAF6' }}
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
                    style={{ backgroundColor: '#8B6F47' }}
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
                <a
                  href="https://www.facebook.com/profile.php?id=61575199230748&locale=bg_BG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: '#1877F2' }}
                >
                  <FacebookIcon size={14} />
                  Последвай ни във Facebook
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
