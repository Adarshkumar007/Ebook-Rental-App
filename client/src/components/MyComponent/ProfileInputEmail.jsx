
import { Form, Button } from "react-bootstrap";


const ProfileInputEmail = ({ value, type, label ,handleInput}) => {
  
  return (
    <div style={{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
      }}>
        <Form.Control
          type={type}
          value={value}
          placeholder={label}
          readOnly
          onChange={(e)=>handleInput(e.target.value)}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
            width:"75%",
            fontWeight: "600",
            marginTop:'5px'
          }}
        />
      
    </div>
  );
};

export default ProfileInputEmail;
