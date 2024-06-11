import AdminRequestCard from "./AdminRequestCard";


const amounts = [2000, 20000, 3209, 500, 500, 100000, 230, 2500, 1000, 100];

const AdminRequestCardContainer = () => {
  return (
    <div className="AdminRankPanel">
      {amounts.map((amt, index) => (
        <AdminRequestCard key={index} amt={amt} /> // Corrected component name
      ))}
    </div>
  );
};

export default AdminRequestCardContainer;
