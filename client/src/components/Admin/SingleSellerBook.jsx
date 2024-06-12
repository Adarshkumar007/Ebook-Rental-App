const SingleSellerBook = ({ book }) => {
  return (
    <div className="Seller-Book-Card">
      <img src={book.image} alt="book" className="Seller-Book-image" />
    </div>
  );
};

export default SingleSellerBook;
