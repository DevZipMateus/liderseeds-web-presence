import { Leaf, CheckCircle2 } from "lucide-react";

const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
            Nossos produtos
          </h2>
          
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Trabalhamos com as melhores sementes de brachiarias e panicum do mercado
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Sementes de Brachiaria
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Oferecemos as melhores variedades de brachiaria, selecionadas para garantir alta produtividade e qualidade em pastagens.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Alta taxa de germinação</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Sementes selecionadas criteriosamente</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Análise técnica especializada</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Sementes de Panicum
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Panicum de alta qualidade para diversificar sua pastagem e melhorar o desempenho do seu rebanho.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Excelente valor nutricional</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Adaptabilidade ao clima</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Qualidade garantida</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Atendimento em todo o Brasil
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Negociações de compra e venda, além de reembalo com nossa própria marca
            </p>
            <a
              href="https://wa.me/5566996933519"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-background text-primary px-8 py-4 rounded-lg hover:bg-background/90 transition-all text-lg font-semibold"
            >
              Solicite um orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
