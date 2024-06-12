import { Container } from "react-bootstrap";
import './ApproveSeller.css'
import AdminSellerApprove from "./AdminSellerApprove";

const ApproveSeller = () => {
  return (
    <Container>
      <div className="ApproveSeller">
        <AdminSellerApprove/>

      </div>
    </Container>
  );
};

export default ApproveSeller;
