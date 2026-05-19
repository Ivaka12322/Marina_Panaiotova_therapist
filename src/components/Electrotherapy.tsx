import { useState } from 'react';
import { Phone, Brain, Shield, Heart, Activity, Zap, Plus, Minus, Moon, Sunrise, TrendingUp, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const mechanisms = [
  {
    num: '01',
    title: 'Увличане на мозъчни вълни',
    desc: 'Чрез специални очила с вградени светодиоди и слушалки към мозъка се подават ритмични светлинни и звукови импулси. Мозъкът синхронизира собствената си електрическа активност с тези ритми, преминавайки в желаното функционално състояние.',
  },
  {
    num: '02',
    title: 'Нови невронни връзки',
    desc: 'Технологията стимулира невропластичността — способността на мозъка да изгражда нови невронни мрежи и да заменя автоматичните негативни реакции с нови, балансирани модели на поведение и мислене.',
  },
  {
    num: '03',
    title: 'Невротрансмитери и баланс',
    desc: 'Нормализират се серотонинът, ендорфините и мелатонинът. Активира се парасимпатиковата нервна система — режимът на почивка, лечение и клетъчна регенерация, вместо постоянния режим на стрес.',
  },
];

const timeline = [
  {
    icon: <Moon size={18} />,
    label: 'По време на процедурата',
    text: 'Лягаш или сядаш удобно. Поставяш очилата и слушалките. Затваряш очи. Нежни, ритмично пулсиращи светлинни и звукови импулси започват да те обгръщат. Дишането се забавя. Мускулите се отпускат от главата до пръстите. Дълбок покой, подобен на медитация без усилие — топлина, разливаща се в тялото. Лека приятна сънливост. Пълно отдалечаване от ежедневните мисли.',
  },
  {
    icon: <Sunrise size={18} />,
    label: 'След процедурата',
    text: 'Освеженост. Лекота. Намалено напрежение. Яснота на мисълта. Чувство за вътрешен покой, който се задържа дълго след сесията.',
  },
  {
    icon: <TrendingUp size={18} />,
    label: 'Дългосрочни резултати',
    text: 'След всяка следваща терапия тези усещания се връщат с по-голяма сила, тялото започва да запомня как е да му е добре. Резултатите се натрупват сесия след сесия: първо отшумяват психосоматичните симптоми, после мислите стават по-редки и по-слаби, докато тревожността не избледнее напълно.',
  },
];

const benefits = [
  'По-дълбок и непрекъснат сън',
  'Намалена честота и интензивност на тревожността',
  'Подобрено настроение и мотивация',
  'По-добра памет и концентрация',
  'Намалена нужда от болкоуспокояващи и седативи',
];

const changes = [
  { icon: <Brain size={15} />,    text: 'Мислите се реконструират — натрапливите вериги отслабват и спират' },
  { icon: <Shield size={15} />,   text: 'Страховете губят сила — реакцията на заплаха се нормализира' },
  { icon: <Heart size={15} />,    text: 'Емоциите се филтрират — спира поемането навътре на всяка емоция' },
  { icon: <Activity size={15} />, text: 'Функционирането се възстановява — увереността се повдига' },
  { icon: <Zap size={15} />,      text: 'Резултатите са дълготрайни — новите невронни връзки остават' },
];

function MechanismCard({ item }: { item: typeof mechanisms[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: `1px solid ${open ? 'rgba(196,150,90,0.5)' : 'rgba(255,255,255,0.08)'}`,
        backgroundColor: open ? 'rgba(196,150,90,0.07)' : 'rgba(255,255,255,0.03)',
      }}
    >
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span
            className="font-serif text-2xl font-bold flex-shrink-0"
            style={{ color: 'rgba(196,150,90,0.4)', fontFamily: 'Playfair Display, serif' }}
          >
            {item.num}
          </span>
          <span className="font-semibold text-sm" style={{ color: '#F8F2E8' }}>{item.title}</span>
        </div>
        <span
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200"
          style={{ color: '#C4965A', backgroundColor: open ? 'rgba(196,150,90,0.15)' : 'transparent' }}
        >
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '300px' : '0' }}
      >
        <p className="px-5 pb-5 text-xs lg:text-sm" style={{ color: '#A09080', lineHeight: '1.75' }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Electrotherapy() {
  const headerRef     = useScrollReveal(0);
  const statsRef      = useScrollReveal(80);
  const mechRef       = useScrollReveal(100);
  const timelineRef   = useScrollReveal(80);
  const benefitsRef   = useScrollReveal(80);
  const changesRef    = useScrollReveal(80);
  const disclaimerRef = useScrollReveal(80);

  return (
    <section id="electrotherapy" className="py-16 lg:py-24" style={{ backgroundColor: '#1A1610' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header with image */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color: '#C4965A' }}>
              Иновативна технология
            </p>
            <h2
              className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-5"
              style={{ color: '#F8F2E8', fontFamily: 'Playfair Display, serif' }}
            >
              Невро-Стимулираща<br />
              <span className="italic" style={{ color: '#C4965A' }}>Терапия</span>
            </h2>
            <p
              className="text-sm lg:text-base"
              style={{ color: '#A09080', lineHeight: '1.8' }}
            >
              Неинвазивна аудио-визуална и кранио-електрическа стимулация, изследвана клинично от 1984 г. в над 100 научни публикации по света. Без медикаменти, без болка, без странични ефекти.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/Brain_scan_image.jpg"
              alt="Невро-стимулираща терапия"
              className="w-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
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

        {/* Three mechanisms */}
        <div ref={mechRef} className="mb-14">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#C4965A' }}>
            Три механизма на действие
          </p>
          <div className="space-y-3">
            {mechanisms.map((m) => (
              <MechanismCard key={m.num} item={m} />
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div ref={timelineRef} className="mb-14">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-6" style={{ color: '#C4965A' }}>
            Какво ще почувстваш
          </p>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="p-5 lg:p-6 rounded-xl flex gap-5 items-start"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: 'rgba(196,150,90,0.12)', color: '#C4965A' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-2" style={{ color: '#F8F2E8' }}>{item.label}</p>
                  <p className="text-xs lg:text-sm" style={{ color: '#8A7A6A', lineHeight: '1.78' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div ref={benefitsRef} className="mb-14">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: '#C4965A' }}>
            Дългосрочни ползи
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ backgroundColor: 'rgba(196,150,90,0.06)', border: '1px solid rgba(196,150,90,0.14)' }}
              >
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(196,150,90,0.2)', color: '#C4965A' }}
                >
                  <Check size={11} />
                </span>
                <p className="text-xs lg:text-sm" style={{ color: '#C4B49A' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What changes */}
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

        {/* Disclaimer */}
        <div
          ref={disclaimerRef}
          className="mb-8 p-5 rounded-xl"
          style={{ backgroundColor: 'rgba(196,150,90,0.09)', border: '1px solid rgba(196,150,90,0.22)' }}
        >
          <p className="text-xs lg:text-sm" style={{ color: '#A09070', lineHeight: '1.7' }}>
            <strong style={{ color: '#C4965A' }}>Важно:</strong> Процедурата е неинвазивна, безболезнена и без странични ефекти. Прилага се само след индивидуална консултация. Не се препоръчва при: епилепсия, остра фаза след мозъчна травма или инсулт (до 1 месец), активна психоза и бременност.
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
