
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-mechanic')!;
  const checkoutUrl = "https://pay.kiwify.com.br/DiQkhvP";

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4 industrial-pattern overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/95 z-0" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <header className="flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary text-primary font-bold text-xs md:text-sm rounded-full w-fit mx-auto lg:mx-0 uppercase tracking-widest">
            Material Completo em PDF
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter">
            APRENDA <span className="text-primary italic">MECÂNICA</span> AUTOMOTIVA DO ZERO
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Domine motores, elétrica, injeção e diagnóstico com o pacote de apostilas mais completo do Brasil.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
            {[
              "Acesso imediato via PDF",
              "Básico ao Avançado",
              "Estude no seu ritmo",
              "Preço promocional"
            ].map((bullet, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground/90 font-semibold text-sm">
                <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-black h-16 px-10 text-xl rounded-xl red-glow uppercase tracking-wider transition-transform active:scale-95">
              <a href={checkoutUrl}>QUERO MEU ACESSO</a>
            </Button>
          </div>
        </header>
        
        <div className="relative aspect-video lg:aspect-square max-w-xl mx-auto w-full">
          <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full z-0 animate-pulse-subtle" />
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl bg-card">
            <Image
              src={heroImg.imageUrl}
              alt="Mecânico Profissional - Pacote de Apostilas"
              width={600}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover w-full h-full"
              priority
              data-ai-hint="mechanic tools"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
