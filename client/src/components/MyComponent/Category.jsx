import React from "react";
import { Form } from "react-bootstrap";

// { category, onChange}
const Category = () => {
  return (
    <>
      <Form.Select
        // value={category}
        // onChange={(e) => setCategory(e.target.value)}

        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "15px",
          border: "2px solid #000d42",
        }}
      >
        <option value="">Select a category</option>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="mystery">Mystery</option>
        <option value="thriller">Thriller</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="fantasy">Fantasy</option>
        <option value="romance">Romance</option>
        <option value="horror">Horror</option>
        <option value="historical-fiction">Historical Fiction</option>
        <option value="literary-fiction">Literary Fiction</option>
        <option value="young-adult">Young Adult</option>
        <option value="children">Children's Books</option>
        <option value="biography">Biography</option>
        <option value="autobiography">Autobiography</option>
        <option value="memoir">Memoir</option>
        <option value="self-help">Self-Help</option>
        <option value="business">Business</option>
        <option value="finance">Finance</option>
        <option value="health">Health & Wellness</option>
        <option value="cooking">Cooking</option>
        <option value="travel">Travel</option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="mathematics">Mathematics</option>
        <option value="technology">Technology</option>
        <option value="engineering">Engineering</option>
        <option value="art">Art</option>
        <option value="music">Music</option>
        <option value="photography">Photography</option>
        <option value="sports">Sports</option>
        <option value="gardening">Gardening</option>
        <option value="crafts">Crafts & Hobbies</option>
        <option value="religion">Religion & Spirituality</option>
        <option value="philosophy">Philosophy</option>
        <option value="psychology">Psychology</option>
        <option value="sociology">Sociology</option>
        <option value="political">Political Science</option>
        <option value="environmental">Environmental Science</option>
        <option value="education">Education</option>
        <option value="language">Language Learning</option>
        <option value="reference">Reference</option>
        <option value="fiction-classics">Fiction Classics</option>
        <option value="poetry">Poetry</option>
        <option value="short-stories">Short Stories</option>
        <option value="drama">Drama</option>
        <option value="essays">Essays</option>
        <option value="anthology">Anthology</option>
        <option value="comics">Comics & Graphic Novels</option>
        <option value="manga">Manga</option>
        <option value="satire">Satire</option>
        <option value="tragedy">Tragedy</option>
        <option value="fantasy-epic">Epic Fantasy</option>
        <option value="fantasy-urban">Urban Fantasy</option>
        <option value="fantasy-historical">Historical Fantasy</option>
        <option value="fantasy-dark">Dark Fantasy</option>
        <option value="fantasy-light">Light Fantasy</option>
        <option value="fantasy-mythical">Mythical Fantasy</option>
      </Form.Select>
    </>
  );
};

export default Category;
