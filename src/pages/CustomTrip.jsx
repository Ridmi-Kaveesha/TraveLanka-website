import { useState } from "react";
import { MapPin, CalendarDays, Users, Heart, Send, Sparkles } from "lucide-react";

const CustomTrip = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    duration: "",
    travelers: "",
    budget: "",
    interests: [],
    notes: "",
  });

  const interestOptions = [
    "Beaches",
    "Wildlife",
    "Culture",
    "Adventure",
    "Hiking",
    "Luxury",
    "Photography",
    "Food",
    "Nature",
    "History",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestToggle = (item) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((interest) => interest !== item)
        : [...prev.interests, item],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Custom Trip Form Submitted:", formData);
    alert("Your custom trip request has been submitted!");
  };

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-sky-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              <Sparkles size={16} />
              Personalized Sri Lanka Experience
            </span>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Build Your Own
              <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Custom Trip
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              Tell us what kind of journey you want, and we’ll help create a
              personalized Sri Lanka travel experience just for you — beaches,
              mountains, wildlife, culture, luxury stays, or adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Cards */}
      <section className="mx-auto -mt-10 max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <MapPin className="mb-4 text-emerald-600" size={28} />
            <h3 className="mb-2 text-xl font-semibold">Choose Destinations</h3>
            <p className="text-sm leading-6 text-slate-600">
              Select the places you’d love to explore across Sri Lanka.
            </p>
          </div>

          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <CalendarDays className="mb-4 text-sky-600" size={28} />
            <h3 className="mb-2 text-xl font-semibold">Plan Your Schedule</h3>
            <p className="text-sm leading-6 text-slate-600">
              Share your travel dates, duration, and trip preferences.
            </p>
          </div>

          <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <Heart className="mb-4 text-teal-600" size={28} />
            <h3 className="mb-2 text-xl font-semibold">Travel Your Way</h3>
            <p className="text-sm leading-6 text-slate-600">
              From relaxing beach escapes to thrilling adventures, it’s fully
              tailored to you.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Plan With TravLanka
            </span>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Let’s create your ideal Sri Lanka getaway
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Whether you want a romantic honeymoon, family holiday, solo
              adventure, or luxury island escape, we can help design the perfect
              itinerary based on your style, budget, and interests.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <Users className="mt-1 text-sky-600" size={22} />
                <div>
                  <h4 className="font-semibold">Flexible for everyone</h4>
                  <p className="text-sm text-slate-600">
                    Solo travelers, couples, families, and groups are all welcome.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <Sparkles className="mt-1 text-emerald-600" size={22} />
                <div>
                  <h4 className="font-semibold">Tailor-made experiences</h4>
                  <p className="text-sm text-slate-600">
                    Add nature, culture, surfing, safaris, food tours, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <Heart className="mt-1 text-teal-600" size={22} />
                <div>
                  <h4 className="font-semibold">Designed around your needs</h4>
                  <p className="text-sm text-slate-600">
                    We help shape the trip around your comfort, time, and travel goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8">
            <h3 className="text-2xl font-bold text-slate-800">
              Custom Trip Request
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Fill in your details and start planning your dream journey.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Destination</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Ella, Sigiriya, Mirissa"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium">Travel Date</label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g. 5 Days"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Travelers</label>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    placeholder="No. of people"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                >
                  <option value="">Select budget</option>
                  <option value="Budget Friendly">Budget Friendly</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium">
                  Trip Interests
                </label>
                <div className="flex flex-wrap gap-3">
                  {interestOptions.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => handleInterestToggle(item)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        formData.interests.includes(item)
                          ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-md"
                          : "border border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-600"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Special Requests / Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your ideal trip, hotel preference, activities, transport needs, etc."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:shadow-xl"
              >
                <Send size={18} />
                Submit Custom Trip
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Your journey, your style, your Sri Lanka
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Create a one-of-a-kind holiday experience with TravLanka and enjoy
            the island exactly the way you want.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CustomTrip;