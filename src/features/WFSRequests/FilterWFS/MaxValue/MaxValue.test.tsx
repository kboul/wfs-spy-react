import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import MaxValue, { consts } from "./MaxValue";

let maxValueInput: HTMLElement;

beforeEach(() => {
  renderWithContext(<MaxValue />);
  maxValueInput = screen.getByLabelText(consts.label);
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
