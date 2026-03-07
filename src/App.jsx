import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Journeys from "./pages/Journeys";
import Destinations from "./pages/Destinations";
import CustomTrip from "./pages/CustomTrip";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reserve from "./pages/Reserve";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/custom-trip" element={<CustomTrip />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  );
}

export default App;