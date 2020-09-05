import searchForBooks from "./searchFunction";

let queryList = "hello! world life meditate";
let result = [
  {
    bookId: 0,
    bookTitle: "Anything You Want",
  },
  {
    bookId: 3,
    bookTitle: "The Nurture Assumption",
  },
  {
    bookId: 19,
    bookTitle: "10 Happier",
  },
  {
    bookId: 34,
    bookTitle: "Rules for a Knight",
  },
  {
    bookId: 40,
    bookTitle: "Manual for Living",
  },
];

test("get the books with respect to users input", () => {
  expect(searchForBooks(queryList, 5)).toEqual(expect.arrayContaining(result));
});
