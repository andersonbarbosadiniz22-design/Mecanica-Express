
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Gallery() {
  const galleryIds = ['engine-diagram', 'mechanical-tools', 'electronics-diagnosis', 'apostila-preview'];
  const galleryImages = PlaceHolderImages.filter(img => galleryIds.includes(img.id));

  return (
    <section className="py-24 px-4" id="galeria">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">CONTEÚDO ILUSTRADO</h2>
          <p className="text-muted-foreground mt-4">Confira como o material é organizado para facilitar seu aprendizado.</p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="relative aspect-square overflow-hidden rounded-xl border border-white/5 group bg-card"
            >
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                data-ai-hint={img.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
