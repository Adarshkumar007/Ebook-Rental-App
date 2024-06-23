const SingleSellerBook = ({ book }) => {
  return (
    <div className="Seller-Book-Card" >
      <img src={book.imageSrc} alt="book" className="Seller-Book-image" />
    </div>
  );
};

export default SingleSellerBook;
