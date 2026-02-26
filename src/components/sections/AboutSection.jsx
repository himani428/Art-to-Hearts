import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-[#f6f2ec] dark:bg-[#0c0f14] overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#e8dfd2] dark:bg-[#1a1f2b] rounded-full blur-[120px] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-40 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-serif">
            About <span className="italic">Us</span>
          </h2>
        </motion.div>

        {/* Big Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto text-center mb-32"
        >
          <p className="text-3xl md:text-4xl font-serif leading-relaxed">
            It is one thing to have creative skills — 
            and entirely another to build a 
            <span className="italic text-[#8b0000]"> successful & profitable creative career </span>
            out of them.
          </p>
        </motion.div>

        {/* Two Column Story */}
        <div className="grid md:grid-cols-2 gap-20 text-lg leading-relaxed">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <p>
              Reports say more than 80% creatives find themselves lost
              when it comes to monetising their creativity into profitable
              careers and businesses. Hence, was born Arts To Hearts Project.
            </p>

            <p>
              A global creative community uniting multi-passionate women creators
              to build successful, fulfilling, money-making careers via
              collaboration, learning, community, networking and peer-to-peer learning.
            </p>

            <p>
              Every member of this organisation is motivated by a desire
              to improve the world for creatives and to see them succeed
              in their own way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <p>
              We showcase exemplary artists, create resources, publications,
              opportunities, lessons, courses and materials with experts
              from around the world.
            </p>

            <p>
              We abundantly create free content for you to learn something new
              everyday — from Podcast interviews to YouTube lessons and daily articles.
            </p>

            <p>
              Dear artist, we are thrilled to have you here.
              Lean in. Discover. Build meaningful allies.
              Find your creative inner circle.
            </p>
          </motion.div>

        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-40 flex flex-col md:flex-row items-center gap-20"
        >

          {/* Portrait */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#8b0000] rounded-full blur-3xl opacity-20" />

            <img
              src="https://artstoheartsproject.com/wp-content/uploads/2023/09/asdasd-1.webp"
              alt="Charuka Arora"
              className="relative w-[320px] h-[320px] object-cover rounded-full shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
            />
          </motion.div>

          {/* Founder Info */}
          <div className="max-w-xl">
            <h3 className="text-4xl font-serif">
              Charuka Arora
            </h3>

            <p className="mt-4 uppercase tracking-widest text-sm text-[#8b0000]">
              Founder & Editor-in-Chief
            </p>

            <p className="mt-8 text-lg leading-relaxed">
              A passionate advocate for women artists, Charuka founded
              Arts To Hearts to create a thriving global ecosystem
              where creativity meets opportunity.
              Her vision is simple — empower artists not just to create,
              but to flourish.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}