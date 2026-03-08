function WhyTravelWithUs() {
    const features = [
      {
        title: "Private Transport",
        description:
          "Travel comfortably across Sri Lanka with private vehicles and experienced drivers.",
      },
      {
        title: "Handpicked Hotels",
        description:
          "Stay in carefully selected hotels that offer comfort, safety, and great locations.",
      },
      {
        title: "Flexible Itineraries",
        description:
          "Customize your journey based on your interests, pace, and travel style.",
      },
      {
        title: "Local Expertise",
        description:
          "Our local travel experts know the best places, hidden gems, and experiences.",
      },
    ];
  
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
              Why Choose Us
            </p>
  
            <h2 className="text-4xl font-bold text-slate-900">
              Travel Sri Lanka With Confidence
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We design memorable Sri Lanka journeys with comfort, flexibility,
              and local expertise.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-[24px] p-8 text-center shadow-lg backdrop-blur-md bg-gradient-to-br from-cyan-400/20 via-sky-400/15 to-teal-400/20 border border-white/30 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
  
                <p className="mt-4 text-slate-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default WhyTravelWithUs;