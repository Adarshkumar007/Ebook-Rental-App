import { IoMdSave } from "react-icons/io";
const MyFormButton = ({save}) => {
  return (
    <div style={{marginLeft:"auto",marginRight:"0"}}>
      <span style={{cursor:"pointer"}} className="badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill" onClick={save}>
      <IoMdSave size={16}/>
       Save
      </span>
    </div>
  );
};
export default MyFormButton;
