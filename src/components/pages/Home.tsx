import { Link } from "react-router-dom";
import {
  WrenchScrewdriverIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClockIcon,
  ChartBarIcon,
  HomeIcon,
  BuildingOfficeIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-[url(/elmontag1/header.jpeg)] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
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
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url(/elmontag1/i1.jpg)",
              }}
            ></div>
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
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url(/elmontag1/i2.jpg)",
              }}
            ></div>
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
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url(/elmontag1/i3.jpg)",
              }}
            ></div>
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
