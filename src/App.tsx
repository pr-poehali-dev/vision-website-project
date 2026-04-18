import { useState } from "react";
import Icon from "@/components/ui/icon";

type Section = "home" | "disorders" | "test" | "resources";

const IMG_EYE_DIAGRAM = "https://cdn.poehali.dev/projects/8481e59e-735a-4847-89d5-2376edd1dbbe/files/9c3b3f37-9a2f-4a96-8fe3-ff662cc57882.jpg";
const IMG_HOME_HERO = "https://cdn.poehali.dev/projects/8481e59e-735a-4847-89d5-2376edd1dbbe/files/483cc529-eb97-497c-97c4-5187f66083ce.jpg";
const IMG_DISORDERS = "https://cdn.poehali.dev/projects/8481e59e-735a-4847-89d5-2376edd1dbbe/files/49bc3cb6-f948-4e29-9233-5fb19895d5ad.jpg";
const IMG_TEST = "https://cdn.poehali.dev/projects/8481e59e-735a-4847-89d5-2376edd1dbbe/files/7e4b7db2-6ee6-4d3f-83da-ac0500a949a8.jpg";

const quizQuestions = [
  {
    question: "Какая часть глаза отвечает за фокусировку изображения?",
    options: ["Роговица", "Хрусталик", "Сетчатка", "Радужка"],
    correct: 1,
  },
  {
    question: "При близорукости изображение фокусируется...",
    options: ["На сетчатке", "Перед сетчаткой", "За сетчаткой", "На роговице"],
    correct: 1,
  },
  {
    question: "Сколько раз в минуту рекомендуется моргать при работе за компьютером?",
    options: ["5–10 раз", "15–20 раз", "25–30 раз", "30–40 раз"],
    correct: 1,
  },
  {
    question: "Что такое «правило 20-20-20»?",
    options: [
      "Смотреть в окно 20 минут",
      "Каждые 20 минут смотреть вдаль 20 секунд",
      "Делать 20 упражнений 20 раз",
      "Работать не более 20 часов в неделю",
    ],
    correct: 1,
  },
  {
    question: "Какой витамин особенно важен для зрения?",
    options: ["Витамин C", "Витамин D", "Витамин A", "Витамин B12"],
    correct: 2,
  },
  {
    question: "Что такое глаукома?",
    options: [
      "Помутнение хрусталика",
      "Повреждение сетчатки",
      "Повышение внутриглазного давления",
      "Воспаление роговицы",
    ],
    correct: 2,
  },
  {
    question: "Как называется состояние, когда оба глаза видят по-разному?",
    options: ["Астигматизм", "Анизометропия", "Амблиопия", "Анофтальмия"],
    correct: 1,
  },
  {
    question: "С какого расстояния рекомендуется смотреть на экран монитора?",
    options: ["20–30 см", "40–70 см", "80–100 см", "Более 100 см"],
    correct: 1,
  },
];

