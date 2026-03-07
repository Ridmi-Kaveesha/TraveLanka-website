import { Link } from "react-router-dom";
import logo from "../assets/Travlogo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/">
          <img src={logo} alt="TravLanka Logo" className="h-10 w-auto" />
        </Link>

        <ul className="flex gap-6 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/journeys">Journeys</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/custom-trip">Custom Trip</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Link
          to="/reserve"
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Reserve
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;