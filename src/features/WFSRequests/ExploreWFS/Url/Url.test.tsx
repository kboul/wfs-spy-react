import userEvent from "@testing-library/user-event";

import {
  renderWithContext,
  screen,
  fireEvent,
  waitFor
} from "../../../../tests/utils/renderWithContext";
import Url from "./Url";
import labels from "../labels";
import { colors } from "../../../../constants";

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
  expect(urlTextarea).toHaveStyle({ backgroundColor: colors.lightPurpleRGB });
  fireEvent.blur(urlTextarea);
  expect(urlTextarea).toHaveStyle({ backgroundColor: colors.whiteRGB });
});

test("url text updates when user types a value", async () => {
  const value = "http://domain.com";
  userEvent.type(urlTextarea, value);

  await waitFor(() => {
    expect(urlTextarea).toHaveValue(value);
  });

  userEvent.clear(urlTextarea);
  expect(urlTextarea).toHaveValue("");
});
