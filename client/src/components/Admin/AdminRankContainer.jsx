import AdminRankPanel from "./AdminRankPanel";

const AdminRankContainer=({sellerId})=>{
    return(
        <div className="AdminRankContainer">
            <div className="Admin-Rank-Title">
                Books Rank
            </div>
            <AdminRankPanel sellerId={sellerId}/>
        </div>
    )

}

export default AdminRankContainer;