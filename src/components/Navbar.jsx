import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/travlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const navItem = ({ isActive }) =>
    `relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-emerald-600/15 text-emerald-700 border border-emerald-500/40 backdrop-blur-md"
        : "text-emerald-900/80 hover:bg-emerald-600/10 hover:text-emerald-900"
    }`;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-3 max-w-7xl px-3 sm:px-4 lg:px-8">
        
        <div className="flex items-center justify-between rounded-[22px] border border-emerald-100 bg-white/60 px-3 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-4 lg:px-6">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="TravLanka logo"
              className="h-10 w-auto object-contain sm:h-12 md:h-14"
            />
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <NavLink to="/" className={navItem}>Home</NavLink>
            <NavLink to="/journeys" className={navItem}>Journeys</NavLink>
            <NavLink to="/destinations" className={navItem}>Destinations</NavLink>
            <NavLink to="/custom-trip" className={navItem}>Custom Trip</NavLink>
            <NavLink to="/about" className={navItem}>About</NavLink>
            <NavLink to="/contact" className={navItem}>Contact</NavLink>
          </div>

          <div className="hidden lg:flex">
            <Link
              to="/reserve"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              Reserve
            </Link>
          </div>

          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-900 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

       
        {menuOpen && (
          <div className="mt-3 rounded-[22px] border border-emerald-100 bg-white/95 p-4 text-emerald-900 shadow-[0_20px_60px_rgba(0,0,0,0.1)] backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-2">
              <NavLink to="/" className="rounded-2xl px-4 py-3 hover:bg-emerald-50 text-emerald-900 font-medium" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/journeys" className="rounded-2xl px-4 py-3 hover:bg-emerald-50 text-emerald-900 font-medium" onClick={() => setMenuOpen(false)}>Journeys</NavLink>
              <NavLink to="/destinations" className="rounded-2xl px-4 py-3 hover:bg-emerald-50 text-emerald-900 font-medium" onClick={() => setMenuOpen(false)}>Destinations</NavLink>
              <NavLink to="/custom-trip" className="rounded-2xl px-4 py-3 hover:bg-emerald-50 text-emerald-900 font-medium" onClick={() => setMenuOpen(false)}>Custom Trip</NavLink>
              <NavLink to="/about" className="rounded-2xl px-4 py-3 hover:bg-emerald-50 text-emerald-900 font-medium" onClick={() => setMenuOpen(false)}>About</NavLink>
              <NavLink to="/contact" className="rounded-2xl px-4 py-3 hover:bg-emerald-50 text-emerald-900 font-medium" onClick={() => setMenuOpen(false)}>Contact</NavLink>

              <Link
                to="/reserve"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-3 text-center font-semibold text-white shadow-lg"
              >
                Reserve
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;