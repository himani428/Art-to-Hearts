import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PodcastSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#f6f3ee] to-white dark:from-[#0e1117] dark:to-[#0a0c10]">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Floating Cover */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <img
            src="https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg"
            className="rounded-3xl shadow-2xl"
            alt="Podcast Cover"
          />
        </motion.div>

        {/* Content */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif mb-8"
          >
            Arts To Hearts <span className="italic">Podcast</span>
          </motion.h2>

          <p className="text-xl leading-relaxed mb-8">
            A popular podcast for women in the visual arts. Real conversations,
            global voices, creative journeys.
          </p>

          <Link to="/podcast">
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-[#8b0000] transition duration-500">
              Explore Podcast
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}