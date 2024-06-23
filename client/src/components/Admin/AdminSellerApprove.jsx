import ApproveSellerCard from "./ApproveSellerCard";
import { NewSeller } from "../DataCollection/NewSeller";
import axios from "axios";
import { url } from "../../url";
import { useEffect, useState } from "react";
const AdminSellerApprove = () => {
  const [seller ,setSeller] = useState([]);
  const [isempty,setempty] = useState(false);
  useEffect(()=>{
    const fetchPendingTransfers = async () => {
      try {
        const response= await axios.get(url+'/selleraprove');
        if(Object.keys(response.data.uniquePublishers).length !== 0)
{
  setSeller(response.data.uniquePublishers);

}      else
{
  setempty(true);
}
        console.log("response",response);
      } catch (error) {
        console.log("error",error);
      } 
    }
    fetchPendingTransfers();
  
  },[]);
  return (
    <div className="AdminSellerApprove">
      {!isempty?(seller.map((newseller) => (
        <ApproveSellerCard key={newseller._id} newseller={newseller} />
      ))):<h1>No Seller for Approval</h1>}
    </div>
  );
};

export default AdminSellerApprove;
