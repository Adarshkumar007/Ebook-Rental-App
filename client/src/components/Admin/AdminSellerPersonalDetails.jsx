import { useEffect, useState } from "react";
import AdminAllrDetails from "./AdminAllDetails";
import AdminSellerPhoto from "./AdminSellerPhoto";
import axios from "axios";
import { url } from "../../url";

const AdminSellerPersonalDetails = ({learnings,cearnings,sellerId}) => {
  const [seller,setSeller] =useState([]);
  useEffect(()=>{
    const fetchPendingTransfers = async () => {
      try {
        const response = await axios.get(`${url}/get_sellerinfo`, {
          params: {
            sellerId: sellerId 
          }
        });      setSeller(response.data);
        console.log("response",response);
      } catch (error) {
      } finally {
      }
    }
    fetchPendingTransfers();
  
  },[]);
  return (
    <div className="AdminSellerPersonalDetails">
      <AdminSellerPhoto image={seller.imageSrc}/>
      <AdminAllrDetails learnings={learnings} cearnings={cearnings} seller={seller}/>
    </div>
  );
};

export default AdminSellerPersonalDetails;
