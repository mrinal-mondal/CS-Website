const HeroMinimal = () => {
  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 text-foreground">
          Mrinal creates strategic frameworks 
          about customer success, retention, 
          and enterprise growth.
        </h1>
        
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>Customer Success Leader, consultant, and strategic advisor</p>
          <p>
            Currently driving customer success at{" "}
            <span className="text-accent-foreground font-medium">OpsHub</span> –{" "}
            <span className="text-accent">open to consulting opportunities</span> for early 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;