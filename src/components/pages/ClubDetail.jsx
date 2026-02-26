import { useParams } from "react-router-dom";
import { learnClubPosts } from "../../data/learnClub";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const ClubDetail = () => {
  const { id } = useParams();
  const article = learnClubPosts.find((item) => item.id === id);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!article) return <div>Not Found</div>;

  return (
    <div ref={ref} className="club-detail bg-[#f8f5f1] dark:bg-[#0c0f14] text-[#1a1a1a] dark:text-white" >

      {/* Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#8b0000] origin-left z-50"
      />

      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">

        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-white max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-serif leading-tight"
          >
            {article.title}
          </motion.h1>

          <p className="mt-6 text-sm tracking-wider uppercase opacity-80">
            {article.date} • {article.readTime}
          </p>
        </div>
      </div>

      {/* Article Layout */}
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-12 gap-12">

        {/* Sticky Share Sidebar */}
        <div className="hidden lg:block col-span-2">
          <div className="sticky top-40 space-y-6 text-sm uppercase tracking-widest">
            <p className="opacity-60">Share</p>
            <a href="#" className="block hover:text-[#8b0000] transition">Twitter</a>
            <a href="#" className="block hover:text-[#8b0000] transition">Instagram</a>
            <a href="#" className="block hover:text-[#8b0000] transition">Pinterest</a>
          </div>
        </div>

        {/* Main Article */}
        <div className="col-span-12 lg:col-span-8">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="prose prose-lg dark:prose-invert max-w-none leading-relaxed"
          >

            {/* Drop Cap First Letter */}
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:text-[#8b0000]">
              {article.content}
            </p>

            {/* Pull Quote */}
            <blockquote className="my-20 text-3xl font-serif italic text-center text-[#8b0000]">
              “Art is not what you see, but what you make others see.”
            </blockquote>

            {/* Image Break */}
            <motion.img
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 80 }}
              transition={{ duration: 1 }}
              src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg"
              className="w-full rounded-2xl my-20 shadow-2xl"
            />

            <p>
              In the ever-evolving landscape of contemporary art, artists are
              constantly redefining boundaries. What once seemed radical becomes
              heritage, and what seems subtle can transform into revolution.
            </p>

            <p>
              The courage to experiment, to embrace vulnerability, and to
              challenge institutional norms continues to define the creative
              spirit.
            </p>

          </motion.div>

        </div>

        {/* Right Spacer */}
        <div className="hidden lg:block col-span-2"></div>

      </div>
    </div>
  );
};

export default ClubDetail;