function NavBar({ active, setActive }: { active: Section; setActive: (s: Section) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { key: Section; label: string; icon: string }[] = [
    { key: "home", label: "Главная", icon: "Home" },
    { key: "disorders", label: "Нарушения", icon: "Eye" },
    { key: "test", label: "Проверь себя", icon: "ClipboardList" },
    { key: "resources", label: "Ресурсы", icon: "BookOpen" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👁️</span>
          <span className="font-display text-lg font-bold text-gradient">Про зрение</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === item.key
                  ? "gradient-blue-pink text-white shadow-md"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon name={item.icon} size={16} />
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-blue-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-4 py-3 flex flex-col gap-1 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => { setActive(item.key); setMenuOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                active === item.key
                  ? "gradient-blue-pink text-white"
                  : "text-gray-600 hover:bg-blue-50"
              }`}
            >
              <Icon name={item.icon} size={18} />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function HomePage() {
  const parts = [
    { name: "Роговица", desc: "Прозрачная оболочка, преломляет свет", emoji: "🔵" },
    { name: "Хрусталик", desc: "Фокусирует изображение на сетчатке", emoji: "💎" },
    { name: "Сетчатка", desc: "Фоторецепторы преобразуют свет в сигналы", emoji: "🔴" },
    { name: "Зрительный нерв", desc: "Передаёт сигналы в мозг", emoji: "🟣" },
    { name: "Радужка", desc: "Регулирует количество поступающего света", emoji: "🟢" },
    { name: "Стекловидное тело", desc: "Поддерживает форму глаза", emoji: "🔷" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl mb-10 gradient-blue-pink text-white">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit">
              <span>✨</span> Образовательный проект
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-black mb-4 leading-tight">
              Основа зрения: что такое, какие заболевания есть, профилактика
            </h1>
            <p className="text-base text-white/85 leading-relaxed">
              Узнай всё о строении глаза, причинах нарушений и способах их профилактики. Проверь свои знания в интерактивном тесте!
            </p>
          </div>
          <div className="relative min-h-52 md:min-h-0">
            <img
              src={IMG_HOME_HERO}
              alt="Иллюстрация зрения"
              className="w-full h-full object-cover md:rounded-r-3xl opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Определение зрения */}
      <section className="mb-10">
        <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 gradient-blue-pink rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
              👁️
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Что такое зрение?</h2>
              <p className="text-gray-500 text-sm">Определение и основные понятия</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-base mb-4">
            <strong>Зрение</strong> — это способность живых организмов воспринимать электромагнитное излучение видимого диапазона (световые волны) и преобразовывать его в нервные импульсы, которые мозг интерпретирует как зрительные образы.
          </p>
          <p className="text-gray-700 leading-relaxed text-base mb-4">
            У человека органом зрения является <strong>глаз</strong> — сложная оптическая система, способная фокусировать изображение на светочувствительной оболочке — сетчатке. Там расположены фоторецепторы двух типов: <strong>палочки</strong> (отвечают за сумеречное зрение) и <strong>колбочки</strong> (обеспечивают цветное зрение).
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            Зрение даёт нам около <strong>80–90% всей информации</strong> об окружающем мире. Именно поэтому так важно беречь глаза и вовремя обращаться к врачу при малейших изменениях.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { icon: "Lightbulb", label: "Воспринимает свет", color: "text-yellow-500 bg-yellow-50" },
              { icon: "Zap", label: "Создаёт нервный импульс", color: "text-blue-500 bg-blue-50" },
              { icon: "Brain", label: "Мозг строит образ", color: "text-pink-500 bg-pink-50" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2 bg-white rounded-2xl p-4 shadow-sm">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                  <Icon name={item.icon} size={20} />
                </div>
                <span className="text-xs font-medium text-gray-600 leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eye diagram */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-gradient">Схема строения глаза</h2>
        <p className="text-gray-500 mb-5">Анатомия глазного яблока в разрезе</p>
        <div className="rounded-3xl overflow-hidden shadow-xl border border-blue-100">
          <img src={IMG_EYE_DIAGRAM} alt="Схема строения глаза" className="w-full object-cover max-h-80 md:max-h-96" />
        </div>
      </section>

      {/* Parts grid */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Части глаза и их функции</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {parts.map((part, i) => (
            <div
              key={part.name}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-5 shadow-sm animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-3xl mb-3">{part.emoji}</div>
              <h3 className="font-bold text-gray-800 mb-1">{part.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{part.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How vision works */}
      <section className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">Как мы видим?</h2>
        <div className="flex flex-col gap-4">
          {[
            { step: "1", title: "Свет попадает в глаз", desc: "Через роговицу и зрачок световые лучи проникают внутрь глаза.", icon: "Sun" },
            { step: "2", title: "Хрусталик фокусирует", desc: "Хрусталик изгибается, фокусируя изображение точно на сетчатке.", icon: "Focus" },
            { step: "3", title: "Сетчатка преобразует", desc: "Фоторецепторы (палочки и колбочки) превращают свет в нервные импульсы.", icon: "Zap" },
            { step: "4", title: "Мозг создаёт картину", desc: "Зрительный нерв передаёт сигналы в мозг, который формирует изображение.", icon: "Brain" },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <div className="w-10 h-10 gradient-blue-pink rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {item.step}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon name={item.icon} size={16} className="text-blue-500" />
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                </div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DisordersPage() {
  const [openTab, setOpenTab] = useState<"myopia" | "hyperopia">("myopia");

  const disorders = {
    myopia: {
      title: "Близорукость (миопия)",
      emoji: "🔍",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      description: "Близорукость — нарушение зрения, при котором человек хорошо видит предметы вблизи, но плохо — вдали. Изображение фокусируется перед сетчаткой, а не на ней.",
      causes: [
        "Длительная работа за компьютером и чтение вблизи",
        "Недостаток прогулок на свежем воздухе",
        "Наследственная предрасположенность",
        "Слабость глазных мышц",
      ],
      symptoms: [
        "Трудно читать надписи вдали (вывески, доска)",
        "Прищуривание при взгляде вдаль",
        "Усталость глаз к концу дня",
        "Головные боли после нагрузки",
      ],
      prevention: [
        "Правило 20-20-20: каждые 20 мин смотреть вдаль 20 секунд",
        "Ограничить экранное время до 2 часов в день",
        "Больше времени проводить на свежем воздухе",
        "Гимнастика для глаз 2 раза в день",
        "Регулярные осмотры у офтальмолога",
      ],
    },
    hyperopia: {
      title: "Дальнозоркость (гиперметропия)",
      emoji: "🔭",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      description: "Дальнозоркость — нарушение, при котором изображение фокусируется за сетчаткой. Человек лучше видит вдали, но вблизи — с трудом. Часто встречается у детей до 7 лет как норма.",
      causes: [
        "Укороченное глазное яблоко",
        "Слабая кривизна роговицы или хрусталика",
        "Возрастные изменения хрусталика (после 40 лет)",
        "Генетическая предрасположенность",
      ],
      symptoms: [
        "Трудно читать текст вблизи",
        "Быстрая усталость при работе с мелкими предметами",
        "Головные боли и жжение в глазах",
        "Расплывчатое изображение вблизи",
      ],
      prevention: [
        "Хорошее освещение при чтении и работе",
        "Соблюдать расстояние 30–40 см до книги",
        "Регулярные перерывы при длительной зрительной нагрузке",
        "Употреблять продукты, богатые витамином A",
        "Своевременная коррекция линзами или очками",
      ],
    },
  };

  const current = disorders[openTab];

  return (
    <div className="animate-fade-in">
      {/* Header with image */}
      <section className="rounded-3xl overflow-hidden mb-8 relative">
        <img src={IMG_DISORDERS} alt="Нарушения зрения" className="w-full object-cover h-48 md:h-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end p-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-1">Нарушения зрения</h2>
            <p className="text-white/80">Узнай о самых распространённых проблемах и как их предотвратить</p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        {(["myopia", "hyperopia"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setOpenTab(key)}
            className={`flex-1 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              openTab === key
                ? `bg-gradient-to-r ${disorders[key].color} text-white shadow-lg`
                : "bg-white border border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-600"
            }`}
          >
            <span className="text-lg">{disorders[key].emoji}</span>
            {key === "myopia" ? "Близорукость" : "Дальнозоркость"}
          </button>
        ))}
      </div>

      <div className="space-y-6 animate-scale-in">
        <div className={`${current.bgColor} rounded-3xl p-6`}>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span className="text-2xl">{current.emoji}</span>
            {current.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{current.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Icon name="AlertCircle" size={18} className="text-orange-500" />
              Причины
            </h4>
            <ul className="space-y-2">
              {current.causes.map((cause, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">!</span>
                  {cause}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Icon name="Activity" size={18} className="text-red-500" />
              Симптомы
            </h4>
            <ul className="space-y-2">
              {current.symptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">·</span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-3xl p-6">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Icon name="Shield" size={18} className="text-green-600" />
            Профилактика
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {current.prevention.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/70 rounded-2xl p-3">
                <div className="w-7 h-7 gradient-blue-pink rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const correctCount = answers.filter((a, i) => a === quizQuestions[i].correct).length;

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(answers[currentQ + 1]);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswers(Array(quizQuestions.length).fill(null));
    setFinished(false);
  };

  const getResultEmoji = () => {
    if (correctCount >= 7) return "🏆";
    if (correctCount >= 5) return "🌟";
    if (correctCount >= 3) return "👍";
    return "📚";
  };

  const getResultText = () => {
    if (correctCount >= 7) return "Отлично! Ты настоящий эксперт по зрению!";
    if (correctCount >= 5) return "Хороший результат! Есть к чему стремиться.";
    if (correctCount >= 3) return "Неплохо! Советуем ещё раз пройти разделы.";
    return "Стоит повторить материал. Не сдавайся!";
  };

  const q = quizQuestions[currentQ];

  if (finished) {
    return (
      <div className="animate-scale-in text-center">
        <div className="gradient-blue-pink rounded-3xl p-10 text-white mb-8">
          <div className="text-7xl mb-4">{getResultEmoji()}</div>
          <h2 className="font-display text-3xl font-black mb-2">Тест завершён!</h2>
          <p className="text-white/80 text-lg mb-6">{getResultText()}</p>
          <div className="inline-flex items-center gap-3 bg-white/20 rounded-2xl px-8 py-4">
            <span className="text-5xl font-black">{correctCount}</span>
            <span className="text-white/70 text-lg">из {quizQuestions.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {quizQuestions.map((q, i) => (
            <div
              key={i}
              className={`rounded-2xl p-3 text-sm font-medium flex items-center gap-2 ${
                answers[i] === q.correct
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-600 border border-red-200"
              }`}
            >
              <Icon name={answers[i] === q.correct ? "CheckCircle" : "XCircle"} size={16} />
              Вопрос {i + 1}
            </div>
          ))}
        </div>

        <button
          onClick={handleRestart}
          className="gradient-blue-pink text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Пройти ещё раз
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Header with image */}
      <section className="rounded-3xl overflow-hidden mb-8 relative">
        <img src={IMG_TEST} alt="Проверь себя" className="w-full object-cover h-44 md:h-52" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end p-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-1">Проверь себя</h2>
            <p className="text-white/80">8 вопросов на знание темы зрения</p>
          </div>
        </div>
      </section>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500 font-medium">Вопрос {currentQ + 1} из {quizQuestions.length}</span>
          <span className="text-sm font-semibold text-gradient">{Math.round(((currentQ + (selected !== null ? 1 : 0)) / quizQuestions.length) * 100)}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full gradient-blue-pink rounded-full transition-all duration-500"
            style={{ width: `${((currentQ + (selected !== null ? 1 : 0)) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-6 md:p-8 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 gradient-blue-pink rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {currentQ + 1}
          </div>
          <h3 className="text-xl font-bold text-gray-800 leading-snug">{q.question}</h3>
        </div>
      </div>

      <div className="grid gap-3 mb-8">
        {q.options.map((opt, idx) => {
          const isSelected = selected === idx;
          const isCorrect = idx === q.correct;
          const showFeedback = selected !== null;

          let className = "w-full text-left p-4 rounded-2xl border-2 font-medium transition-all duration-200 flex items-center gap-3 ";
          if (!showFeedback) {
            className += "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-gray-700";
          } else if (isCorrect) {
            className += "border-green-400 bg-green-50 text-green-800";
          } else if (isSelected && !isCorrect) {
            className += "border-red-400 bg-red-50 text-red-700";
          } else {
            className += "border-gray-100 bg-gray-50 text-gray-400";
          }

          return (
            <button key={idx} onClick={() => handleSelect(idx)} className={className}>
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                !showFeedback ? "bg-gray-100 text-gray-500"
                  : isCorrect ? "bg-green-500 text-white"
                  : isSelected ? "bg-red-400 text-white"
                  : "bg-gray-200 text-gray-400"
              }`}>
                {showFeedback && isCorrect ? <Icon name="Check" size={14} />
                  : showFeedback && isSelected ? <Icon name="X" size={14} />
                  : String.fromCharCode(65 + idx)}
              </div>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="animate-fade-in flex justify-end">
          <button
            onClick={handleNext}
            className="gradient-blue-pink text-white px-8 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            {currentQ < quizQuestions.length - 1 ? "Следующий вопрос" : "Завершить тест"}
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

function ResourcesPage() {
  const resources = [
    {
      category: "Официальные организации",
      emoji: "🏥",
      items: [
        { title: "Всемирная организация здравоохранения — Зрение", url: "https://www.who.int/health-topics/blindness-and-vision-impairment", desc: "Данные ВОЗ о нарушениях зрения и профилактике слепоты" },
        { title: "Министерство здравоохранения РФ", url: "https://minzdrav.gov.ru", desc: "Официальные рекомендации по охране зрения в России" },
      ],
    },
    {
      category: "Образовательные ресурсы",
      emoji: "📚",
      items: [
        { title: "Khan Academy — Биология глаза", url: "https://ru.khanacademy.org", desc: "Бесплатные уроки по анатомии органов зрения" },
        { title: "Образовательный портал «Здоровье»", url: "https://www.zdorovieinfo.ru", desc: "Статьи и советы по сохранению зрения" },
        { title: "Медицинская энциклопедия", url: "https://www.rlsnet.ru", desc: "Подробная информация о заболеваниях глаз и лечении" },
      ],
    },
    {
      category: "Упражнения и советы",
      emoji: "🧘",
      items: [
        { title: "Гимнастика для глаз по Бейтсу", url: "https://www.bates-method.com", desc: "Классический метод улучшения зрения без операций" },
        { title: "Правило 20-20-20 — Американская академия офтальмологии", url: "https://www.aao.org", desc: "Научные рекомендации для работы с экранами" },
      ],
    },
    {
      category: "Для детей и школьников",
      emoji: "👦",
      items: [
        { title: "Советы для школьников — Охрана зрения", url: "https://nsportal.ru", desc: "Материалы для учителей и учеников о гигиене зрения" },
        { title: "Детская офтальмология — советы родителям", url: "https://medportal.ru", desc: "Когда обращаться к врачу и как сохранить зрение ребёнка" },
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Полезные ресурсы</h2>
        <p className="text-gray-500">Проверенные ссылки на сайты по теме зрения и здоровья глаз</p>
      </div>

      <div className="space-y-8">
        {resources.map((cat, ci) => (
          <div key={ci}>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-800">
              <span className="text-2xl">{cat.emoji}</span>
              {cat.category}
            </h3>
            <div className="grid gap-3">
              {cat.items.map((item, ii) => (
                <a
                  key={ii}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover flex items-start gap-4 bg-white border border-gray-100 hover:border-blue-200 rounded-2xl p-5 shadow-sm group"
                >
                  <div className="w-10 h-10 gradient-blue-pink-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="ExternalLink" size={18} className="text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">{item.title}</div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                  <Icon name="ChevronRight" size={18} className="text-gray-300 group-hover:text-blue-400 flex-shrink-0 mt-0.5 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 gradient-blue-pink rounded-3xl p-7 text-white text-center">
        <div className="text-4xl mb-3">👁️</div>
        <h3 className="font-display text-xl font-bold mb-2">Береги своё зрение!</h3>
        <p className="text-white/80 text-sm">
          Регулярные осмотры у офтальмолога и правильная гигиена зрения помогут сохранить его на долгие годы.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  return (
    <div className="min-h-screen bg-background">
      <NavBar active={activeSection} setActive={setActiveSection} />
      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        {activeSection === "home" && <HomePage />}
        {activeSection === "disorders" && <DisordersPage />}
        {activeSection === "test" && <TestPage />}
        {activeSection === "resources" && <ResourcesPage />}
      </main>
      <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-400">
        Про зрение — образовательный проект · 2024
      </footer>
    </div>
  );
}
