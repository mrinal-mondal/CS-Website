import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Download, 
  Calendar, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  MessageSquare
} from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const freeResources = [
    {
      title: "Customer Onboarding Checklist",
      description: "Complete 30-point checklist to optimize your customer onboarding process",
      icon: CheckCircle
    },
    {
      title: "Customer Health Score Calculator", 
      description: "Excel template to calculate and track customer health scores",
      icon: Target
    },
    {
      title: "Free Customer Success Webinar",
      description: "90-minute masterclass on reducing churn and increasing retention",
      icon: Users
    }
  ];

  const nominalServices = [
    {
      title: "Strategy Session",
      price: "$250 - $500",
      duration: "2-3 hours",
      description: "Deep-dive consultation to identify gaps and opportunities in your customer success strategy",
      features: [
        "Current state assessment",
        "Gap analysis report", 
        "Strategic recommendations",
        "90-day action plan"
      ]
    },
    {
      title: "Process Audit",
      price: "$750 - $1,500", 
      duration: "1-2 weeks",
      description: "Comprehensive review of your customer success processes and workflows",
      features: [
        "End-to-end process mapping",
        "Efficiency bottleneck analysis",
        "Technology stack review",
        "Optimization roadmap"
      ]
    },
    {
      title: "Leadership Coaching Package",
      price: "$1,000 - $2,500",
      duration: "3 months",
      description: "One-on-one coaching for CS leaders to build high-performing teams",
      features: [
        "6 coaching sessions",
        "Team assessment tools",
        "Leadership framework",
        "Performance metrics setup"
      ]
    },
    {
      title: "Paid Masterclass",
      price: "$199/seat",
      duration: "4 hours",
      description: "Intensive workshop on advanced customer success strategies",
      features: [
        "Live interactive sessions",
        "Case study analysis",
        "Template library access",
        "3-month Q&A support"
      ]
    }
  ];

  const enterpriseServices = [
    {
      title: "Fractional Head of Customer Success",
      description: "Part-time executive leadership to build and scale your CS function",
      features: [
        "Strategic planning & execution",
        "Team hiring & training",
        "Process implementation",
        "Executive reporting"
      ]
    },
    {
      title: "Customer Success Framework Implementation",
      description: "Complete end-to-end implementation of proven CS frameworks",
      features: [
        "Custom framework design",
        "Team training & adoption",
        "Technology integration",
        "Success metrics setup"
      ]
    },
    {
      title: "Digital Transformation Strategy",
      description: "Transform your customer experience through digital innovation",
      features: [
        "Digital maturity assessment",
        "Technology roadmap",
        "Change management",
        "ROI measurement"
      ]
    },
    {
      title: "Corporate Training & Team Development",
      description: "Comprehensive training programs for customer success teams",
      features: [
        "Custom curriculum design",
        "Multi-level training programs",
        "Certification pathways",
        "Ongoing mentorship"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-foreground">
            Mrinal Mondal
          </h1>
          <p className="text-2xl md:text-3xl text-accent-foreground font-medium mb-8">
            Customer Success Strategist
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Helping businesses reduce churn, scale customer success, and grow revenue through proven frameworks and strategic guidance
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('free-resources')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Get Free Resources
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </section>

      {/* Tier 1 - Free Resources */}
      <section id="free-resources" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Customer Success Toolkit
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your customer success transformation with these free, proven resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {freeResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-accent/20 hover:border-accent/40">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="font-serif text-xl font-bold text-foreground">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      {resource.description}
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Lead Capture Form */}
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4 text-center">
                  Get Instant Access
                </h3>
                <div className="space-y-4">
                  <Input placeholder="Your email address" type="email" />
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Download All Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tier 2 - Nominal Pay Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Affordable Service Packages
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accelerate your customer success initiatives with focused, results-driven services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {nominalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="font-serif text-2xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                    Book Now
                    <Calendar className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 3 - Enterprise Engagements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Custom Advisory & Consulting
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic partnerships for enterprise-level customer success transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {enterpriseServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-accent/20 hover:border-accent/40">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Star className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
                    onClick={scrollToContact}
                  >
                    Contact Me
                    <MessageSquare className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's Work Together
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground">
                Ready to transform your customer success strategy? Get in touch to discuss your needs.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input placeholder="Your Email" type="email" />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Tell me about your customer success challenges..."
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;