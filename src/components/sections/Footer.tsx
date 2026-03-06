
"use client";

import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 px-4 bg-background border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4 italic">MECÂNICA EXPRESS</h3>
            <p className="text-muted-foreground max-w-sm">
              Especialistas em educação automotiva. Transformando entusiastas em profissionais através de conteúdo técnico de alta qualidade.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>suporte@mecanicaexpress.com.br</li>
              <li>Seg - Sex, 09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          <p>© {year || '...'} Mecânica Express. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
