import React from "react";
import RankCard from "./RankCard";
import { Book } from "./Books";

const Rank = () => {
  const books = Book(); // Call the Book function to get the array of book objects

  return (
    <div className="shadows Rank">
      <div className="Wallet-Main-Title My-Title-Style">Book Rank</div>
      <div className="RankDetails">
        {books.map((book) => (
          <RankCard key={book.rank} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Rank;
