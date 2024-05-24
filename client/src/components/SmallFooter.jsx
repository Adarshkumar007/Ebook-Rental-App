import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./SmallFooter.css";

import { AiOutlineCopyright } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { setActiveModal, setUserTypeAction } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const SmallFooter = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const userType = useSelector((state) => state.setUserType.USER_TYPE);

  const handleProfile = () => {
    dispatch(setActiveModal("profile", userType));
  };

  const handleShowModal = (modalName) => {
    dispatch(setActiveModal(modalName, userType));
  };

  const handleSellerAC = () => {
    dispatch(setUserTypeAction("seller"));
    navigate("/seller");
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isSellerAuthenticated = useSelector(
    (state) => state.sellerauth.isAuthenticated
  );

  return (
    <>
      <div
        className="footer-flex"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        <div className="footer-options">
          <AiOutlineCopyright className="footer-icon" />
          <Link to="/">
            <p className="footer-flex-title">RentReader 2024</p>
          </Link>
        </div>

        {userType === "user" ? (
          <div className="footer-options" onClick={handleSellerAC} >
            <BsShop className="footer-icon" />
            <Link to="">
              <p className="footer-flex-title">Become Seller</p>
            </Link>
          </div>
        ) : (
          <div className="footer-options">
            <SiBookstack className="footer-icon" />
            <Link to="/collection">
              <p className="footer-flex-title">Collections</p>
            </Link>
          </div>
        )}

        <div className="footer-options">
          <BiSupport className="footer-icon" />
          <Link to="">
            <p className="footer-flex-title">Help</p>
          </Link>
        </div>

        {userType === "user" ? (
          isAuthenticated ? (
            <div className="footer-options" onClick={handleProfile}>
              <FaUserCircle className="footer-icon" />
              <Link to="">
                <p className="footer-flex-title">MyProfile</p>
              </Link>
            </div>
          ) : (
            <div
              className="footer-options"
              onClick={() => handleShowModal("login")}
            >
              <FaUserCircle className="footer-icon" />
              <Link to="">
                <p className="footer-flex-title">Login</p>
              </Link>
            </div>
          )
        ) : isSellerAuthenticated ? (
          <div className="footer-options" onClick={handleProfile}>
            <FaUserCircle className="footer-icon" />
            <Link to="">
              <p className="footer-flex-title">MyProfile</p>
            </Link>
          </div>
        ) : (
          <div
            className="footer-options"
            onClick={() => handleShowModal("login")}
          >
            <FaUserCircle className="footer-icon" />
            <Link to="">
              <p className="footer-flex-title">Login</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SmallFooter;
