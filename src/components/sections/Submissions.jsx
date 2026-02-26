import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const submissions = [
  {
    id: 1,
    title: "The Big Book of Tiny Creatives – Edition 3",
    description:
      "A global publishing opportunity celebrating young artists aged 2 to 18 years. A curated international platform amplifying imagination and creative expression.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
    closes: "20th March 2026",
  },
  {
    id: 2,
    title: "101 Art Book: Dog Edition",
    description:
      "International open call inviting artists to explore the theme of dogs across diverse visual practices and mediums.",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1000&q=80",
    closes: "22nd February 2026",
  },
  {
    id: 3,
    title: "100 Emerging Artists of 2026",
    description:
      "Curated by Sonia Borrell, this global initiative will feature 100 selected artists in a professionally produced publication.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=80",
    closes: "28th February 2026",
  },
];

const Submissions = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f8f6f3] to-[#efede9] dark:from-[#0f1115] dark:to-[#0a0c10]">

      <div className="container-custom">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-6xl font-serif tracking-tight mb-6">
            Submissions Open Now
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Discover our curated global calls for artists. Each opportunity
            offers publication, recognition, and international exposure.
            Designed to elevate creative voices across mediums and borders.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-16">

          {submissions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/submission/${item.id}`)}
              className="group relative cursor-pointer"
            >
              <div className="grid md:grid-cols-3 bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-12 flex flex-col justify-center relative">

                  {/* Accent Line */}
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#273F5B] to-[#9b1c31] opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <h2 className="text-3xl font-semibold mb-5 transition group-hover:text-[#273F5B]">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">

                    {/* Deadline Badge */}
                    <span className="px-4 py-2 text-sm font-medium bg-red-100 text-red-600 rounded-full animate-pulse">
                      Closes: {item.closes}
                    </span>

                    {/* CTA */}
                    <button className="relative px-6 py-3 border border-black dark:border-white rounded-full text-sm overflow-hidden group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500">
                      View Details →
                    </button>

                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Submissions;