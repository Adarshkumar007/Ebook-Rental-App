import { CiFaceFrown } from "react-icons/ci";

const CartEmpty=()=>{
    return <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"#000d428f"}}>
        <CiFaceFrown size={80}/>
        <div style={{fontSize:"30px", fontWeight:"bold"}}>There are no books</div>
    </div>

}

export default CartEmpty;