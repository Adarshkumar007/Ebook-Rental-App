const MyComment = ({ comment }) => {
    return (
      <div
        style={{
          width: "100%",
          height: "7rem",
          padding:"0px 5px",
          overflowY: "scroll",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          textAlign:"justify",
          cursor: "pointer",
        }}
      >
        {comment}
      </div>
    );
  };
  
  export default MyComment;
  