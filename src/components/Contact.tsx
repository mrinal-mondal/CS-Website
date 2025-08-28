import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send,
  Phone,
  MessageSquare
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mrinal.bappa@gmail.com",
    href: "mailto:mrinal.bappa@gmail.com",
    color: "primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    value: "linkedin.com/in/mrinalmondal85",
    href: "https://linkedin.com/in/mrinalmondal85",
    color: "accent"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, India",
    href: null,
    color: "primary"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    // You could also use a service like EmailJS or Formspree here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your customer success strategy? Let's discuss how we can work together 
            to drive retention, growth, and customer happiness for your enterprise.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-primary/10 shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl font-bold text-foreground flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in discussing new opportunities, consulting projects, 
                  or simply connecting with fellow customer success professionals. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    const content = (
                      <div className="flex items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200 group">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${info.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'} transition-colors duration-200`}>
                          <IconComponent className={`w-5 h-5 ${info.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <div>
                          <p className="font-inter font-medium text-foreground">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a key={index} href={info.href} target="_blank" rel="noopener noreferrer" className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>
                        {content}
                      </div>
                    );
                  })}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h3 className="font-inter font-semibold text-foreground mb-2">Available for:</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Customer Success Consulting</li>
                    <li>• Enterprise Account Management</li> 
                    <li>• Team Leadership & Coaching</li>
                    <li>• Strategic Planning Sessions</li>
                    <li>• Process Optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="border-2 border-accent/10 shadow-lg">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-inter font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-2 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-inter font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-2 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-inter font-medium">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border-2 focus:border-primary"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-inter font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-2 focus:border-primary resize-none"
                    placeholder="Tell me about your project, challenges, or how I can help..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Mrinal Mondal. Customer Success Leader & Consultant based in Kolkata, India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;