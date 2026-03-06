
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Offer } from "@/components/sections/Offer";
import { Guarantee } from "@/components/sections/Guarantee";
import { Footer } from "@/components/sections/Footer";
import { ChatAssistant } from "@/components/sections/ChatAssistant";
import { Button } from "@/components/ui/button";

export default function Home() {
  const checkoutUrl = "https://pay.kiwify.com.br/DiQkhvP";

  return (
    <main className="min-h-screen">
      {/* Dynamic Nav Placeholder */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white italic">MECÂNICA<span className="text-primary">EXPRESS</span></span>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold px-4 rounded-md text-xs uppercase hidden sm:flex">
            <a href={checkoutUrl}>QUERO MEU ACESSO</a>
          </Button>
        </div>
      </nav>

      <Hero />
      <Offer />
      <Problem />
      <Solution />
      <Features />
      <Gallery />
      <Testimonials />
      <Guarantee />
      
      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-primary text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">COMECE A APRENDER MECÂNICA HOJE</h2>
          <p className="text-xl text-white/90 mb-10">Tenha acesso imediato ao pacote completo de apostilas e mude sua carreira.</p>
          <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary font-black h-20 px-12 text-2xl rounded-2xl uppercase shadow-2xl transition-transform active:scale-95">
            <a href={checkoutUrl}>QUERO MEU ACESSO AGORA</a>
          </Button>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </main>
  );
}
