import "bootstrap/dist/css/bootstrap.css";
import { IoChevronForwardOutline } from "react-icons/io5";

const MoreInfo=()=>{
    return(
        <div style={{ display: "flex", alignItems:"end",justifyContent:"flex-end",marginBottom:"0.75rem" }}>
        <span className="badge text-bg-light moreinfo">Explore More
        <IoChevronForwardOutline/>
        <IoChevronForwardOutline/>
        <IoChevronForwardOutline/>
        </span>
    </div>
    )
};

export default MoreInfo;