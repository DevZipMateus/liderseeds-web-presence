import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

import midia1 from "@/assets/carousel/midia_1.png";
import midia2 from "@/assets/carousel/midia_2.jpg";
import midia3 from "@/assets/carousel/midia_3.jpg";
import midia4 from "@/assets/carousel/midia_4.jpg";
import midia5 from "@/assets/carousel/midia_5.png";
import midia6 from "@/assets/carousel/midia_6.png";
import midia7 from "@/assets/carousel/midia_7.png";
import midia8 from "@/assets/carousel/midia_8.png";
import midia9 from "@/assets/carousel/midia_9.jpg";

const images = [
  { src: midia1, alt: "Lider Seeds - Sementes de Pastagem 1" },
  { src: midia2, alt: "Lider Seeds - Sementes de Pastagem 2" },
  { src: midia3, alt: "Lider Seeds - Sementes de Pastagem 3" },
  { src: midia4, alt: "Lider Seeds - Sementes de Pastagem 4" },
  { src: midia5, alt: "Pastagem de qualidade 1" },
  { src: midia6, alt: "Pastagem de qualidade 2" },
  { src: midia7, alt: "Pastagem de qualidade 3" },
  { src: midia8, alt: "Pastagem de qualidade 4" },
  { src: midia9, alt: "Pastagem de qualidade 5" },
];

const ImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nossa Galeria
        </h2>
        
        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
