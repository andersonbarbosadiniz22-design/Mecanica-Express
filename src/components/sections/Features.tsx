
import { Settings, Zap, Compass, ShieldAlert, Cpu } from "lucide-react";

const features = [
  {
    title: "Motores Automotivos",
    desc: "Funcionamento completo do motor",
    icon: <Settings className="w-8 h-8" />
  },
  {
    title: "Injeção Eletrônica",
    desc: "Diagnóstico e sensores",
    icon: <Cpu className="w-8 h-8" />
  },
  {
    title: "Suspensão e Freios",
    desc: "Manutenção e funcionamento",
    icon: <Compass className="w-8 h-8" />
  },
  {
    title: "Elétrica Automotiva",
    desc: "Circuitos e sistemas elétricos",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Diagnóstico Automotivo",
    desc: "Identifique falhas no veículo",
    icon: <ShieldAlert className="w-8 h-8" />
  }
];

export function Features() {
  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">O QUE VOCÊ VAI APRENDER</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-8 bg-card border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-300 metallic-gradient">
              <div className="text-primary mb-6 transition-transform group-hover:scale-110 duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
          
          <div className="p-8 bg-primary flex flex-col items-center justify-center text-center rounded-2xl red-glow">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase">E MUITO MAIS...</h3>
            <p className="text-white/80">
              Material completo do básico ao avançado com atualizações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
