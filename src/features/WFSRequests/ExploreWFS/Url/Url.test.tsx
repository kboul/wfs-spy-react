import userEvent from "@testing-library/user-event";

import {
  renderWithContext,
  screen,
  fireEvent
} from "../../../../tests/utils/renderWithContext";
import Url from "./Url";
import labels from "../labels";

let urlTextarea: HTMLElement;

beforeEach(() => {
  renderWithContext(<Url />);
  urlTextarea = screen.getByLabelText(labels.url);
});

test("url input appears on the page", () => {
  expect(urlTextarea).toBeInTheDocument();
});

test("url input has empty initial value", () => {
  expect(urlTextarea).toHaveValue("");
});

test("url textbox has purple color when focused & white when blurred", () => {
  expect(urlTextarea).toHaveStyle({ backgroundColor: "rgb(238, 238, 255)" });
  fireEvent.blur(urlTextarea);
  expect(urlTextarea).toHaveStyle({ backgroundColor: "rgb(255, 255, 255)" });
});

test("url text updates when user types a value", () => {
  const value = "http://domain.com";
  userEvent.type(urlTextarea, value);
  expect(urlTextarea).toHaveValue(value);

  userEvent.clear(urlTextarea);
  expect(urlTextarea).toHaveValue("");
});
