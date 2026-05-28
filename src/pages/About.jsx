import { Link } from "react-router-dom";
import {
  Globe,
  Heart,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Compass,
  Users,
  Car,
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: <Heart size={26} />,
    title: "Authentic Experiences",
    description:
      "Sri Lankawe natural beauty, local culture saha satyama travel experience obata samipa karanawa.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Trusted Travel Planning",
    description:
      "Safe, reliable, carefully planned journeys walin obage travel experience eka pahasu saha viswasaniyawa karanawa.",
  },
  {
    icon: <Sparkles size={26} />,
    title: "Personalized Trips",
    description:
      "Couples, families, groups saha solo travelers lata galapena widihata custom experiences plan karanawa.",
  },
];

const offers = [
  "Explore top destinations across Sri Lanka",
  "Beautiful journeys and tour packages",
  "Personalized custom trip planning",
  "Simple reservation and booking support",
  "Comfortable travel experiences",
  "Friendly local guidance throughout the trip",
];

const stats = [
  { number: "100+", label: "Destinations" },
  { number: "50+", label: "Travel Ideas" },
  { number: "24/7", label: "Support" },
  { number: "100%", label: "Sri Lanka Focused" },
];

const drivers = [
  {
    name: "Experienced Local Drivers",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    description:
      "Friendly, professional, saha experienced drivers obata safe and comfortable journey ekak denna ready.",
    details: ["Licensed & experienced", "Safe driving", "Friendly service"],
  },
  {
    name: "Local Travel Guidance",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    description:
      "Ape drivers samahara welawata local guides wage wada karala hidden places, food spots saha local tips share karanawa.",
    details: ["Local knowledge", "Helpful recommendations", "Travel support"],
  },
  {
    name: "Comfort & Trust",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    description:
      "Clean vehicles, reliable service saha traveler safety priority karana trusted team ekak samaga gaman karanna puluwan.",
    details: ["Verified service", "Comfortable ride", "Reliable experience"],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ecfdf8] via-white to-[#f4fbff] text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20">
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-md">
                <Globe size={16} />
                About TravLanka
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                Discover Sri Lanka with{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  TravLanka
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                TravLanka kiyanne Sri Lankawe beaches, mountains, heritage,
                wildlife saha unforgettable travel experiences explore karanna
                help karana modern travel platform ekak.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/destinations"
                  className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
                >
                  Explore Destinations
                </Link>

                <Link
                  to="/custom-trip"
                  className="rounded-full border border-emerald-200 bg-white/80 px-6 py-3 font-semibold text-emerald-700 shadow-md backdrop-blur-md transition duration-300 hover:bg-emerald-50"
                >
                  Plan Custom Trip
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/40 bg-white/30 shadow-2xl backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80"
                  alt="Sri Lanka travel"
                  className="h-[500px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-3xl border border-white/50 bg-white/85 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <MapPinned className="text-emerald-600" size={24} />
                  <div>
                    <p className="text-sm text-slate-500">Travel with confidence</p>
                    <h3 className="font-semibold text-slate-900">
                      Beautiful journeys across Sri Lanka
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Our Story
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              We created TravLanka to make Sri Lanka travel simple and memorable
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Sri Lanka kiyanneth podi unath highly diverse island ekak.
              Beaches, hill country, ancient cities, waterfalls, safari parks
              saha local culture okkoma ekama ratakin hambenawa.
            </p>
            <p>
              E sundara anubhawaya hoda widihata travelers lata geniyanna,
              planning eka simplify karanna, saha modern feel ekak thiyana
              travel platform ekak create karanna thamai TravLanka arambha une.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/50 bg-white/80 p-8 shadow-lg backdrop-blur-xl">
            <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 text-white">
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Sri Lanka explore karana eka easy, stylish, safe saha enjoyable
              experience ekak kirima. Travelers lata destinations, journeys,
              custom tours saha trusted support eka eka thanakin denna.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/50 bg-white/80 p-8 shadow-lg backdrop-blur-xl">
            <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 text-white">
              <Eye size={26} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Sri Lankawe beauty, culture saha unforgettable journeys lokayata
              pennana trusted and modern travel brand ekak bawata path wenna.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Our Values
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              What we believe in
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/50 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 text-white">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1200&q=80"
              alt="Sri Lanka experience"
              className="h-[450px] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              What We Offer
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Everything you need for a better travel experience
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              TravLanka platform eka through user lata Sri Lankawe honda places
              hoyaganna, beautiful journeys balanna, custom trip ekak request
              karanna saha reservation support ganna puluwan.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {offers.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-md"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-600"
                    size={18}
                  />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-[#0f766e] via-[#0f9f8f] to-[#0891b2] px-8 py-12 text-white shadow-2xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold">{stat.number}</h3>
                <p className="mt-2 text-white/85">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Why travelers can trust TravLanka
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Compass size={24} />,
                title: "Easy Planning",
                desc: "Travel planning eka complex nemei. Simple and clean experience ekak denna design karala thiyenne.",
              },
              {
                icon: <MapPinned size={24} />,
                title: "Sri Lanka Expertise",
                desc: "Local destinations, hidden gems saha best travel routes gena honda idea ekak thiyenawa.",
              },
              {
                icon: <Users size={24} />,
                title: "Personal Touch",
                desc: "Different travelers lata galapena widihata personalized support saha trip ideas denna puluwan.",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Reliable Service",
                desc: "Comfort, trust, safety saha quality experience ape service eke main focus eka.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/50 bg-white/80 p-7 shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drivers & Guides */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Drivers & Guides
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Travel with professional drivers and local guidance
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Ape drivers la just drivers witharak nemei. Eyalage experience,
              local knowledge saha friendly service nisa obage journey eka thawath
              safe, comfortable saha memorable wenawa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {drivers.map((driver, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[28px] border border-white/50 bg-white/80 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 text-white">
                    <Car size={22} />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {driver.name}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {driver.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {driver.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-8 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-emerald-100 bg-white/85 px-8 py-14 text-center shadow-xl backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Ready to begin your Sri Lanka journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Destinations explore karanna, custom trip ekak plan karanna, nathnam
            next unforgettable holiday eka TravLanka samaga arambha karanna.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/journeys"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              View Journeys
            </Link>

            <Link
              to="/reserve"
              className="rounded-full border border-emerald-200 px-6 py-3 font-semibold text-emerald-700 transition duration-300 hover:bg-emerald-50"
            >
              Reserve Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}