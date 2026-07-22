import "./Contact.css";

function Contact() {
  return (
    <div className="contactSection">
      <h1 className="contactTitle">Get in Touch</h1>
      <p className="contactIntro">
        Have a question, feedback, or just want to say hi? Here's how to reach
        us.
      </p>

      <ul className="contact-list">
        <li>
          Address:{" "}
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            123 Roastery Lane, Harare, Zimbabwe
          </a>
        </li>
        <li>Hours: Mon – Fri: 7am – 7pm | Sat – Sun: 8am – 5pm</li>
        <li>
          Phone: <a href="tel:+263781993443">+263781993443</a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:shaun@beanandbrew.com">hello@beanandbrew.com</a>
        </li>
        <li>
          WhatsApp:{" "}
          <a
            href="https://wa.me/263781993443"
            target="_blank"
            rel="noopener noreferrer"
          >
            +263781993443
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
