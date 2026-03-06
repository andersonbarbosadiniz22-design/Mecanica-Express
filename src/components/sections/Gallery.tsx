
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Gallery() {
  // Filtermos apenas as imagens desejadas, removendo o sistema de freios (brake-system)
  const galleryImages = PlaceHolderImages.filter(img => 
    ['engine-diagram', 'mechanical-tools', 'electronics-diagnosis', 'apostila-preview'].includes(img.id)
  );

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-lg border border-white/10 group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <Image
                src={img.imageUrl}
                alt={img.description}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={img.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-white/80 font-medium uppercase tracking-widest">{img.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
