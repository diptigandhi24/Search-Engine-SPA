import { replaceUnwantedKeyString } from "./summaryIndexing";

test("Remove the unwanted character from the summary to be key in hash maps", () => {
  expect(
    replaceUnwantedKeyString({
      id: 1,
      summary:
        "The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential.",
    })
  ).toBe("");
});
