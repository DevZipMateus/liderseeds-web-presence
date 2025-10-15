import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
            Entre em contato
          </h2>
          
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Estamos prontos para atender você e fornecer as melhores soluções em sementes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Telefone</h3>
                  <a 
                    href="https://wa.me/5566996933519" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (66) 99693-3519
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">E-mail</h3>
                  <a 
                    href="mailto:claytonagropastagens@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    claytonagropastagens@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Instagram</h3>
                  <a 
                    href="https://instagram.com/liderseedspva" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @liderseedspva
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Formosa, 578<br />
                    Jardim Luciana<br />
                    Primavera do Leste - MT<br />
                    CEP: 78.850-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Horário de funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta<br />
                    07:00 às 11:00<br />
                    13:00 às 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5566996933519"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-lg hover:bg-accent transition-all text-xl font-semibold hover:scale-105"
            >
              Fale conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
