import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="section bg-gray-100 dark:bg-[#111]">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl leading-tight mb-6">
            We are a global media, publishing and education company for Artists & Creatives
          </h1>

          <button className="btn-primary">
            SUBMIT YOUR ART TODAY
          </button>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Hero;