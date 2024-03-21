import './MyCSS/MyButton.css'

const MyButton = ({ myval ,onClick}) => {
  return (
    <button
      className="btn btn-outline-success btn-border"
      type="submit"
      value={myval} 
      onClick={onClick}
      style={{
        fontFamily: '"DM Sans", sans-serif',
      }}
    >
      {myval} 
    </button>
  );
};

export default MyButton;
