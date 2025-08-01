function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-main">
        <div className="container">
          <div className="Footer-main-section">
            <img
              src="/logo-black.svg"
              alt=""
              className="Footer-main-section-logo"
            />
            <p className="Footer-main-section-text">
              Ralph's Auto Repair has been serving New Brunswick and surrounding areas with honest, reliable auto repair services. We're committed to keeping your vehicle running safely and efficiently.
            </p>
            <div className="Footer-main-section-social">
              <a href="" className="Footer-main-section-social-media">
                <img src="/facebook.svg" alt="" />
              </a>
              <a href="" className="Footer-main-section-social-media">
                <img src="/twitter.svg" alt="" />
              </a>
              <a href="" className="Footer-main-section-social-media">
                <img src="/instagram.svg" alt="" />
              </a>
              <a href="" className="Footer-main-section-social-media">
                <img src="/youtube.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="Footer-main-links">
            <h4 className="Footer-main-links-title">EXPLORE LINKS</h4>
            <div className="Footer-main-links-container">
              <a href="" className="Footer-main-links-container-link">
                About
              </a>
              <a href="" className="Footer-main-links-container-link">
                Services
              </a>
              <a href="" className="Footer-main-links-container-link">
                Specials
              </a>
              <a href="tel:7323172228" className="Footer-main-links-container-link">
                Call for Estimates
              </a>
              <a href="" className="Footer-main-links-container-link">
                Reviews
              </a>
              <a href="" className="Footer-main-links-container-link">
                Shop
              </a>
              <a href="" className="Footer-main-links-container-link">
                Careers
              </a>
              <a href="" className="Footer-main-links-container-link">
                FAQs
              </a>
            </div>
          </div>
          <div className="Footer-main-contact">
            <h4 className="Footer-main-contact-title">CONTACT</h4>
            <div className="Footer-main-contact-container">
              <div className="Footer-main-contact-container-line">
                <img
                  src="/place.svg"
                  alt=""
                  className="Footer-main-contact-container-line-img"
                />
                <p className="Footer-main-contact-container-line-text">
                  250 Commercial Ave, New Brunswick, NJ 08901
                </p>
              </div>
              <div className="Footer-main-contact-container-line">
                <img
                  src="/smartphone.svg"
                  alt=""
                  className="Footer-main-contact-container-line-img"
                />
                <p className="Footer-main-contact-container-line-text">
                  (732) 317-2228
                </p>
              </div>
              <div className="Footer-main-contact-container-line">
                <img
                  src="/email.svg"
                  alt=""
                  className="Footer-main-contact-container-line-img"
                />
                <p className="Footer-main-contact-container-line-text">
                  info@ralphsautorepair.com
                </p>
              </div>
              <div className="Footer-main-contact-container-line">
                <img
                  src="/timer.svg"
                  alt=""
                  className="Footer-main-contact-container-line-img"
                />
                <p className="Footer-main-contact-container-line-text">
                  Mon - Fri: 9am - 5pm | Sat: 9am - 3pm | Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-bottom">
        <div className="container">
          <p className="Footer-bottom-left">
            Quality Auto Repair You Can Trust - Serving New Brunswick Since 1995
          </p>
          <p className="Footer-bottom-right">
            © 2025 Ralph's Auto Repair. <span>Privacy Policy | Terms & Conditions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
