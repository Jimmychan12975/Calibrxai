import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="new-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link href="/" className="flex items-center">
            <Logo className="h-[60px] w-auto" />
          </Link>
          <p>Building the future of AI, one brick at a time. Trustworthy, innovative, and modular solutions for modern businesses.</p>

          <div className="footer-social">
            <a href="#" className="social-icon"><i className="ri-linkedin-fill" /></a>
            <a href="#" className="social-icon"><i className="ri-twitter-fill" /></a>
            <a href="#" className="social-icon"><i className="ri-facebook-fill" /></a>
            <a href="#" className="social-icon"><i className="ri-instagram-line" /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News & Blog</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#services">Intelligent Automation</a></li>
            <li><a href="#services">Predictive Analytics</a></li>
            <li><a href="#services">Customer Experience</a></li>
            <li><a href="#services">Document Intelligence</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">White Papers</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Calibrx AI. All rights reserved.</p>
        <ul>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms of Service</Link></li>
          <li><Link href="/cookie-policy">Cookie Policy</Link></li>
        </ul>
      </div>
    </footer>
  );
}