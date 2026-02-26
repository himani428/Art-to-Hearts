import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSpotify,
  FaRss,
  FaFacebookF,
  FaTwitter,
  FaRedditAlien,
  FaLinkedinIn,
  FaEnvelope,
  FaPlay,
} from "react-icons/fa";

const episodes = [
  {
    id: 1,
    title: "Can Grief and Loss Make You a Better Artist? | S5E24",
    duration: "55:15",
    date: "Dec 25, 2025",
    spotify: "https://open.spotify.com/episode/0xPXoe64Rt58zUwTNsOjAs",
  },
  {
    id: 2,
    title:
      "How to Get People Excited About Your Art Workshop | A Talk with Sara Glupker",
    duration: "1:13:37",
    date: "Dec 18, 2025",
    spotify: "https://open.spotify.com/episode/19oW4S3sj2bM7H3LcL4l5p",
  },
  {
    id: 3,
    title: "Artist! You Can Restart Your Art Journey Anytime",
    duration: "38:14",
    date: "Dec 11, 2025",
    spotify: "https://open.spotify.com/episode/6sKoe9McN10qt8fiDTEhp0",
  },
];

export default function PodcastPage() {
  const [active, setActive] = useState(episodes[1]);
  const [showFollow, setShowFollow] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const episodeId = active.spotify.split("/episode/")[1]?.split("?")[0];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f6f3ee] via-white to-[#f1ece5] dark:from-[#0e1117] dark:to-[#0a0c10] py-24 px-6 relative">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-serif text-center mb-16"
        >
          Arts To Hearts <span className="italic">Podcast</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg"
              alt="Podcast Cover"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <div>

            {/* Active Episode */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10"
              >
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                  {active.date}
                </p>

                <h3 className="text-2xl font-medium mb-6">
                  {active.title}
                </h3>

                {/* Spotify Embed */}
                <iframe
                  src={`https://open.spotify.com/embed/episode/${episodeId}`}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Follow + Share */}
            <div className="flex gap-10 mb-12 relative">

              {/* Follow */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowFollow(!showFollow);
                    setShowShare(false);
                  }}
                  className="uppercase text-sm tracking-widest hover:text-[#8b0000] transition"
                >
                  Follow
                </button>

                <AnimatePresence>
                  {showFollow && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute mt-5 bg-white/80 dark:bg-[#141821]/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-5 w-60 z-40"
                    >
                      <a
                        href="https://rss.libsyn.com/shows/323012/destinations/2623808.xml"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1c1f26] transition"
                      >
                        <FaRss className="text-orange-500 text-lg" />
                        RSS Feed
                      </a>

                      <a
                        href="https://open.spotify.com/show/0JTLTs8TbVQZ2cLlbh7uQp"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1c1f26] transition"
                      >
                        <FaSpotify className="text-[#1DB954] text-lg" />
                        Spotify
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Share */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowShare(!showShare);
                    setShowFollow(false);
                  }}
                  className="uppercase text-sm tracking-widest hover:text-[#8b0000] transition"
                >
                  Share
                </button>

                <AnimatePresence>
                  {showShare && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute mt-5 bg-white/80 dark:bg-[#141821]/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-5 w-72 z-40"
                    >
                      <div className="grid grid-cols-3 gap-4 text-lg">

                        <a href="https://www.facebook.com/sharer/sharer.php?u=http://artstoheartspodcast.libsyn.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1c1f26] transition flex justify-center">
                          <FaFacebookF />
                        </a>

                        <a href="https://x.com/intent/post?url=http://artstoheartspodcast.libsyn.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1c1f26] transition flex justify-center">
                          <FaTwitter />
                        </a>

                        <a href="https://www.reddit.com/login/?dest=https://www.reddit.com/submit?url=http://artstoheartspodcast.libsyn.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1c1f26] transition flex justify-center">
                          <FaRedditAlien />
                        </a>

                        <a href="https://www.linkedin.com/company/arts-to-hearts-project/" target="_blank" rel="noreferrer" className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1c1f26] transition flex justify-center">
                          <FaLinkedinIn />
                        </a>

                        <a href="mailto:?subject=Arts To Hearts Podcast" className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1c1f26] transition flex justify-center">
                          <FaEnvelope />
                        </a>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Episode List */}
            <div className="space-y-6">
              {episodes.map((ep) => (
                <motion.div
                  key={ep.id}
                  whileHover={{ x: 6 }}
                  onClick={() => setActive(ep)}
                  className={`p-6 rounded-2xl cursor-pointer transition ${
                    active.id === ep.id
                      ? "bg-[#a40000] text-white shadow-xl"
                      : "bg-white dark:bg-[#141821] shadow-md"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{ep.title}</p>
                      <p className="text-sm opacity-70">{ep.date}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-sm">{ep.duration}</span>
                      <FaPlay />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16">
          <p className="text-2xl leading-relaxed">
            A popular podcast for women in the visual Arts. Charuka records
            this journey from her studio in Delhi & Agra. Honest conversations,
            global voices, and creative journeys.
          </p>

          <div>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              With over 20,000+ downloads and 150+ shows, Arts To Hearts Podcast
              connects artists worldwide through authentic storytelling and
              powerful conversations.
            </p>

            <a
              href="https://open.spotify.com/show/0JTLTs8TbVQZ2cLlbh7uQp?si=5a533462db564781"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-[#8b0000] transition">
                TAP HERE TO LISTEN
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Mini Player */}
      <motion.div
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-[#141821]/90 backdrop-blur-xl shadow-2xl rounded-2xl px-6 py-4 w-[95%] max-w-3xl border border-white/20"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs uppercase opacity-60">Now Playing</p>
            <p className="font-medium text-sm truncate max-w-[250px]">
              {active.title}
            </p>
          </div>

          <a
            href={active.spotify}
            target="_blank"
            rel="noreferrer"
            className="bg-[#1DB954] text-white px-4 py-2 rounded-full text-sm hover:scale-105 transition"
          >
            Open in Spotify
          </a>
        </div>
      </motion.div>
    </section>
  );
}