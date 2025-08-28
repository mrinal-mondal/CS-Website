import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="font-inter text-lg leading-relaxed text-muted-foreground">
              As a seasoned <span className="text-primary font-semibold">Customer Success Leader</span> with over 14 years of experience, I specialize in driving customer retention, managing enterprise relationships, and building high-performing teams that deliver exceptional results.
            </p>
            
            <p className="font-inter text-lg leading-relaxed text-muted-foreground">
              My expertise spans across <span className="text-accent font-semibold">churn management, C-level stakeholder engagement</span>, and implementing data-driven frameworks that have consistently achieved 95%+ customer retention rates across diverse industries.
            </p>
            
            <p className="font-inter text-lg leading-relaxed text-muted-foreground">
              I believe in a <span className="text-primary font-semibold">customer-first approach</span> combined with strategic thinking and leadership excellence to drive sustainable business growth and customer happiness.
            </p>
            
            <div className="pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 shadow-lg">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="border-2 border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-inter font-semibold text-lg text-foreground mb-2">
                      Educational Background
                    </h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold text-foreground">MBA (Ongoing)</h4>
                        <p className="text-muted-foreground">DY Patil Vidyapith</p>
                        <p className="text-sm text-muted-foreground">2024 – Present</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground">B.Sc. Information Technology</h4>
                        <p className="text-muted-foreground">Jadavpur University</p>
                        <p className="text-sm text-muted-foreground">2007 – 2010</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-xl text-foreground mb-4">
                  Work Philosophy
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Customer-first approach in all decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Data-driven decision making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Leadership excellence through empowerment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;