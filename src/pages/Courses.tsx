
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import CourseFilter, { Filters } from '../components/CourseFilter';

// Sample data for courses
const allCourses = [
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
  {
    id: 4,
    title: "Portrait Photography Essentials",
    instructor: "Anna Reynolds",
    description: "Learn how to capture stunning portraits that reveal the personality and emotion of your subjects.",
    price: 89,
    imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    level: "Beginner" as const,
    duration: "14 hours",
  },
  {
    id: 5,
    title: "Mobile Photography Masterclass",
    instructor: "Jason Patel",
    description: "Discover how to take professional-quality photos using just your smartphone and basic editing apps.",
    price: 49,
    imageSrc: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    level: "Beginner" as const,
    duration: "8 hours",
  },
  {
    id: 6,
    title: "Fine Art Photography",
    instructor: "Sarah Johnson",
    description: "Develop your artistic vision and create conceptual images that express your creative perspective.",
    price: 149,
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    level: "Advanced" as const,
    duration: "22 hours",
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
  
  // Update filtered courses when filters change
  useEffect(() => {
    let result = allCourses;
    
    // Filter by level
    if (filters.levels.length > 0) {
      result = result.filter(course => filters.levels.includes(course.level));
    }
    
    // Filter by price
    result = result.filter(course => course.price <= filters.priceRange[1]);
    
    // Filter by duration (this is a simplified approach)
    if (filters.duration.length > 0) {
      result = result.filter(course => {
        const hours = parseInt(course.duration.split(' ')[0]);
        if (filters.duration.includes('0-5 hours') && hours <= 5) return true;
        if (filters.duration.includes('5-10 hours') && hours > 5 && hours <= 10) return true;
        if (filters.duration.includes('10+ hours') && hours > 10) return true;
        return false;
      });
    }
    
    // Filter by search term
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
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">Photography Courses</h1>
            <p className="text-muted-foreground animate-slide-in">
              Explore our comprehensive range of photography courses designed to elevate your skills, no matter your experience level.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12 animate-scale-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses by title, description or instructor..."
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
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search term to find more courses.
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
                    Reset Filters
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
