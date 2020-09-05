import createIndexContent from "./createSummariesIndex";

let summaryTestingObj = [
  {
    id: 0,
    summary: ["Hello", "World", "Hello"],
  },
  {
    id: 1,
    summary: ["Beaituful", "10X", "beaituful", "Hello"],
  },
];
let hashKeyWords = new Map();
let result = new Map();
result.set("Hello", { id: [0, 1] });
result.set("World", { id: [0] });
result.set("Beaituful", { id: [1] });
result.set("10X", { id: [1] });
result.set("beaituful", { id: [1] });

function mockTheUseCreateIndexContent() {
  summaryTestingObj.forEach((summary) => {
    createIndexContent(summary.summary, summary.id, hashKeyWords);
  });
  return hashKeyWords;
}

test("Build Index", () => {
  expect(mockTheUseCreateIndexContent()).toStrictEqual(result);
});
