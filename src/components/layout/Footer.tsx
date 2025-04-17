import { Link } from "react-router-dom";
import { BoltIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <BoltIcon className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold">ЭлектроСервис</span>
            </div>
            <p className="text-gray-400 text-center">
              Профессиональные электромонтажные работы с 2008 года. Гарантия
              качества и безопасности.
            </p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">VK</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24.762,7.717c.165-.557,0-.967-.793-.967H21.344a1.127,1.127,0,0,0-1.141.744,21.989,21.989,0,0,1-3.226,5.369c-.61.61-.891.806-1.225.806-.165,0-.419-.2-.419-.753v-5.2c0-.668-.187-.967-.74-.967H10.468a.633.633,0,0,0-.668.6c0,.633.945.78,1.043,2.562v3.867c0,.847-.151,1-.486,1-.891,0-3.057-3.27-4.34-7.013C5.759,7.044,5.5,6.75,4.832,6.75H2.208c-.749,0-.9.352-.9.744,0,.7.891,4.148,4.148,8.711,2.17,3.114,5.226,4.8,8.007,4.8,1.671,0,1.876-.374,1.876-1.02,0-2.976-.151-3.257.686-3.257.388,0,1.056.2,2.615,1.7,1.782,1.782,2.076,2.58,3.074,2.58h2.624c.749,0,1.127-.374.909-1.114-.5-1.555-3.872-4.754-4.023-4.968-.388-.5-.276-.722,0-1.167,0,0,3.208-4.513,3.538-6.042Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Telegram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11,.563a11,11,0,1,0,11,11A11,11,0,0,0,11,.563ZM16.4,8.1,14.6,16.606c-.133.6-.492.75-.994.466l-2.75-2.027L9.527,16.322a.694.694,0,0,1-.554.271l.2-2.8,5.1-4.6c.222-.2-.049-.306-.342-.111l-6.3,3.965L4.91,12.2c-.59-.186-.6-.59.124-.874L15.64,7.233c.492-.177.923.12.763.865Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
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
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Контакты
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center justify-center md:justify-start">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <div>
                  <a
                    href="tel:+7 (916) 987-65-43"
                    className="hover:text-yellow-400"
                  >
                    +7 (916) 987-65-43
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 flex-shrink-0"
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
                <a
                  href="mailto:iva.igor@ya.ru"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  iva.igor@ya.ru
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 flex-shrink-0"
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
                <span>
                  г. Муром, Владимирская обл., улица Ленинградская, д. 26,
                  корп./ст. 1, кв./оф. 64
                </span>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Режим работы
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center justify-center md:justify-start">
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
              <li className="flex items-center justify-center md:justify-start">
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
                Сб-Вс: 9:00 - 21:00
              </li>
              <li className="mt-4 flex justify-center md:justify-start">
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
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© 2025 ИП "ИВАНОВ ИГОРЬ ЮРЬЕВИЧ". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
