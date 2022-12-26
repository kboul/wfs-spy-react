import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import UpperValue from ".";
import { label } from "./constants";

test("upper value input does not appear on the page initially", () => {
  renderWithContext(<UpperValue />);
  const upperValueInput = screen.queryByLabelText(label);
  expect(upperValueInput).not.toBeInTheDocument();
});
