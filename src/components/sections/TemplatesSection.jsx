import { motion } from "framer-motion";
import { useState } from "react";

const templates = [
  {
    title: "Artist Series Catalog Template",
    price: "$13.99",
    tag: "BESTSELLER",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
  {
    title: "Exhibition Catalog Template",
    price: "$12.99",
    tag: "NEW",
    image:
      "https://images.pexels.com/photos/3184425/pexels-photo-3184425.jpeg",
  },
  {
    title: "Artist Income & Expense Tracker",
    price: "$19.99",
    tag: "POPULAR",
    image:
      "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg",
  },
];

const TemplatesSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-36 bg-gradient-to-b from-[#f5f3ef] via-white to-[#f3efe9] dark:from-[#0c0f14] dark:to-[#0a0c10]">

      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl font-serif tracking-tight">
            NEW TEMPLATES
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">

          {templates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative group"
            >

              {/* Animated Gradient Border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#8b0000] via-[#273F5B] to-[#8b0000] opacity-0 group-hover:opacity-100 transition duration-700 blur-sm"></div>

              {/* Card */}
              <div className="relative bg-white dark:bg-[#11151c] rounded-3xl overflow-hidden shadow-xl transition duration-500 group-hover:shadow-2xl">

                {/* Tag */}
                <div className="absolute top-6 left-6 z-20 bg-black text-white text-xs px-4 py-1 rounded-full tracking-widest">
                  {item.tag}
                </div>

                {/* Image */}
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-[1500ms] group-hover:scale-110"
                  />

                  {/* Glass Overlay */}
                  <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/40 backdrop-blur-sm transition duration-500 flex items-center justify-center gap-6 
                  ${hovered === index ? "opacity-100" : "opacity-0"}`}>

                    <button className="px-6 py-3 bg-white text-black rounded-full text-sm tracking-wide hover:scale-105 transition">
                      Preview
                    </button>

                    <button className="px-6 py-3 bg-[#8b0000] text-white rounded-full text-sm tracking-wide hover:bg-[#600000] transition">
                      Add to Cart
                    </button>

                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col gap-4">

                  <h3 className="text-lg font-medium tracking-wide group-hover:text-[#8b0000] transition duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.price}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TemplatesSection;