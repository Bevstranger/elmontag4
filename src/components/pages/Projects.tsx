import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function Projects() {
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
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
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
