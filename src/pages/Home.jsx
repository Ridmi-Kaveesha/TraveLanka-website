import Hero from "../components/Hero";
import PopularDestinations from "../components/PopularDestinations";
import WhyTravelWithUs from "../components/WhyTravelWithUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <PopularDestinations />
      <WhyTravelWithUs />
      <Footer />
    </div>
  );
}

export default Home;