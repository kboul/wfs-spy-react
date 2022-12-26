import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import ValueReference, { consts } from "./ValueReference";

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
