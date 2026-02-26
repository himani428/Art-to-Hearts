import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedCard = ({
  image,
  title,
  price,
  backContent,
  hoverType = "zoom",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (hoverType === "flip") {
    return (
      <div
        className="relative w-full h-[420px] perspective"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full transition-transform duration-500"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={image}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg">{title}</h3>
              <p className="text-gray-500">{price}</p>
            </div>
          </div>

          {/* BACK */}
          <div
            className="absolute w-full h-full backface-hidden bg-black text-white rounded-xl flex items-center justify-center p-6"
            style={{ transform: "rotateY(180deg)" }}
          >
            <p>{backContent}</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative rounded-xl overflow-hidden shadow-md"
    >
      <img
        src={image}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;