import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О студии", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Мероприятия", href: "#events" },
  { label: "Франшиза", href: "#franchise" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Monitor", title: "Шоу-игры", desc: "Интерактивные программы на большом экране — раунды, задания, смех и командный азарт!" },
  { icon: "Mic", title: "Профи-ведущие", desc: "Харизматичные ведущие, которые зажгут атмосферу и не дадут скучать ни минуты." },
  { icon: "Music", title: "Профи-караоке", desc: "Студийное звучание и профессиональное оборудование — почувствуй себя звездой!" },
  { icon: "UtensilsCrossed", title: "Банкетная зона", desc: "Уютный лофт с вкусной едой для общения и отдыха между игровыми раундами." },
];

const EVENTS = [
  { emoji: "🎂", title: "День рождения", desc: "Незабываемый праздник на всю жизнь", age: "any" },
  { emoji: "🥂", title: "Юбилей", desc: "Торжество, полное счастливых моментов", age: "adult" },
  { emoji: "💼", title: "Корпоратив", desc: "Мероприятие, которое сплотит команду", age: "adult" },
  { emoji: "🎓", title: "Выпускной", desc: "Вечер, о котором будут говорить ещё долго", age: "teen" },
  { emoji: "💃", title: "Девичник", desc: "Веселье и приятные сюрпризы", age: "adult" },
  { emoji: "🎈", title: "Детский праздник", desc: "Игры, смех и море радости для малышей", age: "kids" },
];

