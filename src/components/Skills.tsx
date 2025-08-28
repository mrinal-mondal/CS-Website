import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  Target, 
  Lightbulb,
  Award,
  Settings
} from "lucide-react";

const skillCategories = [
  {
    title: "Customer Success & Relationship Management",
    icon: Users,
    color: "primary",
    skills: [
      "Enterprise Account Management", 
      "95% Customer Retention Rate", 
      "Churn Management", 
      "C-level Stakeholder Engagement",
      "Customer Health Monitoring",
      "Onboarding & Adoption"
    ]
  },
  {
    title: "Leadership & Strategy",
    icon: TrendingUp, 
    color: "accent",
    skills: [
      "Team Building & Development",
      "Client Success Frameworks", 
      "Cross-functional Leadership",
      "Strategic Planning",
      "Performance Management",
      "Resource Optimization"
    ]
  },
  {
    title: "Project & Process Management", 
    icon: Target,
    color: "primary",
    skills: [
      "Agile Methodologies",
      "SLA Compliance Management",
      "Service Improvement Initiatives", 
      "Knowledge Management",
      "Risk Assessment",
      "Quality Assurance"
    ]
  }
];

const achievements = [
  {
    icon: Award,
    title: "1M+ Artifacts Migration",
    description: "Zero downtime cloud migration"
  },
  {
    icon: TrendingUp,
    title: "96-Project Scale",
    description: "Global logistics transformation"
  },
  {
    icon: Settings,
    title: "Real-time Integration",
    description: "Jira–Azure DevOps synchronization"
  },
  {
    icon: Lightbulb,
    title: "Multi-instance Consolidation", 
    description: "Finance system optimization"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in customer success, leadership, and strategic project management 
            with proven results across global enterprises
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <CardTitle className="font-playfair text-xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="justify-start text-left py-2 px-3 hover:bg-primary/10 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Key Achievements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-inter font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;