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

      <Footer />
    </>
  );
}

export default Home;
