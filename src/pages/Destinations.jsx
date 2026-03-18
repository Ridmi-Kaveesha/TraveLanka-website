import { useMemo, useState } from "react";
import {
  MapPin,
  Search,
  Mountain,
  Waves,
  Trees,
  Landmark,
  Building2,
  Compass,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Sigiriya",
    region: "Cultural Triangle",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sri Lanka’s iconic rock fortress surrounded by ancient gardens, frescoes, and stunning summit views.",
  },
  {
    id: 2,
    name: "Ella",
    region: "Uva Province",
    category: "Hill Country",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    description:
      "A scenic mountain town known for tea estates, Nine Arches Bridge, hiking trails, and cool fresh air.",
  },
  {
    id: 3,
    name: "Mirissa",
    region: "Southern Coast",
    category: "Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Golden beaches, whale watching, palm-lined coastlines, and vibrant sunset vibes on the south coast.",
  },
  {
    id: 4,
    name: "Yala National Park",
    region: "Southern Sri Lanka",
    category: "Wildlife",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop",
    description:
      "One of the best places in Sri Lanka to spot leopards, elephants, birds, and dramatic wild landscapes.",
  },
  {
    id: 5,
    name: "Kandy",
    region: "Central Province",
    category: "City",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    description:
      "The cultural heart of Sri Lanka, home to the Temple of the Tooth and surrounded by misty hills.",
  },
  {
    id: 6,
    name: "Nuwara Eliya",
    region: "Central Highlands",
    category: "Hill Country",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    description:
      "A charming highland escape with tea plantations, cool weather, waterfalls, and colonial elegance.",
  },
  {
    id: 7,
    name: "Galle Fort",
    region: "Southern Province",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
    description:
      "A UNESCO-listed coastal fort city blending colonial history, boutique cafes, and ocean views.",
  },
  {
    id: 8,
    name: "Arugam Bay",
    region: "Eastern Coast",
    category: "Beach",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
    description:
      "A laid-back eastern paradise famous for surfing, beach life, and relaxed tropical adventure.",
  },
  {
    id: 9,
    name: "Anuradhapura",
    region: "North Central Province",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    description:
      "An ancient sacred city filled with dagobas, ruins, monasteries, and centuries of Buddhist heritage.",
  },
  {
    id: 10,
    name: "Trincomalee",
    region: "Eastern Province",
    category: "Beach",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
    description:
      "Crystal-clear beaches, snorkeling spots, and a peaceful coastal atmosphere on the east coast.",
  },
  {
    id: 11,
    name: "Jaffna",
    region: "Northern Province",
    category: "City",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1200&auto=format&fit=crop",
    description:
      "A unique northern destination rich in Tamil culture, cuisine, islands, and historical character.",
  },
  {
    id: 12,
    name: "Wilpattu National Park",
    region: "North Western Province",
    category: "Wildlife",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    description:
      "A vast national park known for lakes, quiet jungle drives, leopards, and a more secluded safari feel.",
  },
  {
    id: 13,
    name: "Bentota",
    region: "Western Coast",
    category: "Beach",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    description:
      "A popular beach town with luxury resorts, river safaris, water sports, and family-friendly relaxation.",
  },
  {
    id: 14,
    name: "Polonnaruwa",
    region: "North Central Province",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200&auto=format&fit=crop",
    description:
      "A beautifully preserved medieval kingdom with ancient statues, temples, and royal ruins.",
  },
  {
    id: 15,
    name: "Horton Plains",
    region: "Central Highlands",
    category: "Wildlife",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Cloud forests, grasslands, and the famous World’s End viewpoint create a breathtaking hiking experience.",
  },
  {
    id: 16,
    name: "Kalpitiya",
    region: "North Western Coast",
    category: "Hidden Gem",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    description:
      "A lesser-known coastal escape ideal for dolphin watching, kite surfing, and quiet beach adventures.",
  },
  {
    id: 17,
    name: "Colombo",
    region: "Western Province",
    category: "City",
    image:
      "https://images.unsplash.com/photo-1470004914212-05527e49370b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sri Lanka’s vibrant capital with city energy, oceanfront views, shopping, dining, and modern culture.",
  },
  {
    id: 18,
    name: "Knuckles Range",
    region: "Central Sri Lanka",
    category: "Hidden Gem",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    description:
      "A spectacular mountain range perfect for trekking, waterfalls, remote villages, and nature lovers.",
  },
];

const categories = [
  "All",
  "Beach",
  "Hill Country",
  "Wildlife",
  "Heritage",
  "City",
  "Hidden Gem",
];

const categoryIcons = {
  All: <Compass size={16} />,
  Beach: <Waves size={16} />,
  "Hill Country": <Mountain size={16} />,
  Wildlife: <Trees size={16} />,
  Heritage: <Landmark size={16} />,
  City: <Building2 size={16} />,
  "Hidden Gem": <Compass size={16} />,
};

export default function Destinations() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((place) => {
      const matchesCategory =
        activeCategory === "All" || place.category === activeCategory;

      const keyword = search.toLowerCase();
      const matchesSearch =
        place.name.toLowerCase().includes(keyword) ||
        place.region.toLowerCase().includes(keyword) ||
        place.category.toLowerCase().includes(keyword) ||
        place.description.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50 text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-teal-800/70 to-sky-900/70" />
        <div
          className="h-[420px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-md">
                Explore Every Corner of Sri Lanka
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Discover Sri Lanka’s Most Beautiful Destinations
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
                From golden beaches and misty mountains to sacred ancient
                cities and wildlife adventures, find the perfect places for
                your next unforgettable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/50 bg-white/80 p-5 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search destinations, region, category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-11 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-md"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:text-emerald-700"
                    }`}
                  >
                    {categoryIcons[category]}
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-emerald-600">18+</h3>
            <p className="mt-2 text-sm text-slate-600">
              Handpicked destinations from north to south, east to west.
            </p>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-sky-600">7</h3>
            <p className="mt-2 text-sm text-slate-600">
              Categories including beaches, heritage, wildlife, and hill
              country escapes.
            </p>
          </div>
          <div className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-teal-600">All Island</h3>
            <p className="mt-2 text-sm text-slate-600">
              A complete travel showcase designed to help visitors explore all
              around Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Destination Grid */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Destinations
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Explore the best of Sri Lanka
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredDestinations.length}
            </span>{" "}
            destination{filteredDestinations.length !== 1 ? "s" : ""}
          </p>
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800">
              No destinations found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another keyword or choose a different category.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredDestinations.map((place) => (
              <div
                key={place.id}
                className="group overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow">
                      {place.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold">{place.name}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                      <MapPin size={16} />
                      <span>{place.region}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">
                    {place.description}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02]">
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 p-8 text-white shadow-xl md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Plan Your Journey
            </p>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Ready to explore every side of Sri Lanka?
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/90 md:text-base">
              Choose your favorite destinations and build a travel experience
              that matches your style — beaches, mountains, culture, wildlife,
              or hidden gems.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:scale-[1.02]">
                Start Planning
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                View Journeys
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}