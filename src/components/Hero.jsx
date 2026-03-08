import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero.jpeg"
        alt="Sri Lanka beach"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-slate-950/45"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/35 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/30 to-transparent"></div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 pt-36 pb-16 text-white md:px-8 lg:px-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/85">
              Curated Sri Lanka Journeys
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Discover Sri Lanka
            <span className="block bg-gradient-to-r from-white via-sky-100 to-cyan-200 bg-clip-text text-transparent">
              Beautifully
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Explore handpicked journeys across golden beaches, misty hills,
            wildlife parks, and timeless cultural treasures with comfort,
            flexibility, and local expertise.
          </p>

          {/* Small info chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
              Private Transport
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
              Flexible Dates
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
              Handpicked Stays
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/journeys"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(245,158,11,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(245,158,11,0.45)]"
            >
              Explore Journeys
            </Link>

            <Link
              to="/custom-trip"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-slate-900"
            >
              Plan Custom Trip
            </Link>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Hero;