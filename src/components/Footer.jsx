import { Link } from "react-router-dom";
import logo from "../assets/travlogo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-teal-900 to-teal-800 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo + Description */}
          <div>
            <img
              src={logo}
              alt="TravLanka logo"
              className="h-14 w-auto object-contain"
            />

            <p className="mt-4 max-w-xs text-sm leading-7 text-white/80">
              Discover Sri Lanka through curated journeys, flexible itineraries,
              and unforgettable travel experiences designed with local expertise.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-teal-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-teal-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-teal-500 transition"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-white/80">

              <li>
                <Link to="/" className="hover:text-cyan-300 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/journeys" className="hover:text-cyan-300 transition">
                  Journeys
                </Link>
              </li>

              <li>
                <Link to="/destinations" className="hover:text-cyan-300 transition">
                  Destinations
                </Link>
              </li>

              <li>
                <Link to="/custom-trip" className="hover:text-cyan-300 transition">
                  Custom Trip
                </Link>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>

            <ul className="mt-4 space-y-3 text-white/80">

              <li>
                <Link to="/about" className="hover:text-cyan-300 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-cyan-300 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/reserve" className="hover:text-cyan-300 transition">
                  Reserve
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <ul className="mt-4 space-y-3 text-white/80">
              <li>Email: travlanka@gmail.com</li>
              <li>Phone: +94 705084100</li>
              <li>Location: Colombo, Sri Lanka</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/70">
          © 2026 TravLanka. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;