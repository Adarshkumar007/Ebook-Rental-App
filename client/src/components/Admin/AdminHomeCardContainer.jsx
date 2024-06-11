import { NewSeller } from "../DataCollection/NewSeller";
import AdminHomeCard from "./AdminHomeCard";

const handleProfileClick=()=>{
  console.log("Clicked me")
}


const AdminHomeCardContainer = () => {
  return (
    <div className="AdminHomeCardContainer">
      {NewSeller.map((newseller) => (
        <AdminHomeCard key={newseller.userId} newseller={newseller}  />
      ))}
    </div>
  );
};

export default AdminHomeCardContainer;
