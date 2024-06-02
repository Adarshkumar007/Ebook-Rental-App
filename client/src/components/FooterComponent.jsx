import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./footer.css";
import logo from "./images/logo.png";

import { IoLogoFacebook } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaTwitter } from "react-icons/lia";
import { RiYoutubeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import SmallFooter from "./SmallFooter";

import {
  setActiveModal,
  setUserTypeAction,
} from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const FooterComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userType = useSelector((state) => state.setUserType.USER_TYPE);
  const handleProfile = () => {
    dispatch(setActiveModal("profile", userType));
  };
  const handleNotification = () => {
    dispatch(setActiveModal("notification", userType));
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isSellerAuthenticated = useSelector(
    (state) => state.sellerauth.isAuthenticated
  );

  const handleShowModal = (modalName) => {
    dispatch(setActiveModal(modalName, userType));
  };

  const handleSellerAC = () => {
    dispatch(setUserTypeAction("seller"));
    navigate("/seller");
  };

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
                  <Link
                    to="/ContactUs"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AboutUs"
                    className="text-decoration-none all-list-item-style items"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Privacy"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Security"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 col-sm-6">
              <h6 className="text-white fontsize">Help</h6>
              <ul className="list-unstyled text-small">
                {userType === "user" ? (
                  isAuthenticated ? (
                    <li onClick={handleProfile}>
                      <Link
                        to="#"
                        className="text-decoration-none all-list-item-style items"
                      >
                        My Profile
                      </Link>
                    </li>
                  ) : (
                    <li onClick={() => handleShowModal("login")}>
                      <Link
                        to="#"
                        className="text-decoration-none all-list-item-style items"
                      >
                        Login
                      </Link>
                    </li>
                  )
                ) : isSellerAuthenticated ? (
                  <li onClick={handleProfile}>
                    <Link
                      to="#"
                      className="text-decoration-none all-list-item-style items"
                    >
                      My Profile
                    </Link>
                  </li>
                ) : (
                  <li onClick={() => handleShowModal("login")}>
                    <Link
                      to="#"
                      className="text-decoration-none all-list-item-style items"
                    >
                      Login
                    </Link>
                  </li>
                )}

                {userType === "user" ? (
                  <>
                    <li>
                      <Link
                        to="/Orders"
                        className="text-decoration-none all-list-item-style items"
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/library"
                        className="text-decoration-none all-list-item-style items"
                      >
                        Library
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cart"
                        className="text-decoration-none all-list-item-style items"
                      >
                        Cart
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/publish"
                        className="text-decoration-none all-list-item-style items"
                      >
                        Publish
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/collection"
                        className="text-decoration-none all-list-item-style items"
                      >
                        Collections
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AboutUs"
                        className="text-decoration-none all-list-item-style items"
                      >
                        About Us
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="col-6 col-lg-3 col-sm-6">
              <h6 className="text-white fontsize">More</h6>
              <ul className="list-unstyled text-small">
                {userType === "user" && (
                  <li onClick={handleSellerAC}>
                    <Link
                      to="#"
                      className="text-decoration-none all-list-item-style items"
                    >
                      Be a Seller
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/Help"
                    className="text-decoration-none all-list-item-style items"
                  >
                    24x7 Help
                  </Link>
                </li>
                <li onClick={handleNotification}>
                  <Link
                    to="#"
                    className="text-decoration-none all-list-item-style items"
                  >
                    Notification
                  </Link>
                </li>
                {userType === "user" ? (
                  <li>
                    <Link
                      to="/cart"
                      className="text-decoration-none all-list-item-style items"
                    >
                      Cart
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/publish"
                      className="text-decoration-none all-list-item-style items"
                    >
                      Publish
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="col-6 col-lg-3 col-sm-6">
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="navbar-brand" to="/">
                    <img
                      src={logo}
                      alt="RentReader"
                      className="navbar-brand mb-2 footer-main-logo"
                    />
                    <span className="footer-title">RentReader</span>
                  </Link>
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
