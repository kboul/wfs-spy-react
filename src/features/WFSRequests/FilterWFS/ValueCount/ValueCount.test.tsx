import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import ValueCount from ".";
import { label } from "./constants";

let valueCountInput: HTMLElement;

beforeEach(() => {
  renderWithContext(<ValueCount />);
  valueCountInput = screen.getByLabelText(label);
});

test("value count input appears on the page", () => {
  expect(valueCountInput).toBeInTheDocument();
});

test("value count is initially disabled", () => {
  expect(valueCountInput).toBeDisabled();
});

test("value count input has empty intial value", () => {
  expect(valueCountInput).toHaveValue("");
});
