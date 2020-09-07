import React from "react";
import { render, waitForElement } from "@testing-library/react";

import DisplaySearchBook from "./displaySearchBook";

describe("Display book infor in a card", () => {
  let bookList = [
    {
      bookTitle: "Bride's Test",
      bookSummary: "A real struggle of Austicitc person and ADHD partner",
      bookAuthor: "Clara clerk",
    },
    {
      bookTitle: "Law of Nature",
      bookSummary: "A real struggle of Austicitc person and ADHD partner",
      bookAuthor: "Clara clerk",
    },
  ];

  it("confirming components is render with correct prop value", async () => {
    const { getByText } = render(
      <DisplaySearchBook selectedBooks={bookList} />
    );

    await waitForElement(() => getByText(/Bride's Test/i));
  });
});
