import React from "react";
import "./AdminFooter.css";

import AdminFooterOption from "./AdminFooterOption";
import { Container } from "react-bootstrap";

const AdminFooter = () => {
  return (
    <div className="Admin-Footer">
      <Container>
        <AdminFooterOption />
      </Container>
    </div>
  );
};
export default AdminFooter;
