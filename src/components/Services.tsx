import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Target,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    category: "Consulting & Advisory Services",
    icon: Lightbulb,
    color: "primary",
    description: "Strategic guidance to optimize customer success and drive business growth",
    services: [
      "Strategic Customer Success Frameworks",
      "Planning & Strategy Sessions", 
      "Data-driven Client Health Monitoring",
      "Onboarding Process Design",
      "Agile Adoption & Implementation",
      "Churn Analysis & Prevention"
    ]
  },
  {
    category: "Coaching & Leadership Services", 
    icon: Users,
    color: "accent",
    description: "Empowering teams and leaders to achieve exceptional customer success results",
    services: [
      "Team Performance Coaching",
      "Leadership Development Training",
      "Customer Success Best Practices",
      "Efficiency Framework Implementation", 
      "Resource Management Optimization",
      "Cross-functional Collaboration"
    ]
  }
];

const benefits = [
  "95%+ Customer Retention Rate",
  "Proven Enterprise Experience", 
  "Data-driven Approach",
  "Scalable Frameworks",
  "C-level Stakeholder Experience",
  "14+ Years Industry Expertise"
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your customer success strategy with proven frameworks and expert guidance 
            from 14+ years of enterprise experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/10 pb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <CardTitle className="font-playfair text-2xl font-bold text-foreground mb-3">
                    {service.category}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Why Work with Me */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Work with Me?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-left">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-inter text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Work with Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;