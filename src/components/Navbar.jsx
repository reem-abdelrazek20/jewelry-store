import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingBag,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.svg";
import Cart from "../pages/Cart.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const closeMenu = () => {
    setMenuOpen(false);
  };




  return (
    <div>
      {/* Top Bar */}
      <div className="bg-black text-white flex justify-center items-center h-10 px-4">
        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] text-center">
          Where Elegance Meets Everyday Beauty.
        </p>
      </div>

      {/* Navbar */}
      <header className="relative flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2 bg-white shadow-sm">
        
        {/* Logo */}
        <div className="shrink-0">
          <Link to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="Logo"
              className="h-14 sm:h-16 md:h-20 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8 text-sm font-medium uppercase tracking-wider">
            <li>
              <Link
                to="/"
                className="hover:text-gray-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-gray-500 transition"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-gray-500 transition"
              >
                Collections
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-gray-500 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-gray-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-5 text-lg sm:text-xl">

          {/* Cart */}
          <Link
            to="/cart"
            className="hover:text-gray-500 transition"
          >
            <FaShoppingBag />
          </Link>

          {/* User */}
          {user ? (
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center"
              >
                <img
                  src="/jewellery.png"
                  alt="Profile"
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                />
              </button>

              {isOpen && (
                <div className="absolute right-0 top-12 z-50 w-48 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">

                  <Link
                    to="/Cart"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    My Orders
                  </Link>

                  <Link
                    to="/wishlist"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Wishlist
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem("user");
                      setIsOpen(false);
                      navigate("/login");
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden sm:block hover:text-gray-500 transition"
            >
              <FaUser />
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40 lg:hidden">

            <nav className="px-6 py-5">
              <ul className="flex flex-col gap-5 text-sm font-medium uppercase tracking-wider">

                <li>
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className="block hover:text-gray-500"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products"
                    onClick={closeMenu}
                    className="block hover:text-gray-500"
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products"
                    onClick={closeMenu}
                    className="block hover:text-gray-500"
                  >
                    Collections
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className="block hover:text-gray-500"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="block hover:text-gray-500"
                  >
                    Contact
                  </Link>
                </li>

                {/* Mobile User */}
                <li className="border-t pt-4">

                  {user ? (
                    <div className="flex flex-col gap-4">

                      <Link
                        to="/Cart"
                        onClick={closeMenu}
                        className="hover:text-gray-500"
                      >
                        My Orders
                      </Link>

                      <Link
                        to="/wishlist"
                        onClick={closeMenu}
                        className="hover:text-gray-500"
                      >
                        Wishlist
                      </Link>

                      <button
                        type="button"
                        onClick={() => {
                          localStorage.removeItem("user");
                          closeMenu();
                          navigate("/login");
                        }}
                        className="text-left hover:text-gray-500"
                      >
                        Logout
                      </button>

                    </div>
                  ) : (
                    <Link
                      to="/login"
                      onClick={closeMenu}
                      className="flex items-center gap-2"
                    >
                      <FaUser />
                      Login
                    </Link>
                  )}

                </li>

              </ul>
            </nav>

          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;