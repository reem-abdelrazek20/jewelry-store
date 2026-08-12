import "../styles/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

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
          >
            Shop Now
          </button>
        </div>
      </section>

      <section className="about">
        <div className="about-header">
          <div>
            <h3>Find Your Jewelry</h3>
            <p>From pieces to occasions, find the jewelry that suits you.</p>
          </div>
          <button
            type="button"
            onClick={() => {
              navigate("/Products");
            }}
            className="border border-black px-6 py-3 text-xs uppercase tracking-wider hover:bg-(--color-primary) hover:text-white transition duration-300"
          >
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

      <section className="text-section">
        <div className="text-center px-5">
          <img src={logo} alt="logo" className="h-30 mx-auto" />

          <p className="mt-4 text-black text-2xl uppercase font-medium tracking-wide max-w-3xl mx-auto leading-relaxed">
            Explore Our Exquisite Collection Of Handcrafted Jewelry That
            Radiates Beauty And Sophistication. Each Piece Is Designed To
            Enhance Your Natural Elegance, Combining Timeless Craftsmanship With
            Modern Flair.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 mt-10 mb-5 px-4">
          <img
            src="/make.jpg"
            alt="make"
            className="w-full md:w-1/2 h-70 sm:h-87.5  md:h-100 object-cover rounded-lg"
          />

          <img
            src="/make2.jpg"
            alt="make"
            className="w-full md:w-1/2 h-70 sm:h-87.5  md:h-100 object-cover rounded-lg"
          />
        </div>
      </section>

      

      <Footer />
    </>
  );
}

export default Home;
