import React from "react";
import "./displaySearchBook.css";
export default function DisplaySearchBook({ selectedBooks }) {
  return (
    <div className="card-container">
      {selectedBooks.length !== 0 ? (
        selectedBooks.map((book, index) => (
          <div className="bookInfo-card" key={index}>
            <h1>{book.bookTitle}</h1>
            <p className="book-summary">{book.bookSummary}</p>
            <hr />
            <h4>{book.bookAuthor}</h4>
          </div>
        ))
      ) : (
        <p>No books to display</p>
      )}
    </div>
  );
}
