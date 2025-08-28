import Header from "@/components/Header";
import HeroMinimal from "@/components/HeroMinimal";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import AboutMinimal from "@/components/AboutMinimal";
import ContactMinimal from "@/components/ContactMinimal";

const IndexMinimal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroMinimal />
      <Services />
      <Portfolio />
      <Skills />
      <AboutMinimal />
      <ContactMinimal />
    </div>
  );
};

export default IndexMinimal;