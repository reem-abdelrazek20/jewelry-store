import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className=" bg-white  border-t border-[#e8dfd5]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Footer Main */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Jewelry Store Logo"
                className="h-20 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
              Discover beautifully crafted jewelry designed to add
              elegance and sparkle to every special moment.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Shop
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-600  "
                >
                  All Jewelry
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-600  "
                >
                  Rings
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-600  "
                >
                  Necklaces
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-600 "
                >
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900">
              About Us
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600  "
                >
                  Our Story
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600  "
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600  "
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600  "
                >
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Customer Service
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 "
                >
                  Shipping Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600  "
                >
                  Return Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600  "
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 "
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-[#e8dfd5] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-gray-500 sm:flex-row">
            
            <p>
              © 2026 Jewelry Store. All rights reserved.
            </p>

            <p>
              Crafted with love for jewelry lovers 
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;