import SellerSwipper from "./SellerSwipper";

const SellerBookDetailsContainer = ({ books, onClick }) => {
  console.log(books);
  return (
    <div
      style={{
        padding: "5px",
        marginTop: "2rem",
        marginBottom: "2rem",
        borderRadius: "10px", 
        boxShadow: "rgb(0 0 0 / 100%) 1px 1px 8px", 
      }}
    >
      <SellerSwipper books={books} onClick={onClick} />
    </div>
  );
};

export default SellerBookDetailsContainer;
