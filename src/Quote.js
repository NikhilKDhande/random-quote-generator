import React from "react";
import { FaTwitterSquare } from "react-icons/fa";

function Quote({ text, author, handleChange }) {
  return (
    <div>
      <h3 id="text">{text}</h3>
      <div>
        <h4 id="author">-{author}</h4>
      </div>

      <div id="btn-container">
        <a
          id="tweet-quote"
          href={"http://twitter.com/intent/tweet"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitterSquare />
        </a>
        <button className="btn" id="new-quote" onClick={handleChange}>
          new Quote
        </button>
      </div>
    </div>
  );
}
export default Quote;
