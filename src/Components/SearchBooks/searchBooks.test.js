import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "./searchBooks";

describe("Search Form Components", () => {
  function searchFormWithTestValues() {
    const { getByPlaceholderText } = render(<SearchForm />);
    const textInputnode = getByPlaceholderText("Enter Book name");
    const numberInputnode = getByPlaceholderText("Default result is 3");
    userEvent.type(numberInputnode, "5");
    userEvent.type(textInputnode, "life");
    return { textInputnode, numberInputnode };
  }

  test("display Autocomplete list when text is typed", () => {
    searchFormWithTestValues();
    screen.getByText("Resplendent Light");
  });

  test("Selecting a book from the auto complete list enables the submit button", () => {
    const { textInputnode } = searchFormWithTestValues();
    let isSubmitEnabled = screen.getByText("Get The Book");
    expect(isSubmitEnabled.disabled).toBe(true);
    fireEvent.click(screen.getByText("Resplendent Light"));
    expect(textInputnode.value).toBe("Resplendent Light");
    expect(isSubmitEnabled.disabled).toBe(false);
  });

  test("OnSubmit display bookinfo card which has summary and author name", () => {
    (function selectBook() {
      searchFormWithTestValues();
      fireEvent.click(screen.getByText("Resplendent Light"));
    })();
    let onSubmit = screen.getByText("Get The Book");
    fireEvent.click(onSubmit);
    screen.getByText("Tom Rath");
    screen.getByText(
      "The Book in Three Sentences: There are three keys to being fully charged each day: doing work that provides meaning to your life, having positive social interactions with others, and taking care of yourself so you have the energy you need to do the first two things. Trying to maximize your own happiness can actually make you feel self-absorbed and lonely, but giving more can drive meaning and happiness in your life. People who spend money on experiences are happier than those who spend on material things."
    );
  });
});
