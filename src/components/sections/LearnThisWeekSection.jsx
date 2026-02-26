import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { learnClubPosts } from "../../data/learnClub";

const LearnThisWeekSection = () => {
  return (
    <section className="py-36 bg-gradient-to-b from-white to-[#f3efe9] dark:from-[#0c0f14] dark:to-[#0a0c10]">

      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-serif mb-6">
            Learn this week in the Club
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Welcome to our platform where you can discover,
            learn and talk about all things contemporary art.
          </p>
        </motion.div>

        {/* View All */}
        <div className="flex justify-between items-center mb-12">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Trailblazing women from Art History
          </p>

          <Link
            to="/club"
            className="text-sm hover:text-[#8b0000] transition"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {learnClubPosts.map((post, index) => (
            <Link key={post.id} to={`/club/${post.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >

                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[240px] w-full object-cover group-hover:scale-110 transition duration-[1200ms]"
                  />
                </div>

                <div className="mt-6">

                  <span className="text-xs uppercase bg-gray-200 dark:bg-[#1a1e25] px-3 py-1 rounded">
                    ART HISTORY PRO
                  </span>

                  <h3 className="mt-4 font-medium leading-snug group-hover:text-[#8b0000] transition">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3">
                    {post.date} — {post.readTime}
                  </p>

                </div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LearnThisWeekSection;