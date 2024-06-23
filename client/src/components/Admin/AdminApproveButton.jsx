const AdminApproveButton = ({ status, onClick }) => {
    return (
      <>
        {status === "verifing" ? (
          <button 
            type="button" 
            className="AdminApproveButton btn btn-primary btn-sm" 
            onClick={onClick}
          >
            Approve
          </button>
        ):
        <button 
            type="button" 
            className="AdminApproveButton btn btn-primary btn-sm" 
            
          >
            {status}
          </button>
        }

      </>
    );
  };
  
  export default AdminApproveButton;
  