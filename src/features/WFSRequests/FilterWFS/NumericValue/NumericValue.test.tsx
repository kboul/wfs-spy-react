import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import NumericValue from "./NumericValue";
import { label } from "./constants";

test("numeric value input does not appear initially on the page", () => {
  renderWithContext(<NumericValue />);

  const numericValueInput = screen.queryByLabelText(label);
  expect(numericValueInput).not.toBeInTheDocument();
});
