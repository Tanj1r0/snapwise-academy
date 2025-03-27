
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import CourseFilter, { Filters } from '../components/CourseFilter';

// Пример данных для курсов
const allCourses = [
  {
    id: 1,
    title: "Основы фотографии",
    instructor: "Анна Рейнольдс",
    description: "Освойте основы фотографии, включая композицию, экспозицию и освещение, чтобы создавать потрясающие изображения.",
    price: 7900,
    imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    level: "Beginner" as const,
    duration: "12 часов",
  },
  {
    id: 2,
    title: "Продвинутые техники освещения",
    instructor: "Михаил Чен",
    description: "Поднимите свои навыки освещения на новый уровень с продвинутыми техниками для портретной и предметной фотографии.",
    price: 12900,
    imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    level: "Advanced" as const,
    duration: "20 часов",
  },
  {
    id: 3,
    title: "Мастер-класс по пейзажной фотографии",
    instructor: "Сара Джонсон",
    description: "Научитесь снимать захватывающие пейзажи с правильной техникой, планированием и постобработкой.",
    price: 9900,
    imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    level: "Intermediate" as const,
    duration: "16 часов",
  },
  {
    id: 4,
    title: "Основы портретной фотографии",
    instructor: "Анна Рейнольдс",
    description: "Узнайте, как создавать потрясающие портреты, раскрывающие личность и эмоции ваших моделей.",
    price: 8900,
    imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    level: "Beginner" as const,
    duration: "14 часов",
  },
  {
    id: 5,
    title: "Мастер-класс по мобильной фотографии",
    instructor: "Джейсон Патель",
    description: "Узнайте, как делать профессиональные фотографии, используя только ваш смартфон и базовые приложения для редактирования.",
    price: 4900,
    imageSrc: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    level: "Beginner" as const,
    duration: "8 часов",
  },
  {
    id: 6,
    title: "Художественная фотография",
    instructor: "Сара Джонсон",
    description: "Развивайте своё художественное видение и создавайте концептуальные изображения, выражающие вашу творческую перспективу.",
    price: 14900,
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    level: "Advanced" as const,
    duration: "22 часа",
  },
];

const Courses = () => {
  const [filters, setFilters] = useState<Filters>({
    levels: [],
    priceRange: [0, 500],
    duration: [],
  });
  
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Обновление отфильтрованных курсов при изменении фильтров
  useEffect(() => {
    let result = allCourses;
    
    // Фильтр по уровню
    if (filters.levels.length > 0) {
      result = result.filter(course => filters.levels.includes(course.level));
    }
    
    // Фильтр по цене
    result = result.filter(course => course.price <= filters.priceRange[1]);
    
    // Фильтр по продолжительности (упрощенный подход)
    if (filters.duration.length > 0) {
      result = result.filter(course => {
        const hours = parseInt(course.duration.split(' ')[0]);
        if (filters.duration.includes('0-5 hours') && hours <= 5) return true;
        if (filters.duration.includes('5-10 hours') && hours > 5 && hours <= 10) return true;
        if (filters.duration.includes('10+ hours') && hours > 10) return true;
        return false;
      });
    }
    
    // Фильтр по поисковому запросу
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(term) || 
          course.description.toLowerCase().includes(term) ||
          course.instructor.toLowerCase().includes(term)
      );
    }
    
    setFilteredCourses(result);
  }, [filters, searchTerm]);
  
  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };
  
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">Курсы фотографии</h1>
            <p className="text-muted-foreground animate-slide-in">
              Исследуйте наш обширный ассортимент курсов фотографии, разработанных для повышения ваших навыков, независимо от вашего уровня подготовки.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12 animate-scale-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск курсов по названию, описанию или инструктору..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 px-4 pr-10 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <svg 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4">
              <CourseFilter onFilterChange={handleFilterChange} />
            </div>
            
            <div className="w-full lg:w-3/4">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <div key={course.id} className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      <CourseCard {...course} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm animate-fade-in">
                  <svg 
                    className="h-16 w-16 text-muted-foreground mx-auto mb-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
                  <p className="text-muted-foreground mb-4">
                    Попробуйте изменить параметры фильтрации или поисковый запрос, чтобы найти больше курсов.
                  </p>
                  <button 
                    onClick={() => {
                      setFilters({
                        levels: [],
                        priceRange: [0, 500],
                        duration: [],
                      });
                      setSearchTerm('');
                    }}
                    className="btn-secondary"
                  >
                    Сбросить фильтры
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
