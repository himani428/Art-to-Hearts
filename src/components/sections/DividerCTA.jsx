import Reveal from "../ui/Reveal";

const DividerCTA = () => {
  return (
    <section className="bg-black text-white text-center py-20">
      <Reveal>
        <h2 className="mb-6">
          Calling for the Next “ART STAR”
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          Showcase your artistic talent and get the recognition you deserve.
        </p>
        <button className="bg-white text-black px-8 py-4 hover:scale-105 transition">
          BECOME NEXT ART STAR
        </button>
      </Reveal>
    </section>
  );
};

export default DividerCTA;