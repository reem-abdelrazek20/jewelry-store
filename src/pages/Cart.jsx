import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return;
    }

    const cartKey = `cart_${user.id}`;

    const savedCart = JSON.parse(localStorage.getItem(cartKey)) || [];

    setCart(savedCart);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[4px] text-[#b08d57] mb-3">
            Your Selection
          </p>

          <h1 className="text-4xl font-semibold text-gray-800">My Cart</h1>
        </div>

        {/* Cart */}
        <div className="space-y-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-6
                       flex flex-col md:flex-row
                       items-center gap-8"
            >
              {/* Product Image */}
              <div
                className="w-full md:w-48 h-48
                            bg-[#f8f5f0]
                            rounded-xl
                            flex items-center justify-center
                            p-5"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Information */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {product.category}
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {product.title}
                </h2>

                <p className="text-xl font-bold text-[#b08d57] mb-4">
                  ${product.price}
                </p>

                {/* Quantity */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <button
                    className="w-9 h-9 rounded-full border
                             border-[#b08d57]
                             text-[#b08d57]
                             hover:bg-[#b08d57]
                             hover:text-white
                             transition"
                  >
                    −
                  </button>

                  <span className="font-medium text-gray-700">
                    {product.quantity}
                  </span>

                  <button
                    className="w-9 h-9 rounded-full border
                             border-[#b08d57]
                             text-[#b08d57]
                             hover:bg-[#b08d57]
                             hover:text-white
                             transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Product Total */}
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-400 mb-1">Subtotal</p>

                <p className="text-xl font-semibold text-gray-800">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>

                <button
                  className="mt-4 text-sm text-red-400
                           hover:text-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-10 flex justify-end">
          <div className="w-full md:w-96 bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3 text-gray-600">
              <span>Items</span>

              <span>{cart.length}</span>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between">
              <span className="text-lg font-semibold text-gray-800">Total</span>

              <span className="text-xl font-bold text-[#b08d57]">
                $
                {cart
                  .reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0,
                  )
                  .toFixed(2)}
              </span>
            </div>

            <button
              className="w-full mt-6 py-3
                       bg-[#b08d57]
                       text-white
                       rounded-lg
                       hover:bg-[#967542]
                       transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
