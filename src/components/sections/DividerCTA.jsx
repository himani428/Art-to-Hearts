import Reveal from "../ui/Reveal";

const DividerCTA = () => {
  return (
    <section className="divider-cta bg-black dark:bg-[#0f1720] text-white text-center py-20">

      <Reveal>
        <h2 className="mb-6 text-white">
          Calling for the Next “ART STAR”
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-gray-300 dark:text-gray-400">
          Showcase your artistic talent and get the recognition you deserve.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-md hover:bg-gray-200 transition dark:bg-red-600 dark:text-white dark:hover:bg-red-700">
          BECOME NEXT ART STAR
        </button>

      </Reveal>
    </section>
  );
};

export default DividerCTA;