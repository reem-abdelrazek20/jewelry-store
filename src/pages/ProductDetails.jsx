import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { CiStar } from "react-icons/ci";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Product Image */}
        <div className="flex items-center justify-center bg-[#f8f5f0] rounded-xl p-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm h-100 object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            {product.category}
          </p>

          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.title}
          </h1>

          <p className="text-2xl font-bold text-[#b08d57] mb-6">
            ${product.price}
          </p>

          <p className="text-gray-600 leading-7 mb-6">
            {product.description}
          </p>

          <div className="flex items-center gap-2 mb-8">
            <span className="text-yellow-500 text-xl">
              <CiStar />
            </span>

            <span className="text-gray-700">
              {product.rating.rate}
            </span>

            <span className="text-gray-400">
              ({product.rating.count} reviews)
            </span>
          </div>

          <button className="add-to-cart-button">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ProductDetails;