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
  { icon: "Monitor", title: "Шоу-игры", desc: "Интерактивные игровые программы на большом экране — драйв, смех и эмоции для всех!" },
  { icon: "Mic", title: "Профи-ведущие", desc: "Харизматичные ведущие, которые зажгут атмосферу и не дадут скучать ни минуты." },
  { icon: "Music", title: "Профессиональное караоке", desc: "Студийное звучание и профессиональное оборудование — почувствуй себя звездой!" },
  { icon: "UtensilsCrossed", title: "Банкетная зона", desc: "Уютное лофт-пространство с вкусной едой для душевного общения и отдыха." },
];

const EVENTS = [
  { emoji: "🎂", title: "День рождения", desc: "Незабываемый праздник, который запомнится на всю жизнь" },
  { emoji: "🥂", title: "Юбилей", desc: "Торжество, наполненное счастливыми моментами" },
  { emoji: "💼", title: "Корпоратив", desc: "Мероприятие, которое сплотит команду" },
  { emoji: "🎓", title: "Выпускной", desc: "Вечер, о котором будут говорить ещё долго" },
  { emoji: "💃", title: "Девичник", desc: "Полный веселья и приятных сюрпризов" },
  { emoji: "🏆", title: "Корп. события", desc: "Уникальная атмосфера для вашего бизнеса" },
];

