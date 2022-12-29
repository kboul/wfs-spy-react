import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import CompOperDropDown from "./CompOperDropDown";
import { label } from "./constants";

let compOperDropdown: HTMLElement;

beforeEach(() => {
  renderWithContext(<CompOperDropDown />);
  compOperDropdown = screen.getByLabelText(label);
});

test("comparison operators dropdown appears on the page", () => {
  expect(compOperDropdown).toBeInTheDocument();
});

test("comparison operators dropdown is disabled initially", () => {
  expect(compOperDropdown).toBeDisabled();
});
