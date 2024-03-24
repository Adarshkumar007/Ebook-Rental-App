
const SuccessButton = ({ myval ,onClick, backgroundColor}) => {
  return (
    <button
      className="btn btn-success "
      type="submit"
      value={myval} 
      onClick={onClick}
      style={{
        fontFamily: '"DM Sans", sans-serif',
        backgroundColor:backgroundColor,
        borderColor:"#000d42"
      }}
    >
      {myval} 
    </button>
  );
};

export default SuccessButton;
