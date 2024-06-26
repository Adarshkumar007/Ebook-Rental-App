import BankDetails from "./BankDetails";
import WithdrawalComponent from "./WithdrawalComponent";

const Wallet = () => {
  return (
    <div className="shadows Wallet">
      <div className="Wallet-Main-Title My-Title-Style">
        <span>My Account</span>
      </div>
      <BankDetails />
      
      <WithdrawalComponent />
    </div>
  );
};

export default Wallet;
