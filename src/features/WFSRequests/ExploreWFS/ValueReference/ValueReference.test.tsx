import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import ValueReference from "./ValueReference";
import labels from "../labels";

let valueReferenceDropdown: HTMLElement;

beforeEach(() => {
  renderWithContext(<ValueReference />);
  valueReferenceDropdown = screen.getByLabelText(labels.valueReference);
});

test("valueReference dropdown appears on the page", () => {
  expect(valueReferenceDropdown).toBeInTheDocument();
});

test("valueReference dropdown is disabled initially", () => {
  expect(valueReferenceDropdown).toBeDisabled();
});
