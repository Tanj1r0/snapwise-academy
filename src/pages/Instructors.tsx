import Layout from '../components/Layout';
import InstructorCard from '../components/InstructorCard';

const instructors = [
  {
    name: "Анна Рейнольдс",
    role: "Портретный фотограф",
    bio: "Отмеченный наградами портретный фотограф с более чем 15-летним опытом преподавания в престижных художественных школах. Анна специализируется на эмоциональных портретах, которые передают суть её моделей.",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "Михаил Чен",
    role: "Коммерческий фотограф",
    bio: "Бывший фотограф National Geographic, специализирующийся на коммерческой и предметной фотографии для мировых брендов. Михаил привносит в свои технические курсы реальный опыт работы в индустрии.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "Сара Джонсон",
    role: "Пейзажный фотограф",
    bio: "Известный пейзажный фотограф, работы которой были представлены в крупных изданиях и галереях по всему миру. Сара увлечена обучением студентов общению с природой через их объектив.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    socialLinks: {
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "Джейсон Патель",
    role: "Эксперт по мобильной фотографии",
    bio: "Пионер техник мобильной фотографии, работы которого представлены в кампаниях Apple. Джейсон считает, что лучшая камера - это та, которая у вас с собой, и учит, как максимально использовать возможности смартфона.",
    imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    socialLinks: {
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Елена Родригес",
    role: "Документальный фотограф",
    bio: "Документальный фотограф, освещавший события в более чем 40 странах. Елена специализируется на визуальном повествовании и обучении фотографов созданию впечатляющих повествовательных серий.",
    imageSrc: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "Давид Ким",
    role: "Свадебный фотограф",
    bio: "Фотограф роскошных свадеб с уникальным художественным подходом. Давид фотографировал торжества по всему миру и преподает свой уникальный стиль запечатления незабываемых моментов.",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    socialLinks: {
      instagram: "#",
      website: "#"
    }
  },
];

const Instructors = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">Наши эксперты-преподаватели</h1>
            <p className="text-muted-foreground animate-slide-in">
              Учитесь у профессионалов индустрии, которые увлечены фотографией и образованием.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index}>
                <InstructorCard {...instructor} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Присоединяйтесь к нашей команде преподавателей</h2>
              <p className="text-white/80 mb-6">
                Вы эксперт в фотографии, увлеченный передачей своих знаний? Мы всегда ищем талантливых инструкторов для присоединения к нашей команде.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white/80 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Делитесь своим опытом со студентами по всему миру</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white/80 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Получайте доход от своих знаний и опыта</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white/80 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Присоединяйтесь к поддерживающему сообществу преподавателей фотографии</span>
                </li>
              </ul>
              <button className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-primary transition duration-300 rounded-md bg-white hover:bg-gray-100 focus:shadow-outline focus:outline-none">
                Подать заявку на преподавание
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Teaching photography"
                className="relative rounded-lg shadow-xl z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Instructors;
