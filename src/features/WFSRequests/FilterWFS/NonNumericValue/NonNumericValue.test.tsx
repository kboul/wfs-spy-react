import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import NonNumericValue from "./NonNumericValue";
import { label } from "./constants";

test("non numeric value input does not appear initially on the page ", () => {
  renderWithContext(<NonNumericValue />);

  const nonNumericValueInput = screen.queryByLabelText(label);
  expect(nonNumericValueInput).not.toBeInTheDocument();
});
