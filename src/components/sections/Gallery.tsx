
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => 
    ['engine-diagram', 'mechanical-tools', 'electronics-diagnosis', 'apostila-preview'].includes(img.id)
  );

  return (
    <section className="py-24 px-4" id="galeria">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">CONTEÚDO ILUSTRADO</h2>
          <p className="text-muted-foreground mt-4">Confira como o material é organizado para facilitar seu aprendizado.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-xs font-bold uppercase tracking-widest">{img.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
