import { Link } from "react-router-dom";
import { AiOutlineCopyright,AiFillHome } from "react-icons/ai";
import { MdOutlineContactSupport,MdOutlineSecurity } from "react-icons/md";


const AdminFooterOption = () => {
  return (
      <div className="AdminFooterOption">
        <div className="admin-footer-options">
          <AiOutlineCopyright className="admin-footer-icon" size={15} />
          <Link to="/admin" >
            <p className="admin-footer-text">RentReader 2024</p>
          </Link>
        </div>
        <div className="admin-footer-options">
          <MdOutlineSecurity className="admin-footer-icon" size={15} />
          <Link to="security" >
            <p className="admin-footer-text">Security</p>
          </Link>
        </div>
        <div className="admin-footer-options">
          <MdOutlineContactSupport className="admin-footer-icon" size={15} />
          <Link to="contactus" >
            <p className="admin-footer-text">Contact Us</p>
          </Link>
        </div>
        <div className="admin-footer-options">
          <AiFillHome className="admin-footer-icon" size={15} />
          <Link to="/admin" >
            <p className="admin-footer-text">Home</p>
          </Link>
        </div>
      </div>

  );
};

export default AdminFooterOption;
