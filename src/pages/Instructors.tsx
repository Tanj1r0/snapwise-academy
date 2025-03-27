
import Layout from '../components/Layout';
import InstructorCard from '../components/InstructorCard';

const instructors = [
  {
    name: "Anna Reynolds",
    role: "Portrait Photographer",
    bio: "Award-winning portrait photographer with 15+ years of experience teaching at prestigious art schools. Anna specializes in emotional portraiture that captures the essence of her subjects.",
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
    bio: "Former National Geographic photographer specializing in commercial and product photography for global brands. Michael brings real-world industry experience to his technical courses.",
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
    bio: "Renowned landscape photographer whose work has been featured in major publications and galleries worldwide. Sarah is passionate about teaching students to connect with nature through their lens.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    socialLinks: {
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "Jason Patel",
    role: "Mobile Photography Expert",
    bio: "Pioneer in mobile photography techniques with work featured in Apple campaigns. Jason believes that the best camera is the one you have with you and teaches how to maximize smartphone capabilities.",
    imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    socialLinks: {
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Elena Rodriguez",
    role: "Documentary Photographer",
    bio: "Documentary photographer who has covered events in over 40 countries. Elena specializes in visual storytelling and teaching photographers how to create impactful narrative series.",
    imageSrc: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      website: "#"
    }
  },
  {
    name: "David Kim",
    role: "Wedding Photographer",
    bio: "Luxury wedding photographer with a distinct fine art approach. David has photographed celebrations worldwide and teaches his unique style of capturing timeless moments.",
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
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">Our Expert Instructors</h1>
            <p className="text-muted-foreground animate-slide-in">
              Learn from industry professionals who are passionate about photography and education.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <InstructorCard {...instructor} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Join Our Teaching Team</h2>
              <p className="text-white/80 mb-6">
                Are you a photography expert passionate about sharing your knowledge? We're always looking for talented instructors to join our team.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white/80 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Share your expertise with students worldwide</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white/80 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Earn income from your knowledge and experience</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-white/80 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Join a supportive community of photography educators</span>
                </li>
              </ul>
              <button className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-primary transition duration-300 rounded-md bg-white hover:bg-gray-100 focus:shadow-outline focus:outline-none">
                Apply to Teach
              </button>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
