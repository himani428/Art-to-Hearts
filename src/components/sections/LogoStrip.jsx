import { motion } from "framer-motion";

const partnerLogos = [
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nike.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/newyorktimes.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/artstation.svg"
];

const LogoStrip = () => {
  return (
    <section className="relative py-10 bg-[#0b0f14] overflow-hidden">

      {/* Soft runway spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

      <div className="container-custom">

        <div className="flex justify-center items-center gap-14 md:gap-20">

          {partnerLogos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              whileHover={{
                scale: 1.12,
                opacity: 1
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="w-16 md:w-20 cursor-pointer group relative"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />

              <img
                src={src}
                alt="partner-logo"
                className="w-full h-auto object-contain invert brightness-200 opacity-70 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}

        </div>
      </div>

      {/* Elegant bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default LogoStrip;