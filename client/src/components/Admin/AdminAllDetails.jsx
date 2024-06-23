import PersonalAccountDetails from "./PersonalAccountDetails";
import Personaldetails from "./PersonalDetails";

const AdminAllrDetails=({learnings,cearnings,seller})=>{

    return(
        <div className="AdminAllrDetails">
            <Personaldetails learnings={learnings}seller={seller} cearnings={cearnings}/>
            <PersonalAccountDetails />

        </div>
    )

}

export default AdminAllrDetails;