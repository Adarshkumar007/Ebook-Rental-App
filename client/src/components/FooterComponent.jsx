import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./footer.css";
import logo from "./images/logo.png";

import { IoLogoFacebook } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaTwitter } from "react-icons/lia";
import { RiYoutubeFill } from "react-icons/ri";

import SmallFooter from "./SmallFooter";

const FooterComponent = () => {
  return (
    <>
      <footer
        className="footer mt-auto py-3 bcolor"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3 col-sm-6">
              <h6 className="text-white fontsize">About</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none  all-list-item-style items"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 col-sm-6">
              <h6 className="text-white fontsize">Help</h6>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Library
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 col-sm-6">
              <h6 className="text-white fontsize">More</h6>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Be a Seller
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    24x7 Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Notification
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 col-sm-6">
              <ul className="list-unstyled text-small">
                <li>
                  <a className="navbar-brand" href="/">
                    <img
                      src={logo}
                      alt="RentReader"
                      className="navbar-brand mb-2 footer-main-logo"
                    />

                    <span className="footer-title">RentReader</span>
                  </a>
                </li>
                <hr className="fontsize"></hr>
                <li className="all-list-item-style">Social</li>
                <li className="all-list-item-style">
                  <div className="social-icons-container">
                    <div>
                      <IoLogoFacebook className="icon-size items" />
                    </div>
                    <div>
                      <LiaLinkedinIn className="icon-size items" />
                    </div>
                    <div>
                      <LiaInstagram className="icon-size items" />
                    </div>
                    <div>
                      <LiaTwitter className="icon-size items" />
                    </div>
                    <div>
                      <RiYoutubeFill className="icon-size items" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="fontsize"></hr>
        <div className="container">
        <SmallFooter/>
        </div>
      </footer>
    </>
  );
};
export default FooterComponent;