const FRANCHISE_PERKS = [
  { icon: "TrendingUp", title: "Готовый бизнес", desc: "Проверенная бизнес-модель с понятными показателями окупаемости" },
  { icon: "BookOpen", title: "Полное обучение", desc: "Обучаем команду, передаём все сценарии и технологии шоу-игр" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Постоянная поддержка от команды ЛАЙФДРАЙФ на всех этапах работы" },
  { icon: "Star", title: "Сильный бренд", desc: "Работайте под узнаваемым брендом с уникальным продуктом на рынке" },
];

function useInView(threshold = 0.15) {
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
  const servicesAnim = useInView();
  const eventsAnim = useInView();
  const franchiseAnim = useInView();
  const contactAnim = useInView();

  return (
    <div className="min-h-screen bg-[#080810] font-golos overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-dark py-3 shadow-[0_4px_30px_rgba(0,180,255,0.1)]" : "py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-1">
            <span className="font-oswald text-2xl font-bold neon-text-blue">ЛАЙФ</span>
            <span className="font-oswald text-2xl font-bold neon-text-pink">ДРАЙФ</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}
                className="text-sm font-golos text-white/60 hover:text-white transition-colors duration-200 uppercase tracking-wider">
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
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00b4ff] opacity-5 blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#ff0080] opacity-6 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#cc00ff] opacity-4 blur-[80px] animate-float" style={{ animationDelay: "4s" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(#00b4ff 1px, transparent 1px), linear-gradient(90deg, #00b4ff 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <div className="mb-8 flex justify-center">
            <img
              src="https://cdn.poehali.dev/projects/3e4fa183-e244-463c-a1c5-d541bb2b4e6c/bucket/1ada720f-8bf6-4447-9c0e-6472b3bb9641.jpg"
              alt="ЛАЙФДРАЙФ — Студия шоу-игр"
              className="w-full max-w-lg rounded-2xl opacity-90 animate-neon-pulse"
              style={{ boxShadow: "0 0 60px rgba(0,180,255,0.3), 0 0 120px rgba(255,0,128,0.2)" }}
            />
          </div>

          <p className="font-golos text-lg md:text-2xl text-white/70 mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Превращаем любое событие в <span className="neon-text-blue font-semibold">феерию эмоций!</span>
          </p>

          <p className="font-golos text-base text-white/50 mb-10 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Стильный лофт в Салехарде · Шоу-игры · Профи-ведущие · Живое настоящее веселье
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a href="#contacts">
              <button className="neon-btn-pink font-oswald text-lg px-10 py-4 rounded-xl uppercase tracking-widest">
                Забронировать праздник
              </button>
            </a>
            <a href="#services">
              <button className="neon-btn-blue font-oswald text-lg px-10 py-4 rounded-xl uppercase tracking-widest">
                Узнать больше
              </button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest font-golos">Листай вниз</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

      <div className="section-divider" />

      {/* ABOUT */}
      <section id="about" ref={aboutAnim.ref} className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${aboutAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-oswald text-[#00b4ff] uppercase tracking-[0.3em] text-sm mb-3">О студии</p>
              <h2 className="font-oswald text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Добро пожаловать в мир<br />
                <span className="neon-text-pink">незабываемых</span> праздников
              </h2>
              <p className="font-golos text-white/60 text-lg leading-relaxed mb-6">
                Мы — команда профессионалов, готовая превратить любое событие в феерию эмоций и радости! В нашем стильном лофт-пространстве можно организовать праздник для любого возраста.
              </p>
              <div className="flex items-center gap-3 text-white/50 font-golos">
                <Icon name="MapPin" size={18} className="text-[#00b4ff]" />
                <span>г. Салехард, ул. Маяковского 19А</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "Праздников проведено" },
                { num: "100%", label: "Довольных гостей" },
                { num: "6", label: "Форматов мероприятий" },
                { num: "1", label: "Студия в Салехарде" },
              ].map((s, i) => (
                <div key={i} className="neon-border-blue rounded-2xl p-6 glass-dark text-center">
                  <div className="font-oswald text-4xl font-bold neon-text-blue mb-1">{s.num}</div>
                  <div className="font-golos text-white/50 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 neon-border-pink rounded-3xl p-8 glass-dark">
            <h3 className="font-oswald text-2xl text-white font-bold mb-6">
              <span className="neon-text-pink">Что такое</span> шоу-игры?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Интерактивные развлекательные программы на большом экране с раундами и заданиями — как на популярных телешоу.",
                "Шоу-игры становятся центральным элементом праздника, создавая настоящий драйв и бурю позитивных эмоций.",
                "Юмор, музыкальные номера и творческие задания делают каждую игру незабываемой для всех участников.",
                "Мы адаптируем программу под любой возраст и аудиторию — каждый гость принимает участие и получает удовольствие.",
              ].map((text, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ff0080] mt-2 flex-shrink-0" style={{ boxShadow: "0 0 8px #ff0080" }} />
                  <p className="font-golos text-white/60 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SERVICES */}
      <section id="services" ref={servicesAnim.ref} className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${servicesAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <p className="font-oswald text-[#ff0080] uppercase tracking-[0.3em] text-sm mb-3">Что вас ждёт</p>
            <h2 className="font-oswald text-4xl md:text-5xl text-white font-bold">
              Наши <span className="neon-text-blue">возможности</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i}
                className="group neon-border-blue glass-dark rounded-2xl p-6 flex flex-col gap-4 hover:bg-[#00b4ff08] transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#00b4ff11] border border-[#00b4ff33] flex items-center justify-center group-hover:shadow-[0_0_20px_#00b4ff44] transition-all duration-300">
                  <Icon name={s.icon} size={22} className="text-[#00b4ff]" />
                </div>
                <h3 className="font-oswald text-xl text-white font-semibold">{s.title}</h3>
                <p className="font-golos text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* EVENTS */}
      <section id="events" ref={eventsAnim.ref} className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${eventsAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <p className="font-oswald text-[#00b4ff] uppercase tracking-[0.3em] text-sm mb-3">Для кого</p>
            <h2 className="font-oswald text-4xl md:text-5xl text-white font-bold">
              Мы организуем <span className="neon-text-pink">любой</span> праздник
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {EVENTS.map((e, i) => (
              <div key={i}
                className="group neon-border-pink glass-dark rounded-2xl p-6 flex flex-col gap-3 hover:bg-[#ff008008] transition-all duration-300 cursor-default">
                <span className="text-4xl">{e.emoji}</span>
                <h3 className="font-oswald text-xl text-white font-semibold">{e.title}</h3>
                <p className="font-golos text-white/50 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FRANCHISE */}
      <section id="franchise" ref={franchiseAnim.ref} className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${franchiseAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative rounded-3xl overflow-hidden glass-dark p-10 md:p-16"
            style={{ background: "linear-gradient(135deg, rgba(0,180,255,0.06) 0%, rgba(255,0,128,0.06) 100%)", border: "1px solid rgba(204,0,255,0.2)", boxShadow: "0 0 60px rgba(204,0,255,0.08)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#ff0080] opacity-5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#00b4ff] opacity-5 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <p className="font-oswald uppercase tracking-[0.3em] text-sm mb-3" style={{ color: "#cc00ff" }}>Возможности</p>
                <h2 className="font-oswald text-4xl md:text-5xl text-white font-bold mb-4">
                  Откройте свою студию<br />
                  <span style={{ color: "#cc00ff", textShadow: "0 0 10px #cc00ff, 0 0 20px #cc00ff88" }}>ЛАЙФДРАЙФ</span>
                </h2>
                <p className="font-golos text-white/60 text-lg max-w-2xl mx-auto">
                  Готовы запустить собственный бизнес в сфере праздников? Приобретите франшизу и начните работать под узнаваемым брендом с полной поддержкой команды.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {FRANCHISE_PERKS.map((p, i) => (
                  <div key={i} className="text-center flex flex-col items-center gap-3 p-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(204,0,255,0.12)", border: "1px solid rgba(204,0,255,0.3)", boxShadow: "0 0 20px rgba(204,0,255,0.15)" }}>
                      <Icon name={p.icon} size={24} style={{ color: "#cc00ff" }} />
                    </div>
                    <h3 className="font-oswald text-lg text-white font-semibold">{p.title}</h3>
                    <p className="font-golos text-white/50 text-sm">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a href="#contacts">
                  <button className="font-oswald text-lg px-12 py-4 rounded-xl uppercase tracking-widest text-white transition-all duration-300 hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #cc00ff, #ff0080)", boxShadow: "0 0 30px rgba(204,0,255,0.5), 0 0 60px rgba(255,0,128,0.3)" }}>
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
      <section id="contacts" ref={contactAnim.ref} className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${contactAnim.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <p className="font-oswald text-[#ff0080] uppercase tracking-[0.3em] text-sm mb-3">Свяжитесь с нами</p>
            <h2 className="font-oswald text-4xl md:text-5xl text-white font-bold">
              Давайте создадим ваш <span className="neon-text-blue">праздник</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="neon-border-blue glass-dark rounded-3xl p-8">
              <h3 className="font-oswald text-2xl text-white font-bold mb-6">Оставить заявку</h3>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#00b4ff11] border border-[#00b4ff44] flex items-center justify-center">
                    <Icon name="CheckCircle" size={32} className="text-[#00b4ff]" />
                  </div>
                  <p className="font-oswald text-2xl text-white">Заявка отправлена!</p>
                  <p className="font-golos text-white/50 text-center">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="font-golos text-white/50 text-sm mb-1 block">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Как вас зовут?"
                      className="w-full bg-[#ffffff08] border border-[#00b4ff22] rounded-xl px-4 py-3 text-white font-golos placeholder-white/20 outline-none focus:border-[#00b4ff66] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-white/50 text-sm mb-1 block">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-[#ffffff08] border border-[#00b4ff22] rounded-xl px-4 py-3 text-white font-golos placeholder-white/20 outline-none focus:border-[#00b4ff66] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-white/50 text-sm mb-1 block">Тип мероприятия / комментарий</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Расскажите о вашем событии..."
                      rows={4}
                      className="w-full bg-[#ffffff08] border border-[#00b4ff22] rounded-xl px-4 py-3 text-white font-golos placeholder-white/20 outline-none focus:border-[#00b4ff66] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button type="submit"
                    className="neon-btn-pink font-oswald text-lg py-4 rounded-xl uppercase tracking-widest w-full mt-2">
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="neon-border-pink glass-dark rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#ff008011] border border-[#ff008033] flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={22} className="text-[#ff0080]" />
                </div>
                <div>
                  <p className="font-oswald text-white text-lg font-semibold mb-1">Адрес студии</p>
                  <p className="font-golos text-white/60">г. Салехард, ул. Маяковского 19А</p>
                  <p className="font-golos text-white/40 text-sm mt-1">Стильный лофт в центре города</p>
                </div>
              </div>

              <div className="neon-border-blue glass-dark rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#00b4ff11] border border-[#00b4ff33] flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={22} className="text-[#00b4ff]" />
                </div>
                <div>
                  <p className="font-oswald text-white text-lg font-semibold mb-1">Режим работы</p>
                  <p className="font-golos text-white/60">Ежедневно: 10:00 — 22:00</p>
                  <p className="font-golos text-white/40 text-sm mt-1">Мероприятия — по предварительной записи</p>
                </div>
              </div>

              <div className="neon-border-blue glass-dark rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#00b4ff11] border border-[#00b4ff33] flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={22} className="text-[#00b4ff]" />
                </div>
                <div>
                  <p className="font-oswald text-white text-lg font-semibold mb-1">Связаться с нами</p>
                  <p className="font-golos text-white/60">Оставьте заявку — перезвоним!</p>
                  <p className="font-golos text-white/40 text-sm mt-1">Работаем для вас ежедневно</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#ffffff10]" style={{ height: "200px" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?pt=66.5448,66.5402&z=16&l=map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="grayscale opacity-70"
                  title="Карта"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="font-oswald text-xl font-bold neon-text-blue">ЛАЙФ</span>
            <span className="font-oswald text-xl font-bold neon-text-pink">ДРАЙФ</span>
            <span className="font-golos text-white/30 text-sm ml-2">— Студия шоу-игр</span>
          </div>
          <p className="font-golos text-white/30 text-sm">г. Салехард, ул. Маяковского 19А</p>
          <p className="font-golos text-white/20 text-xs">© 2025 ЛАЙФДРАЙФ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}