import { replaceUnwantedKeyString, summaryIndexing } from "./summaryIndexing";

// import { summariesIndexing } from "./data";
let summaryTestingObj = {
  summaries: [
    {
      id: 0,
      summary: "Hello!! World Hello *",
    },
    {
      id: 1,
      summary: "Beaituful 10X 1) beaituful Hello",
    },
  ],
};
let result = {
  Hello: { id: [0, 1] },
  World: { id: [0] },
  "": { id: [0] },
  Beaituful: { id: [1] },
  "10X": { id: [1] },
  beaituful: { id: [1] },
};

test("Remove the unwanted character from the summary to be key in hash maps", () => {
  expect(
    replaceUnwantedKeyString({
      id: 1,
      summary: "Hello World of search query",
    })
  ).toStrictEqual(["Hello", "World", "of", "search", "query"]);
});

test("Build Index", () => {
  expect(summaryIndexing(summaryTestingObj)).toStrictEqual(result);
});
