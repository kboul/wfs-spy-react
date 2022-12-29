import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import AddSortByASC from "./AddSortByASC";
import initialState from "../../../../context/initialState";
import { label } from "./constants";

let addSortByDropdown: HTMLElement;

beforeEach(() => {
  renderWithContext(<AddSortByASC />);
  addSortByDropdown = screen.getByLabelText(label);
});

test("add sort by dropdown appears on the page ", () => {
  expect(addSortByDropdown).toBeInTheDocument();
});

test("add sortBy dropdown dropdown has initial value GetCapabilities", () => {
  expect(addSortByDropdown).toHaveValue(initialState.addSortBy);
});

test("add sortBy dropdown dropdown is disabled initially", () => {
  expect(addSortByDropdown).toBeDisabled();
});
