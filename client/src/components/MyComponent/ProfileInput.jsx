import { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { Form, Button } from "react-bootstrap";
import { BiSave } from "react-icons/bi";

const ProfileInput = ({ value, type, label ,handleInput}) => {
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <div style={{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       gap:'3px'
      }}>
        <Form.Control
          type={type}
          value={value}
          placeholder={label}
          readOnly={!editMode}
          onChange={(e)=>handleInput(e.target.value)}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
            fontWeight: "600",
            marginTop:'5px'
          }}
        />
      {editMode ? (
        <BiSave size={20}  onClick={handleSave}/>
        // <Button variant="success" onClick={handleSave}>Save</Button>
      ) : (
        <BiEdit size={20} onClick={handleEdit} />
      )}
    </div>
  );
};

export default ProfileInput;
