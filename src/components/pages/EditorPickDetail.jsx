import { useParams } from "react-router-dom";
import { editorPicks } from "../../data/editorPicks";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function EditorPickDetail() {
  const { id } = useParams();
  const post = editorPicks.find(p => p.id === id);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  if (!post) return <div>Not Found</div>;

  return (
    <div ref={ref} className="bg-[#f8f5f1] dark:bg-[#0c0f14]">

      {/* Reading Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#8b0000] origin-left z-50"
      />

      {/* Hero */}
      <div className="relative h-[75vh]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white text-center max-w-4xl px-6">
          <h1 className="text-5xl font-serif">{post.title}</h1>
          <p className="mt-6 text-sm uppercase tracking-widest">
            {post.date} — {post.readTime}
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
          {post.content}
        </p>
      </motion.div>
    </div>
  );
}