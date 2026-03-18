import { useState } from "react";
import { CalendarDays, Users, MapPin, Phone, Mail, CreditCard, ShieldCheck } from "lucide-react";

export default function Reserve() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "2",
    checkIn: "",
    checkOut: "",
    packageType: "Standard",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your reservation request has been submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-950 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="text-center mb-14">
          <p className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-300 text-sm tracking-wide backdrop-blur-md">
            Secure Your Sri Lanka Journey
          </p>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
            Reserve Your <span className="text-cyan-400">Dream Trip</span> Today
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-white/70 text-base md:text-lg">
            Book your unforgettable Sri Lanka experience with TravLanka. Choose your destination,
            travel dates, and package preferences in just a few steps.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form section */}
          <div className="lg:col-span-2 bg-white/10 border border-white/15 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">Reservation Form</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal info */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-cyan-300">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-white/80 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 outline-none focus:border-cyan-400 text-white placeholder-white/40"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 outline-none focus:border-cyan-400 text-white placeholder-white/40"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 outline-none focus:border-cyan-400 text-white placeholder-white/40"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Destination</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 outline-none focus:border-cyan-400 text-white"
                      required
                    >
                      <option value="" className="text-black">Select destination</option>
                      <option value="Ella" className="text-black">Ella</option>
                      <option value="Sigiriya" className="text-black">Sigiriya</option>
                      <option value="Mirissa" className="text-black">Mirissa</option>
                      <option value="Nuwara Eliya" className="text-black">Nuwara Eliya</option>
                      <option value="Yala" className="text-black">Yala</option>
                      <option value="Kandy" className="text-black">Kandy</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Trip details */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-cyan-300">Trip Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-white/80 mb-2">Check In</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 outline-none focus:border-cyan-400 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Check Out</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 outline-none focus:border-cyan-400 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">No. of Travelers</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 outline-none focus:border-cyan-400 text-white"
                    >
                      <option value="1" className="text-black">1 Traveler</option>
                      <option value="2" className="text-black">2 Travelers</option>
                      <option value="3" className="text-black">3 Travelers</option>
                      <option value="4" className="text-black">4 Travelers</option>
                      <option value="5+" className="text-black">5+ Travelers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Package Type</label>
                    <select
                      name="packageType"
                      value={formData.packageType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 outline-none focus:border-cyan-400 text-white"
                    >
                      <option value="Standard" className="text-black">Standard</option>
                      <option value="Premium" className="text-black">Premium</option>
                      <option value="Luxury" className="text-black">Luxury</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special requests */}
              <div>
                <label className="block text-sm text-white/80 mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your preferences, airport pickup, hotel type, food choices, etc."
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 outline-none focus:border-cyan-400 text-white placeholder-white/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:scale-[1.02] transition duration-300 font-semibold shadow-lg shadow-cyan-500/20"
              >
                Confirm Reservation
              </button>
            </form>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            {/* Summary card */}
            <div className="bg-white/10 border border-white/15 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
              <h2 className="text-xl font-semibold mb-5">Why Book With Us?</h2>

              <div className="space-y-4 text-white/80">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Trusted Travel Service</p>
                    <p className="text-sm text-white/65">
                      Secure and reliable reservation process for every traveler.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Top Sri Lanka Destinations</p>
                    <p className="text-sm text-white/65">
                      Explore beaches, hills, wildlife, and cultural landmarks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Flexible Packages</p>
                    <p className="text-sm text-white/65">
                      Choose from Standard, Premium, or Luxury based on your style.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact */}
            <div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-white/15 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
              <h2 className="text-xl font-semibold mb-5">Need Help?</h2>

              <div className="space-y-4 text-white/80">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+94 77 123 4567</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>hello@travlanka.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays className="w-5 h-5 text-cyan-400" />
                  <span>Available 7 Days a Week</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>Support for Solo & Group Travel</span>
                </div>
              </div>
            </div>

            {/* Small info card */}
            <div className="bg-white/10 border border-white/15 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
              <h2 className="text-xl font-semibold mb-3">Booking Note</h2>
              <p className="text-white/70 text-sm leading-7">
                After submitting your reservation, our team will contact you to confirm availability,
                itinerary details, and final pricing for your selected travel package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}