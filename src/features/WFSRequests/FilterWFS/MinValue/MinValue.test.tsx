import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import MinValue from "./MinValue";
import { label } from "./constants";

let minValueInput: HTMLElement;

beforeEach(() => {
  renderWithContext(<MinValue />);
  minValueInput = screen.getByLabelText(label);
});

test("min value input appears on the page", () => {
  expect(minValueInput).toBeInTheDocument();
});

test("min value input is disabled initially", () => {
  expect(minValueInput).toBeDisabled();
});

test("min value input has empty intial value", () => {
  expect(minValueInput).toHaveValue("");
});
