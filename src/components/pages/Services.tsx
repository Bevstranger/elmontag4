import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  ClockIcon,
  CogIcon,
  HomeIcon,
  LightBulbIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { BoltIcon } from "@heroicons/react/24/outline";
// Import all necessary icons
// Copy the entire Services component here
export default function Services() {
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
      image: "/elmontag1/i1.jpg",
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
      image: "/elmontag1/i2.jpg",
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
      image: "/elmontag1/i3.jpg",
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
      image: "/elmontag1/i4.jpg",
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
      image: "/elmontag1/i5.webp",
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
      image: "/elmontag1/i6.webp",
    },
    {
      title: "Слаботочные системы",
      icon: <BoltIcon className="h-8 w-8 text-yellow-500" />,
      description:
        "Монтаж и обслуживание слаботочных систем для жилых и коммерческих объектов",
      items: [
        "Системы видеонаблюдения (IP и аналоговые)",
        "Охранно-пожарная сигнализация",
        "Системы контроля доступа (СКУД)",
        "Домофоны и видеодомофоны",
        "Структурированные кабельные сети (СКС)",
        "Системы умного дома",
        "Телевизионные и спутниковые антенны",
        "Локальные компьютерные сети",
      ],
      price: "от 4 500 ₽",
      image: "/elmontag1/i7.jpg",
    },
  ];

  return (
    <div className="space-y-12">
      {/* <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 rounded-xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Полный спектр электромонтажных работ с гарантией качества и
            безопасности
          </p>
        </div>
      </section> */}

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
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border-t-4 border-yellow-400 flex flex-col"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="p-6 flex flex-col flex-grow">
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
                <div className="flex justify-between items-center mt-auto pt-4">
                  <span className="font-semibold text-gray-900">
                    {service.price}
                  </span>
                  <Link
                    to="/contact#contact-form"
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
              to="/contact#contact-form"
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
