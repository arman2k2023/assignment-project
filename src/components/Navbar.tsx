import logo from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

        {/* Desktop Navbar */}
        <div className="hidden items-center justify-between md:flex">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Menu */}
          <div className="flex items-center gap-6">
            <a href="#" className="font-medium text-gray-700 hover:text-orange-500">
              Home
            </a>

            <a href="#" className="font-medium text-gray-700 hover:text-orange-500">
              Technologies
            </a>

            <a href="#" className="font-medium text-gray-700 hover:text-orange-500">
              Projects
            </a>

            <a href="#" className="font-medium text-gray-700 hover:text-orange-500">
              About
            </a>

            <a href="#" className="font-medium text-gray-700 hover:text-orange-500">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 font-medium text-gray-700">
              Sign In
            </button>

            <button className="gradient-button rounded-full px-5 py-2 font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="grid grid-cols-3 items-center md:hidden">

          {/* Hamburger */}
          <div className="flex justify-start">
            <button
              className="text-2xl text-gray-700"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Mobile Auth */}
          <div className="flex items-center justify-end gap-1">
            <button className="px-2 py-1 text-xs font-medium text-gray-700">
              Sign In
            </button>

            <button className="gradient-button rounded-full px-3 py-1 text-xs font-semibold text-white">
              Sign Up
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;