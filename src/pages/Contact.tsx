import { useState } from 'react';
import Layout from '../components/Layout';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      toast.success('Ваше сообщение было отправлено! Мы свяжемся с вами в ближайшее время.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">Свяжитесь с нами</h1>
            <p className="text-muted-foreground animate-slide-in">
              Есть вопросы или предложения? Мы будем рады услышать вас.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <h2 className="font-serif text-2xl font-semibold mb-6">Отправьте нам сообщение</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Адрес электронной почты</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="">Выберите тему</option>
                    <option value="Course Question">Вопрос о курсе</option>
                    <option value="Technical Support">Техническая поддержка</option>
                    <option value="Billing Inquiry">Вопрос по оплате</option>
                    <option value="Partnership Opportunity">Возможность партнерства</option>
                    <option value="Other">Другое</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Ваше сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn-primary w-full"
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    'Отправить сообщение'
                  )}
                </button>
              </form>
            </div>
            
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h2 className="font-serif text-2xl font-semibold mb-6">Контактная информация</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground text-sm">Пн-Пт с 9:00 до 18:00 по восточному времени</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Электронная почта</h3>
                      <p className="text-muted-foreground">support@photomasters.com</p>
                      <p className="text-muted-foreground text-sm">Мы ответим как можно скорее</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">123 Photography Lane</p>
                      <p className="text-muted-foreground">Нью-Йорк, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-8 rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-4">Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Как я могу получить доступ к своим курсам после покупки?</h4>
                    <p className="text-sm text-muted-foreground">После покупки вы можете получить доступ ко всем своим курсам, войдя в свою учетную запись и посетив раздел "Мои курсы".</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Предоставляете ли вы возврат средств?</h4>
                    <p className="text-sm text-muted-foreground">Да, мы предоставляем 30-дневную гарантию возврата денег, если вы не удовлетворены своей покупкой.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Как долго я буду иметь доступ к курсам?</h4>
                    <p className="text-sm text-muted-foreground">Вы получаете пожизненный доступ ко всем приобретенным курсам, включая любые будущие обновления содержимого курса.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Могу ли я скачать видео курсов?</h4>
                    <p className="text-sm text-muted-foreground">Видео курсов доступны только для потокового просмотра и не могут быть загружены, но вы можете получить к ним доступ в любое время при наличии интернет-соединения.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
