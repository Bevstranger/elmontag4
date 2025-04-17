import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  PhoneIcon,
  BriefcaseIcon,
  ClockIcon,
  CogIcon,
  BoltIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Hero Header */}
        <header className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0 bg-[url(/public/electrician-bg.jpg)] bg-cover bg-center opacity-20"></div>
          <nav className="relative bg-[#1e1e1ecc] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <BoltIcon className="h-8 w-8 text-yellow-400 mr-2" />
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                      ЭлектроСервис
                    </span>
                  </Link>
                </div>
                <div className="hidden md:flex space-x-2">
                  <Link
                    to="/"
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                  >
                    <HomeIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                    <span>Главная</span>
                  </Link>
                  <Link
                    to="/services"
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                  >
                    <WrenchScrewdriverIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                    <span>Услуги</span>
                  </Link>
                  <Link
                    to="/projects"
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                  >
                    <ClipboardDocumentListIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                    <span>Проекты</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 group"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:text-yellow-300" />
                    <span>Контакты</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <BoltIcon className="h-8 w-8 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">ЭлектроСервис</span>
                </div>
                <p className="text-gray-400">
                  Профессиональные электромонтажные работы с 2008 года. Гарантия
                  качества и безопасности.
                </p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    <span className="sr-only">VK</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.13C2 20.67 3.33 22 8.93 22h6.13c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm-1.76 15.13c-1.54 0-2.17-.72-3-.99-1.33-.5-1.88-.83-1.88-1.78 0-.68.5-1.33 1.5-1.33.85 0 1.17.28 1.5.95.35.83.58 1.41 1.33 1.41.68 0 1.17-.28 1.17-1.05 0-.55-.08-1.01-.18-1.41-.35-1.33-.85-2.78-2.4-2.78-1.5 0-2.4 1.05-2.4 2.53 0 1.78 1.33 3.08 3.15 3.08.83 0 1.67-.23 2.33-.5v1.15c-.5.18-1.33.5-2.33.5zm5.38-3.08c0 1.78-1.05 2.53-3.15 2.53-1.17 0-2.17-.35-2.78-.85l.58-1.5c.68.5 1.33.83 2.33.83 1.05 0 1.68-.35 1.68-1.18 0-.85-.85-1.17-2.05-1.68-1.5-.58-2.53-1.33-2.53-3.08 0-1.78 1.17-2.53 3-2.53 1.05 0 1.88.23 2.4.5l-.58 1.5c-.5-.23-1.05-.5-1.83-.5-1 0-1.5.35-1.5 1.05 0 .68.68.95 1.83 1.45 1.67.68 2.53 1.33 2.53 3.08z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    <span className="sr-only">Telegram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.25 1.58-1.32 5.41-1.87 7.19-.14.45-.41.6-.68.61-.23.01-.58-.11-.86-.21l-2.68-1.02-1.03-.98c-.37-.35-.01-.54.23-.77l4.08-3.92.85-.85c.12-.12.26-.12.38 0 .1.1.09.26.03.39l-1.47 2.6-.45.89 1.23.76 2.75 1.71.49.3c.44.26.75.12.86-.41l1.56-7.33c.12-.52-.19-.75-.68-.61z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                  Услуги
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Электромонтаж в квартирах
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Электромонтаж в домах
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Промышленный электромонтаж
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Аварийные работы
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Проектирование
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                  Контакты
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <PhoneIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p>+7 (495) 123-45-67</p>
                      <p>+7 (916) 987-65-43</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@electroservice.ru
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    г. Москва, ул. Электротехническая, 15, офис 304
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                  Режим работы
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Пн-Пт: 8:00 - 20:00
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Сб-Вс: 9:00 - 18:00
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors duration-300 font-medium"
                    >
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      Заказать звонок
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
              <p>© 2024 ООО "ЭлектроСервис". Все права защищены.</p>
              <p className="mt-2 text-sm">Лицензия №123456789 от 01.01.2024</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-[url(/public/electrician-working.jpg)] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Профессиональные{" "}
            <span className="text-yellow-400">электромонтажные</span> работы
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Полный комплекс услуг по электромонтажу в Москве и области с
            гарантией до 5 лет
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 shadow-lg flex items-center justify-center"
            >
              <WrenchScrewdriverIcon className="h-6 w-6 mr-2" />
              Наши услуги
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg flex items-center justify-center"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Вызвать электрика
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Более 15 лет мы обеспечиваем безопасность и комфорт наших клиентов
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-yellow-400">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Гарантия качества</h3>
            </div>
            <p className="text-gray-600">
              Все работы выполняются в строгом соответствии с ПУЭ и ГОСТ, с
              предоставлением гарантии до 5 лет
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-yellow-400">
            <div className="flex items-center mb-4">
              <UserGroupIcon className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Опытные специалисты</h3>
            </div>
            <p className="text-gray-600">
              В нашей команде работают только квалифицированные электрики с
              допусками и большим опытом
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-yellow-400">
            <div className="flex items-center mb-4">
              <ClockIcon className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Оперативный выезд</h3>
            </div>
            <p className="text-gray-600">
              Выезд мастера в день обращения, срочные работы выполняем в течение
              2-4 часов
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-yellow-400">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Прозрачные цены</h3>
            </div>
            <p className="text-gray-600">
              Фиксированные цены в смете, без скрытых платежей и накруток в
              процессе работы
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Наши основные услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Широкий спектр электромонтажных работ любой сложности
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-[url(/public/apartment-wiring.jpg)] bg-cover bg-center"></div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <HomeIcon className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold">
                  Электромонтаж в квартирах
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Полная замена проводки, установка щитков, розеток и выключателей
                в новостройках и старом фонде
              </p>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Подробнее
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-[url(/public/house-wiring.jpg)] bg-cover bg-center"></div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <BuildingOfficeIcon className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold">Электромонтаж в домах</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Монтаж электрики в частных домах, коттеджах, дачах с учетом всех
                особенностей деревянных конструкций
              </p>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Подробнее
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-[url(/public/industrial-wiring.jpg)] bg-cover bg-center"></div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <CogIcon className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold">
                  Промышленный электромонтаж
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Комплексные решения для предприятий: от проектирования до
                пусконаладочных работ
              </p>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Подробнее
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
            Все наши услуги
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Нужен срочный вызов электрика?
              </h2>
              <p className="text-lg mb-6">
                Оставьте заявку и наш мастер приедет к вам в течение 2 часов для
                решения любых проблем с электрикой
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Бесплатный выезд и диагностика</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Работаем без выходных и праздников</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Оплата после выполнения работ</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Оставить заявку
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Выберите услугу</option>
                      <option>Аварийный вызов</option>
                      <option>Замена проводки</option>
                      <option>Установка щитка</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 flex items-center justify-center"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Вызвать электрика
                  </button>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Электромонтаж в квартирах",
      icon: <HomeIcon className="h-8 w-8 text-yellow-500" />,
      description:
        "Полный комплекс работ по монтажу и замене электропроводки в квартирах любой планировки",
      items: [
        "Полная или частичная замена электропроводки",
        "Монтаж распределительных щитов",
        "Установка и замена розеток, выключателей",
        "Монтаж систем освещения (точечные светильники, люстры, бра)",
        "Установка электросчетчиков",
        "Монтаж систем теплых полов",
        "Подключение бытовой техники (плиты, духовки, стиральные машины)",
        "Устранение неисправностей в электропроводке",
      ],
      price: "от 3 500 ₽",
    },
    {
      title: "Электромонтаж в частных домах",
      icon: <BuildingOfficeIcon className="h-8 w-8 text-yellow-500" />,
      description:
        "Специализированные решения для деревянных и каменных домов с учетом всех требований безопасности",
      items: [
        "Монтаж вводного устройства и распределительного щита",
        "Прокладка кабельных линий по стенам и в штробах",
        "Установка УЗО и автоматических выключателей",
        "Монтаж систем заземления и молниезащиты",
        "Организация наружного освещения участка",
        "Установка стабилизаторов напряжения",
        "Монтаж систем резервного питания (ИБП, генераторы)",
        "Электромонтаж в банях и саунах",
      ],
      price: "от 5 000 ₽",
    },
    {
      title: "Коммерческий электромонтаж",
      icon: <BriefcaseIcon className="h-8 w-8 text-yellow-500" />,
      description:
        "Электромонтажные работы в офисах, магазинах, ресторанах и других коммерческих помещениях",
      items: [
        "Монтаж офисного освещения (подвесные потолки, светильники)",
        "Прокладка кабельных трасс и коробов",
        "Установка электрощитового оборудования",
        "Монтаж систем видеонаблюдения и СКУД",
        "Структурированные кабельные системы (ЛВС)",
        "Монтаж систем аварийного освещения",
        "Установка розеточных групп для торгового оборудования",
        "Электромонтаж вентиляционных систем",
      ],
      price: "от 8 000 ₽",
    },
    {
      title: "Промышленный электромонтаж",
      icon: <CogIcon className="h-8 w-8 text-yellow-500" />,
      description:
        "Комплексные решения для предприятий, складов и производственных помещений",
      items: [
        "Монтаж силового оборудования (до 1000В)",
        "Прокладка кабельных линий (кабельные лотки, трубы, короба)",
        "Установка трансформаторных подстанций",
        "Монтаж систем заземления и уравнивания потенциалов",
        "Пусконаладочные работы электрооборудования",
        "Монтаж промышленного освещения",
        "Установка систем автоматики и управления",
        "Испытания и измерения параметров электросетей",
      ],
      price: "от 15 000 ₽",
    },
    {
      title: "Аварийные электромонтажные работы",
      icon: <ClockIcon className="h-8 w-8 text-yellow-500" />,
      description:
        "Круглосуточный выезд электриков для устранения аварийных ситуаций",
      items: [
        "Устранение короткого замыкания",
        "Замена автоматов защиты и УЗО",
        "Ремонт электропроводки после затопления",
        "Поиск и устранение обрыва кабеля",
        "Восстановление питания при отключении электричества",
        "Замена поврежденных розеток и выключателей",
        "Ремонт распределительных коробок",
        "Экстренный ремонт уличной проводки",
      ],
      price: "от 2 000 ₽",
    },
    {
      title: "Проектирование электроснабжения",
      icon: <LightBulbIcon className="h-8 w-8 text-yellow-500" />,
      description:
        "Разработка проектной документации для объектов любого назначения",
      items: [
        "Техническое обследование электрохозяйства",
        "Разработка однолинейных схем",
        "Расчет нагрузок и сечений кабелей",
        "Проектирование систем заземления и молниезащиты",
        "Разработка проектов наружного освещения",
        "Согласование проектов в энергоснабжающих организациях",
        "Авторский надзор за выполнением электромонтажных работ",
        "Исполнительная документация",
      ],
      price: "от 10 000 ₽",
    },
  ];

  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 rounded-xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Полный спектр электромонтажных работ с гарантией качества и
            безопасности
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Мы предлагаем
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Профессиональные решения для любых задач в области электромонтажа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border-t-4 border-yellow-400"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Основные работы:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                    {service.items.slice(0, 4).map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="font-semibold text-gray-900">
                    {service.price}
                  </span>
                  <Link
                    to="/contact"
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Заказать
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не нашли нужную услугу?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Мы выполняем любые электромонтажные работы - от простой замены
              розетки до сложных промышленных проектов. Опишите вашу задачу, и
              мы предложим оптимальное решение.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Жилой комплекс «Солнечный берег»",
      description:
        "Полный комплекс электромонтажных работ в новом жилом комплексе бизнес-класса",
      details: [
        "Монтаж электрощитового оборудования для 500 квартир",
        "Прокладка более 20 км кабельных линий",
        "Установка 1500 розеток и выключателей",
        "Монтаж систем освещения общественных зон",
      ],
      stats: [
        { value: "500", label: "квартир" },
        { value: "12", label: "этажей" },
        { value: "3", label: "месяца работы" },
      ],
      image: "apartment-complex.jpg",
    },
    {
      title: "Бизнес-центр «Престиж»",
      description:
        "Модернизация системы электроснабжения офисного центра класса А",
      details: [
        "Замена устаревшей проводки на 10 000 м²",
        "Установка 25 новых распределительных щитов",
        "Монтаж системы резервного питания (ИБП)",
        "Организация системы учета электроэнергии",
      ],
      stats: [
        { value: "10 000", label: "м² площадь" },
        { value: "120", label: "офисов" },
        { value: "6", label: "недель срок" },
      ],
      image: "office-building.jpg",
    },
    {
      title: "Завод «ТехноПром»",
      description: "Электромонтаж производственных линий и складских помещений",
      details: [
        "Монтаж силового оборудования (до 630 кВт)",
        "Прокладка 8 км кабельных трасс",
        "Установка 3 трансформаторных подстанций",
        "Монтаж системы молниезащиты",
      ],
      stats: [
        { value: "25 000", label: "м² площадь" },
        { value: "630", label: "кВт мощность" },
        { value: "4", label: "месяца срок" },
      ],
      image: "factory-project.jpg",
    },
    {
      title: "Торгово-развлекательный центр «Метрополис»",
      description: "Комплексные электромонтажные работы в крупном ТРЦ",
      details: [
        "Монтаж системы основного и декоративного освещения",
        "Установка 50 электрощитов различного назначения",
        "Прокладка кабельных линий для торгового оборудования",
        "Монтаж системы аварийного освещения",
      ],
      stats: [
        { value: "45 000", label: "м² площадь" },
        { value: "200", label: "торговых точек" },
        { value: "5", label: "месяцев срок" },
      ],
      image: "mall-project.jpg",
    },
    {
      title: "Частный коттеджный поселок «Лесная усадьба»",
      description: "Электромонтаж в 25 частных домах и инфраструктуре поселка",
      details: [
        "Монтаж вводных устройств и распределительных щитов",
        "Прокладка наружных кабельных линий",
        "Установка системы уличного освещения",
        "Монтаж системы резервного питания",
      ],
      stats: [
        { value: "25", label: "домов" },
        { value: "5", label: "км кабеля" },
        { value: "2", label: "месяца срок" },
      ],
      image: "cottage-project.jpg",
    },
    {
      title: "Гостиница «River Plaza» 4*",
      description:
        "Реконструкция системы электроснабжения гостиничного комплекса",
      details: [
        "Полная замена электропроводки в 150 номерах",
        "Монтаж системы автоматического управления освещением",
        "Установка системы гарантированного питания",
        "Модернизация системы заземления",
      ],
      stats: [
        { value: "150", label: "номеров" },
        { value: "12", label: "этажей" },
        { value: "3", label: "месяца срок" },
      ],
      image: "hotel-project.jpg",
    },
  ];

  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 rounded-xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши проекты</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Реализованные объекты, демонстрирующие наш профессионализм и опыт
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Реализованные работы
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы гордимся каждым выполненным проектом и готовы показать наши
            лучшие работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div
                className="h-48 bg-gray-200 bg-cover bg-center"
                style={{ backgroundImage: `url(/public/${project.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Выполненные работы:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                    {project.details.slice(0, 3).map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <span className="block text-lg font-bold text-blue-600">
                        {stat.value}
                      </span>
                      <span className="block text-sm text-gray-500">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Хотите такой же качественный электромонтаж?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Наши специалисты готовы реализовать ваш проект с тем же уровнем
              профессионализма и внимания к деталям
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Обсудить проект
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-50 transition duration-300"
              >
                <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 rounded-xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наши контакты
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <PhoneIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Телефоны
                  </h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">
                      +7 (916) 987-65-43 (круглосуточно)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Электронная почта
                  </h3>
                  <div className="mt-2">
                    <p className="text-gray-600">info@electroservice.ru</p>
                    <p className="text-gray-600">
                      sales@electroservice.ru (для коммерческих предложений)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Адрес</h3>
                  <div className="mt-2">
                    <p className="text-gray-600">
                      г. Москва, ул. Электротехническая, 15, офис 304
                    </p>
                    <p className="text-gray-600 mt-1">
                      БЦ "Электросити", 3 этаж
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Режим работы
                  </h3>
                  <div className="mt-2">
                    <p className="text-gray-600">Офис: Пн-Пт с 9:00 до 18:00</p>
                    <p className="text-gray-600">
                      Аварийная служба: круглосуточно
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Мы в соцсетях
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.13C2 20.67 3.33 22 8.93 22h6.13c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm-1.76 15.13c-1.54 0-2.17-.72-3-.99-1.33-.5-1.88-.83-1.88-1.78 0-.68.5-1.33 1.5-1.33.85 0 1.17.28 1.5.95.35.83.58 1.41 1.33 1.41.68 0 1.17-.28 1.17-1.05 0-.55-.08-1.01-.18-1.41-.35-1.33-.85-2.78-2.4-2.78-1.5 0-2.4 1.05-2.4 2.53 0 1.78 1.33 3.08 3.15 3.08.83 0 1.67-.23 2.33-.5v1.15c-.5.18-1.33.5-2.33.5zm5.38-3.08c0 1.78-1.05 2.53-3.15 2.53-1.17 0-2.17-.35-2.78-.85l.58-1.5c.68.5 1.33.83 2.33.83 1.05 0 1.68-.35 1.68-1.18 0-.85-.85-1.17-2.05-1.68-1.5-.58-2.53-1.33-2.53-3.08 0-1.78 1.17-2.53 3-2.53 1.05 0 1.88.23 2.4.5l-.58 1.5c-.5-.23-1.05-.5-1.83-.5-1 0-1.5.35-1.5 1.05 0 .68.68.95 1.83 1.45 1.67.68 2.53 1.33 2.53 3.08z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition duration-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.25 1.58-1.32 5.41-1.87 7.19-.14.45-.41.6-.68.61-.23.01-.58-.11-.86-.21l-2.68-1.02-1.03-.98c-.37-.35-.01-.54.23-.77l4.08-3.92.85-.85c.12-.12.26-.12.38 0 .1.1.09.26.03.39l-1.47 2.6-.45.89 1.23.76 2.75 1.71.49.3c.44.26.75.12.86-.41l1.56-7.33c.12-.52-.19-.75-.68-.61z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition duration-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Оставить заявку
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ваше имя <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Интересующая услуга
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="apartment">Электромонтаж в квартире</option>
                    <option value="house">Электромонтаж в доме</option>
                    <option value="office">Коммерческий электромонтаж</option>
                    <option value="industrial">
                      Промышленный электромонтаж
                    </option>
                    <option value="emergency">Аварийные работы</option>
                    <option value="design">Проектирование</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Опишите вашу задачу..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 flex items-center justify-center"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Отправить заявку
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  Нажимая кнопку, вы соглашаетесь с нашей{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Политикой конфиденциальности
                  </a>
                </p>
              </form>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac80f99cad8fdfca2c0e4dab4c31dfc9f7f74651594ae40c8b251f03c09e002ce&amp;source=constructor"
                width="100%"
                height="400"
                frameBorder="0"
                className="border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
