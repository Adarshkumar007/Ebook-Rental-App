import { GiMoneyStack } from "react-icons/gi";
import WithdrawButton from "./WithdrawButton";
const WithdrawalComponent = () => {
  return (
    <div className="withdrwal-component SubContainer">
      <div className="BankDetails-Title My-Title-Style">
        <GiMoneyStack size={20} />
        <span> Earnings</span>
      </div>
      <div className="Earning-Details">
        <div className="Earning-Subdetails">
          <div className="Earning-Subdetail">
            <div>Lifetime Earning:</div>
            <div>₹20000</div>
          </div>
          <div className="Earning-Subdetail">
            <div>Lifetime Subscribes:</div>
            <div>1239</div>
          </div>
        </div>
        <div className="Earning-Subdetails">
          <div className="Earning-Subdetail">
            <div>Current Earning:</div>
            <div>₹20000</div>
          </div>
          <div className="Earning-Subdetail earning-subdetails">
            <div >
              <input
                type="text"
                name="amount"
                placeholder="Enter the amount"
                required
                className="amount"
              />
            </div>
            <WithdrawButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WithdrawalComponent;
