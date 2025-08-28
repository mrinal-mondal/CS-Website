import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.1),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full mx-auto mb-8 overflow-hidden shadow-2xl ring-4 ring-accent/20">
            <img 
              src="/lovable-uploads/36ed02c9-ffe0-48e8-a5ab-2927a09ed645.png" 
              alt="Mrinal Mondal - Customer Success Leader"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Mrinal Mondal
          </h1>
          
          <p className="font-inter text-xl md:text-2xl mb-6 text-primary-foreground/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Customer Success Leader | Consultant | Advisor
          </p>
          
          <p className="font-inter text-lg md:text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Driving Customer Success, Retention, and Growth for Global Enterprises
            <br />
            <span className="text-accent font-medium">14+ Years Experience | 95% Customer Retention Rate</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 font-semibold"
              onClick={() => scrollToSection('services')}
            >
              Work with Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
          
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;