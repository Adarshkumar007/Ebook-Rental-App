import { MdVerifiedUser } from "react-icons/md";
import { TbProgress } from "react-icons/tb";
import { HiOutlineBan } from "react-icons/hi";

const SellerVerifyBadge = ({ status }) => {
  console.log("status",status.status);
  status=status.status;
  return (
    <>
      {status === "verified" && (
        <span className="SellerVerifyBadge badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill">
          <MdVerifiedUser size={15} />
          {status}
        </span>
      )}
      {status === "verifying" && (
        <span className="SellerVerifyBadge badge d-flex align-items-center p-1 pe-2 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-pill">
          <TbProgress size={15} />
          {status}
        </span>
      )}
      {status === "blocked" && (
        <span className="SellerVerifyBadge badge d-flex align-items-center p-1 pe-2 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-pill">
          <HiOutlineBan size={15} />
          {status}
        </span>
      )}
    </>
  );
};

export default SellerVerifyBadge;
