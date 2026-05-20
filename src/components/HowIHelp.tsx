import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Card {
  num: string;
  title: string;
  subtitle: string;
  text: string;
  tags: string[];
}

const cards: Card[] = [
  {
    num: '01',
    title: 'Паник атаки и психосоматика',
    subtitle: 'Когато тялото говори вместо теб',
    text: 'Паник атаките, сърцебиенето, задухът, стягането в гърдите, физическите симптоми без медицинска причина, всичко това е начинът на нервната система да сигнализира за непреработен стрес. Работим с психотерапевтични техники и метода Calm Override за бързо успокояване и трайна стабилизация.',
    tags: ['Паник атаки', 'Хипервентилация', 'Сърцебиене', 'Психосоматика'],
  },
  {
    num: '02',
    title: 'Бърнаут',
    subtitle: 'Умора, която сънят не лекува',
    text: 'Бърнаутът не е мързел. Той е резултат от дългосрочно пренебрежение към собствените нужди в полза на работата и чуждите очаквания. Работим за разпознаване на причините, възстановяване на енергията и изграждане на устойчив начин на живот без самосаботаж.',
    tags: ['Емоционално изтощение', 'Загуба на мотивация', 'Хронична умора'],
  },
  {
    num: '03',
    title: 'Тревожност и депресия',
    subtitle: 'Без лекарства, с трайни резултати',
    text: 'Постоянното безпокойство, тъгата без причина и натрапчивите мисли имат физиологично обяснение и решение. Чрез психотерапия и метода Calm Override работим едновременно на психическо и физиологично ниво.',
    tags: ['Генерализирана тревожност', 'Социална тревожност', 'Депресивни епизоди'],
  },
  {
    num: '04',
    title: 'Ниска увереност и самочувствие',
    subtitle: 'Изграждане на трайна вътрешна сила',
    text: 'Ниското самочувствие не е характер, то е научен модел, усвоен с години. Заедно работим за разпознаване на вътрешния критик, изграждане на здравословни граници и трайна увереност в себе си.',
    tags: ['Вътрешен критик', 'Самосаботаж', 'Перфекционизъм', 'Самооценка'],
  },
  {
    num: '05',
    title: 'Саморефлекция и себепреоткриване',
    subtitle: 'Кой си под всичко, което са те накарали да бъдеш?',
    text: 'Понякога не ни е нужна криза, нужно ни е огледало. Работя с хора в преходни периоди: след раздяла, промяна на кариерата, загуба на смисъл или усещане, че животът не е техен.',
    tags: ['Идентичност', 'Жизнен смисъл', 'Личностно израстване'],
  },
  {
    num: '06',
    title: 'Нарцисизъм и емоционална зависимост',
    subtitle: 'Специализирана работа след токсични отношения',
    text: 'Жените след дългогодишни отношения с нарцистичен партньор носят невидими рани: съмнение в собствения разум, хронично чувство за вина и изгубена идентичност. Работя за възстановяване на граници, самочувствие и себепознание.',
    tags: ['Газлайтинг', 'Емоционална манипулация', 'Токсични отношения'],
  },
  {
    num: '07',
    title: 'Детски травми',
    subtitle: 'Детството не трябва да определя живота ти днес',
    text: 'Детските травми, емоционалното пренебрежение, отхвърлянето и дисфункционалното семейство оставят дълбоки отпечатъци. Работим внимателно и безопасно за разпознаване, преработване и освобождаване от тези модели.',
    tags: ['Вътрешно дете', 'Семейна дисфункция', 'Емоционално пренебрежение'],
  },
  {
    num: '08',
    title: 'Травми от насилие',
    subtitle: 'Случилото се не е твоя вина',
    text: 'Работя с оцелели от физическо и сексуално насилие в безопасна, поверителна и неосъждаща среда.',
    tags: [],
  },
  {
    num: '09',
    title: 'Семейни консултации',
    subtitle: 'Когато един се промени, всички се променят',
    text: 'Работя с двойки и семейства, преживяващи комуникационни кризи, конфликти или родителски трудности. Целта не е задължително запазване на връзката, целта е яснота, уважение и здравословна комуникация.',
    tags: ['Двойки', 'Семейни конфликти', 'Комуникация', 'Родителство'],
  },
];

function ExpandableCard({ card, delay }: { card: Card; delay: number }) {
  const [open, setOpen] = useState(false);
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: '#FDFAF6',
        borderColor: open ? '#A07030' : '#E0CEB4',
        boxShadow: open ? '0 4px 24px rgba(160,112,48,0.10)' : '0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      <button
        className="w-full text-left p-5 lg:p-6 flex items-start justify-between gap-4 hover:bg-amber-50 transition-colors duration-200"
        style={{ '--tw-bg-opacity': '1' } as React.CSSProperties}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <span
            className="font-serif text-5xl font-bold leading-none select-none block mb-3"
            style={{ color: 'rgba(160,112,48,0.15)', fontFamily: 'Playfair Display, serif' }}
          >
            {card.num}
          </span>
          <h3
            className="font-serif text-base lg:text-lg font-semibold mb-1.5 leading-snug"
            style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
          >
            {card.title}
          </h3>
          <p className="text-xs lg:text-sm font-medium" style={{ color: '#A07030' }}>
            {card.subtitle}
          </p>
        </div>
        <span
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mt-1 transition-all duration-200"
          style={{
            color: '#A07030',
            backgroundColor: open ? 'rgba(160,112,48,0.12)' : 'rgba(160,112,48,0.06)',
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '600px' : '0' }}
      >
        <div className="px-5 lg:px-6 pb-5 lg:pb-6">
          <div style={{ borderTop: '1px solid #E8D8C0', paddingTop: '20px' }}>
            <p
              className="text-sm lg:text-[15px] mb-5"
              style={{ color: '#6B5A48', lineHeight: '1.82' }}
            >
              {card.text}
            </p>
            {card.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: 'rgba(160,112,48,0.08)',
                      color: '#7A5020',
                      border: '1px solid rgba(160,112,48,0.18)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowIHelp() {
  const headerRef = useScrollReveal(0);

  return (
    <section id="how" className="py-12 lg:py-20" style={{ backgroundColor: '#F2E8D8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div ref={headerRef} className="mb-8">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#A07030' }}>
            С какво мога да ти помогна
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2
              className="font-serif text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
            >
              С какво мога<br />
              <span className="italic" style={{ color: '#A07030' }}>да ти помогна?</span>
            </h2>
            <p className="text-sm max-w-sm lg:text-right" style={{ color: '#6B5A48', lineHeight: '1.75' }}>
              Разкликни тема, която те засяга, за да научиш повече за начина на работа.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 items-start">
          {cards.map((card, i) => (
            <ExpandableCard key={card.num} card={card} delay={Math.min(i * 55, 300)} />
          ))}
        </div>

      </div>
    </section>
  );
}
