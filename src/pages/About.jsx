import { Link } from "react-router-dom";
import AboutImage from "../assets/aboutPics/Coffee time.jpg";
import "./About.css";

function About() {
  return (
    <>
      <div className="aboutSection">
        <div className="ourStory">
          <h1 className="aboutTitle">Our Story</h1>
          <p>
            Bean & Brew started with a simple idea, coffee should feel like a
            moment, not just a routine. What began as a small passion project
            has grown into a place where every cup is crafted with care, using
            beans sourced from farms we trust and roasted to bring out their
            true character.
          </p>
        </div>

        <div className="aboutImageWrapper">
          <img src={AboutImage} alt="Inside Bean & Brew" />
        </div>
      </div>

      <div className="missionSection">
        <h2 className="missionTitle">Our Mission</h2>
        <p>
          To bring people together over great coffee, brewed with quality,
          consistency, and a whole lot of love. One cup at a time.
        </p>
      </div>

      <div className="whyChooseUs">
        <h2 className="whyTitle">Why Choose Us</h2>
        <div className="whyCards">
          <div className="whyCard">
            <h3>Ethically Sourced</h3>
            <p>
              Our beans are sourced from farms committed to fair trade
              practices.
            </p>
          </div>

          <div className="whyCard">
            <h3>Fresh Roasted</h3>
            <p>
              Roasted in small batches to keep every cup at its peak flavor.
            </p>
          </div>

          <div className="whyCard">
            <h3>Community First</h3>
            <p>We're proud to be part of the neighborhoods we serve.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
