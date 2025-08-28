import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "OpsHub",
    roles: [
      {
        title: "Customer Success Manager",
        period: "2021 – Present",
        description: "Leading enterprise customer success initiatives, managing high-value accounts, and driving retention strategies."
      },
      {
        title: "Product Support Manager", 
        period: "2020 – 2021",
        description: "Managed product support operations and customer technical requirements."
      }
    ],
    logo: "OH",
    color: "primary"
  },
  {
    company: "MSBDOCS",
    roles: [
      {
        title: "Lead Support Engineer",
        period: "2018 – 2020", 
        description: "Led technical support team and managed enterprise client relationships."
      }
    ],
    logo: "MS",
    color: "accent"
  },
  {
    company: "FIS Global",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "2013 – 2018",
        description: "Developed enterprise solutions and managed technical implementations for financial services clients."
      }
    ],
    logo: "FG",
    color: "primary"
  },
  {
    company: "Infosys BPO",
    roles: [
      {
        title: "Senior Technology Process Executive", 
        period: "2010 – 2013",
        description: "Managed technology processes and client deliverables in business process outsourcing."
      }
    ],
    logo: "IB",
    color: "accent"
  },
  {
    company: "Primediart",
    roles: [
      {
        title: "Web Developer",
        period: "2010",
        description: "Developed web applications and managed client projects."
      }
    ],
    logo: "PD",
    color: "primary"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of growth, leadership, and customer success across diverse industries and technologies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-px"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.company} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-2 ${exp.color === 'primary' ? 'bg-primary' : 'bg-accent'} border-4 border-background shadow-lg z-10`}></div>
                  
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold mr-4 ${exp.color === 'primary' ? 'bg-primary' : 'bg-accent'}`}>
                            {exp.logo}
                          </div>
                          <div>
                            <h3 className="font-playfair text-xl font-bold text-foreground flex items-center">
                              <Building2 className="w-5 h-5 mr-2 text-primary" />
                              {exp.company}
                            </h3>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className="border-l-2 border-muted pl-4">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="font-inter font-semibold text-lg text-foreground">
                                  {role.title}
                                </h4>
                                <Badge variant="secondary" className="mt-1 sm:mt-0 w-fit">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {role.period}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {role.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;