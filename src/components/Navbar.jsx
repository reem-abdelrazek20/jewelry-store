import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingBag, FaSearch, FaUser } from "react-icons/fa";
import logo from "../assets/logo.svg";
import Cart from "../pages/cart";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-black text-white flex justify-center items-center h-10">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em]">
          Where Elegance Meets Everyday Beauty.
        </p>
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-between px-10 py-1 bg-white">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Shop</Link>
            </li>

            <li>
              <Link to="/products">Collections</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl">
          <Link to="/Cart">
            <FaShoppingBag />
          </Link>

          <Link to="/search">
            <FaSearch />
          </Link>
          {user ? (
  <div className="relative">
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center"
    >
      <img
        src="/jewellery.png"
        alt="Profile"
        className="h-10 w-10 rounded-full object-cover"
      />
    </button>

    {isOpen && (
      <div className="absolute right-0 top-12 z-50 w-48 rounded-lg border border-secondary bg-white p-2 shadow-lg">

        <Link
          to="/orders"
          className="block px-4 py-2 text-sm hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          My Orders
        </Link>

        <Link
          to="/wishlist"
          className="block px-4 py-2 text-sm hover:text-primary"
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
          className="w-full px-4 py-2 text-left text-sm hover:text-primary"
        >
          Logout
        </button>

      </div>
    )}
  </div>
) : (
  <Link to="/login">
    <FaUser />
  </Link>
)}


        </div>
      </header>
    </div>
  );
}

export default Navbar;
