import AboutSnippetImage from "../assets/homePics/Post by @luisnomad · 1 image.jpg";
import "./AboutSnippet.css";

function AboutSnippet() {
  return (
    <>
      <div className="aboutSnippetSection">
        <div className="aboutSnippetImageWrapper">
          <img src={AboutSnippetImage} alt="Latte art" />
        </div>

        <div className="aboutSnippetText">
          <p className="aboutSnippetLabel">ABOUT US</p>
          <h2 className="aboutSnippetTitle">More Than Just Coffee</h2>
          <p className="aboutSnippetDescription">
            We are passionate about coffee and committed to serving you the best
            experience. From carefully selected beans to expertly crafted brews,
            we bring quality and comfort together.
          </p>

          <div className="aboutStats">
            <div className="statItem">
              <h3>100+</h3>
              <p>Drink Options</p>
            </div>

            <div className="statItem">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="statItem">
              <h3>8+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSnippet;
