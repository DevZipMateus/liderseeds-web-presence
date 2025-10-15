import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Lider Seeds" className="h-24 w-auto" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection("produtos")} className="text-foreground hover:text-primary transition-colors font-medium">
              Produtos
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </button>
            <a href="https://wa.me/5566996933519" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-accent transition-colors font-medium">
              Fale conosco
            </a>
          </nav>

          <button onClick={() => {
          const nav = document.getElementById("mobile-nav");
          nav?.classList.toggle("hidden");
        }} className="md:hidden flex flex-col gap-1.5">
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-6 h-0.5 bg-foreground"></span>
          </button>
        </div>

        <nav id="mobile-nav" className="hidden md:hidden pb-4 flex flex-col gap-3">
          <button onClick={() => {
          scrollToSection("sobre");
          document.getElementById("mobile-nav")?.classList.add("hidden");
        }} className="text-foreground hover:text-primary transition-colors font-medium text-left">
            Sobre
          </button>
          <button onClick={() => {
          scrollToSection("produtos");
          document.getElementById("mobile-nav")?.classList.add("hidden");
        }} className="text-foreground hover:text-primary transition-colors font-medium text-left">
            Produtos
          </button>
          <button onClick={() => {
          scrollToSection("contato");
          document.getElementById("mobile-nav")?.classList.add("hidden");
        }} className="text-foreground hover:text-primary transition-colors font-medium text-left">
            Contato
          </button>
        </nav>
      </div>
    </header>;
};
export default Header;