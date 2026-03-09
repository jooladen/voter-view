"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "@/data/gallery";
import ScrollReveal from "@/components/scroll-reveal";

export default function DemoGallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + gallery.length) % gallery.length : null,
    );
  }, []);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % gallery.length : null,
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, goToPrev, goToNext]);

  const selectedImage = selectedIndex !== null ? gallery[selectedIndex] : null;

  return (
    <section id="gallery" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
            활동 갤러리
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((img, index) => (
            <ScrollReveal key={img.id} variant="scale" delay={0.05 + index * 0.06}>
              <button
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-square w-full overflow-hidden rounded-lg"
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {img.caption && (
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="p-3 text-sm text-white">{img.caption}</p>
                  </div>
                )}
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="이미지 확대 보기"
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 text-3xl text-white transition-opacity hover:opacity-70"
              aria-label="닫기"
            >
              &times;
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-4 text-4xl text-white transition-opacity hover:opacity-70"
              aria-label="이전 이미지"
            >
              &#8249;
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.85, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.85, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative mx-16 h-[70vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              {selectedImage.caption && (
                <p className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center text-white">
                  {selectedImage.caption}
                </p>
              )}
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-4xl text-white transition-opacity hover:opacity-70"
              aria-label="다음 이미지"
            >
              &#8250;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
