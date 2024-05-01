import { FaStar } from "react-icons/fa6";
const StarCount=({count,numStar ,onClick})=>{
    return(
     <div style={{display:"flex",gap:"10px",justifyItems:"center", cursor:"pointer"}}  onClick={onClick}>
        <h6 style={{width:"4rem",fontWeight:"bold"}}>{count}</h6>
        {([...Array(numStar)]).map(star=>{return <FaStar style={{color:"#000d42"}}/>})}
        
     </div>
    )
}
export default StarCount