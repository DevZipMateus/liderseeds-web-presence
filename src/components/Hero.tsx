import { Sprout, Award, TrendingUp } from "lucide-react";

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
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Lider Seeds Primavera do Leste
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Sementes de pastagem e forrageiras de alta qualidade
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
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
              className="bg-background border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-lg font-semibold"
            >
              Nossos produtos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Alta qualidade</h3>
              <p className="text-sm text-muted-foreground">Sementes selecionadas criteriosamente</p>
            </div>

            <div className="flex flex-col items-center gap-3 animate-fade-in" style={{animationDelay: "0.5s"}}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Sprout className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">17 anos de experiência</h3>
              <p className="text-sm text-muted-foreground">Conhecimento do mercado</p>
            </div>

            <div className="flex flex-col items-center gap-3 animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Atendimento nacional</h3>
              <p className="text-sm text-muted-foreground">Entrega em todo o Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
