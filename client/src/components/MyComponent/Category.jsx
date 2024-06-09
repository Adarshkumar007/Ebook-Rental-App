import React from "react";
import { Form } from "react-bootstrap";

const Category = ({ value, handleSetCategory }) => {
  return (
    <>
      <Form.Select
        value={value}
        onChange={(e) => handleSetCategory(e.target.value)}
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "15px",
          border: "2px solid #000d42",
        }}
      >
        <option value="">Select a category</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Thriller">Thriller</option>
        <option value="Science-Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Romance">Romance</option>
        <option value="Horror">Horror</option>
        <option value="Historical-Fiction">Historical Fiction</option>
        <option value="Literary-Fiction">Literary Fiction</option>
        <option value="Young-Adult">Young Adult</option>
        <option value="Children">Children's Books</option>
        <option value="Biography">Biography</option>
        <option value="Autobiography">Autobiography</option>
        <option value="Memoir">Memoir</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Business">Business</option>
        <option value="Finance">Finance</option>
        <option value="Health">Health & Wellness</option>
        <option value="Cooking">Cooking</option>
        <option value="Travel">Travel</option>
        <option value="History">History</option>
        <option value="Science">Science</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Technology">Technology</option>
        <option value="Engineering">Engineering</option>
        <option value="Art">Art</option>
        <option value="Music">Music</option>
        <option value="Photography">Photography</option>
        <option value="Sports">Sports</option>
        <option value="Gardening">Gardening</option>
        <option value="Crafts">Crafts & Hobbies</option>
        <option value="Religion">Religion & Spirituality</option>
        <option value="Philosophy">Philosophy</option>
        <option value="Psychology">Psychology</option>
        <option value="Sociology">Sociology</option>
        <option value="Political">Political Science</option>
        <option value="Environmental">Environmental Science</option>
        <option value="Education">Education</option>
        <option value="Language">Language Learning</option>
        <option value="Reference">Reference</option>
        <option value="Fiction-Classics">Fiction Classics</option>
        <option value="Poetry">Poetry</option>
        <option value="Short-Stories">Short Stories</option>
        <option value="Drama">Drama</option>
        <option value="Essays">Essays</option>
        <option value="Anthology">Anthology</option>
        <option value="Comics">Comics & Graphic Novels</option>
        <option value="Manga">Manga</option>
        <option value="Satire">Satire</option>
        <option value="Tragedy">Tragedy</option>
        <option value="Fantasy-Epic">Epic Fantasy</option>
        <option value="Fantasy-Urban">Urban Fantasy</option>
        <option value="Fantasy-Historical">Historical Fantasy</option>
        <option value="Fantasy-Dark">Dark Fantasy</option>
        <option value="Fantasy-Light">Light Fantasy</option>
        <option value="Fantasy-Mythical">Mythical Fantasy</option>
      </Form.Select>
    </>
  );
};

export default Category;
