"use client";

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function LazyMap({ src, title }: { src: string; title: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Yalnızca bir kez tetiklensin
    rootMargin: '400px 0px', // Harita ekrana girmeden 400px önce yüklemeyi başlat ki kullanıcı beklediğini hissetmesin
  });

  // Görüntü alanına yaklaştığında iframe'i render etmeye başla
  if (inView && !shouldLoad) {
    setShouldLoad(true);
  }

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full bg-[#E5E5E5]">
      {shouldLoad ? (
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover/map:grayscale-0 group-hover/map:opacity-100 transition-all duration-1000 ease-in-out"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        // Harita yüklenene kadar gösterilecek şık yükleniyor animasyonu
        <div className="absolute inset-0 bg-[#E5E5E5] animate-pulse flex items-center justify-center">
          <span className="text-[#0B2341]/40 text-[10px] font-black uppercase tracking-widest">
            {title} Loading...
          </span>
        </div>
      )}
    </div>
  );
}