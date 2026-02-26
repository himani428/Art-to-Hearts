import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { podcastArticles } from "../../data/podcastArticles";

export default function PodcastArticlesSection() {
  return (
    <section className="py-36 bg-gradient-to-b from-white to-[#f5f1ea] dark:from-[#0e1117] dark:to-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif mb-20"
        >
          Dive Into the Podcast Episodes
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {podcastArticles.map((article, index) => (
            <Link key={article.id} to={`/podcast-article/${article.id}`}>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[300px] w-full object-cover group-hover:scale-110 transition duration-[1200ms]"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-medium group-hover:text-[#8b0000] transition">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {article.date} — {article.readTime}
                  </p>
                </div>
              </motion.div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}