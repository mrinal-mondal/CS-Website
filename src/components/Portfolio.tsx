import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Cloud, 
  Truck, 
  Ticket, 
  Building2,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const projects = [
  {
    title: "Cloud Migration at Scale",
    industry: "Cloud Provider",
    icon: Cloud,
    color: "primary",
    challenge: "Migrate 1M+ artifacts from legacy systems to cloud infrastructure without service disruption",
    role: "Customer Success Manager & Technical Lead",
    outcome: "Zero downtime migration with 100% data integrity and 40% performance improvement",
    metrics: ["1M+ artifacts migrated", "0% downtime", "40% performance boost"],
    technologies: ["Cloud Infrastructure", "Migration Tools", "Performance Monitoring"]
  },
  {
    title: "Global Logistics Transformation", 
    industry: "Global Logistics",
    icon: Truck,
    color: "accent",
    challenge: "Consolidate and optimize 96 separate project management instances across global operations",
    role: "Project Lead & Strategic Advisor",
    outcome: "Successful consolidation with improved operational efficiency and unified reporting",
    metrics: ["96 projects consolidated", "30% efficiency gain", "Real-time visibility"],
    technologies: ["Project Management", "Integration APIs", "Data Analytics"]
  },
  {
    title: "Real-time Integration Platform",
    industry: "Ticketing Leader", 
    icon: Ticket,
    color: "primary",
    challenge: "Create seamless real-time synchronization between Jira and Azure DevOps platforms",
    role: "Technical Solution Architect",
    outcome: "Bi-directional sync with sub-second latency and 99.9% reliability",
    metrics: ["Real-time sync", "99.9% uptime", "Sub-second latency"],
    technologies: ["Jira", "Azure DevOps", "API Integration", "Real-time Sync"]
  },
  {
    title: "Multi-instance Financial Consolidation",
    industry: "Finance",
    icon: Building2,
    color: "accent", 
    challenge: "Consolidate multiple financial system instances into unified platform for better governance",
    role: "Customer Success Lead & Process Designer",
    outcome: "Streamlined operations with enhanced compliance and 50% reduction in processing time",
    metrics: ["Multiple instances unified", "50% faster processing", "Enhanced compliance"],
    technologies: ["Financial Systems", "Data Migration", "Compliance Tools"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Proven success across diverse industries with measurable outcomes and 
            transformational impact on enterprise operations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <CarouselItem key={index} className="pl-4 basis-1/2">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary overflow-hidden h-full">
                      <CardHeader className="bg-gradient-to-r from-muted/20 to-background">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-3">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} group-hover:scale-110 transition-transform duration-300`}>
                                <IconComponent className={`w-6 h-6 ${project.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                              </div>
                              <Badge 
                                variant="secondary" 
                                className={`${project.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}
                              >
                                {project.industry}
                              </Badge>
                            </div>
                            <CardTitle className="font-playfair text-xl font-bold text-foreground mb-2">
                              {project.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 space-y-6">
                        {/* Challenge */}
                        <div>
                          <div className="flex items-center mb-2">
                            <Target className="w-4 h-4 text-destructive mr-2" />
                            <h4 className="font-inter font-semibold text-foreground">Challenge</h4>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                            {project.challenge}
                          </p>
                        </div>
                        
                        {/* Role */}
                        <div>
                          <div className="flex items-center mb-2">
                            <ArrowRight className="w-4 h-4 text-primary mr-2" />
                            <h4 className="font-inter font-semibold text-foreground">My Role</h4>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                            {project.role}
                          </p>
                        </div>
                        
                        {/* Outcome */}
                        <div>
                          <div className="flex items-center mb-2">
                            <TrendingUp className="w-4 h-4 text-accent mr-2" />
                            <h4 className="font-inter font-semibold text-foreground">Outcome</h4>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed pl-6 mb-3">
                            {project.outcome}
                          </p>
                          
                          {/* Key Metrics */}
                          <div className="pl-6">
                            <div className="grid grid-cols-1 gap-2">
                              {project.metrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="flex items-center text-sm">
                                  <CheckCircle className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                                  <span className="font-medium text-foreground">{metric}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Technologies */}
                        <div>
                          <h4 className="font-inter font-semibold text-foreground mb-2 text-sm">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 border-primary shadow-lg" />
            <CarouselNext className="right-0 w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 border-primary shadow-lg" />
          </Carousel>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30 data-[active]:bg-primary transition-colors duration-200"></div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Ready for Your Next Success Story?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help transform your customer success strategy and drive measurable results for your enterprise.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Let's Discuss Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;