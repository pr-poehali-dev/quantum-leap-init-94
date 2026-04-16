import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const IMGS = {
  hero: "https://cdn.poehali.dev/projects/4a5cbee6-dc38-40d8-b6c2-0b4977359b94/files/61864c43-9b11-464b-bb47-b17e02af6af9.jpg",
  water: "https://cdn.poehali.dev/projects/4a5cbee6-dc38-40d8-b6c2-0b4977359b94/files/8d181f84-5fa1-4470-a297-bb646b858b6d.jpg",
  details: "https://cdn.poehali.dev/projects/4a5cbee6-dc38-40d8-b6c2-0b4977359b94/files/f6a27c37-1658-4b6f-ab36-1ac6ec49db45.jpg",
  map: "https://cdn.poehali.dev/projects/4a5cbee6-dc38-40d8-b6c2-0b4977359b94/files/0d297398-3bd8-4c7b-96a4-c078d69ec345.jpg",
  interior: "https://cdn.poehali.dev/projects/4a5cbee6-dc38-40d8-b6c2-0b4977359b94/files/9fbd8dcd-4095-409a-b662-62f6decb0681.jpg",
  tourists: "https://cdn.poehali.dev/projects/4a5cbee6-dc38-40d8-b6c2-0b4977359b94/files/134ace1a-46ab-465d-b203-dec37f2d33e9.jpg",
};

const slides = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0 }),
};

