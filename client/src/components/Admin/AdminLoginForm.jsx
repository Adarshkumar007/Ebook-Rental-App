import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEyeSlash } from "react-icons/fa";
const AdminLoginForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems:"center",
        width:"70%"
      }}
    >
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon2">
      <FaEyeSlash />
      </InputGroup.Text>
      <Form.Control
        type="password"
        placeholder="Password"
        aria-label="Password"
        aria-describedby="basic-addon2"
      />
    </InputGroup>
    </div>
  );
};

export default AdminLoginForm;
