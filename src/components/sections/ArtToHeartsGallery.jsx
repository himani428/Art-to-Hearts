import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { galleryArticles } from "../../data/galleryArticles";

export default function ArtToHeartsGallery() {
  const navigate = useNavigate();
  const article = galleryArticles[0];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-[#f4efe8] dark:bg-[#0b0f14] overflow-hidden"
    >
      {/* Cinematic Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-10 pointer-events-none" />

      {/* Soft Radial Museum Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none z-10" />

      {/* Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none z-10"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Parallax Background Image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={`${article.image}?auto=compress&cs=tinysrgb&w=2000`}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Center Editorial Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-20 text-center max-w-4xl px-8"
      >
        {/* Micro Label */}
        <motion.div
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-xs uppercase tracking-[0.3em] text-white/70"
        >
          Exhibition Feature
        </motion.div>

        {/* Title */}
        <h2 className="mt-10 text-5xl md:text-7xl font-serif leading-[1.1] text-white drop-shadow-xl">
          {article.title}
        </h2>

        {/* Meta */}
        <p className="mt-8 text-sm tracking-widest text-white/60 uppercase">
          {article.date} · {article.readTime}
        </p>

        {/* Divider Line */}
        <div className="mt-10 w-24 h-[1px] bg-white/40 mx-auto" />

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => navigate(`/gallery/${article.id}`)}
          className="mt-12 px-10 py-4 border border-white/40 text-white uppercase tracking-widest text-sm backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black transition-all duration-500"
        >
          Enter Exhibition
        </motion.button>
      </motion.div>

      
    </section>
  );
}