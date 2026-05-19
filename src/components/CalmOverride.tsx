import { MessageCircle, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  'Работим онлайн, стъпка по стъпка, под прякото ми ръководство. Без значение къде се намираш.',
  'Индивидуален подход, адаптиран изцяло към теб',
  'Авторският метод Calm Override в структуриран формат',
  'Работа онлайн от всяка точка на света',
  'Трайни резултати, не само временно облекчение',
  'Подкрепа и обратна връзка по време на целия процес',
];

export default function CalmOverride() {
  const headerRef  = useScrollReveal(0);
  const imageRef   = useScrollReveal(80);
  const programRef = useScrollReveal(160);

  return (
    <section id="calm-override" className="py-12 lg:py-20" style={{ backgroundColor: '#F2E8D8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-10 items-center">
          <div ref={headerRef}>
            <div
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(160,112,48,0.12)', color: '#A07030', border: '1px solid rgba(160,112,48,0.22)' }}
            >
              Авторски метод — Първи в България
            </div>
            <h2
              className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
            >
              Calm Override —<br />
              <span className="italic" style={{ color: '#A07030' }}>реконструкция на мислите</span>
            </h2>
            <div className="space-y-4" style={{ color: '#6B5A48', lineHeight: '1.82' }}>
              <p className="text-sm lg:text-[15px]">
                Calm Override е авторски психотерапевтичен метод, разработен от Марина Панайотова. Първият по рода си в България, фокусиран върху систематична реконструкция на мисловните модели, поддържащи тревожността и паник атаките.
              </p>
              <p className="text-sm lg:text-[15px]">
                Методът съчетава доказани психотерапевтични техники с неврологично разбиране за начина, по който мозъкът създава и поддържа тревожни реакции. Резултатът е трайна промяна, не само облекчаване на симптомите, а реална трансформация на начина на мислене.
              </p>
              <p className="text-sm lg:text-[15px]">
                Calm Override се прилага в индивидуалните терапевтични сесии и е основата на онлайн програмата Calm Override Mastery — структурирана менторска програма за хора, желаещи да работят върху тревожността си самостоятелно под ръководство.
              </p>
            </div>
          </div>

          <div ref={imageRef}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Picture_with_sofa.jpg"
                alt="Марина Панайотова — Calm Override"
                className="w-full object-cover object-right"
                style={{ aspectRatio: '2/4' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,22,16,0.4) 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="font-serif text-lg font-semibold leading-snug"
                  style={{ color: '#F8F2E8', fontFamily: 'Playfair Display, serif' }}
                >
                  Марина Панайотова
                </p>
                <p className="text-xs mt-1" style={{ color: 'rgba(248,242,232,0.7)' }}>
                  Психотерапевт · Автор на метода Calm Override
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Online Program Card */}
        <div
          ref={programRef}
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid #D4B87A', backgroundColor: '#FDFAF6' }}
        >
          <div
            className="px-5 py-3 lg:px-10 lg:py-5"
            style={{ backgroundColor: 'rgba(160,112,48,0.08)', borderBottom: '1px solid #E0CEB4' }}
          >
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: '#A07030' }}>
              Онлайн програма
            </p>
          </div>

          <div className="p-5 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
              <div>
                <h3
                  className="font-serif text-xl lg:text-3xl font-bold mb-1.5 leading-tight"
                  style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
                >
                  Calm Override Mastery
                </h3>
                <p className="text-xs lg:text-sm mb-4" style={{ color: '#A07030' }}>
                  Структурирана програма за трайно освобождаване от тревожност
                </p>
                <ul className="space-y-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'rgba(160,112,48,0.12)', color: '#A07030' }}
                      >
                        <Check size={9} />
                      </span>
                      <span className="text-xs lg:text-[15px]" style={{ color: '#6B5A48', lineHeight: '1.6' }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:pt-8">
                <p className="text-xs lg:text-sm mb-4" style={{ color: '#8B7A60', lineHeight: '1.75' }}>
                  Свържи се с мен за повече информация за програмата и условията за включване.
                </p>
                <div className="flex flex-row gap-2.5">
                  <a
                    href="viber://chat?number=+359899199526"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs lg:text-sm flex-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: '#7360F2', color: '#FFFFFF' }}
                  >
                    <MessageCircle size={14} />
                    Viber
                  </a>
                  <a
                    href="https://wa.me/359899199526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs lg:text-sm flex-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
                <p className="text-xs mt-3" style={{ color: '#9A8A72' }}>
                  0899 199 526&nbsp;·&nbsp;09:00–17:00 ч.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
