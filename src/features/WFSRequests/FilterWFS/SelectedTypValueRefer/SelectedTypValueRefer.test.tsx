import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import SelectedTypValueRefer from "./SelectedTypValueRefer";
import { label } from "./constants";

let selectedTypValueRefTextarea: HTMLElement;

beforeEach(() => {
  renderWithContext(<SelectedTypValueRefer />);

  selectedTypValueRefTextarea = screen.getByRole("textbox", {
    name: label.replace("\n", "")
  });
});

test("selected typename & valueReference textarea appears on the page", () => {
  expect(selectedTypValueRefTextarea).toBeInTheDocument();
});

test("selected typename & valueReference textarea has empty intial value", () => {
  expect(selectedTypValueRefTextarea).toHaveValue("");
});
