
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    text: "Material muito completo, consegui entender várias coisas sobre motores que pareciam impossíveis antes.",
    role: "Mecânico Iniciante"
  },
  {
    name: "Ricardo Mendes",
    text: "Perfeito para quem quer aprender mecânica sozinho. As ilustrações facilitam muito o entendimento.",
    role: "Hobbyista"
  },
  {
    name: "Marcos Oliveira",
    text: "Conteúdo bem explicado e direto ao ponto. Usei para treinar meus novos funcionários na oficina.",
    role: "Dono de Oficina"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-secondary/10 industrial-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">O QUE AS PESSOAS ESTÃO FALANDO</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-card border border-white/5 rounded-xl metallic-gradient relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Star className="w-20 h-20 fill-white" />
              </div>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-3 h-3 fill-primary text-primary" />)}
              </div>
              <p className="text-lg italic mb-6 text-foreground/90">"{t.text}"</p>
              <div>
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
