import { useEffect, useState } from "react";
import { NewSeller } from "../DataCollection/NewSeller";
import AdminHomeCard from "./AdminHomeCard";
import axios from "axios";
import { url } from "../../url";



const AdminHomeCardContainer = () => {
  const [seller ,setSeller] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(()=>{
  const fetchPendingTransfers = async () => {
    try {
      const response= await axios.get(url+'/transfer_request');
      setSeller(response.data.pendingPublisher);
      console.log("response",response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  fetchPendingTransfers();

},[]);
if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="AdminHomeCardContainer">
      {seller.length !==0  && seller.map((newseller) => (
        <AdminHomeCard key={newseller._id} newseller={newseller} />
      ))}
    </div>
  );
};

export default AdminHomeCardContainer;
