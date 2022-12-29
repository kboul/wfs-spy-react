import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import MaxValue from "./MaxValue";
import { label } from "./constants";

let maxValueInput: HTMLElement;

beforeEach(() => {
  renderWithContext(<MaxValue />);
  maxValueInput = screen.getByLabelText(label);
});

test("max value input appears on the page", () => {
  expect(maxValueInput).toBeInTheDocument();
});

test("max value input is disabled initially", () => {
  expect(maxValueInput).toBeDisabled();
});

test("max value input has empty intial value", () => {
  expect(maxValueInput).toHaveValue("");
});
