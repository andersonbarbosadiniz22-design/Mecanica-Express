
import { BookOpen } from "lucide-react";

export function Solution() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex p-3 bg-primary/10 rounded-full mb-6">
          <BookOpen className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          A SOLUÇÃO PARA APRENDER MECÂNICA DE VERDADE
        </h2>
        <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
          <p>
            Criamos um pacote completo de apostilas técnicas que ensinam mecânica automotiva passo a passo.
          </p>
          <p>
            Conteúdo organizado para iniciantes e também para quem quer aprofundar seus conhecimentos, focado na prática do dia a dia da oficina.
          </p>
        </div>
      </div>
    </section>
  );
}
