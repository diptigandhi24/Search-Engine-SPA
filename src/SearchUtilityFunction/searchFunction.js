import { summariesIndexing, bookTitlesList, bookAuthorsList } from "./data";

function isTheQueryValid(query) {
  return summariesIndexing.has(query);
}
export function searchBookList(query) {
  //take the keyword and return the list of books title
  return isTheQueryValid(query);
}
