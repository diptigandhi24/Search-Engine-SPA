import summariesKeywordsIndex from "./SummariesKeywordIndex";

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
let index = new Map();
index.set("Hello", { id: [0, 1] });
index.set("World", { id: [0] });
index.set("Beaituful", { id: [1] });
index.set("10X", { id: [1] });
index.set("beaituful", { id: [1] });
test("console.log the Correct list of keywords", () => {
  expect(summariesKeywordsIndex(summariesCollection)).toEqual(index);
});
