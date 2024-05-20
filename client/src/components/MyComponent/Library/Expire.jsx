import { IoIosTimer } from "react-icons/io";
const Expire = () => {
  return (
    <span className="badge d-flex align-items-center p-1 pe-2 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-pill">
      <IoIosTimer className="rounded-circle me-1" size={15}/>
      31-05-2024
    </span>
  );
};

export default Expire;
