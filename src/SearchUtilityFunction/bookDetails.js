import { summariesList, bookAuthorsList } from "./Index/data";

export default function getBookDetails(id) {
  return {
    bookAuthor: bookAuthorsList[id].author,
    bookSummary: summariesList[id].summary,
  };
}
