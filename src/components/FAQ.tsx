import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'Болезнена ли е електротерапията?',
    a: 'Не. Процедурата е напълно неинвазивна и безболезнена. Усещате леки, ритмични импулси — звукови и светлинни. Много клиенти описват усещането като дълбока релаксация.',
  },
  {
    q: 'Кога ще усетя резултат?',
    a: 'При повечето клиенти симптомите намаляват значително след първата процедура. Трайните резултати се постигат обикновено след 3–6 сесии, в зависимост от индивидуалното състояние.',
  },
  {
    q: 'Дали резултатите са трайни?',
    a: 'Да. Електротерапията създава нови невронни връзки в мозъка. Тези връзки остават след края на процедурите — за разлика от медикаментите, ефектът не изчезва при спиране.',
  },
  {
    q: 'Помага ли при спиране на антидепресанти?',
    a: 'Да, значително. Клиенти, работещи с електротерапия паралелно с намаляване на дозата, съобщават за много по-леки симптоми на отнемане. Всяка промяна в медикацията трябва да се съгласува с лекар.',
  },
  {
    q: 'Работиш ли с юноши?',
    a: 'Да, работя с юноши над 14 години — в присъствието или с писменото съгласие на родителя. Тревожност, училищен стрес, идентичност, отношения с връстници.',
  },
  {
    q: 'Как да запазя час?',
    a: 'Можете да се свържете с мен по телефон, Viber или WhatsApp на 0899 199 526. Работя от понеделник до петък, 09:00–17:00 ч.',
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #E0CEB4' }}>
      <button
        className="w-full flex items-center justify-between py-5 px-1 text-left"
        onClick={() => setOpen(o => !o)}
      >
        <span
          className="text-sm lg:text-[15px] font-medium pr-8 leading-snug"
          style={{ color: '#1A1610' }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200"
          style={{
            color: '#A07030',
            backgroundColor: open ? 'rgba(160,112,48,0.1)' : 'transparent',
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '300px' : '0' }}
      >
        <p
          className="pb-5 px-1 text-sm lg:text-[15px]"
          style={{ color: '#6B5A48', lineHeight: '1.82' }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const headerRef = useScrollReveal(0);
  const listRef   = useScrollReveal(140);

  return (
    <section id="faq" className="py-24 lg:py-32" style={{ backgroundColor: '#F8F2E8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center">

        <div ref={headerRef} className="mb-14 text-center">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#A07030' }}>
            Въпроси
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: '#1A1610', fontFamily: 'Playfair Display, serif' }}
          >
            Често задавани<br />
            <span className="italic" style={{ color: '#A07030' }}>въпроси</span>
          </h2>
        </div>

        <div
          ref={listRef}
          className="max-w-4xl w-full rounded-2xl"
          style={{
            border: '1px solid #E0CEB4',
            backgroundColor: '#FDFAF6',
            padding: '0 32px',
          }}
        >
          {faqs.map((item) => (
            <Item key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

      </div>
    </section>
  );
}
