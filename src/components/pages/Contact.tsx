import { PhoneIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form") {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="space-y-12">
      {/* <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 rounded-xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section> */}

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
                    <p className="text-gray-600">
                      <a
                        href="tel:+79157659845"
                        className="hover:text-blue-400"
                      >
                        +7 (915) 765-98-45
                      </a>
                    </p>
                    {/* <p className="text-gray-600">
                        +7 (916) 987-65-43 (круглосуточно)
                      </p> */}
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
                    <p className="text-gray-600">
                      <a
                        href="mailto:iva.igor@ya.ru"
                        className="hover:text-blue-400"
                      >
                        iva.igor@ya.ru
                      </a>
                    </p>
                    {/* <p className="text-gray-600">
                        iva.iror@ya.ru (для коммерческих предложений)
                      </p> */}
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
                      г. Муром, Владимирская обл., улица Ленинградская, д. 26,
                      корп./ст. 1, кв./оф. 64
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
                    <p className="text-gray-600">Офис: Пн-Пт с 9:00 до 21:00</p>
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
                    <path d="M24.762,7.717c.165-.557,0-.967-.793-.967H21.344a1.127,1.127,0,0,0-1.141.744,21.989,21.989,0,0,1-3.226,5.369c-.61.61-.891.806-1.225.806-.165,0-.419-.2-.419-.753v-5.2c0-.668-.187-.967-.74-.967H10.468a.633.633,0,0,0-.668.6c0,.633.945.78,1.043,2.562v3.867c0,.847-.151,1-.486,1-.891,0-3.057-3.27-4.34-7.013C5.759,7.044,5.5,6.75,4.832,6.75H2.208c-.749,0-.9.352-.9.744,0,.7.891,4.148,4.148,8.711,2.17,3.114,5.226,4.8,8.007,4.8,1.671,0,1.876-.374,1.876-1.02,0-2.976-.151-3.257.686-3.257.388,0,1.056.2,2.615,1.7,1.782,1.782,2.076,2.58,3.074,2.58h2.624c.749,0,1.127-.374.909-1.114-.5-1.555-3.872-4.754-4.023-4.968-.388-.5-.276-.722,0-1.167,0,0,3.208-4.513,3.538-6.042Z" />
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
                    <path d="M10.474,12.475a8.231,8.231,0,0,1-3.361,1l.781.769,2.85,2.85c1.042,1.068-.654,2.738-1.707,1.707-.713-.725-1.759-1.77-2.85-2.861L3.337,18.8c-1.053,1.027-2.749-.657-1.7-1.707.725-.725,1.759-1.77,2.85-2.85l.769-.769a8.193,8.193,0,0,1-3.384-1C.659,11.687.125,11.227.6,10.267c.276-.545,1.035-1,2.039-.213a6.059,6.059,0,0,0,3.544,1.079,6.059,6.059,0,0,0,3.544-1.079c1-.788,1.759-.332,2.039.213.463.96-.071,1.419-1.289,2.207ZM1.331,4.844A4.844,4.844,0,1,1,6.176,9.677,4.848,4.848,0,0,1,1.331,4.844Zm2.465,0a2.379,2.379,0,1,0,2.379-2.39A2.383,2.383,0,0,0,3.8,4.844Z" />
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
                    <path d="M11,.563a11,11,0,1,0,11,11A11,11,0,0,0,11,.563ZM16.4,8.1,14.6,16.606c-.133.6-.492.75-.994.466l-2.75-2.027L9.527,16.322a.694.694,0,0,1-.554.271l.2-2.8,5.1-4.6c.222-.2-.049-.306-.342-.111l-6.3,3.965L4.91,12.2c-.59-.186-.6-.59.124-.874L15.64,7.233c.492-.177.923.12.763.865Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map section - moved before the form */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac80f99cad8fdfca2c0e4dab4c31dfc9f7f74651594ae40c8b251f03c09e002ce&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              className="border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Form section - now full width */}
        <div id="contact-form" className="mt-12">
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
                  <option value="industrial">Промышленный электромонтаж</option>
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
        </div>
      </section>
    </div>
  );
}
