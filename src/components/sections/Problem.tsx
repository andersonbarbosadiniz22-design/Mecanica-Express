
import { Wrench, Ban, UserX } from "lucide-react";

export function Problem() {
  return (
    <section className="py-24 bg-secondary/30 border-y border-white/5 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          QUER APRENDER MECÂNICA MAS NÃO SABE POR ONDE COMEÇAR?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Ban className="w-10 h-10 text-primary" />,
              text: "Cursos de mecânica costumam ser caros e muitas vezes difíceis de acessar."
            },
            {
              icon: <UserX className="w-10 h-10 text-primary" />,
              text: "Muitas pessoas querem aprender a consertar carros, mas falta material organizado."
            },
            {
              icon: <Wrench className="w-10 h-10 text-primary" />,
              text: "Trabalhar em oficina ou abrir seu próprio negócio exige conhecimento técnico sólido."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-card rounded-xl border border-white/5 metallic-gradient">
              <div className="mb-4">{item.icon}</div>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
