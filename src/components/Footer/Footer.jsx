import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" py-20  footer_background background-overlay">
      <section className="footer_top grid grid-cols-1 lg:grid-cols-4 gap-20 w-8/12 m-auto">
        <div className="footer_one">
          <div className="footer_logo">
            <img
              src="https://i.postimg.cc/8kF8fZ9m/screencapture-prettygirldresses-2023-05-08-08-45-29.png"
              alt="logo"
            />
          </div>

          <div className="footer_divider"></div>

          <div className="footer_one-content">
            <div className="flex items-center gap-2 text-[#ceced1] mb-4">
              <FaPhoneAlt color="white" />
              <p>+880 1793 55 10 92</p>
            </div>

            <div className="flex items-center gap-2 text-[#ceced1] mb-4">
              <IoMdMail color="white" />
              <p>hello@jolutshobtours.com</p>
            </div>

            <div className="flex items-center gap-2 text-[#ceced1]">
              <IoLocationSharp color="white" size={40} />
              <p>
                Uday Tower (5th floor) 57 & 57/A, Gulshan Avenue, Gulshan 01,
                Dhaka 1212
              </p>
            </div>
          </div>
        </div>

        <div className="footer_two">
          <h1 className="text-[20px] text-white font-semibold pb-3">
            Exotic Places
          </h1>

          <div className="footer_divider"></div>

          <div className="footer_two-content text-[#dfdfe0]">
            <ul className="list-none pl-5">
              <li className="pb-5">Jaflong</li>
              <li className="pb-5">Khagrachari</li>
              <li className="pb-5">Bandarban</li>
              <li className="pb-5">Chittagong</li>
              <li className="pb-5">Cox’s Bazar</li>
            </ul>
          </div>
        </div>

        <div className="footer_three">
          <h1 className="text-[20px] text-white font-semibold pb-3">
            Our Packages
          </h1>

          <div className="footer_divider"></div>

          <div className="footer_two-content text-[#dfdfe0]">
            <ul className="list-none pl-5">
              <li className="pb-5">Domestic Hotel</li>
              <li className="pb-5">International Hotel</li>
              <li className="pb-5">Group Packages</li>
              <li className="pb-5">Family Packages</li>
              <li className="pb-5">Umrah Packages</li>
            </ul>
          </div>
        </div>

        <div className="footer_four">
          <h1 className="text-[20px] text-white font-semibold pb-3">
            Our Packages
          </h1>

          <div className="footer_divider"></div>

          <div className="footer_two-content text-[#dfdfe0]">
            <ul className="list-none pl-5">
              <li className="pb-5">About Us</li>
              <li className="pb-5">Contact Us</li>
              <li className="pb-5">Privacy Policy</li>
              <li className="pb-5">Terms & Conditions</li>
              <li className="pb-5">Refund and Returns Policy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ______footer middle part__________ */}
      <section className="footer_middle w-8/12 m-auto pt-16">
        <div className="footer_middle_app flex items-center justify-between">
          <div className="footer_middle_app_leftside">
            <h3 className="text-xl text-white font-bold">
              Android App Available!
            </h3>
            <img
              className="max-w-[195px] mt-3"
              src="https://i.postimg.cc/MHbF7Wg4/google-play-btn.png"
              alt=""
            />
          </div>

          <div className="footer_middle_app_rightside">
            <img
              className="max-w-[900px]"
              src="https://i.postimg.cc/XqLTMf4x/footer-ssl-payment-method-1024x120.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
