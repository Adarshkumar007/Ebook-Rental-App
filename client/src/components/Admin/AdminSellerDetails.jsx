import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AdminSellerDetails.css";
import { Container } from "react-bootstrap";
import AdminSellerPersonalDetails from "./AdminSellerPersonalDetails";
import AdminsellerBooks from "./AdminsellerBooks";
import AdminRankWithdraw from "./AdminRankWithdraw";
import { useDispatch } from "react-redux";
import { url } from "../../url";
import axios from "axios";
import { logout, setActiveModal } from "../../redux/actions/authActions";

const AdminSellerDetails = () => {
  const { userId } = useParams();
  console.log("sellerIDdd",userId);
  const [learnings , setLEarnings] = useState([]);
  const [cearnings , setCEarnings] = useState([]);

  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await axios.get(url+'/admin/learnings', {
        params: {
          userId:userId
        }

    });
    setLEarnings(response.data.data);
    console.log("weweedssd",response.data);
  } catch (error) {
      if (error.response) {
          if (error.response.status === 403) {
            console.error('Error 403: Forbidden');
            dispatch(logout("seller"));
            dispatch(setActiveModal("login","seller"));
          } else {
            console.error(`Error ${error.response.status}: ${error.response.statusText}`);
            // Handle other errors
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
        }
    } 
  }
  fetchData();
},[]);
useEffect(()=>{
  const fetchData = async () => {
  try {
    const response = await axios.get(url+'/admin/cearnings', {
      params: {
        userId:userId
      }

  });
  setCEarnings(response.data);
  console.log("amjd",response);
} catch (error) {
    if (error.response) {
        if (error.response.status === 403) {
          console.error('Error 403: Forbidden');
          dispatch(logout("seller"));
          dispatch(setActiveModal("login","seller"));
        } else {
          console.error(`Error ${error.response.status}: ${error.response.statusText}`);
          // Handle other errors
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
  } 
}
fetchData();
},[]);
  return (
    <Container>
      <div className="AdminSellerDetails">
        <AdminSellerPersonalDetails learnings={learnings} cearnings={cearnings} sellerId={userId}/>
        <AdminsellerBooks sellerId={userId}/>
        <AdminRankWithdraw sellerId={userId}/>
      </div>
    </Container>
  );
};

export default AdminSellerDetails;
