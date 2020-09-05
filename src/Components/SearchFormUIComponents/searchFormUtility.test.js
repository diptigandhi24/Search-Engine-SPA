import React from "react";
import { render, screen } from "@testing-library/react";
import { FormInput, FormAutocompleteInput } from "./searchFormUtility";

describe("FormInputs UI along with common propTypes", () => {
  //for proptype checking implement typescript
  test("Rendering formInput Feild", () => {
    render(
      <FormInput
        labelValue="Number of books :"
        accessFor="Number of search results, default is 3"
        type="number"
        placeholder="3"
        onChange={(e) => {
          console.log("You clicked me");
        }}
        value={3}
      />
    );
    render(<FormAutocompleteInput />);
    screen.debug();
  });
});
