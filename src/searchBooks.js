import React, { useState } from "react";
import DisplaySearchBook from "./displaySearchBook";
import "./searchBooks.css";
export default function SearchForm() {
  let [query, updateQuery] = useState({ bookTitle: "", bookId: "" });
  let [numberOfBook, updateNoOfBooks] = useState(3);
  let [displaySearchResult, updateDisplaySearchResults] = useState([]);
  let [disabledButton, isDisabled] = useState(true);
  let result = [];
  let handleChange = (change, updateState) => {
    updateState(change);
    updateDisplaySearchResults(() => {
      result = searchForBooks(change, numberOfBook);
      return result.map((bookname, index) => {
        return (
          <li
            key={index}
            id={index}
            onClick={(e) => {
            updateQuery({
              ...query,
              bookTitle: result[e.currentTarget.id].bookTitle,
              bookId: e.currentTarget.id,
            });
              updateDisplaySearchResults([]);
              isDisabled((prev) => !prev);
            }}
          >
            {bookname}
          </li>
        );
      });
    });
  };

  return (
    <div className="form-wrapper">
      <form>
        <div className="form-content">
          <label className="form-input">Number of books :</label>
          <input
            className="input-number"
            type="number"
            placeholder="3"
            onChange={(e) => updateNoOfBooks(e.target.value)}
            value={numberOfBook}
          />
        </div>
        <div className="form-content">
          <label>Enter search word :</label>
          <div className="list-wrapper">
            <input
              type="text"
              placeholder="Enter Book name"
              onChange={(e) => handleChange(e.target.value, updateQuery)}
              value={query}
            />
            <ul className="form-option">{displaySearchResult}</ul>
          </div>
        </div>
        <div className="form-content">
          <button disabled={disabledButton}>Submit</button>
        </div>
      </form>
    </div>
      <DisplaySearchBook selectedBooks={selectedBooksdetails} />
  );
}
