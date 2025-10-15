import { Target, Eye, Heart, History } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Sobre a Lider Seeds
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <History className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Nossa história</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Há mais de 17 anos no mercado de sementes forrageiras e brachiarias, o corretor e analista de sementes Clayton Rogerio Guimarães, no ano de 2023, decide criar a própria marca. Neste ano é fundada a Líder Seeds em Primavera do Leste, trazendo em seu portfólio as melhores sementes do mercado, selecionadas pela análise criteriosa de quem conhece qualidade.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Com isso, hoje a Líder Seeds atende demandas de todo o país em negociações de compra e venda, e reembalo com a própria marca, focada em oferecer o que há de melhor ao produtor rural e ao pecuarista.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser uma empresa referência em sementes de pastagens e forrageiras, sendo reconhecida pela qualidade e um bom preço.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Entregar qualidade que gera satisfação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Valores</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Garantir o mais alto padrão de excelência em todos os produtos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl text-foreground font-semibold mb-4">
              Mercado de sementes de pasto e sementes forrageiras
            </p>
            <p className="text-lg text-muted-foreground">
              Comprometidos em fornecer as melhores soluções para produtores rurais e pecuaristas de todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
