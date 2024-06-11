import { Container } from "react-bootstrap";
import "./AdminHome.css";
import AdminHomeCardContainer from "./AdminHomeCardContainer";

const AdminHome = () => {
  return (
    <Container>
      <div className="AdminHome">
        <AdminHomeCardContainer/>
      </div>
    </Container>
  );
};

export default AdminHome;
