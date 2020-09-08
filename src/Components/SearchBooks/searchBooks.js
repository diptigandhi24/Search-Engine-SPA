import React, { useState } from "react";
import searchForBooks from "../../SearchUtilityFunction/searchFunction";
import DisplaySearchBook from "../DisplaySelectedBookCard/displaySearchBook";
import "./searchBooks.css";
import OptionsList from "./optionsList";
import {
  FormInput,
  FormAutocompleteInput,
  SubmitFormQuery,
} from "../SearchFormUIComponents/searchFormUtility";
import getBookDetails from "../../SearchUtilityFunction/bookDetails";

export default function SearchForm() {
  let [query, updateQuery] = useState({ bookTitle: "", bookId: "" });
  let [numberOfBook, updateNoOfBooks] = useState(3);
  let [displaySearchResult, updateDisplaySearchResults] = useState([]);
  let [disabledButton, isDisabled] = useState(true);
  let [selectedBooksdetails, updateSelectedBook] = useState([]);

  function onSubmitQuery(e, autoCompletelist) {
    updateQuery({
      ...query,
      bookTitle: autoCompletelist[e.currentTarget.id].bookTitle,
      bookId: autoCompletelist[e.currentTarget.id].bookId,
    });
    updateDisplaySearchResults([]);
    isDisabled((prev) => !prev);
  }

  function resetTheFormONSubmit() {
    updateQuery({
      ...query,
      bookTitle: "",
      bookId: "",
    });
    updateNoOfBooks(3);
    isDisabled((prev) => !prev);
  }

  function getTheDetailInfoOfThebook() {
    //We know which book to look for with the help of autocomplete
    //autocomplete gives you id which will help to get the booksummary and author name
    let details = getBookDetails(query.bookId);

    //add the above book information to the list of user selected books
    updateSelectedBook((prevState) => {
      return prevState.concat([{ ...query, ...details }]);
    });

    resetTheFormONSubmit();
  }

  function displayAutocompleteList(inputQuery) {
    let result = searchForBooks(inputQuery, numberOfBook);
    return result.map((bookinfo, index) => {
      return (
        <OptionsList
          id={index}
          key={index}
          onClick={(e) => onSubmitQuery(e, result)}
          children={bookinfo.bookTitle}
        ></OptionsList>
      );
    });
  }

  let handleChange = (e) => {
    let inputQuery = e.target.value;
    updateQuery({ ...query, bookTitle: inputQuery });
    updateDisplaySearchResults(() => displayAutocompleteList(inputQuery));
  };

  return (
    <React.Fragment>
      <div className="form-wrapper">
        <form>
          <FormInput
            labelValue="Number of books :"
            accessFor="Number of search results, default is 3"
            type="number"
            placeholder="Default result is 3"
            onChange={(e) => {
              updateNoOfBooks(e.target.value);
            }}
            value={numberOfBook}
          />
          <FormAutocompleteInput
            labelValue="Enter search word :"
            accessFor="Enter the keywords to search books"
            type="text"
            placeholder="Enter Book name"
            onChange={handleChange}
            value={query.bookTitle}
          >
            <ul className="form-option">{displaySearchResult}</ul>
          </FormAutocompleteInput>
          <SubmitFormQuery
            disabled={disabledButton}
            onClick={getTheDetailInfoOfThebook}
            buttonName="Get The Book"
          />
        </form>
      </div>
      <DisplaySearchBook selectedBooks={selectedBooksdetails} />
    </React.Fragment>
  );
}
