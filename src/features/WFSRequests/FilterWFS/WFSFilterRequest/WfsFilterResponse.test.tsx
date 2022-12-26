import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import WfsFilterResponse from ".";
import { label } from "./constants";

beforeEach(() => renderWithContext(<WfsFilterResponse />));

test("wfs filter response textarea appears on the page witn no value", () => {
  const wfsFilterRequestTextarea = screen.getByRole("textbox", {
    name: label
  });
  expect(wfsFilterRequestTextarea).toBeInTheDocument();
  expect(wfsFilterRequestTextarea).toHaveValue("");
});

test("get filter request button appears on the page and is disabled", () => {
  const getFilterRequestBtn = screen.getByRole("button", {
    name: "GET Filter Request"
  });
  expect(getFilterRequestBtn).toBeInTheDocument();
  expect(getFilterRequestBtn).toBeDisabled();
});

test("post filter request button appears on the page and is disabled", () => {
  const postFilterRequestBtn = screen.getByRole("button", {
    name: "POST Filter Request"
  });
  expect(postFilterRequestBtn).toBeInTheDocument();
  expect(postFilterRequestBtn).toBeDisabled();
});
