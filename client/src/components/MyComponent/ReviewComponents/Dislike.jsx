import { AiFillDislike, AiOutlineDislike } from "react-icons/ai";

const Dislike = ({handleDislike,dislikeCount,disliked}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
        cursor: "pointer",
        color: disliked ? "#000d42" : "#000",
      }}
      onClick={handleDislike}
    >
      {disliked ? <AiFillDislike size={20} /> : <AiOutlineDislike size={20} />}
      <div style={{ color: "#000d42" }}>{dislikeCount}</div>
    </div>
  );
};

export default Dislike;
