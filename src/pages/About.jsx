import { Link } from "react-router-dom";
import {
  Globe,
  Heart,
  Map,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    icon: <Heart size={28} />,
    title: "Authentic Experiences",
    description:
      "Api balaporoththu wenne Sri Lankawe athi satyama, sundara, local anubhawayan obata denna.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Trusted Travel Planning",
    description:
      "Safe, reliable, saha carefully planned journeys walin obage gamana pahasu saha viswasaniyawa karanawa.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Personalized Adventures",
    description:
      "Beach holiday ekak, hill country escape ekak, aththathma custom trip ekak unath api obata galapena widihata plan karanawa.",
  },
];

const stats = [
  { number: "100+", label: "Curated Destinations" },
  { number: "50+", label: "Unique Travel Ideas" },
  { number: "24/7", label: "Customer Support" },
  { number: "100%", label: "Sri Lanka Focused" },
];

const features = [
  "Handpicked destinations across Sri Lanka",
  "Custom trips for couples, families, and groups",
  "Easy booking and simple planning experience",
  "Modern, comfortable, and unforgettable travel moments",
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e9f7f5] via-white to-[#f5fbfa] text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-md">
                <Globe size={16} />
                About TravLanka
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                Discover the Heart of{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Sri Lanka
                </span>{" "}
                with Us
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                TravLanka kiyanne Sri Lankawe sundarama than, local culture eka,
                natural beauty eka, saha unforgettable journeys obata samipa
                karana modern travel platform ekak.
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

              <div className="absolute -bottom-6 -left-6 rounded-3xl border border-white/50 bg-white/80 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Map className="text-emerald-600" size={24} />
                  <div>
                    <p className="text-sm text-slate-500">Our Mission</p>
                    <h3 className="font-semibold text-slate-900">
                      Make every Sri Lanka journey memorable
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Our Story
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              TravLanka was created to showcase the beauty of our island
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Sri Lanka kiyanneth beaches, mountains, forests, wildlife, ancient
              cities saha rich culture ekak ekata eka ekathu una ratak. E
              sundarathwaya lokayata pennanna saha local travelers lataath,
              foreign travelers lataath honda experience ekak denna thamai
              TravLanka haduwe.
            </p>
            <p>
              Ape aim eka simply travel booking site ekak nemei. Api hadanne
              destination ekakata pamanak nemei, complete experience ekak.
              Relax වෙන්න, adventure ekak ganna, nature eka enjoy karanna,
              local places explore karanna — me siyalla ekama thanakin start
              karanna puluwan widihata.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              What We Believe
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Why travelers choose TravLanka
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

      {/* Why Us Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1200&q=80"
              alt="Travel experience"
              className="h-[450px] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Why Us
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              We make Sri Lanka travel feel easy, exciting, and elegant
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Ape website eka modern look ekak saha smooth user experience ekak
              thiyena widihata design karala thiyenne. E nisa travel plan
              karana eka complex process ekak nemei — eka enjoyable journey
              ekak wagei.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-md"
                >
                  <Users className="mt-1 text-emerald-600" size={20} />
                  <p className="text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-10 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-emerald-100 bg-white/80 px-8 py-14 text-center shadow-xl backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Ready to explore Sri Lanka with TravLanka?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Obage next holiday eka unforgettable experience ekak karaganna api
            samaga gaman arambha karanna.
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