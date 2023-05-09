import "./Footer.css";
import { IconName } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-32  footer_background background-overlay">
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-8/12 m-auto">
        <div className="footer_one">
          <div className="footer_logo">
            <img
              src="https://i.postimg.cc/8kF8fZ9m/screencapture-prettygirldresses-2023-05-08-08-45-29.png"
              alt="logo"
            />
          </div>
          <div className="footer_one-content">
            <div></div>
          </div>
          <div className="footer_divider">
            <div>
              <FaPhoneAlt />
            </div>
          </div>
        </div>
        <div>pRT TWO</div>
        <div>part three</div>
        <div>part four</div>
      </section>
    </footer>
  );
};

export default Footer;
