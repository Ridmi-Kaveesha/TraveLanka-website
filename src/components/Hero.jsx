import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <p className="uppercase tracking-[0.3em] text-sm mb-4 text-yellow-400">
          Curated Sri Lanka Journeys
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
          Discover Sri Lanka Beautifully
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200">
          Explore handpicked journeys across golden beaches, misty hills,
          wildlife parks, and timeless cultural treasures.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/journeys"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Explore Journeys
          </Link>

          <Link
            to="/custom-trip"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Plan Custom Trip
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;