import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === id);

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

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-semibold">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <section
      ref={ref}
      className="relative bg-[#fdfcf9] text-[#1a1a1a] overflow-hidden"
    >
      {/* Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#6b0f1a] origin-left z-50"
      />

      {/* Hero */}
      <div className="relative h-[85vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={`${blog.cover}?auto=compress&cs=tinysrgb&w=1800`}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-white max-w-4xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="uppercase text-xs tracking-[0.3em] opacity-80"
          >
            {blog.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-6xl font-serif mt-8 leading-tight"
          >
            {blog.title}
          </motion.h1>
        </div>
      </div>

      {/* Floating Share Rail */}
      <div className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col gap-5 z-40">
        {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15 }}
            className="w-10 h-10 flex items-center justify-center bg-[#6b0f1a] text-white rounded-full cursor-pointer shadow-lg"
          >
            <Icon size={14} />
          </motion.div>
        ))}
      </div>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl mx-auto px-6 py-28"
      >
        {/* Metadata */}
        <div className="text-sm text-gray-500 tracking-wide mb-16">
          {blog.date} • {blog.readTime}
        </div>

        {/* Content with Drop Cap */}
        {blog.content.split("\n\n").map((para, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`mb-10 leading-[1.9] text-lg ${
              index === 0
                ? "first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:text-[#6b0f1a]"
                : ""
            }`}
          >
            {para}
          </motion.p>
        ))}

        {/* Mid Article Highlight Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="my-20 p-12 bg-[#f3eee9] rounded-2xl text-center font-serif text-2xl leading-relaxed"
        >
          “Creativity isn’t just expression — it’s transformation.”
        </motion.div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-200 mt-24 pt-10 text-center text-sm text-gray-500">
          Thank you for reading.
        </div>
      </motion.article>
    </section>
  );
};

export default BlogDetail;