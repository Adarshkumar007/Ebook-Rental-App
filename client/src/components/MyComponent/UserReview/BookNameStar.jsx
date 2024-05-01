import AllReviewStar from "../ReviewComponents/AllReviewStar";
const BookNameStar = () => {
  return (
    <div>
      <h4 className="Book-Title">I Am Not Built To Break</h4>
      <div
        style={{
          color: "rgb(102 101 101 / 81%)",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        12/04/2024
      </div>
      <AllReviewStar rate={5} />
    </div>
  );
};
export default BookNameStar;
