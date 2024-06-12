import React from "react";
import { useParams } from "react-router-dom";
import "./AdminSellerDetails.css";
import { Container } from "react-bootstrap";
import AdminSellerPersonalDetails from "./AdminSellerPersonalDetails";
import AdminsellerBooks from "./AdminsellerBooks";
import AdminRankWithdraw from "./AdminRankWithdraw";

const AdminSellerDetails = () => {
  const { userId } = useParams();

  return (
    <Container>
      <div className="AdminSellerDetails">
        <AdminSellerPersonalDetails />
        <AdminsellerBooks />
        <AdminRankWithdraw/>
      </div>
    </Container>
  );
};

export default AdminSellerDetails;
