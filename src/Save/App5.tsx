import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  PhoneIcon,
  BriefcaseIcon,
  ClockIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-[url(/public/2.jpg)] bg-contain bg-center flex flex-col"
        style={
          {
            // backgroundImage: "url('/2.jpg')",
          }
        }
      >
        <nav className="bg-[#1e1e1eb3] text-white shadow-md shadow-black/25">
          <div className="max-w-[90em] mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold">
                  ЭлектроМонтаж
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 rounded-md hover:bg-blue-500"
                >
                  <HomeIcon className="h-5 w-5 mr-1" />
                  Главная
                </Link>
                <Link
                  to="/services"
                  className="flex items-center px-3 py-2 rounded-md hover:bg-blue-800"
                >
                  <WrenchScrewdriverIcon className="h-5 w-5 mr-1" />
                  Услуги
                </Link>
                <Link
                  to="/projects"
                  className="flex items-center px-3 py-2 rounded-md hover:bg-blue-800"
                >
                  <ClipboardDocumentListIcon className="h-5 w-5 mr-1" />
                  Проекты
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center px-3 py-2 rounded-md hover:bg-blue-800"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className=" mx-[20px] px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-6">
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
                <p className="text-gray-300">Телефон: +7 (495) 123-45-67</p>
                <p className="text-gray-300">Email: info@electromont.ru</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                <p className="text-gray-300">
                  г. Москва, ул. Электрическая, д. 1
                </p>
                <p className="text-gray-300">Пн-Вс: 8:00 - 22:00</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                © 2024 ЭлектроМонтаж. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16 bg-black bg-opacity-80 rounded-lg text-white">
        <h1 className="text-5xl font-bold mb-6">
          Профессиональный электромонтаж
        </h1>
        <p className="text-xl mb-8">
          Качественные электромонтажные работы любой сложности
        </p>
        <Link
          to="/services"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Наши услуги
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-[#1e1e1eb3] p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-[#61d0ff] font-semibold mb-4">
            Большой опыт
          </h3>
          <p className="text-gray-300">
            Более 15 лет успешной работы в сфере электромонтажа
          </p>
        </div>
        <div className="bg-[#1e1e1eb3] p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-[#61d0ff] font-semibold mb-4">
            Надежность
          </h3>
          <p className="text-gray-300">Гарантия на все виды работ до 5 лет</p>
        </div>
        <div className="bg-[#1e1e1eb3] p-6 rounded-lg shadow-md">
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
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Наши услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Наши проекты</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-500 text-sm">{project.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Свяжитесь с нами</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Контактная информация
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                +7 (495) 123-45-67
              </li>
              <li>Email: info@electromont.ru</li>
              <li>Адрес: г. Москва, ул. Электрическая, д. 1</li>
              <li>Режим работы: Пн-Вс: 8:00 - 22:00</li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Мы работаем:</h4>
              <ul className="text-gray-600">
                <li>• По всей Москве</li>
                <li>• В Московской области</li>
                <li>• В ближайшем Подмосковье</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Оставить заявку</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  placeholder="Опишите требуемые работы"
                  className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-200"
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
