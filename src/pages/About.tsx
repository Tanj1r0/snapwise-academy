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
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">About PhotoMasters</h1>
            <p className="text-muted-foreground animate-slide-in">
              Empowering photographers through expert education since 2015.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal">
              <h2 className="font-serif text-3xl font-semibold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                PhotoMasters was founded in 2015 by a collective of professional photographers who shared a passion for education. What began as informal workshops in a small studio has grown into a global platform serving thousands of students.
              </p>
              <p className="text-muted-foreground mb-4">
                Our mission is to make high-quality photography education accessible to everyone, regardless of their background or current skill level. We believe that photography is not just about technical skills but about developing a unique creative vision.
              </p>
              <p className="text-muted-foreground">
                Today, PhotoMasters offers over 50 courses taught by more than 20 instructors from diverse photography backgrounds. We're proud to have helped more than 75,000 students improve their photography skills and pursue their creative passions.
              </p>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                  alt="Our story" 
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
            <h2 className="font-serif text-3xl font-semibold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              These core principles guide everything we do at PhotoMasters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We're committed to providing the highest quality education through rigorous course development and continuous improvement based on student feedback.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-muted-foreground">
                We believe photography is for everyone. Our courses are designed to be accessible to diverse learners with varying backgrounds, experience levels, and learning styles.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Empowerment</h3>
              <p className="text-muted-foreground">
                Our ultimate goal is to empower students to express their unique creative vision through photography and build confidence in their technical and artistic abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal">
              <h2 className="font-serif text-3xl font-semibold mb-6">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                We believe effective learning comes from a balance of theory, demonstration, and practice. Our teaching methodology embraces this philosophy in several ways:
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">1</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-lg font-medium mb-2">Comprehensive Curriculum</h3>
                    <p className="text-muted-foreground">Our courses are carefully structured to build skills progressively, establishing a solid foundation before advancing to more complex techniques.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">2</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-lg font-medium mb-2">Hands-On Projects</h3>
                    <p className="text-muted-foreground">We encourage active learning through practical assignments that allow students to apply what they've learned in real-world scenarios.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">3</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-lg font-medium mb-2">Personalized Feedback</h3>
                    <p className="text-muted-foreground">Our instructors provide detailed feedback on student work, offering specific guidance for improvement and growth.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">4</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-lg font-medium mb-2">Community Learning</h3>
                    <p className="text-muted-foreground">We foster a supportive community where students can share their work, exchange ideas, and learn from each other's experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 reveal">
              <h2 className="font-serif text-3xl font-semibold mb-6">By the Numbers</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Photography Courses</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">20+</div>
                  <p className="text-muted-foreground">Expert Instructors</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">75k+</div>
                  <p className="text-muted-foreground">Students Worldwide</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">4.8</div>
                  <p className="text-muted-foreground">Average Course Rating</p>
                </div>
              </div>
              
              <div className="bg-primary text-white p-8 rounded-lg mt-8">
                <h3 className="font-serif text-xl font-semibold mb-4">Join Our Community</h3>
                <p className="text-white/80 mb-6">
                  Become part of our global photography community and take your skills to new heights.
                </p>
                <button className="inline-flex items-center justify-center h-11 px-6 font-medium tracking-wide text-primary transition duration-300 rounded-md bg-white hover:bg-gray-100 focus:shadow-outline focus:outline-none">
                  Get Started Today
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
