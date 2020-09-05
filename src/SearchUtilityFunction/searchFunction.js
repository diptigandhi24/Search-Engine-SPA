import { bookTitlesList } from "./Index/data";
import indexHashMap from "./Index/SummariesKeywordIndex.js";
import stopWordsList from "./Index/stopWordsList.js";
import accumulateCommonBooks from "./accumulateCommonBooks";

export default function searchForBooks(userQuery, noOfBooks) {
  let queryList = filterStopWords(userQuery);
  let allSearchResults = new Map();
  let commonBooksCounter = new Map();

  //get all the books with respect to each query word
  queryList.forEach((word) =>
    getTheBooksBasedOnEachQueryWord(allSearchResults, word)
  );
  // count the books that has appear  more than once with respect to each query word
  allSearchResults.forEach((booksId) =>
    accumulateCommonBooks(booksId, commonBooksCounter)
  );

  let bookList = sortBooksByPriority(commonBooksCounter);
  let searchResults = bookList.splice(0, noOfBooks);
  let displayBooksTitle = [];
  searchResults.forEach((id) => {
    displayBooksTitle.push({
      bookTitle: bookTitlesList[id.bookId],
      bookId: id.bookId,
    });
  });

  return displayBooksTitle.length === 0 ? [] : displayBooksTitle;
}

function filterStopWords(userQuery) {
  const unwantedCharsRegex = /[!“”#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let queryLists = userQuery.replace(unwantedCharsRegex, "").split(" ");
  let filterQueryList = queryLists.filter(
    (word) => !stopWordsList.has(word) && indexHashMap.has(word)
  );
  return filterQueryList;
}

function getTheBooksBasedOnEachQueryWord(allsearchresults, queryWord) {
  allsearchresults.set(queryWord, indexHashMap.get(queryWord)["id"]);
}

//sort the books with high-low counters
function sortBooksByPriority(map) {
  //create an array of book object with counter as key and book id as a value
  let bookList = Array.from(map, ([bookId, bookCounter]) => ({
    bookCounter,
    bookId,
  }));

  function compare(a, b) {
    if (a.bookCounter > b.bookCounter) {
      return -1;
    }
    if (a.bookCounter < b.bookCounter) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  bookList.sort(compare);
  return bookList;
}
