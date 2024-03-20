import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './SmallFooter.css'

import { AiOutlineCopyright } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const SmallFooter=()=>{
    return(
        <>
        <div className="footer-flex" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            <div className="footer-options">
            <AiOutlineCopyright className="footer-icon" />
            <a href="/">
            <p className="footer-flex-title">RentReader 2024</p>
            </a>
            </div>

            <div className="footer-options">
            <BsShop className="footer-icon"/>
            <a href="">
            <p className="footer-flex-title">Become Seller</p>
            </a>
            </div>

            <div className="footer-options">
            <BiSupport className="footer-icon"/>
            <a href="">
            <p className="footer-flex-title">Help</p>
            </a>
            </div>

            <div className="footer-options">
            <FaUserCircle className="footer-icon"/>
            <a href="">
            <p className="footer-flex-title">MyProfile</p>
            </a>
            </div>
        </div>
        </>
    )
}

export default SmallFooter;