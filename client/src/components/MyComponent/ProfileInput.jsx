import { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { Form, Button } from "react-bootstrap";
import { BiSave } from "react-icons/bi";

const ProfileInput = ({ value, type, label }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Save the edited value
    // For demonstration purposes, I'm just logging the value here
    console.log("Edited Value:", editedValue);
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
          value={editedValue}
          placeholder={label}
          readOnly={!editMode}
          onChange={(e) => setEditedValue(e.target.value)}
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
