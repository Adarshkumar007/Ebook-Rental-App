 import EditDelete from "./EditDelete";
 import MyLikeDislike from "./MyLikeDislike";
 const LikeDislikeOptions=({review})=>{
    return(
        <div className="LikeDislikeOptions">
            <EditDelete review={review}/>
            <MyLikeDislike review={review}/>
        </div>

    )
 }

 export default LikeDislikeOptions;