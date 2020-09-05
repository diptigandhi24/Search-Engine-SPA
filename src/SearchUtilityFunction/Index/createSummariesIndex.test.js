import createIndexContent from "./createSummariesIndex";

function buildTestIndex() {
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

  summaryTestingObj.forEach((summary) => {
    createIndexContent(summary.summary, summary.id, hashKeyWords);
  });
  return hashKeyWords;
}

test("Build Index", () => {
  let result = new Map([
    ["Hello", { id: [0, 1] }],
    ["World", { id: [0] }],
    ["Beaituful", { id: [1] }],
    ["10X", { id: [1] }],
    ["beaituful", { id: [1] }],
  ]);

  expect(buildTestIndex()).toStrictEqual(result);
});
