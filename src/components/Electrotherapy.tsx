import { Phone, Brain, Shield, Heart, Activity, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const brainSteps = [
  {
    num: '01',
    title: 'Прекъсва тревожния ритъм',
    desc:  'Pитмичната стимулация променя доминиращата електрическа активност на мозъка и го извежда от хронично свръхвъзбудено състояние.',
  },
  {
    num: '02',
    title: 'Създава нови невронни връзки',
    desc:  'Стимулира невропластичността — мозъкът изгражда нови, по-здрави пътища на комуникация. Здравата комуникация между мозъчните центрове води до трайно намаляване и изчезване на симптомите.',
  },
  {
    num: '03',
    title: 'Повдига прага на чувствителност',
    desc:  'Нервната система спира да реагира на всяко предизвикателство като на заплаха. Емоциите се преработват, вместо да се поглъщат навътре.',
  },
  {
    num: '04',
    title: 'Естествено производство на серотонин, ендорфини и мелатонин',
    desc:  'Тялото само произвежда веществата, от които се е нуждаело — без медикаменти, с дълготраен и устойчив ефект.',
  },
];

const changes = [
  { icon: <Brain size={15} />,    text: 'Мислите се реконструират — натрапливите вериги отслабват и спират' },
  { icon: <Shield size={15} />,   text: 'Страховете губят сила — реакцията на заплаха се нормализира' },
  { icon: <Heart size={15} />,    text: 'Емоциите се филтрират — спира поемането навътре на всяка емоция' },
  { icon: <Activity size={15} />, text: 'Функционирането се възстановява — увереността се повдига' },
  { icon: <Zap size={15} />,      text: 'Резултатите са дълготрайни — новите невронни връзки остават' },
];

const phases = [
  {
    label: 'ПРЕДИ СТАРТА',
    title: 'Удобно настаняване',
    desc:  'Лягаш удобно. Слушалки, светлинни очила, при нужда — леки клипсове. Нищо болезнено.',
  },
  {
    label: 'ПЪРВИТЕ МИНУТИ',
    title: 'Ритмична стимулация',
    desc:  'Меки звукови пулсации и деликатни светлинни импулси. Някои виждат цветове — нормална реакция.',
  },
  {
    label: 'СЛЕД 6–8 МИНУТИ',
    title: 'Мислите утихват',
    desc:  'Вътрешният диалог отслабва. Тревожните мисли се отдалечават. Тялото натежава приятно.',
  },
  {
    label: 'В ХОДА',
    title: 'Дълбока тишина',
    desc:  'Сърцето се успокоява. Настъпва вътрешна тишина и усещане за безопасност. Някои заспиват.',
  },
];

export default function Electrotherapy() {
  const headerRef     = useScrollReveal(0);
  const statsRef      = useScrollReveal(80);
  const contentRef    = useScrollReveal(100);
  const changesRef    = useScrollReveal(80);
  const caseCardsRef  = useScrollReveal(80);
  const phasesRef     = useScrollReveal(80);
  const disclaimerRef = useScrollReveal(80);

  return (
    <section id="electrotherapy" className="py-16 lg:py-20" style={{ backgroundColor: '#1A1610' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: '#C4965A' }}>
            Електротерапия
          </p>
          <h2
            className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-5"
            style={{ color: '#F8F2E8', fontFamily: 'Playfair Display, serif' }}
          >
            Тревожността може да бъде<br />
            <span className="italic" style={{ color: '#C4965A' }}>изключена от корена</span>
          </h2>
          <p
            className="text-sm lg:text-base max-w-2xl"
            style={{ color: '#A09080', lineHeight: '1.75' }}
          >
            Неинвазивна аудио-визуална и кранио-електростимулация, която създава нови невронни връзки в мозъка, прекъсва веригата на тревожността и позволява на нервната система да функционира нормално.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-4 lg:gap-8 mb-14 pb-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          {[
            { val: '3+', label: 'години практика без рецидив' },
            { val: '1',  label: 'процедура показва резултати' },
            { val: '0',  label: 'странични ефекти' },
          ].map(({ val, label }) => (
            <div key={val} className="pl-3" style={{ borderLeft: '2px solid #C4965A' }}>
              <p
                className="font-serif text-3xl lg:text-4xl font-bold mb-1"
                style={{ color: '#F8F2E8', fontFamily: 'Playfair Display, serif' }}
              >
                {val}
              </p>
              <p className="text-xs" style={{ color: '#7A6A5A', lineHeight: '1.5' }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* How it works in the brain + photo */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-14 items-start"
        >
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#C4965A' }}>
              Как работи в мозъка
            </p>
            <div className="space-y-5">
              {brainSteps.map((step) => (
                <div key={step.num} className="flex gap-3">
                  <span
                    className="font-serif text-xs font-bold flex-shrink-0 mt-0"
                    style={{ color: '#C4965A', fontFamily: 'Playfair Display, serif', minWidth: '22px' }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-semibold text-xs mb-1" style={{ color: '#F8F2E8' }}>
                      {step.title}
                    </h4>
                    <p className="text-xs" style={{ color: '#7A6A5A', lineHeight: '1.6' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/Brain_scan_image.jpg"
              alt="Мозъчна сканиране — електротерапия"
              className="w-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>

        {/* What changes after */}
        <div ref={changesRef} className="mb-12">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: '#C4965A' }}>
            Какво се променя след процедурите
          </p>
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {changes.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  borderBottom: i < changes.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
              >
                <span className="flex-shrink-0" style={{ color: '#C4965A' }}>{item.icon}</span>
                <p className="text-xs lg:text-sm" style={{ color: '#C4B49A' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use case cards */}
        <div ref={caseCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            {
              title: 'При спиране на антидепресанти',
              body:  'Симптомите на отнемане са по-леки при клиенти, работещи с електротерапия паралелно. Нервната система получава подкрепа точно когато медикаментът се оттегля.',
            },
            {
              title: 'При зависимости и абстиненция',
              body:  'Електротерапията стимулира естественото производство на ендорфини и серотонин. Абстиненцията протича по-леко, нервната система се стабилизира бързо.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="p-5 rounded-xl"
              style={{ border: '1px solid rgba(196,150,90,0.28)', backgroundColor: 'rgba(196,150,90,0.06)' }}
            >
              <h4 className="font-semibold text-sm mb-2" style={{ color: '#F8F2E8' }}>{card.title}</h4>
              <p className="text-xs" style={{ color: '#7A6A5A', lineHeight: '1.6' }}>{card.body}</p>
            </div>
          ))}
        </div>

        {/* Phases timeline */}
        <div ref={phasesRef} className="mb-10">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#C4965A' }}>
            Какво ще почувстваш
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {phases.map((phase) => (
              <div
                key={phase.label}
                className="p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="text-[9px] font-bold tracking-[0.18em] mb-2" style={{ color: '#C4965A' }}>
                  {phase.label}
                </p>
                <h4 className="font-semibold text-xs mb-2" style={{ color: '#F8F2E8' }}>{phase.title}</h4>
                <p className="text-xs" style={{ color: '#6A5A4A', lineHeight: '1.5' }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div
          ref={disclaimerRef}
          className="mb-8 p-4 rounded-lg"
          style={{ backgroundColor: 'rgba(196,150,90,0.09)', border: '1px solid rgba(196,150,90,0.22)' }}
        >
          <p className="text-xs" style={{ color: '#A09070', lineHeight: '1.6' }}>
            <strong style={{ color: '#C4965A' }}>Важно:</strong> Не замества психотерапията. Не се препоръчва при епилепсия, травма и бременност.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="tel:+359899199526"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-lg text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: '#A07030' }}
          >
            <Phone size={15} />
            Обади ми се
          </a>
          <p className="text-xs" style={{ color: '#5A4A3A' }}>
            0899 199 526&nbsp;·&nbsp;09:00–17:00 ч.
          </p>
        </div>

      </div>
    </section>
  );
}
