import React from 'react';
import { BiEdit } from "react-icons/bi";
import { Form } from "react-bootstrap";
import { BiSave } from "react-icons/bi";

const ProfileInput = ({ value, type, label, handleInput, editMode, handleEdit, handleSave }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3px'
    }}>
      <Form.Control
        type={type}
        value={value}
        placeholder={label}
        readOnly={!editMode}
        onChange={(e) => handleInput(e.target.value)}
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "15px",
          fontWeight: "600",
          marginTop: '5px'
        }}
        required
      />
      {editMode ? (
        <BiSave size={20} onClick={handleSave} />
      ) : (
        <BiEdit size={20} onClick={handleEdit} />
      )}
    </div>
  );
};

export default ProfileInput;
