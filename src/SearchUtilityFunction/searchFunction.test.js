import { searchForBooks } from "./searchFunction";
// import { summariesList, bookTitlesList, bookAuthorsList } from "./data";

let queryList = "hello! world life fuck";
test("get the books with respect to users input", () => {
  //   expect(searchBookList("patriachy")).toBe(undefined);
  // expect(searchForBooks("the world Horror life")).toBe(true);
  expect(searchForBooks(queryList, 5)).toStrictEqual(["word"]);
});

// test("Filter the stop words", () => {
//   expect(filterStopWords("world is beautiful has been in the school")).toBe(
//     "world beautiful school"
//   );
// });