function SlideContent({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-white text-center px-8">
          <img src={IMGS.hero} alt="Кижский погост" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          <div className="relative z-10">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 opacity-80 font-light">
              Объект Всемирного наследия ЮНЕСКО · с 1990 г. · № 544
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
              КИЖСКИЙ<br />ПОГОСТ
            </h1>
            <div className="w-16 h-px bg-white/60 mx-auto my-6" />
            <p className="text-lg md:text-xl font-light opacity-90 max-w-xl">
              Шедевр деревянного зодчества России
            </p>
          </div>
        </div>
      );

    case 1:
      return (
        <div className="w-full h-full flex flex-col lg:flex-row bg-stone-50">
          <div className="lg:w-1/2 h-48 lg:h-full">
            <img src={IMGS.details} alt="Детали зодчества" className="w-full h-full object-cover" />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-12 py-8 overflow-y-auto">
            <p className="text-xs uppercase tracking-widest text-amber-600 mb-3">Слайд 2</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 leading-tight">
              Что собой представляет?
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Архитектурный ансамбль на острове Кижи в Онежском озере (Республика Карелия) — образец древнего церковного прихода, гармонично вписанного в природный ландшафт.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { year: "1714", name: "Церковь Преображения Господня", desc: "Самая сложная постройка — 23 главки" },
                { year: "1764", name: "Покровская церковь", desc: "9 главок, образующих «корону»" },
                { year: "1874", name: "Шатровая колокольня", desc: "Удачно дополняет ансамбль" },
                { year: "XVIII–XIX вв.", name: "Ограда и постройки", desc: "Дома, часовни, мельница, амбары" },
              ].map((item) => (
                <div key={item.name} className="flex gap-4 items-start">
                  <span className="text-xs text-amber-600 font-mono mt-1 shrink-0 w-16">{item.year}</span>
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{item.name}</p>
                    <p className="text-stone-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="w-full h-full flex flex-col lg:flex-row-reverse bg-slate-900 text-white">
          <div className="lg:w-1/2 h-48 lg:h-full">
            <img src={IMGS.map} alt="Карта Карелии" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-12 py-8">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Слайд 3</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Где расположен?</h2>
            <div className="flex flex-col gap-5">
              {[
                { label: "Страна", value: "Российская Федерация" },
                { label: "Регион", value: "Республика Карелия" },
                { label: "Местоположение", value: "Остров Кижи, Онежское озеро" },
                { label: "Район", value: "Медвежьегорский район" },
                { label: "Ближний город", value: "Медвежьегорск" },
                { label: "Федеральный округ", value: "Северо-Западный" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white/50 text-sm">{row.label}</span>
                  <span className="text-white text-sm font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="relative w-full h-full flex items-center justify-center text-white">
          <img src={IMGS.hero} alt="Кижский погост" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 text-center px-8 max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-6">Слайд 4</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Включение в ЮНЕСКО</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-5xl font-bold text-amber-400">1990</p>
                <p className="text-sm text-white/70 mt-2">Год включения</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-5xl font-bold text-amber-400">544</p>
                <p className="text-sm text-white/70 mt-2">Номер в списке</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-5xl font-bold text-amber-400">i, iv, v</p>
                <p className="text-sm text-white/70 mt-2">Критерии</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Признан шедевром человеческого гения, выдающимся примером архитектурного ансамбля и традиционного использования ландшафта
            </p>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="w-full h-full flex flex-col lg:flex-row bg-amber-950 text-white">
          <div className="lg:w-1/2 h-48 lg:h-full">
            <img src={IMGS.water} alt="Кижи с воды" className="w-full h-full object-cover" />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-12 py-8">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Слайд 5</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Что охраняется?</h2>
            <div className="flex flex-col gap-4">
              {[
                "Уникальные памятники деревянного зодчества XVIII–XIX вв.",
                "Архитектурный ансамбль и его планировка",
                "Традиционная ограда погоста",
                "Историко-культурная среда острова Кижи",
                "Природный ландшафт, гармонично дополняющий архитектурный ансамбль",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-black text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div className="w-full h-full bg-stone-100 flex flex-col justify-center px-8 md:px-16 py-8 overflow-y-auto">
          <p className="text-xs uppercase tracking-widest text-amber-600 mb-3">Слайд 6</p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">Интересные факты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "Hammer", fact: "Церковь Преображения построена без единого гвоздя — только топором и долотом." },
              { icon: "Crown", fact: "Покровская церковь имеет 9 главок, символизирующих «корону», и создаёт интересный визуальный контраст." },
              { icon: "Clock", fact: "Колокольня построена в эпоху упадка северного деревянного зодчества, но идеально вписалась в ансамбль." },
              { icon: "Church", fact: "Ансамбль является частью музея-заповедника «Кижи» — Спасо-Кижского Патриаршего подворья." },
              { icon: "Globe", fact: "Один из самых узнаваемых символов русской архитектуры, часто изображается на открытках и сувенирах." },
              { icon: "Ship", fact: "Регулярно посещается круизными теплоходами — вид на погост с воды особенно живописен." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-stone-200 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={18} className="text-amber-700" />
                </div>
                <p className="text-stone-700 text-sm leading-relaxed">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 6:
      return (
        <div className="relative w-full h-full flex items-center text-white">
          <img src={IMGS.details} alt="Зодчество" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
          <div className="relative z-10 px-8 md:px-16 max-w-2xl py-8">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Слайд 7</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Значение объекта</h2>
            <div className="flex flex-col gap-6">
              {[
                { cat: "Культурное", desc: "Пример высшего мастерства русских плотников, отражение духовных и эстетических ценностей России." },
                { cat: "Историческое", desc: "Демонстрирует традиции деревянного зодчества, сохранившиеся с древних времён." },
                { cat: "Туристическое", desc: "Один из самых популярных туристических объектов Республики Карелия." },
                { cat: "Научное", desc: "Объект изучения для архитекторов, историков, этнографов." },
              ].map((item) => (
                <div key={item.cat} className="border-l-2 border-amber-400 pl-5">
                  <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">{item.cat} значение</p>
                  <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div className="w-full h-full flex flex-col lg:flex-row-reverse bg-slate-800 text-white">
          <div className="lg:w-1/2 h-48 lg:h-full">
            <img src={IMGS.tourists} alt="Туристы на Кижах" className="w-full h-full object-cover" />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-12 py-8 overflow-y-auto">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Слайд 8</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Современное состояние и охрана</h2>
            <div className="flex flex-col gap-5">
              {[
                { icon: "Shield", label: "Статус", desc: "Объект Всемирного наследия ЮНЕСКО, охраняемый государством" },
                { icon: "Wrench", label: "Реставрация", desc: "Регулярный мониторинг, реставрация, защита от природных факторов" },
                { icon: "Users", label: "Посетителям", desc: "Открыт круглый год с учётом погодных условий" },
                { icon: "BookOpen", label: "Образование", desc: "Экскурсии, лекции, мастер-классы по традиционному зодчеству" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-amber-400 text-xs uppercase tracking-widest">{item.label}</p>
                    <p className="text-white/80 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 8:
      return (
        <div className="w-full h-full bg-stone-900 p-4 md:p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs uppercase tracking-widest text-amber-400">Слайд 9 · Фотогалерея</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1 min-h-0">
            <div className="col-span-2 md:col-span-2 row-span-2 rounded-xl overflow-hidden">
              <img src={IMGS.hero} alt="Общий вид" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={IMGS.details} alt="Детали резьбы" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={IMGS.interior} alt="Интерьер" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden hidden md:block">
              <img src={IMGS.water} alt="Вид с воды" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden hidden md:block">
              <img src={IMGS.tourists} alt="Посетители" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      );

    case 9:
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-white text-center px-8">
          <img src={IMGS.water} alt="Кижи с воды" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-8">Слайд 10 · Заключение</p>
            <p className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Кижский погост
            </p>
            <div className="w-16 h-px bg-amber-400 mx-auto mb-8" />
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 mb-8">
              Это не только архитектурный шедевр, но и символ связи времён, отражающий богатую историю и культуру России.
            </p>
            <p className="text-white/60 text-sm">
              Сохранение этого объекта — важная задача для будущих поколений.
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = slides.length;

  const go = useCallback((next: number) => {
    if (next < 0 || next >= total) return;
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }, [current, total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, go]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col select-none">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <SlideContent index={current} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-black/90 flex items-center justify-between px-6 py-3 gap-4">
        <button
          onClick={() => go(current - 1)}
          disabled={current === 0}
          className="text-white/60 hover:text-white disabled:opacity-20 transition-colors p-1"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>

        <div className="flex items-center gap-2 flex-1 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-amber-400"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(current + 1)}
          disabled={current === total - 1}
          className="text-white/60 hover:text-white disabled:opacity-20 transition-colors p-1"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
    </div>
  );
}
