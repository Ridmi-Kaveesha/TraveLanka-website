import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import journeys from "../data/journeys";

const categories = [
  "All",
  "Beach",
  "Mountains",
  "Culture",
  "Wildlife",
  "Luxury",
  "Adventure",
];

function Journeys() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredJourneys = useMemo(() => {
    if (activeCategory === "All") return journeys;
    return journeys.filter((journey) => journey.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-teal-950 via-sky-950 to-emerald-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-80px] top-20 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute right-[-60px] top-40 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-300 blur-3xl" />
      </div>

      {/* Hero / Header */}
      <section className="relative px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur-md">
                Curated Sri Lanka Travel Experiences
              </span>

              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Explore unforgettable{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                  journeys
                </span>{" "}
                across Sri Lanka
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                From misty hill country escapes to sun-soaked coastal adventures,
                TravLanka offers modern, carefully curated journeys designed for
                comfort, beauty, and memorable experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur-md">
                  Handpicked itineraries
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur-md">
                  Flexible plans
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur-md">
                  Premium local experiences
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/custom-trip"
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition duration-300 hover:scale-105"
                >
                  Plan Custom Trip
                </Link>

                <Link
                  to="/reserve"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/15"
                >
                  Reserve Now
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                <img
                  src="/images/hero/hero.jpeg"
                  alt="TravLanka journeys"
                  className="h-[300px] w-full rounded-[1.5rem] object-cover sm:h-[400px] lg:h-[460px]"
                />
              </div>

              <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-3 sm:left-8 sm:right-8 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xl">
                  <p className="text-2xl font-bold text-cyan-200">25+</p>
                  <p className="mt-1 text-xs text-slate-200 sm:text-sm">
                    Curated Journeys
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xl">
                  <p className="text-2xl font-bold text-emerald-200">100%</p>
                  <p className="mt-1 text-xs text-slate-200 sm:text-sm">
                    Tailored Comfort
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xl col-span-2 sm:col-span-1">
                  <p className="text-2xl font-bold text-sky-200">Islandwide</p>
                  <p className="mt-1 text-xs text-slate-200 sm:text-sm">
                    Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "border border-cyan-200/30 bg-cyan-300/20 text-cyan-100 shadow-lg backdrop-blur-md"
                      : "border border-white/15 bg-white/10 text-slate-200 backdrop-blur-md hover:bg-white/15"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Cards */}
      <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-200/80">
                Signature Collection
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Find the perfect journey for your travel style
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Each journey is designed to blend comfort, exploration, and the
              natural beauty of Sri Lanka into a premium travel experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredJourneys.map((journey) => (
              <div
                key={journey.id}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={journey.image}
                    alt={journey.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {journey.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100 backdrop-blur-md">
                      {journey.duration}
                    </span>
                    <span className="rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 px-3 py-1 text-xs font-semibold text-slate-950">
                      From {journey.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {journey.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {journey.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {journey.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-teal-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <Link
                      to="/reserve"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.02]"
                    >
                      Reserve Journey
                    </Link>

                    <button className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/15">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJourneys.length === 0 && (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-10 text-center backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">
                No journeys found
              </h3>
              <p className="mt-2 text-slate-300">
                Try selecting another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">
                  Need something more personal?
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Create your own Sri Lanka experience with TravLanka
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Tell us your travel dates, style, and interests — we’ll help
                  you build a fully customized journey that feels premium and
                  effortless.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  to="/custom-trip"
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105"
                >
                  Plan Custom Trip
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/15"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Journeys;