import { searchBookList } from "./searchFunction";

test("check whether user input is valid query", () => {
  expect(searchBookList("patriachy")).toBe(true);
});
