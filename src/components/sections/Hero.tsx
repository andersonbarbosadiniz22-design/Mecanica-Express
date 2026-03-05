
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-mechanic')!;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-4 industrial-pattern overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/90 z-0" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col space-y-8">
          <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary text-primary font-semibold text-sm rounded-full w-fit">
            CURSO COMPLETO EM PDF
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            APRENDA <span className="text-primary">MECÂNICA</span> AUTOMOTIVA DO ZERO
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl">
            Domine motores, elétrica automotiva, injeção eletrônica e diagnóstico com um pacote completo de apostilas profissionais.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Material completo em PDF",
              "Do básico ao avançado",
              "Estude no seu tempo",
              "Acesso imediato"
            ].map((bullet, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground/90 font-medium">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg rounded-md red-glow uppercase tracking-wide">
              QUERO ACESSO AGORA
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full z-0" />
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
            <Image
              src={heroImg.imageUrl}
              alt={heroImg.description}
              width={1200}
              height={800}
              className="object-cover w-full h-full"
              data-ai-hint={heroImg.imageHint}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
