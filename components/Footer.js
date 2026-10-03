export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__logo">Kaha</p>
            <p className="footer__tagline">Fashion &amp; Design Academy</p>
            <p className="footer__copy">&copy; {new Date().getFullYear()} Kaha. All rights reserved.</p>
          </div>
          <div className="footer__links">
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms &amp; Conditions</a>
            <a href="#" className="footer__link">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
