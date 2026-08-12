import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getJewelryProducts } from "../services/api";
import "../styles/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getJewelryProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } 
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      <main className="products-page">
        <h1 className="products-title">Our Jewelry</h1>

     
          <div className="products-grid">
            {products.map((product) => (
           <div className="product-card" key={product.id}>
  <div className="product-image-box">
    <img
      src={product.image}
      alt={product.title}
      className="product-image"
    />
  </div>

  <div className="product-info">
    <h2>{product.title}</h2>

    <p>${product.price}</p>

    <button type="button">
      Add to Cart
    </button>
  </div>
</div>
            ))}
          </div>
        
      </main>

      <Footer />
    </>
  );
}

export default Products;