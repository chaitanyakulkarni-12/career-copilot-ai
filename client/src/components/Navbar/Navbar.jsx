import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          🎯 Career Copilot AI
        </div>

        {/* Navigation */}

        <ul className="hidden lg:flex items-center gap-10 font-medium text-slate-700">

          <li className="hover:text-blue-600 cursor-pointer transition">
            Features
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            How It Works
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Contact
          </li>

        </ul>

        {/* Buttons */}

        <div className="flex items-center gap-4">

  <Link
    to="/login"
    className="hidden md:flex items-center gap-2 border border-slate-300 px-5 py-2 rounded-xl hover:bg-slate-100 transition"
  >
    <FaPlayCircle />
    Login
  </Link>

  <Link
    to="/signup"
    className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-xl"
  >
    Start Free
  </Link>

</div>
      </div>
    </nav>
  );
}

export default Navbar;