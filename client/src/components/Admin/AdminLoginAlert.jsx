import React from "react";
import Modal from "react-bootstrap/Modal";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import './AdminHeader.css'

const AdminLoginAlert = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide} animation={false} className="admin-modal">
      <Modal.Body>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.alerttype === "success" ? (
            <>
              <FaRegCheckCircle size={25} style={{ color: "green" }} />
              <div>Login Success</div>
            </>
          ) : (
            <>
              <MdOutlineReportGmailerrorred size={25} style={{ color: "red" }} />
              <div>{props.message}</div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdminLoginAlert;
