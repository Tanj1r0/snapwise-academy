
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-xl font-semibold tracking-tight">PhotoMasters</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/instructors" className="nav-link">Instructors</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Log in</Link>
            <Link to="/signup" className="btn-primary">Sign up</Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container-custom py-3 bg-white shadow-lg rounded-b-lg">
          <nav className="flex flex-col space-y-4 mb-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/courses" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link to="/instructors" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Instructors</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
          <div className="flex flex-col space-y-3">
            <Link to="/login" className="text-center text-gray-600 hover:text-primary transition-colors p-2 border border-gray-200 rounded-md">Log in</Link>
            <Link to="/signup" className="btn-primary w-full text-center">Sign up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
