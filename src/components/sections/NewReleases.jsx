import { motion } from "framer-motion";
import { useState } from "react";

const books = [
  {
    title: "Studio Visit Book Vol. 7",
    price: "$120.00",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "101 Art Book: Food Edition",
    price: "$120.00",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "Arts to Hearts Magazine Issue 11",
    price: "$69.00",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
];

const NewReleases = () => {
  const [flipped, setFlipped] = useState(null);

  return (
    <section className="py-24 bg-[#f7f6f3] dark:bg-[#0f1115]">

      <div className="container-custom">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-5xl font-serif mb-6 tracking-tight">
            NEW RELEASES
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            Discover our latest premium collectible editions — thoughtfully
            curated artist books, contemporary art publications, and
            beautifully crafted magazine issues that celebrate creativity
            across the globe. Each release is designed to inspire, educate,
            and elevate your artistic journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">

          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="relative perspective"
              onMouseEnter={() => setFlipped(index)}
              onMouseLeave={() => setFlipped(null)}
            >
              <div
                className={`relative w-full h-[460px] transition-transform duration-700 transform-style preserve-3d ${
                  flipped === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white dark:bg-[#1a1d23] rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-[320px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {book.title}
                    </h3>
                    <p className="text-gray-500">{book.price}</p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#273F5B] to-[#1e2c3f] rounded-2xl shadow-xl p-8 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-semibold mb-4">
                    Premium Collectible Edition
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    A carefully curated edition showcasing contemporary
                    artists from around the world. Designed for collectors,
                    creatives, and art enthusiasts who value timeless
                    storytelling and visual excellence.
                  </p>
                  <button className="self-start bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Custom 3D Helpers */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default NewReleases;