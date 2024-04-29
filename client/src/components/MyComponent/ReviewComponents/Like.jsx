

import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const Like = ({handleLike,likeCount,liked}) => {


  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
        cursor: "pointer",
        color: liked ? "#000d42" : "#000", 
      }}
      onClick={handleLike}
    >
      {liked ? <AiFillLike size={20}/> : <AiOutlineLike  size={20}/>}
      <div style={{ color: "#000d42" }}>{likeCount}</div>
    </div>
  );
};

export default Like;