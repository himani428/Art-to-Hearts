import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { editorPicks } from "../../data/editorPicks";

export default function EditorPicks() {
  const featured = editorPicks[0];
  const others = editorPicks.slice(1, 3);

  return (
    <section className="py-36 bg-[#ffffff] dark:bg-[#0e1117]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif"
          >
            Editor’s Desk & Team’s Pick
          </motion.h2>

          <Link
            to="/editor"
            className="uppercase tracking-widest text-sm hover:text-[#8b0000] transition"
          >
            View All →
          </Link>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Large Featured */}
          <Link to={`/editor/${featured.id}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[30px] shadow-2xl">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-[400px] w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-serif leading-snug">
                  {featured.title}
                </h3>

                <p className="text-gray-500 mt-4 line-clamp-2">
                  {featured.excerpt}
                </p>

                <div className="text-sm text-gray-400 mt-4">
                  {featured.date} — {featured.readTime}
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Smaller Picks */}
          <div className="flex flex-col gap-12">

            {others.map((post, index) => (
              <Link key={post.id} to={`/editor/${post.id}`}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex gap-6 items-center group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-2xl w-[160px] h-[120px] shadow-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition duration-[1000ms] group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-medium leading-snug">
                      {post.title}
                    </h4>

                    <div className="text-sm text-gray-400 mt-2">
                      {post.date} — {post.readTime}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}