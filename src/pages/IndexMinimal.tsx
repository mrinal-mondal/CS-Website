import Header from "@/components/Header";
import HeroMinimal from "@/components/HeroMinimal";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import AboutMinimal from "@/components/AboutMinimal";

const IndexMinimal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroMinimal />
      <Portfolio />
      <Skills />
      <AboutMinimal />
    </div>
  );
};

export default IndexMinimal;