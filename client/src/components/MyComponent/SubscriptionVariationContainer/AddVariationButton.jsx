import "bootstrap/dist/css/bootstrap.css";
import { IoMdAddCircleOutline } from "react-icons/io";
const AddVariationButton = ({addVariation}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}} onClick={addVariation}>
      <span className="badge d-flex p-2 align-items-center text-bg-primary rounded-pill">
        <span className="px-1">Add Plan</span>
        <IoMdAddCircleOutline size={15}/>
      </span>
    </div>
  );
};

export default AddVariationButton;
