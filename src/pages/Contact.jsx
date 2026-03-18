import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-cyan-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-emerald-100 text-emerald-700 text-sm font-medium shadow-sm">
            Get in Touch
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Contact <span className="text-emerald-600">TravLanka</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
            Have questions about destinations, custom trips, bookings, or travel plans in Sri Lanka?
            Our team is here to help you create your perfect journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Info Section */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Let’s plan your next adventure
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Reach out to us for bookings, destination guidance, custom itineraries, or any travel support.
              We’ll get back to you as soon as possible.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <div className="p-3 rounded-xl bg-emerald-500 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600 mt-1">+94 77 123 4567</p>
                  <p className="text-sm text-slate-500">Call us for quick support</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-cyan-50 border border-cyan-100">
                <div className="p-3 rounded-xl bg-cyan-500 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600 mt-1">hello@travlanka.com</p>
                  <p className="text-sm text-slate-500">Send us your travel inquiries anytime</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="p-3 rounded-xl bg-blue-500 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Location</h3>
                  <p className="text-slate-600 mt-1">Colombo, Sri Lanka</p>
                  <p className="text-sm text-slate-500">Serving travelers across the island</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <div className="p-3 rounded-xl bg-teal-500 text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Working Hours</h3>
                  <p className="text-slate-600 mt-1">Mon - Sat: 8:30 AM - 6:00 PM</p>
                  <p className="text-sm text-slate-500">We usually reply within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-[1px]">
              <div className="rounded-2xl bg-white px-5 py-4 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <MessageCircle size={20} />
                </div>
                <p className="text-sm sm:text-base text-slate-700">
                  Need a <span className="font-semibold text-slate-900">custom Sri Lanka trip</span>? Tell us your budget,
                  places, and travel dates.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
            <p className="text-slate-600 mb-8">
              Fill in the form and our team will contact you soon.
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Tell us about your travel plan..."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition duration-300"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;