import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import Typename, { consts } from ".";

let typeNameDropdown: HTMLElement;

beforeEach(() => {
  renderWithContext(<Typename />);
  typeNameDropdown = screen.getByLabelText(consts.label);
});

test("typeName dropdown appears on the page", () => {
  expect(typeNameDropdown).toBeInTheDocument();
});

test("typeName dropdown is disabled initially", () => {
  expect(typeNameDropdown).toBeDisabled();
});
