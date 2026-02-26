import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogs } from "../../data/blogs";

const ArtToHeartsClub = () => {
  const featured = blogs[0];
  const leftBlogs = blogs.slice(1, 5);
  const rightBlogs = blogs.slice(5, 9);

  return (
    <section className="py-36 bg-gradient-to-b from-white to-[#f3efe9] dark:from-[#0c0f14] dark:to-[#0a0c10]">

      <div className="container-custom">

        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif mb-6">
            Arts To Hearts <span className="italic">Club</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-20">

          {/* LEFT */}
          <div className="flex flex-col gap-12">
            {leftBlogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex gap-6 cursor-pointer group"
                >
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    className="w-28 h-28 object-cover rounded-xl shadow-lg"
                  />
                  <div>
                    <p className="text-xs uppercase text-gray-400 mb-2">
                      {blog.category}
                    </p>
                    <h4 className="font-medium group-hover:text-[#8b0000] transition">
                      {blog.title}
                    </h4>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CENTER */}
          <Link to={`/blog/${featured.id}`}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group"
            >
              <img
                src={featured.cover}
                alt={featured.title}
                className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-12 left-12 text-white max-w-lg">
                <span className="px-4 py-1 text-xs uppercase bg-white/20 backdrop-blur-md rounded-full">
                  {featured.category}
                </span>
                <h3 className="text-3xl mt-6 font-serif">
                  {featured.title}
                </h3>
              </div>
            </motion.div>
          </Link>

          {/* RIGHT */}
          <div className="flex flex-col gap-12">
            {rightBlogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <motion.div
                  whileHover={{ x: -6 }}
                  className="flex gap-6 cursor-pointer group"
                >
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    className="w-28 h-28 object-cover rounded-xl shadow-lg"
                  />
                  <div>
                    <p className="text-xs uppercase text-gray-400 mb-2">
                      {blog.category}
                    </p>
                    <h4 className="font-medium group-hover:text-[#8b0000] transition">
                      {blog.title}
                    </h4>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArtToHeartsClub;