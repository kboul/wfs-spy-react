import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import labels from "../labels";
import Service from "./Service";

let serviceInput: HTMLElement;

beforeEach(() => {
  renderWithContext(<Service />);
  serviceInput = screen.getByLabelText(labels.service);
});

test("service input appears on the page", () => {
  expect(serviceInput).toBeInTheDocument();
});

test("service input has initial value WFS", () => {
  expect(serviceInput).toHaveValue("WFS");
});

test("version input is disabled by default", () => {
  expect(serviceInput).toBeDisabled();
});
