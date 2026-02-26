import { useParams } from "react-router-dom";
import { galleryArticles } from "../../data/galleryArticles";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function GalleryArticleDetail() {
  const { id } = useParams();
  const article = galleryArticles.find(a => a.id === id);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  if (!article) return <div>Not Found</div>;

  return (
    <div ref={ref} className="gallery-detail bg-[#f8f5f1] dark:bg-[#0c0f14]">

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#8b0000] origin-left z-50"
      />

      {/* Hero */}
      <div className="relative h-[80vh]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white text-center max-w-4xl px-6">
          <h1 className="text-5xl font-serif">{article.title}</h1>
          <p className="mt-6 uppercase tracking-widest text-sm">
            {article.date}
          </p>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto py-28 px-6 text-lg leading-relaxed"
      >
        <p className="first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:font-serif first-letter:text-[#8b0000]">
          {article.content}
        </p>

        <blockquote className="my-20 text-3xl font-serif italic text-center text-[#8b0000]">
          “Ownership of art is physical. Ownership of creativity is eternal.”
        </blockquote>

        <p>
          In a digital world, collectors must balance admiration
          with awareness. Knowledge protects value —
          and value protects culture.
        </p>
      </motion.div>

    </div>
  );
}