import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import InstructorCard from '../components/InstructorCard';
import TestimonialCard from '../components/TestimonialCard';
import LazyImage from '../components/LazyImage';

const courses = [
  {
    id: 1,
    title: "Основы фотографии",
    instructor: "Анна Рейнольдс",
    description: "Освойте основы фотографии, включая композицию, экспозицию и освещение, чтобы создавать потрясающие изображения.",
    price: 79,
    imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    level: "Начальный" as const,
    duration: "12 часов",
  },
  {
    id: 2,
    title: "Продвинутые техники освещения",
    instructor: "Майкл Чен",
    description: "Поднимите свои навыки освещения на новый уровень с помощью продвинутых техник для портретной и предметной фотографии.",
    price: 129,
    imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    level: "Продвинутый" as const,
    duration: "20 часов",
  },
  {
    id: 3,
    title: "Мастер-класс по пейзажной фотографии",
    instructor: "Сара Джонсон",
    description: "Научитесь создавать захватывающие пейзажи с правильной техникой, планированием и постобработкой.",
    price: 99,
    imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    level: "Средний" as const,
    duration: "16 часов",
  },
];

const instructors = [
  {
    name: "Анна Рейнольдс",
    role: "Фотограф-портретист",
    bio: "Награжденный фотограф-портретист с более чем 15-летним опытом преподавания в престижных художественных школах.",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "Майкл Чен",
    role: "Коммерческий фотограф",
    bio: "Бывший фотограф National Geographic, специализирующийся на коммерческой и предметной фотографии для мировых брендов.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "Сара Джонсон",
    role: "Фотограф-пейзажист",
    bio: "Известный фотограф-пейзажист, чьи работы были опубликованы в крупных изданиях и выставлены в галереях по всему миру.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    socialLinks: {
      instagram: "#",
      website: "#"
    }
  },
];

const testimonials = [
  {
    name: "Дэвид Смит",
    title: "Любитель фотографии",
    content: "Курс «Основы фотографии» полностью изменил мой подход к композиции. Мои фотографии теперь рассказывают захватывающие истории, которые я никогда не думал, что смогу запечатлеть.",
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  },
  {
    name: "Эмили Ли",
    title: "Фотограф свадеб",
    content: "Прохождение курса «Продвинутые техники освещения» стало лучшим решением в моей карьере. Мои клиенты заметили значительное улучшение в моей работе.",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
  },
  {
    name: "Джейсон Вонг",
    title: "Тревел-блогер",
    content: "Мастер-класс по пейзажной фотографии научил меня техникам, которые подняли мою тревел-фотографию на новый уровень. Я набрал 50 тысяч новых подписчиков благодаря этим навыкам.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add CSS classes for staggered animations
    document.querySelectorAll('.stagger-item').forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-hero-pattern bg-cover bg-center h-[90vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl text-white">
            <span className={`inline-block text-sm font-medium px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              Повышайте свои навыки фотографии
            </span>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6 ${isLoaded ? 'animate-slide-in' : 'opacity-0'}`}>
              Овладейте искусством <span className="text-white">фотографии</span>
            </h1>
            <p className={`text-lg text-white/80 mb-8 ${isLoaded ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              Учитесь у фотографов с мировым именем и превращайте свою страсть в потрясающие визуальные истории.
            </p>
            <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ${isLoaded ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <Link to="/courses" className="btn-primary px-8">
                Исследовать курсы
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition duration-300 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
                Узнать больше
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Почему выбирают PhotoMasters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наши курсы сочетают отраслевой опыт с практическим обучением, обеспечивая непревзойденный образовательный опыт.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Экспертные инструкторы</h3>
              <p className="text-muted-foreground">
                Учитесь у фотографов с наградами, имеющих десятилетия опыта в различных областях фотографии.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Практические задания</h3>
              <p className="text-muted-foreground">
                Применяйте полученные знания на практике с проектами и получайте персональную обратную связь.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Гибкое обучение</h3>
              <p className="text-muted-foreground">
                Получите доступ к материалам курса в любое время и учитесь в своем темпе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 reveal">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Популярные курсы</h2>
              <p className="text-muted-foreground max-w-2xl">
                Откройте для себя наши самые популярные курсы фотографии, которые преподают ведущие профессионалы отрасли.
              </p>
            </div>
            <Link to="/courses" className="mt-4 md:mt-0 btn-secondary">
              View All Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={course.id} className="stagger-item reveal">
                <CourseCard
                  {...course}
                  level={
                    course.level === "Начальный"
                      ? "Beginner"
                      : course.level === "Средний"
                      ? "Intermediate"
                      : "Advanced"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Наши инструкторы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Учитесь у увлеченных фотографов, которые освоили свое ремесло и готовы поделиться своими знаниями.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="stagger-item reveal">
                <InstructorCard {...instructor} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 reveal">
            <Link to="/instructors" className="btn-secondary">
              View All Instructors
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16 reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Отзывы наших студентов</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Прочитайте об опыте фотографов, которые прошли наши курсы.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="stagger-item reveal">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Готовы поднять свои навыки фотографии на новый уровень?</h2>
            <p className="text-white/80 mb-8">
              Присоединяйтесь к тысячам фотографов, которые улучшили свои навыки с помощью наших премиальных курсов. Начните свой путь уже сегодня.
            </p>
            <Link to="/courses" className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-primary transition duration-300 rounded-md bg-white hover:bg-gray-100 focus:shadow-outline focus:outline-none">
              Просмотреть все курсы
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
