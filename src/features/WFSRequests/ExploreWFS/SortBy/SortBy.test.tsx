import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import SortBy from "./SortBy";
import labels from "../labels";

let sortByInput: HTMLElement;

beforeEach(() => {
  renderWithContext(<SortBy />);
  sortByInput = screen.getByLabelText(labels.sortBy);
});

test("sortBy input appears on the page", () => {
  expect(sortByInput).toBeInTheDocument();
});

test("sortBy input is disabled by default", () => {
  expect(sortByInput).toBeDisabled();
});