const FRANCHISE_PERKS = [
  { icon: "TrendingUp", title: "Готовый бизнес", desc: "Проверенная модель с понятными показателями окупаемости" },
  { icon: "BookOpen", title: "Полное обучение", desc: "Обучаем команду, передаём все сценарии и технологии" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Постоянная поддержка на всех этапах работы" },
  { icon: "Star", title: "Сильный бренд", desc: "Работайте под узнаваемым брендом с уникальным продуктом" },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const aboutAnim = useInView();
  const audienceAnim = useInView();
  const servicesAnim = useInView();
  const eventsAnim = useInView();
  const franchiseAnim = useInView();
  const contactAnim = useInView();

  return (
    <div className="min-h-screen bg-[#0d0d18] font-golos overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-dark py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : "py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-1">
            <span className="font-oswald text-xl font-black neon-text-blue">ЛАЙФ</span>
            <span className="font-oswald text-xl font-black neon-text-pink">ДРАЙФ</span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}
                className="text-sm font-golos font-600 text-white/55 hover:text-white transition-colors duration-200 uppercase tracking-wider">
                {l.label}
              </a>
            ))}
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden glass-dark border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-white font-golos uppercase tracking-wider text-sm">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* мягкий фоновый свет */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#3db8e8] opacity-[0.04] blur-[130px]" />
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#e8407a] opacity-[0.05] blur-[110px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-start"
                style={{ background: "rgba(232,64,122,0.1)", border: "1px solid rgba(232,64,122,0.3)" }}>
                <span className="w-2 h-2 rounded-full bg-[#e8407a] animate-pulse" />
                <span className="font-golos text-sm font-bold text-[#e8407a]">Открылась вторая студия в г. Мелеуз!</span>
              </div>

              <h1 className="font-oswald font-black leading-[1.1]">
                <span className="block text-4xl md:text-5xl lg:text-6xl text-white/90">Студия шоу-игр</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl mt-1">
                  <span className="neon-text-blue">«ЛАЙФ</span><span className="neon-text-pink">ДРАЙФ»</span>
                </span>
              </h1>

              <p className="font-golos text-lg text-white/60 leading-relaxed max-w-lg">
                Превращаем любое событие в феерию эмоций — <span className="text-white font-bold">для детей и взрослых!</span> Шоу-игры, профи-ведущие, лофт-пространство.
              </p>

              {/* аудитории — пилюли */}
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold font-golos"
                  style={{ background: "rgba(255,190,50,0.12)", border: "1px solid rgba(255,190,50,0.3)", color: "#ffbe32" }}>
                  🎈 Для детей
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold font-golos"
                  style={{ background: "rgba(61,184,232,0.1)", border: "1px solid rgba(61,184,232,0.3)", color: "#3db8e8" }}>
                  🥂 Для взрослых
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold font-golos"
                  style={{ background: "rgba(168,85,212,0.1)", border: "1px solid rgba(168,85,212,0.3)", color: "#c47de0" }}>
                  🏆 Корпоративы
                </span>
              </div>

              <div className="flex items-center gap-5 text-white/40 font-golos text-sm">
                <div className="flex items-center gap-1.5">
                  <Icon name="MapPin" size={14} className="text-[#3db8e8]" />
                  <span>Салехард</span>
                </div>
                <span className="text-white/15">·</span>
                <div className="flex items-center gap-1.5">
                  <Icon name="MapPin" size={14} className="text-[#e8407a]" />
                  <span className="text-[#e8407a] font-bold">Мелеуз — новая!</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-1">
                <a href="#contacts">
                  <button className="neon-btn-pink font-oswald font-black text-base px-8 py-4 rounded-2xl uppercase tracking-widest">
                    Забронировать праздник
                  </button>
                </a>
                <a href="#services">
                  <button className="neon-btn-blue font-oswald font-black text-base px-8 py-4 rounded-2xl uppercase tracking-widest">
                    Узнать больше
                  </button>
                </a>
              </div>
            </div>

            {/* RIGHT — фото */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(61,184,232,0.3), rgba(232,64,122,0.3))" }} />
                <img
                  src="https://cdn.poehali.dev/projects/3e4fa183-e244-463c-a1c5-d541bb2b4e6c/bucket/1ada720f-8bf6-4447-9c0e-6472b3bb9641.jpg"
                  alt="ЛАЙФДРАЙФ — Студия шоу-игр"
                  className="relative w-full max-w-md rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <span className="text-xs uppercase tracking-widest font-golos">Листай вниз</span>
          <Icon name="ChevronDown" size={18} className="animate-bounce" />
        </div>
      </section>

      <div className="section-divider" />

      {/* АУДИТОРИЯ — для детей и взрослых */}
      <section ref={audienceAnim.ref} className="py-20 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${audienceAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <p className="font-golos text-sm font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#a855d4" }}>Для всех возрастов</p>
            <h2 className="font-oswald font-black text-4xl md:text-5xl text-white">
              Подходит <span className="neon-text-blue">детям</span> и <span className="neon-text-pink">взрослым</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Дети */}
            <div className="card-kids rounded-3xl p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🎈</span>
                <div>
                  <h3 className="font-oswald font-black text-2xl text-white">Для детей</h3>
                  <p className="font-golos text-sm" style={{ color: "#ffbe32" }}>от 5 лет и старше</p>
                </div>
              </div>
              <p className="font-golos text-white/65 leading-relaxed">
                Специальные детские шоу-программы с яркими персонажами, простыми правилами и морем веселья. Ребята не только играют — они становятся настоящими героями праздника!
              </p>
              <ul className="flex flex-col gap-2">
                {["Детские дни рождения", "Выпускные в детском саду", "Тематические праздники", "Командные игры для детей"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-golos text-sm text-white/70">
                    <span className="text-[#ffbe32]">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Взрослые */}
            <div className="card-adults rounded-3xl p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🥂</span>
                <div>
                  <h3 className="font-oswald font-black text-2xl text-white">Для взрослых</h3>
                  <p className="font-golos text-sm neon-text-blue">любой возраст</p>
                </div>
              </div>
              <p className="font-golos text-white/65 leading-relaxed">
                Динамичные шоу-игры в формате популярных телешоу, профессиональное караоке и атмосфера настоящего клуба. Идеально для компании, корпоратива или семейного торжества.
              </p>
              <ul className="flex flex-col gap-2">
                {["Юбилеи и дни рождения", "Корпоративы и тимбилдинг", "Девичники и мальчишники", "Семейные праздники"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-golos text-sm text-white/70">
                    <span className="neon-text-blue">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ABOUT */}
      <section id="about" ref={aboutAnim.ref} className="py-20 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${aboutAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-golos text-sm font-bold uppercase tracking-[0.25em] neon-text-blue mb-3">О студии</p>
              <h2 className="font-oswald font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
                Мир незабываемых<br />
                <span className="neon-text-pink">праздников</span>
              </h2>
              <p className="font-golos text-white/60 text-lg leading-relaxed mb-6">
                Мы — команда профессионалов, готовая превратить любое событие в феерию эмоций и радости! В нашем стильном лофт-пространстве можно организовать праздник для любого возраста.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-white/50 font-golos text-sm">
                  <Icon name="MapPin" size={16} className="text-[#3db8e8] flex-shrink-0" />
                  <span>г. Салехард, ул. Маяковского 19А</span>
                </div>
                <div className="flex items-center gap-3 font-golos text-sm" style={{ color: "#e8407a" }}>
                  <Icon name="MapPin" size={16} className="flex-shrink-0" style={{ color: "#e8407a" }} />
                  <span className="font-bold">г. Мелеуз — вторая студия открылась!</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "Праздников проведено" },
                { num: "100%", label: "Довольных гостей" },
                { num: "6+", label: "Форматов мероприятий" },
                { num: "2", label: "Студии в России" },
              ].map((s, i) => (
                <div key={i} className="glass-dark neon-border-blue rounded-2xl p-6 text-center">
                  <div className="font-oswald font-black text-4xl neon-text-blue mb-1">{s.num}</div>
                  <div className="font-golos text-white/50 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* шоу-игры */}
          <div className="mt-14 glass-dark neon-border-pink rounded-3xl p-8">
            <h3 className="font-oswald font-black text-2xl text-white mb-5">
              <span className="neon-text-pink">Что такое</span> шоу-игры?
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Интерактивные развлекательные программы на большом экране с раундами и заданиями — как на популярных телешоу.",
                "Шоу-игры становятся центральным элементом праздника, создавая настоящий драйв и бурю позитивных эмоций.",
                "Юмор, музыка, творческие задания — каждая игра незабываема и для детей, и для взрослых.",
                "Программа адаптируется под любую аудиторию — каждый гость участвует и получает удовольствие.",
              ].map((text, i) => (
                <div key={i} className="flex gap-3">
                  <span className="neon-text-pink mt-0.5 flex-shrink-0">✦</span>
                  <p className="font-golos text-white/60 leading-relaxed text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SERVICES */}
      <section id="services" ref={servicesAnim.ref} className="py-20 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${servicesAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <p className="font-golos text-sm font-bold uppercase tracking-[0.25em] neon-text-pink mb-3">Что вас ждёт</p>
            <h2 className="font-oswald font-black text-4xl md:text-5xl text-white">
              Наши <span className="neon-text-blue">возможности</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i}
                className="group glass-dark neon-border-blue rounded-2xl p-6 flex flex-col gap-4 hover:bg-[#3db8e808] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(61,184,232,0.1)", border: "1px solid rgba(61,184,232,0.2)" }}>
                  <Icon name={s.icon} size={20} className="text-[#3db8e8]" />
                </div>
                <h3 className="font-oswald font-black text-lg text-white">{s.title}</h3>
                <p className="font-golos text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* EVENTS */}
      <section id="events" ref={eventsAnim.ref} className="py-20 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${eventsAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <p className="font-golos text-sm font-bold uppercase tracking-[0.25em] neon-text-blue mb-3">Для кого</p>
            <h2 className="font-oswald font-black text-4xl md:text-5xl text-white">
              Мы организуем <span className="neon-text-pink">любой</span> праздник
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {EVENTS.map((e, i) => (
              <div key={i}
                className="glass-dark neon-border-pink rounded-2xl p-6 flex flex-col gap-3 hover:bg-[#e8407a08] transition-all duration-300">
                <span className="text-3xl">{e.emoji}</span>
                <h3 className="font-oswald font-black text-lg text-white">{e.title}</h3>
                <p className="font-golos text-white/50 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FRANCHISE */}
      <section id="franchise" ref={franchiseAnim.ref} className="py-20 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${franchiseAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative rounded-3xl overflow-hidden p-10 md:p-14 glass-dark"
            style={{ border: "1px solid rgba(168,85,212,0.25)", boxShadow: "0 0 40px rgba(168,85,212,0.06)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#e8407a] opacity-[0.04] blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#3db8e8] opacity-[0.04] blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <p className="font-golos text-sm font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#a855d4" }}>Возможности</p>
                <h2 className="font-oswald font-black text-4xl md:text-5xl text-white mb-4">
                  Откройте свою студию<br />
                  <span style={{ color: "#c47de0" }}>ЛАЙФДРАЙФ</span>
                </h2>
                <p className="font-golos text-white/55 text-lg max-w-2xl mx-auto">
                  Готовы запустить собственный бизнес в сфере праздников? Приобретите франшизу и начните работать под узнаваемым брендом с полной поддержкой команды.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {FRANCHISE_PERKS.map((p, i) => (
                  <div key={i} className="text-center flex flex-col items-center gap-3 p-4">
                    <div className="w-13 h-13 w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(168,85,212,0.1)", border: "1px solid rgba(168,85,212,0.25)" }}>
                      <Icon name={p.icon} size={22} style={{ color: "#c47de0" }} />
                    </div>
                    <h3 className="font-oswald font-black text-lg text-white">{p.title}</h3>
                    <p className="font-golos text-white/50 text-sm">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a href="#contacts">
                  <button className="font-oswald font-black text-lg px-12 py-4 rounded-2xl uppercase tracking-widest text-white transition-all duration-300 hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #a855d4, #e8407a)", boxShadow: "0 4px 24px rgba(168,85,212,0.35)" }}>
                    Узнать о франшизе
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CONTACTS */}
      <section id="contacts" ref={contactAnim.ref} className="py-20 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${contactAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <p className="font-golos text-sm font-bold uppercase tracking-[0.25em] neon-text-pink mb-3">Свяжитесь с нами</p>
            <h2 className="font-oswald font-black text-4xl md:text-5xl text-white">
              Давайте создадим ваш <span className="neon-text-blue">праздник</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* форма */}
            <div className="glass-dark neon-border-blue rounded-3xl p-8">
              <h3 className="font-oswald font-black text-2xl text-white mb-6">Оставить заявку</h3>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(61,184,232,0.1)", border: "1px solid rgba(61,184,232,0.3)" }}>
                    <Icon name="CheckCircle" size={32} className="text-[#3db8e8]" />
                  </div>
                  <p className="font-oswald font-black text-2xl text-white">Заявка отправлена!</p>
                  <p className="font-golos text-white/50 text-center">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="font-golos text-white/50 text-sm mb-1 block font-bold">Ваше имя</label>
                    <input
                      type="text" required value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Как вас зовут?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-golos placeholder-white/20 outline-none focus:border-[#3db8e8] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-white/50 text-sm mb-1 block font-bold">Телефон</label>
                    <input
                      type="tel" required value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-golos placeholder-white/20 outline-none focus:border-[#3db8e8] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-white/50 text-sm mb-1 block font-bold">Тип мероприятия</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Расскажите о вашем событии..."
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-golos placeholder-white/20 outline-none focus:border-[#3db8e8] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button type="submit" className="neon-btn-pink font-oswald font-black text-lg py-4 rounded-xl uppercase tracking-widest w-full mt-1">
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>

            {/* контакты */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: "MapPin", color: "#e8407a",
                  title: "Салехард", text: "ул. Маяковского 19А", sub: "Основная студия"
                },
                {
                  icon: "MapPin", color: "#ffbe32",
                  title: "Мелеуз — новая студия!", text: "Уточняйте адрес при записи", sub: "Только открылась"
                },
                {
                  icon: "Clock", color: "#3db8e8",
                  title: "Режим работы", text: "Ежедневно: 10:00 — 22:00", sub: "По предварительной записи"
                },
                {
                  icon: "Phone", color: "#3db8e8",
                  title: "Связаться с нами", text: "Оставьте заявку — перезвоним!", sub: "Работаем ежедневно"
                },
              ].map((c, i) => (
                <div key={i} className="glass-dark rounded-2xl p-5 flex gap-4 items-start"
                  style={{ border: `1px solid ${c.color}22` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${c.color}14`, border: `1px solid ${c.color}33` }}>
                    <Icon name={c.icon} size={20} style={{ color: c.color }} />
                  </div>
                  <div>
                    <p className="font-oswald font-black text-white text-base mb-0.5">{c.title}</p>
                    <p className="font-golos text-white/60 text-sm">{c.text}</p>
                    <p className="font-golos text-white/35 text-xs mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="font-oswald font-black text-xl neon-text-blue">ЛАЙФ</span>
            <span className="font-oswald font-black text-xl neon-text-pink">ДРАЙФ</span>
            <span className="font-golos text-white/30 text-sm ml-2">— Студия шоу-игр</span>
          </div>
          <p className="font-golos text-white/30 text-sm">Салехард · Мелеуз</p>
          <p className="font-golos text-white/20 text-xs">© 2025 ЛАЙФДРАЙФ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
