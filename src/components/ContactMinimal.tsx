import { Mail, MapPin, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactMinimal = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 text-foreground">
          Get in touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm always interested in discussing customer success strategies, enterprise consulting opportunities, 
              or collaboration on retention frameworks.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:mrinal.bappa@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:text-accent" />
                <span>mrinal.bappa@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/mrinalmondal85" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Linkedin className="h-5 w-5 group-hover:text-accent" />
                <span>linkedin.com/in/mrinalmondal85</span>
              </a>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>
          
          <Card className="bg-muted/30 border-border">
            <CardContent className="p-6">
              <h3 className="font-serif text-xl mb-4 text-foreground">Currently</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Leading Customer Success at OpsHub</p>
                <p>Managing 200+ enterprise accounts</p>
                <p>Pursuing MBA at DY Patil Vidyapith</p>
                <p className="text-accent font-medium">Open to consulting opportunities</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactMinimal;