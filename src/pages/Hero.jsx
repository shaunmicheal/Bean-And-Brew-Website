import { Link } from "react-router-dom";
import HeroImage from "../assets/homePics/Life truly begins after the first sip☕️😋.jpg";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="heroSection">
        <div className="HeroText">
          <br />
          <h1 className="text">Bean & Brew</h1>
          <p className="sense">CRAFTED FOR YOUR SENSES</p>
          <p>
            Freshly Brewed Happiness in Every Cup.Experience the rich, authentic
            taste of premium roasted coffee beans. Every cup is freshly brewed
            by our expert baristas to give you the perfect start to your day.
          </p>
          <div className="buttons">
            <Link to="/menu">
              <button className="explore">Explore Menu →</button>
            </Link>
            <Link to="/about">
              <button className="abtbtn">About Us</button>
            </Link>
          </div>
          <div className="mycards">
            <div className="Card">
              <h3 className="card">Premium Beans</h3>
              <p>We use only the finest 100% Arabica beans</p>
            </div>

            <div className="Card2">
              <h3 className="card2">Freshly Brewed</h3>
              <p>Brewed fresh for every order, every time</p>
            </div>

            <div className="Card3">
              <h3 className="card3">Made with love</h3>
              <p>We use only the finest 100% Arabica beans</p>
            </div>
          </div>
        </div>
        <div className="coffeeImage">
          <img src={HeroImage} alt="Coffee image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
