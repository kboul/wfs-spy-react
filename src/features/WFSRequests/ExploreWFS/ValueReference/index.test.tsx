import { renderWithContext, screen } from "../../../../tests/utils";
import ValueReference, { consts } from ".";

let valueReferenceDropdown: HTMLElement;

beforeEach(() => {
  renderWithContext(<ValueReference />);
  valueReferenceDropdown = screen.getByLabelText(consts.label);
});

test("valueReference dropdown appears on the page", () => {
  expect(valueReferenceDropdown).toBeInTheDocument();
});

test("valueReference dropdown is disabled initially", () => {
  expect(valueReferenceDropdown).toBeDisabled();
});
