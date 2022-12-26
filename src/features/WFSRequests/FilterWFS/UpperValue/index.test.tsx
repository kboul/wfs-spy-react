import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import UpperValue, { consts } from ".";

test("upper value input does not appear on the page initially", () => {
  renderWithContext(<UpperValue />);
  const upperValueInput = screen.queryByLabelText(consts.label);
  expect(upperValueInput).not.toBeInTheDocument();
});
