import { useEffect } from 'react';
import Layout from '../components/Layout';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">О ФотоМастера</h1>
            <p className="text-muted-foreground animate-slide-in">
              Помогаем фотографам через экспертное образование с 2015 года.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal">
              <h2 className="font-serif text-3xl font-semibold mb-6">Наша история</h2>
              <p className="text-muted-foreground mb-4">
                ФотоМастера был основан в 2015 году коллективом профессиональных фотографов, которые разделяли страсть к обучению. То, что начиналось как неформальные мастер-классы в небольшой студии, выросло в глобальную платформу, обслуживающую тысячи студентов.
              </p>
              <p className="text-muted-foreground mb-4">
                Наша  миссия — сделать качественное образование в области фотографии доступным для всех, независимо от их происхождения или текущего уровня навыков. Мы верим, что фотография — это не только технические навыки, но и развитие уникального творческого видения.
              </p>
              <p className="text-muted-foreground">
                Сегодня ФотоМастера предлагает более 50 курсов, которые преподают более 20 инструкторов с разным опытом в фотографии. Мы гордимся тем, что помогли более чем 75 000 студентов улучшить свои навыки фотографии и реализовать свои творческие стремления.
              </p>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                  alt="Наша история" 
                  className="relative rounded-lg shadow-md overflow-hidden z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <h2 className="font-serif text-3xl font-semibold mb-4">Наши ценности</h2>
            <p className="text-muted-foreground">
              Эти основные принципы направляют все, что мы делаем в ФотоМастера.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Превосходство</h3>
              <p className="text-muted-foreground">
                Мы стремимся предоставлять образование высочайшего качества через тщательную разработку курсов и постоянное улучшение на основе отзывов студентов.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Инклюзивность</h3>
              <p className="text-muted-foreground">
                Мы верим, что фотография для всех. Наши курсы разработаны так, чтобы быть доступными для разных учеников с различным опытом, уровнями подготовки и стилями обучения.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Укрепление</h3>
              <p className="text-muted-foreground">
                Наша конечная цель — дать студентам возможность выразить свое уникальное творческое видение через фотографию и укрепить уверенность в своих технических и художественных способностях.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal">
              <h2 className="font-serif text-3xl font-semibold mb-6">Наш подход</h2>
              <p className="text-muted-foreground mb-4">
                Мы верим, что эффективное обучение достигается через баланс теории, демонстрации и практики. Наша методология преподавания воплощает эту философию несколькими способами:
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">1</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-lg font-medium mb-2">Комплексная программа</h3>
                    <p className="text-muted-foreground">Наши курсы тщательно структурированы, чтобы постепенно развивать навыки, создавая прочную основу перед переходом к более сложным техникам.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">2</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-lg font-medium mb-2">Практические проекты</h3>
                    <p className="text-muted-foreground">Мы поощряем активное обучение через практические задания, которые позволяют студентам применять полученные знания в реальных сценариях.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">3</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-lg font-medium mb-2">Персонализированная обратная связь</h3>
                    <p className="text-muted-foreground">Наши инструкторы предоставляют подробные отзывы о работах студентов, предлагая конкретные рекомендации для улучшения и роста.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">4</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-lg font-medium mb-2">Обучение в сообществе</h3>
                    <p className="text-muted-foreground">Мы создаем поддерживающее сообщество, где студенты могут делиться своими работами, обмениваться идеями и учиться на опыте друг друга.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 reveal">
              <h2 className="font-serif text-3xl font-semibold mb-6">В цифрах</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Курсов по фотографии</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">20+</div>
                  <p className="text-muted-foreground">Экспертных инструкторов</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">75k+</div>
                  <p className="text-muted-foreground">Студентов по всему миру</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">4.8</div>
                  <p className="text-muted-foreground">Средний рейтинг курсов</p>
                </div>
              </div>
              
              <div className="bg-primary text-white p-8 rounded-lg mt-8">
                <h3 className="font-serif text-xl font-semibold mb-4">Присоединяйтесь к нашему сообществу</h3>
                <p className="text-white/80 mb-6">
                  Станьте частью нашего глобального сообщества фотографов и поднимите свои навыки на новый уровень.
                </p>
                <button className="inline-flex items-center justify-center h-11 px-6 font-medium tracking-wide text-primary transition duration-300 rounded-md bg-white hover:bg-gray-100 focus:shadow-outline focus:outline-none">
                  Начать сегодня
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
