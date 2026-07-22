import "./Footer.css";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerBrand">
        <p className="footerTagline">Brewed with love, one cup at a time.</p>
        <p className="footerCopyright">
          © 2026 Bean & Brew. All Rights Reserved.
        </p>
      </div>

      <div className="footerLinks">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>

      <div className="footerSocials">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bean & Brew on Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bean & Brew on Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bean & Brew on TikTok"
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
