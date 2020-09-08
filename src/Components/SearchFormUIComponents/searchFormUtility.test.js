import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormInput, FormAutocompleteInput } from "./searchFormUtility";
import searchForBooks from "../../SearchUtilityFunction/searchFunction";
import OptionsList from "../SearchBooks/optionsList";
// import { StateMock } from "@react-mock/state";

describe("Search Form Components", () => {
  //for proptype checking implement typescript
  test("FormInput : capture input onchange", () => {
    function handleChange(evt) {
      let resultLength = 3;
      let query = evt.target.value;
      let result = searchForBooks(query, resultLength);

      expect(result.length).toEqual(3);
    }

    const { getByPlaceholderText } = render(
      <FormAutocompleteInput
        labelValue="Enter search word :"
        accessFor="Enter the keywords to search books"
        type="text"
        placeholder="Enter Book name"
        onChange={handleChange}
        value={""}
      ></FormAutocompleteInput>
    );
    const node = getByPlaceholderText("Enter Book name");
    fireEvent.change(node, { target: { value: "life" } });
  });

  // test("FormAutoCompleteInput", () => {});
});
