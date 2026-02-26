import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { editorPicks } from "../../data/editorPicks";

export default function EditorPicksPage() {
  return (
    <section className="editor-page min-h-screen bg-[#f8f5f1] dark:bg-[#0c0f14] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-serif mb-20"
        >
          Editor’s Desk & Team’s Pick
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">

          {editorPicks.map((post, index) => (
            <Link key={post.id} to={`/editor/${post.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[280px] w-full object-cover transition duration-[1000ms] group-hover:scale-110"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-medium leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 mt-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="text-sm text-gray-400 mt-4">
                    {post.date} — {post.readTime}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}