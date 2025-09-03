import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const goToHome = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/eba2d19a-aa77-41f9-b22f-a3ec956fd93d.png" 
            alt="Mrinal Mondal" 
            className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={goToHome}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Achievements
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <Link 
            to="/services"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link 
            to="/blog"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={goToHome}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Achievements
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <Link 
                to="/services"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/blog"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;