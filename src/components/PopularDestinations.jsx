function PopularDestinations() {
    const places = [
      {
        name: "Ella",
        image:
          "/destinations/ella.jpeg",
      },
      {
        name: "Sigiriya",
        image:
          "/destinations/sigiriya.jpeg",
      },
      {
        name: "Mirissa",
        image:
          "/destinations/mirissa.jpeg",
      },
      {
        name: "Nuwara Eliya",
        image:
          "/destinations/nuwara-eliya.jpeg",
      },
    ];
  
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
              Explore Sri Lanka
            </p>
            <h2 className="text-4xl font-bold text-slate-900">
              Popular Destinations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Discover some of the most loved places across Sri Lanka, from misty
              hills to golden beaches.
            </p>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {places.map((place, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[24px] shadow-lg"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-2xl font-semibold text-white">
                    {place.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    View destination
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default PopularDestinations;