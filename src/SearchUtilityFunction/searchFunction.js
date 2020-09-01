import { bookTitlesList } from "./Index/data";
import indexHashMap from "./Index/SummariesKeywordIndex.js";
import stopWordsList from "./Index/stopWordsList.js";
import accumulateCommonBooks from "./accumulateCommonBooks";

export function filterStopWords(userQuery) {
  const regex = /[!“”#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let queryLists = userQuery.replace(regex, "").split(" ");
  let filterQueryList = queryLists.filter(
    (word) => !stopWordsList.has(word) && indexHashMap.has(word)
  );
  return filterQueryList;
}

function getTheBooksbasedOnEachQueryWord(allsearchresults, queryWord) {
  allsearchresults.set(queryWord, indexHashMap.get(queryWord)["id"]);
}

function getThebookCounts(booksId, commonBooksCounter) {
  accumulateCommonBooks(booksId, commonBooksCounter);
}

//sort the books with high-low counters
function sortHighPriorityBook(map) {
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

export default function searchForBooks(userQuery, noOfBooks) {
  let queryList = filterStopWords(userQuery);
  let allsearchedresults = new Map();
  let commonBooksCounter = new Map();

  //get all the books with respect to each query word
  queryList.forEach((word) =>
    getTheBooksbasedOnEachQueryWord(allsearchedresults, word)
  );
  // count the books that has appear  more than once with respect to each query word
  allsearchedresults.forEach((booksId) =>
    getThebookCounts(booksId, commonBooksCounter)
  );

  let bookList = sortHighPriorityBook(commonBooksCounter);
  let noOfBooksQuery = bookList.splice(0, noOfBooks);
  let displayBooksTitle = [];
  noOfBooksQuery.forEach((id) => {
    displayBooksTitle.push(bookTitlesList[id.bookId]);
  });
  console.log(
    "Length of the queryWord",
    displayBooksTitle.length,
    displayBooksTitle
  );
  return displayBooksTitle.length === 0 ? [] : displayBooksTitle;
}
