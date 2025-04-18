import { JSX, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  HomeIcon,
  PhoneIcon,
  BriefcaseIcon,
  ClockIcon,
  CogIcon,
  VideoCameraIcon, // Add this
  // ShieldCheckIcon,/ // Add this
  EnvelopeIcon, // Add this import
} from "@heroicons/react/24/outline";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[url(/public/2.jpg)] bg-cover bg-fixed bg-center flex flex-col">
        <nav className="bg-gradient-to-r from-black via-[#001d3d] to-black text-white shadow-lg shadow-blue-900/20 sticky top-0 z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link to="/elmontag4/" className="relative group">
                  <div className="flex items-center">
                    <div className="text-3xl md:text-4xl font-bold relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300">
                        ⚡
                      </span>
                      <span className="ml-2 bg-gradient-to-br from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                        ELECTRO
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/elmontag4/" className="nav-link group">
                  <div className="relative px-4 py-2">
                    <span className="relative z-10 text-white group-hover:text-blue-200 transition-colors duration-300">
                      Главная
                    </span>
                    <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 group-hover:w-full transition-all duration-300 rounded-lg"></div>
                  </div>
                </Link>
                <Link to="/elmontag4/services" className="nav-link group">
                  <div className="relative px-4 py-2">
                    <span className="relative z-10 text-white group-hover:text-blue-200 transition-colors duration-300">
                      Услуги
                    </span>
                    <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 group-hover:w-full transition-all duration-300 rounded-lg"></div>
                  </div>
                </Link>
                <Link to="/elmontag4/projects" className="nav-link group">
                  <div className="relative px-4 py-2">
                    <span className="relative z-10 text-white group-hover:text-blue-200 transition-colors duration-300">
                      Проекты
                    </span>
                    <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 group-hover:w-full transition-all duration-300 rounded-lg"></div>
                  </div>
                </Link>
                <Link to="/elmontag4/contact" className="nav-link group">
                  <div className="relative px-4 py-2">
                    <span className="relative z-10 text-white group-hover:text-blue-200 transition-colors duration-300">
                      Контакты
                    </span>
                    <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 group-hover:w-full transition-all duration-300 rounded-lg"></div>
                  </div>
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 hover:bg-blue-600/20 rounded-md transition-colors duration-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu dropdown */}
            {isMobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-[#001d3d] to-black rounded-b-lg">
                  <Link
                    to="/elmontag4/"
                    className="block px-4 py-2 rounded-md text-white hover:bg-blue-600/20 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Главная
                  </Link>
                  <Link
                    to="/elmontag4/services"
                    className="block px-4 py-2 rounded-md text-white hover:bg-blue-600/20 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Услуги
                  </Link>
                  <Link
                    to="/elmontag4/projects"
                    className="block px-4 py-2 rounded-md text-white hover:bg-blue-600/20 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Проекты
                  </Link>
                  <Link
                    to="/elmontag4/contact"
                    className="block px-4 py-2 rounded-md text-white hover:bg-blue-600/20 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Контакты
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <main className="container mx-auto px-4 lg:px-8 py-8 flex-grow">
          <Routes>
            <Route path="/elmontag4/" element={<Home />} />
            <Route path="/elmontag4/services" element={<Services />} />
            <Route path="/elmontag4/projects" element={<Projects />} />
            <Route path="/elmontag4/contact" element={<Contact />} />
          </Routes>
        </main>

        <div className="h-4 bg-gradient-to-b from-transparent to-gray-800"></div>
        <footer className="bg-gray-800 text-white relative before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent_39px,#ffffff0d_39px),linear-gradient(0deg,transparent_39px,#ffffff0d_39px)] before:bg-[size:40px_40px] before:opacity-50 after:absolute after:inset-0 after:bg-[radial-gradient(circle,#ffffff05_1px,transparent_1px)] after:bg-[size:10px_10px] border-t border-gray-700/50">
          <div className="container mx-auto px-4 lg:px-8 py-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">О нас</h3>
                <p className="text-gray-300">
                  Профессиональные электромонтажные работы в Москве и области.
                  Качество и безопасность гарантируем.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Контакты</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    <a
                      href="tel:+79045929581"
                      className="hover:text-blue-400 transition-colors"
                    >
                      +7 (904) 592-95-81
                    </a>
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <EnvelopeIcon className="h-5 w-5 mr-2" />
                    <a
                      href="mailto:iz904@ya.ru"
                      className="hover:text-blue-400 transition-colors"
                    >
                      iz904@ya.ru
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                <p className="text-gray-300">
                  г. Муром, Владимирская область, улица Прудовая, д.6
                </p>
                <p className="text-gray-300">Пн-Вс: 8:00 - 22:00</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                © 2025 ИП ЗАБАШТАНОВ АЛЕКСЕЙ ВИКТОРОВИЧ
              </p>
              <p className="text-gray-300">Все права защищены</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <section className="text-center py-12 md:py-16 bg-black bg-opacity-80 rounded-lg text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Профессиональный электромонтаж
        </h1>
        <p className="text-xl mb-8">
          Качественные электромонтажные работы любой сложности
        </p>
        <Link
          to="/elmontag4/services"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Наши услуги
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-[#000000db] p-6 rounded-lg shadow-md shadow-black">
          <h3 className="text-xl text-[#61d0ff] font-semibold mb-4">
            Большой опыт
          </h3>
          <p className="text-gray-300">
            Более 15 лет успешной работы в сфере электромонтажа
          </p>
        </div>
        <div className="bg-[#000000db] p-6 rounded-lg shadow-md shadow-black">
          <h3 className="text-xl text-[#61d0ff] font-semibold mb-4">
            Надежность
          </h3>
          <p className="text-gray-300">Гарантия на все виды работ до 5 лет</p>
        </div>
        <div className="bg-[#000000db] p-6 rounded-lg shadow-md shadow-black">
          <h3 className="text-xl text-[#61d0ff] font-semibold mb-4">
            Оперативность
          </h3>
          <p className="text-gray-300">Выезд специалиста в день обращения</p>
        </div>
      </section>
    </div>
  );
}

function Services() {
  interface ServiceType {
    title: string;
    icon: JSX.Element;
    items: string[];
  }

  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Электромонтаж в квартирах и домах",
      icon: <HomeIcon className="h-8 w-8 text-blue-500" />,
      items: [
        "Полная замена электропроводки",
        "Установка электрощитов",
        "Монтаж розеток и выключателей",
        "Установка светильников",
        "Подключение бытовой техники",
      ],
    },
    {
      title: "Электромонтаж в офисах",
      icon: <BriefcaseIcon className="h-8 w-8 text-blue-500" />,
      items: [
        "Монтаж освещения",
        "Прокладка кабельных трасс",
        "Установка электрощитового оборудования",
        "Монтаж систем видеонаблюдения",
        "Структурированные кабельные системы",
      ],
    },
    {
      title: "Промышленный электромонтаж",
      icon: <CogIcon className="h-8 w-8 text-blue-500" />, // replaced FactoryIcon with CogIcon
      items: [
        "Монтаж силового оборудования",
        "Прокладка кабельных линий",
        "Установка трансформаторных подстанций",
        "Монтаж систем заземления",
        "Пусконаладочные работы",
      ],
    },
    {
      title: "Аварийные работы",
      icon: <ClockIcon className="h-8 w-8 text-blue-500" />,
      items: [
        "Устранение короткого замыкания",
        "Замена автоматов защиты",
        "Ремонт электропроводки",
        "Поиск обрыва кабеля",
        "Срочный вызов электрика",
      ],
    },
    {
      title: "Слаботочные системы",
      icon: <VideoCameraIcon className="h-8 w-8 text-blue-500" />,
      items: [
        "Монтаж систем видеонаблюдения",
        "Установка охранной сигнализации",
        "Монтаж пожарной сигнализации",
        "Системы контроля доступа (СКУД)",
        "Структурированные кабельные сети",
        "Домофонные системы",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-white text-center">Наши услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedService(service);
              setIsModalOpen(true);
            }}
            className=" bg-[#000000db] rounded-lg shadow-md shadow-black p-6 hover:shadow-xl hover:shadow-blue-600/60 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="text-xl text-blue-500 font-semibold ml-4">
                {service.title}
              </h3>
            </div>
            <ul className="list-disc list-inside text-white space-y-2">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-2">
                  <span className="text-blue-500 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Service Contact Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[0]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Заявка на {selectedService?.title}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 ml-4 text-2xl font-bold"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/80 text-white border-gray-600"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Дополнительная информация"
                  className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-200"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "ЖК «Солнечный»",
      description:
        "Полный комплекс электромонтажных работ в новом жилом комплексе на 500 квартир",
      details:
        "Монтаж электрощитового оборудования, прокладка кабельных линий, установка освещения",
    },
    {
      title: "Бизнес-центр «Престиж»",
      description:
        "Модернизация электрических сетей офисного здания площадью 10000 м²",
      details:
        "Замена проводки, установка новых распределительных щитов, монтаж освещения",
    },
    {
      title: "Завод «ТехноПром»",
      description: "Электромонтаж производственных линий и складских помещений",
      details:
        "Монтаж силового оборудования, прокладка кабельных трасс, установка освещения",
    },
    {
      title: "ТРЦ «Метрополис»",
      description: "Комплексные электромонтажные работы в торговом центре",
      details:
        "Установка систем освещения, монтаж электрощитов, прокладка кабельных линий",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-white text-center">
        Наши проекты
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black/60 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-blue-600/60 transition-all duration-300"
          >
            <h3 className="text-xl text-blue-500 font-semibold mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-gray-400 text-sm">{project.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-white text-center">
        Свяжитесь с нами
      </h2>
      <div className="bg-[#000000db] p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-blue-500 font-semibold mb-4">
              Контактная информация
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <a
                  href="tel:+79045929581"
                  className="hover:text-blue-400 transition-colors"
                >
                  +7 (904) 592-95-81
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <a
                  href="mailto:iz904@ya.ru"
                  className="hover:text-blue-400 transition-colors"
                >
                  iz904@ya.ru
                </a>
              </li>
              <li className="text-gray-300">
                Адрес: г. Муром, Владимирская область, улица Прудовая, д.6
              </li>
              <li className="text-gray-300">
                Режим работы: Пн-Вс: 8:00 - 22:00
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-blue-500 font-semibold mb-2">Мы работаем:</h4>
              <ul className="text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">▸</span>
                  <span>По всей Москве</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">▸</span>
                  <span>В Московской области</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">▸</span>
                  <span>В ближайшем Подмосковье</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-blue-500 font-semibold mb-4">
              Оставить заявку
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/80 text-white border-gray-600"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/80 text-white border-gray-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Опишите требуемые работы"
                  className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/60 text-white border-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-200"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
