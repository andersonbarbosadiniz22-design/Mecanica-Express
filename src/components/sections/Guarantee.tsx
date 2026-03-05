
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-24 px-4 bg-secondary/10 border-y border-white/5">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <ShieldCheck className="w-24 h-24 text-primary opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">7</span>
            </div>
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">GARANTIA TOTAL</h2>
        <div className="text-xl text-muted-foreground space-y-4">
          <p>Você tem 7 dias de garantia incondicional.</p>
          <p className="font-medium text-foreground">Se não gostar do material, basta solicitar o reembolso e devolvemos cada centavo sem complicações.</p>
        </div>
      </div>
    </section>
  );
}
