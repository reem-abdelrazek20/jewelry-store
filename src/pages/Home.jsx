import "../styles/home.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
   
  return (
    <>
      <Navbar />

      <section className="home">
        <div className="hero-content">
          <h1>Luxury In Every Detail</h1>
          <p>
            Explore unique jewelry designed for precious moments in your life.
          </p>

          <button
           type="button"
          onClick={() => {
            navigate("/Products");
          }}
          >Shop Now</button>
        </div>
      </section>

          <section className="about">
      <div className="about-header">
        <div>
          <h3>Find Your Jewelry</h3>
        <p>
          From pieces to occasions, find the jewelry that suits you.
        </p>
        </div>
       <button 
             type="button"
          onClick={() => {
            navigate("/Products");
          }}
       className="border border-black px-6 py-3 text-xs uppercase tracking-wider hover:bg-(--color-primary) hover:text-white transition duration-300">
  View All Collections
</button>
        
      </div>

      <div className="jewelry-categories">
        <div className="card">
          <img src="/Rings.jpg" alt="Rings" />
          <h4>Rings</h4>
          <p>Find the perfect ring for every moment.</p>
        </div>

        <div className="card">
          <img src="/necklace.jpg" alt="Necklaces" />
          <h4>Necklaces</h4>
          <p>Elegant necklaces that complete your look.</p>
        </div>

        <div className="card">
          <img src="/earring.jpg" alt="Earrings" />
          <h4>Earrings</h4>
          <p>Discover timeless earrings designs.</p>
        </div>

        <div className="card">
          <img src="/bracelet.jpg" alt="Bracelets" />
          <h4>Bracelets</h4>
          <p>Beautiful bracelets made for you.</p>
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
}

export default Home;
