import { summariesIndexing } from "./data";

test("Ckecking the indexing datastructure with input string returns the correct books of list", () => {
  expect(summariesIndexing.get("life")["id"]).toBe([1, 2, 3, 4]);
});
