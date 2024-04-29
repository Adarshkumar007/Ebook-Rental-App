import IndividualReview from "./IndividualReview";
const AllReview = () => {
  return (
    <div className="all-review">
      {[...Array(5)].map((_, index) => (
        <IndividualReview key={index} />
      ))}
    </div>
  );
};

export default AllReview;
