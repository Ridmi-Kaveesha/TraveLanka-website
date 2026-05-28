import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    title: "WhatsApp",
    description: "Quick replies for bookings and travel questions",
    value: "+94 77 123 4567",
    href: "https://wa.me/94771234567",
    icon: MessageCircle,
    bg: "from-emerald-500 to-green-500",
  },
  {
    title: "Email",
    description: "Best for detailed trip inquiries",
    value: "hello@travlanka.com",
    href: "mailto:hello@travlanka.com",
    icon: Mail,
    bg: "from-cyan-500 to-blue-500",
  },
  {
    title: "Phone",
    description: "Talk directly with our team",
    value: "+94 77 123 4567",
    href: "tel:+94771234567",
    icon: Phone,
    bg: "from-sky-500 to-indigo-500",
  },
  {
    title: "Instagram",
    description: "Travel inspiration, reels and updates",
    value: "@travlanka",
    href: "https://instagram.com/",
    icon: Instagram,
    bg: "from-pink-500 to-rose-500",
  },
  {
    title: "Facebook",
    description: "Follow our latest travel stories",
    value: "TravLanka",
    href: "https://facebook.com/",
    icon: Facebook,
    bg: "from-blue-500 to-indigo-500",
  },
  {
    title: "TikTok",
    description: "Short travel videos and destination highlights",
    value: "@travlanka",
    href: "https://tiktok.com/",
    icon: null,
    bg: "from-slate-700 to-slate-900",
  },
];

const infoCards = [
  {
    title: "Location",
    value: "Colombo, Sri Lanka",
    sub: "Helping travelers across the island",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Mon - Sat | 8:30 AM - 6:00 PM",
    sub: "Usually replies within a few hours",
    icon: Clock3,
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-cyan-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
            Contact TravLanka
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Let’s Connect For Your Next{" "}
            <span className="text-emerald-600">Sri Lanka Journey</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Need help with destinations, bookings, travel ideas, or a custom
            island adventure? Reach us through your favorite platform.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-8">
          {/* Left side */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {contactMethods.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-3xl border border-white/60 bg-white/75 p-5 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} text-white shadow-md`}
                    >
                      {Icon ? (
                        <Icon size={24} />
                      ) : (
                        <span className="text-xl font-bold">♪</span>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-slate-800 break-all">
                        {item.value}
                      </span>
                      <ArrowRight
                        size={18}
                        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-600"
                      />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Info cards */}
            <div className="grid md:grid-cols-2 gap-5">
              {infoCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/60 bg-white/75 p-6 shadow-lg backdrop-blur-xl"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-700 font-medium">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{item.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side */}
          <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 sm:p-8 shadow-xl backdrop-blur-xl h-fit">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-6 text-white shadow-lg">
              <h2 className="text-2xl font-bold leading-snug">
                Need help planning your trip?
              </h2>
              <p className="mt-3 text-white/90 leading-relaxed">
                Use our Custom Trip page for personalized itineraries or go to
                Reserve if you are ready to book your journey.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/custom-trip"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-emerald-700 transition hover:scale-[1.02]"
                >
                  Custom Trip
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/reserve"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20"
                >
                  Reserve Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <h3 className="font-semibold text-slate-900">
                  Best for quick replies
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  WhatsApp is the fastest way to contact us for simple questions
                  and booking support.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                <h3 className="font-semibold text-slate-900">
                  Best for detailed plans
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Email us when you want to share dates, budget, destinations,
                  and trip preferences.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">
                  Good things to include
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li>• Travel dates</li>
                  <li>• Number of people</li>
                  <li>• Preferred destinations</li>
                  <li>• Budget range</li>
                  <li>• Hotel / transport needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;