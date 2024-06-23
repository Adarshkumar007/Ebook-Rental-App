import { useEffect } from "react";
import AdminRequistCardContainer from "./AdminRequistCardContainer";

const AdminWithdrawConatiner=({sellerId})=>{
   
    return(
        <div className="AdminWithdrawConatiner">
            <div className="Admin-Rank-Title">
                Withdraw Request
            </div>
            <AdminRequistCardContainer sellerId={sellerId}/>
        
        </div>

    )
   

}
export default AdminWithdrawConatiner;