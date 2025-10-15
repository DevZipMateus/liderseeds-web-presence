import { Sprout, Award, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Lider Seeds Primavera do Leste
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white/95 mb-8 animate-fade-in drop-shadow-md" style={{animationDelay: "0.1s"}}>
            Sementes de pastagem e forrageiras de alta qualidade
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in drop-shadow-md" style={{animationDelay: "0.2s"}}>
            Com raízes na terra e tecnologia no coração
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <a
              href="https://wa.me/5566996933519"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-accent transition-all text-lg font-semibold hover:scale-105"
            >
              Solicitar orçamento
            </a>
            <button
              onClick={() => scrollToSection("produtos")}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-foreground transition-all text-lg font-semibold"
            >
              Nossos produtos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6" style={{animationDelay: "0.4s"}}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">Alta qualidade</h3>
              <p className="text-sm text-white/90">Sementes selecionadas criteriosamente</p>
            </div>

            <div className="flex flex-col items-center gap-3 animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6" style={{animationDelay: "0.5s"}}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">17 anos de experiência</h3>
              <p className="text-sm text-white/90">Conhecimento do mercado</p>
            </div>

            <div className="flex flex-col items-center gap-3 animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6" style={{animationDelay: "0.6s"}}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white">Atendimento nacional</h3>
              <p className="text-sm text-white/90">Entrega em todo o Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
