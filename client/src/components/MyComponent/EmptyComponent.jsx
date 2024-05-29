import { CiFaceFrown } from "react-icons/ci";
const EmptyComponent=({message})=>{
    return <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"#000d428f"}}>
        <CiFaceFrown size={80}/>
        <div style={{fontSize:"30px", fontWeight:"bold"}}>{message}</div>
    </div>
}

export default EmptyComponent;