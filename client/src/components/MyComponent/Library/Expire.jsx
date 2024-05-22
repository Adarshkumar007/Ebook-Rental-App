import { IoIosTimer } from "react-icons/io";
const Expire = ({end_date}) => {
  return (
    <span className="badge d-flex align-items-center p-1 pe-2 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-pill">
      <IoIosTimer className="rounded-circle me-1" size={15}/>
      {end_date}
    </span>
  );
};

export default Expire;
