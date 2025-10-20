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
  return <section id="hero" className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url(${heroBg})`
  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Texto à esquerda */}
            <div className="backdrop-blur-sm rounded-3xl p-8 md:p-12 bg-black/0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
                Lider Seeds Primavera do Leste
              </h1>
              
              <h2 className="text-xl md:text-2xl text-white/95 mb-8 animate-fade-in drop-shadow-md" style={{
              animationDelay: "0.1s"
            }}>
                Sementes de pastagem e forrageiras de alta qualidade
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in drop-shadow-md" style={{
              animationDelay: "0.2s"
            }}>
                Com raízes na terra e tecnologia no coração
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in" style={{
              animationDelay: "0.3s"
            }}>
                <a href="https://wa.me/5566996933519" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-accent transition-all text-lg font-semibold hover:scale-105">
                  Solicitar orçamento
                </a>
                <button onClick={() => scrollToSection("produtos")} className="bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-foreground transition-all text-lg font-semibold">
                  Nossos produtos
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6 animate-fade-in" style={{
              animationDelay: "0.4s"
            }}>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white">Alta qualidade</h3>
                    <p className="text-sm text-white/90">Sementes selecionadas criteriosamente</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sprout className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white">17 anos de experiência</h3>
                    <p className="text-sm text-white/90">Conhecimento do mercado</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white">Atendimento nacional</h3>
                    <p className="text-sm text-white/90">Entrega em todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vídeo à direita */}
            <div className="animate-fade-in" style={{
              animationDelay: "0.5s"
            }}>
              <div className="rounded-3xl overflow-hidden backdrop-blur-sm bg-white/10 p-2">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl"
                >
                  <source src="/seeds.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;