import { motion } from "framer-motion";
import { useRef } from "react";

const artStars = [
  {
    id: 1,
    name: "Fhionna Love McGeechan",
    country: "Scotland",
    month: "November 2025",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    instagram: "https://www.instagram.com/nationalgallery/",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "Elena Morris",
    country: "France",
    month: "October 2025",
    image:
      "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    instagram: "https://www.instagram.com/moma/",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "Wawi Amasha",
    country: "Kenya",
    month: "September 2025",
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    instagram: "https://www.instagram.com/artsy/",
    website: "https://example.com",
  },
];

const ArtStarSection = () => {
  return (
    <section className="art-star-section relative py-40 overflow-hidden bg-gradient-to-b from-[#f6f4f1] to-white dark:from-[#0b0e13] dark:to-[#07090d]">

      {/* Ambient Glow Background */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#273F5B]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#9b1c31]/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container-custom relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-serif text-center mb-32 tracking-tight"
        >
          Art Stars of 2025
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-20">

          {artStars.map((star, index) => (
            <motion.div
              key={star.id}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#11151c] shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-8 hover:shadow-[0_40px_120px_rgba(0,0,0,0.35)]">

                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-[#273F5B] via-transparent to-[#9b1c31] opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={star.image}
                    alt={star.name}
                    className="w-full h-[480px] object-cover transition-transform duration-[1200ms] group-hover:scale-115"
                  />

                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition duration-700"></div>

                  {/* Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition duration-[1800ms]"></div>

                  {/* Month Badge */}
                  <div className="absolute top-6 right-6 px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-sm font-medium shadow-xl group-hover:scale-105 transition duration-500">
                    {star.month}
                  </div>
                </div>

                {/* Content */}
                <div className="relative px-10 pt-16 pb-14 text-center bg-white dark:bg-[#11151c]">

                  {/* Floating Avatar */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <img
                      src={star.avatar}
                      alt={star.name}
                      className="w-24 h-24 rounded-full border-4 border-white dark:border-[#11151c] shadow-2xl transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold mt-8 mb-2 tracking-tight">
                    {star.name}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 mb-10">
                    {star.country}
                  </p>

                  {/* Links */}
                  <div className="flex justify-center gap-12 text-sm font-medium">

                    <a
                      href={star.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/link hover:text-[#273F5B] transition"
                    >
                      Instagram
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover/link:w-full"></span>
                    </a>

                    <a
                      href={star.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/link hover:text-[#9b1c31] transition"
                    >
                      Website
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover/link:w-full"></span>
                    </a>

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

export default ArtStarSection;