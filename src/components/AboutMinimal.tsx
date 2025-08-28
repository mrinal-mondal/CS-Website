const AboutMinimal = () => {
  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
          <div className="md:w-2/3">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-foreground">
              A Little Context
            </h2>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/eba2d19a-aa77-41f9-b22f-a3ec956fd93d.png" 
                alt="Mrinal Mondal" 
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 border-2 border-muted/30"
              />
            </div>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I sit at the intersection of customer success, strategic consulting, and enterprise relationship management. 
            These three are at the core of everything I build. Combining them into a coherent career is an ongoing and rewarding challenge.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Titles and disciplines are fluid and evolving. But my work fits under the umbrellas of 
            <strong className="text-foreground"> customer success leadership</strong>, 
            <strong className="text-foreground"> strategic consulting</strong>, and 
            <strong className="text-foreground"> enterprise account management</strong>. 
            With some process optimization, team coaching, and client framework development sprinkled on top.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm currently leading customer success initiatives at <strong className="text-foreground">OpsHub</strong> 
            where I manage enterprise accounts and drive retention strategies. I maintain a 
            <strong className="text-accent"> 95% customer retention rate</strong> across 37+ enterprise clients.
          </p>

          <div className="bg-accent/50 p-6 rounded-lg">
            <h3 className="font-serif text-xl mb-4 text-foreground">Educational Background</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong>MBA</strong> (Ongoing) – DY Patil Vidyapith
              </p>
              <p className="text-muted-foreground">
                <strong>B.Tech. Information Technology</strong> – Jadavpur University
              </p>
              <p className="text-muted-foreground">
                <strong>Certified Scrum Master</strong> – Scrum.org
              </p>
              <p className="text-muted-foreground">
                <strong>Scrum Certified Product Owner</strong> – Scrum.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMinimal;
