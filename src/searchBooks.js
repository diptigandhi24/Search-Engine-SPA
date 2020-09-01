import React, { useState } from "react";
import searchForBooks, {
  getBookDetails,
} from "./SearchUtilityFunction/searchFunction";
import DisplaySearchBook from "./displaySearchBook";
import "./searchBooks.css";
export default function SearchForm() {
  let [query, updateQuery] = useState({ bookTitle: "", bookId: "" });
  let [numberOfBook, updateNoOfBooks] = useState(3);
  let [displaySearchResult, updateDisplaySearchResults] = useState([]);
  let [disabledButton, isDisabled] = useState(true);
  let [selectedBooksdetails, updateSelectedBook] = useState([]);
  function displayList(inputQuery) {
    let result = searchForBooks(inputQuery, numberOfBook);
    return result.map((bookinfo, index) => {
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
          {bookinfo.bookTitle}
          </li>
        );
      });
  let handleChange = (e) => {
    let inputQuery = e.target.value;
    console.log("onchnage value", inputQuery);
    updateQuery({ ...query, bookTitle: inputQuery });
    updateDisplaySearchResults(() => displayList(inputQuery));
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
              onClick={() => {
                let details = getBookDetails(query.bookId);
                updateSelectedBook((prevState) => {
                  return prevState.concat([{ ...query, ...details }]);
                });
                updateQuery({
                  ...query,
                  bookTitle: "",
                  bookId: "",
                });
                isDisabled((prev) => !prev);
              }}
        </div>
      </form>
    </div>
      <DisplaySearchBook selectedBooks={selectedBooksdetails} />
  );
}
