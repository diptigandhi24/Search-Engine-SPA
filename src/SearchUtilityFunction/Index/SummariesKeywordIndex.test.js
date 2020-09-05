import { summariesKeywordsIndex } from "./SummariesKeywordIndex";

test("build index of unique keywords with the list of summary they appear in", () => {
  let summariesCollection = [
    {
      id: 0,
      summary: "Hello!! World Hello *",
    },
    {
      id: 1,
      summary: "Beaituful 10X 1) beaituful Hello",
    },
  ];
  let index = new Map([
    ["Hello", { id: [0, 1] }],
    ["World", { id: [0] }],
    ["Beaituful", { id: [1] }],
    ["10X", { id: [1] }],
    ["beaituful", { id: [1] }],
  ]);
  expect(summariesKeywordsIndex(summariesCollection)).toEqual(index);
});
