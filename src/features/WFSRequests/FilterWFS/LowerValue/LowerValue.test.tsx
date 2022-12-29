import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import LowerValue from "./LowerValue";
import { label } from "./constants";

test("lower value input does not appear on the page initially", () => {
  renderWithContext(<LowerValue />);
  const lowerValueInput = screen.queryByLabelText(label);
  expect(lowerValueInput).not.toBeInTheDocument();
});
