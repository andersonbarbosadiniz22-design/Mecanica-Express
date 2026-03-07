
"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Download, Clock } from "lucide-react";

export function Offer() {
  const checkoutUrl = "https://pay.kiwify.com.br/DiQkhvP";

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-1 bg-primary rounded-3xl red-glow">
          <div className="bg-card rounded-[calc(1.5rem-2px)] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-2 text-primary uppercase">OFERTA ESPECIAL</h2>
                <p className="text-muted-foreground mb-8">Tenha acesso vitalício ao material completo hoje mesmo.</p>
                
                <ul className="space-y-4 mb-8 list-none p-0">
                  {[
                    "Acesso imediato após o pagamento",
                    "Download em PDF para ler em qualquer lugar",
                    "Material completo: Do básico ao avançado",
                    "Suporte para dúvidas via e-mail"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col items-center justify-center p-8 bg-secondary/30 rounded-2xl border border-white/5">
                <span className="text-muted-foreground line-through text-lg">De R$97</span>
                <span className="text-5xl font-bold text-white mb-2">Por apenas</span>
                <span className="text-6xl font-bold text-primary mb-6">R$24,90</span>
                
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-16 text-xl rounded-xl uppercase red-glow group" aria-label="Comprar apostila por R$24,90">
                  <a href={checkoutUrl} className="flex items-center justify-center">
                    BAIXAR AGORA
                    <Download className="ml-2 w-6 h-6 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
                  </a>
                </Button>
                
                <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1 font-bold">
                  <Clock className="w-3 h-3" aria-hidden="true" /> OFERTA POR TEMPO LIMITADO
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-10 h-10 text-primary/60 mb-2" aria-hidden="true" />
                <p className="text-sm font-semibold">Pagamento Seguro</p>
              </div>
              <div className="flex flex-col items-center">
                <Download className="w-10 h-10 text-primary/60 mb-2" aria-hidden="true" />
                <p className="text-sm font-semibold">Download Instantâneo</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-10 h-10 text-primary/60 mb-2" aria-hidden="true" />
                <p className="text-sm font-semibold">Acesso Vitalício</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
