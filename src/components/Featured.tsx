const ensemble = [
  {
    year: "1714",
    name: "Церковь Преображения Господня",
    desc: "Самая сложная постройка северного деревянного зодчества. Венчается 23 главками. Построена без единого гвоздя — только топором и долотом.",
  },
  {
    year: "1764",
    name: "Покровская церковь",
    desc: "Ниже по высоте, с девятью главками, образующими «корону». Создаёт гармоничный визуальный контраст с Церковью Преображения.",
  },
  {
    year: "1874",
    name: "Шатровая колокольня",
    desc: "Удачно дополняет ансамбль — её высота сопоставима с Церковью Преображения. Построена в эпоху упадка деревянного зодчества.",
  },
  {
    year: "XVIII–XIX вв.",
    name: "Ограда и хозяйственные постройки",
    desc: "Реконструкция традиционных оград погостов. В комплекс входят дома, часовни, мельница и амбары.",
  },
];

export default function Featured() {
  return (
    <div id="ensemble" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/4a5cbee6-dc38-40d8-b6c2-0b4977359b94/files/f6a27c37-1658-4b6f-ab36-1ac6ec49db45.jpg"
          alt="Деревянное зодчество острова Кижи"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Состав архитектурного ансамбля</h3>
        <p className="text-2xl lg:text-3xl mb-8 text-neutral-900 leading-tight font-semibold">
          Четыре элемента, которые создают неповторимый образ острова Кижи
        </p>
        <div className="flex flex-col gap-5">
          {ensemble.map((item) => (
            <div key={item.name} className="border-l-2 border-neutral-200 pl-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400">{item.year}</span>
              <h4 className="text-base font-semibold text-neutral-900 mt-0.5">{item.name}</h4>
              <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
