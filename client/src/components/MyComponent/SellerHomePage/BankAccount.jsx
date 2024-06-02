import img1 from "../../images/officialphoto.jpg";
import img2 from "../../images/NoImage.png";
import AccountDetails from "./AccountDetails";

const BankAccount = ({editable,setWarning}) => {
  const image = img1;
  return (
    <div className="BankAccount">
      <img
        src={image}
        alt="Your Photo"
        className="BankProfileImage SubContainer"
      />
      {/* <AccountDetails editable={editable}/> */}
      <AccountDetails editable={editable} setWarning={setWarning}/>
    </div>
  );
};
export default BankAccount;
