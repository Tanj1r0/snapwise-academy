
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
    title: "Photography Fundamentals",
    instructor: "Anna Reynolds",
    description: "Master the basics of photography including composition, exposure, and lighting to create stunning images.",
    price: 79,
    imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    level: "Beginner" as const,
    duration: "12 hours",
  },
  {
    id: 2,
    title: "Advanced Lighting Techniques",
    instructor: "Michael Chen",
    description: "Take your lighting skills to the next level with advanced techniques for portraiture and product photography.",
    price: 129,
    imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    level: "Advanced" as const,
    duration: "20 hours",
  },
  {
    id: 3,
    title: "Landscape Photography Masterclass",
    instructor: "Sarah Johnson",
    description: "Learn to capture breathtaking landscapes with proper technique, planning, and post-processing.",
    price: 99,
    imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    level: "Intermediate" as const,
    duration: "16 hours",
  },
];

const instructors = [
  {
    name: "Anna Reynolds",
    role: "Portrait Photographer",
    bio: "Award-winning portrait photographer with 15+ years of experience teaching at prestigious art schools.",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "Commercial Photographer",
    bio: "Former National Geographic photographer specializing in commercial and product photography for global brands.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Landscape Photographer",
    bio: "Renowned landscape photographer whose work has been featured in major publications and galleries worldwide.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    socialLinks: {
      instagram: "#",
      website: "#"
    }
  },
];

const testimonials = [
  {
    name: "David Smith",
    title: "Amateur Photographer",
    content: "The Photography Fundamentals course completely transformed how I approach composition. My photos now tell compelling stories I never thought I could capture.",
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  },
  {
    name: "Emily Lee",
    title: "Wedding Photographer",
    content: "Taking the Advanced Lighting Techniques course was the best career decision I've made. My clients have noticed a significant improvement in my work.",
    imageUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
  },
  {
    name: "Jason Wong",
    title: "Travel Blogger",
    content: "The Landscape Photography Masterclass taught me techniques that elevated my travel photography. I've gained 50k new followers thanks to these new skills.",
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
              Elevate Your Photography Skills
            </span>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6 ${isLoaded ? 'animate-slide-in' : 'opacity-0'}`}>
              Master the Art of <span className="text-white">Photography</span>
            </h1>
            <p className={`text-lg text-white/80 mb-8 ${isLoaded ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              Learn from award-winning photographers and transform your passion into stunning visual stories.
            </p>
            <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ${isLoaded ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <Link to="/courses" className="btn-primary px-8">
                Explore Courses
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition duration-300 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
                Learn More
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
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Why Choose PhotoMasters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our courses combine industry expertise with hands-on learning to deliver an unmatched educational experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from award-winning photographers with decades of experience in various photography niches.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Practical Assignments</h3>
              <p className="text-muted-foreground">
                Apply what you learn through hands-on projects with personalized feedback from your instructors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm reveal">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Flexible Learning</h3>
              <p className="text-muted-foreground">
                Access course materials anytime, anywhere, and learn at your own pace with lifetime access.
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
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Featured Courses</h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover our most popular photography courses taught by industry-leading professionals.
              </p>
            </div>
            <Link to="/courses" className="mt-4 md:mt-0 btn-secondary">
              View All Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={course.id} className="stagger-item reveal">
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Meet Our Instructors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from passionate photographers who have mastered their craft and are eager to share their knowledge.
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
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">What Our Students Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read about the experiences of photographers who have taken our courses.
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
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Ready to Take Your Photography to the Next Level?</h2>
            <p className="text-white/80 mb-8">
              Join thousands of photographers who have transformed their skills through our premium courses. Start your journey today.
            </p>
            <Link to="/courses" className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-primary transition duration-300 rounded-md bg-white hover:bg-gray-100 focus:shadow-outline focus:outline-none">
              Browse All Courses
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
