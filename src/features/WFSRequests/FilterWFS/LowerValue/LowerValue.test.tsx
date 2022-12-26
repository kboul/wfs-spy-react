import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import LowerValue, { consts } from "./LowerValue";

test("lower value input does not appear on the page initially", () => {
  renderWithContext(<LowerValue />);
  const lowerValueInput = screen.queryByLabelText(consts.label);
  expect(lowerValueInput).not.toBeInTheDocument();
});
