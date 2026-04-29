import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Ще разбера какво се случва с теб',
    desc:  'Без обвинения. Ще започнем да извеждам връзката между мислите, тялото, емоциите и начина, по който нервната система реагира.',
  },
  {
    num: '02',
    title: 'Ще получиш подход, съобразен с теб',
    desc:  'Не работя по шаблон. Подходът се съобразява с твоето състояние, история, чувствителност и готовност за промяна.',
  },
  {
    num: '03',
    title: 'Ще усетиш реална стабилизация',
    desc:  'Страховете отслабват, мислите спират да завладяват и ти започваш да функционираш нормално — с повече спокойствие и увереност.',
  },
];

export default function HowIHelp() {
  const headerRef = useScrollReveal(0);
  const c0 = useScrollReveal(0);
  const c1 = useScrollReveal(120);
  const c2 = useScrollReveal(240);
  const cardRefs = [c0, c1, c2];

  return (
    <section id="how" className="py-24 lg:py-32" style={{ backgroundColor: '#F2E8D8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div ref={headerRef} className="mb-16">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#A07030' }}>
            Как ще ти помогна
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
          >
            Ясен подход,<br />
            <span className="italic" style={{ color: '#A07030' }}>реална промяна</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={cardRefs[i]}
              className="p-8 lg:p-10 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: '#FDFAF6', borderColor: '#E0CEB4' }}
            >
              <p
                className="font-serif text-6xl font-bold mb-6 leading-none select-none"
                style={{ color: 'rgba(160,112,48,0.14)', fontFamily: 'Playfair Display, serif' }}
              >
                {step.num}
              </p>
              <h3
                className="font-serif text-lg lg:text-xl font-semibold mb-4 leading-snug"
                style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm lg:text-[15px]"
                style={{ color: '#6B5A48', lineHeight: '1.8' }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
