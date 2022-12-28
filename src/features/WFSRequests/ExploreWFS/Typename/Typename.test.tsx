import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import Typename from "./Typename";
import labels from "../labels";

let typeNameDropdown: HTMLElement;

beforeEach(() => {
  renderWithContext(<Typename />);
  typeNameDropdown = screen.getByLabelText(labels.typename);
});

test("typeName dropdown appears on the page", () => {
  expect(typeNameDropdown).toBeInTheDocument();
});

test("typeName dropdown is disabled initially", () => {
  expect(typeNameDropdown).toBeDisabled();
});
