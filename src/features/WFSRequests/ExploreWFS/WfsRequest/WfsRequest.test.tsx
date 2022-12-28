import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";
import WfsRequest from "./WfsRequest";
import labels from "../labels";

beforeEach(() => renderWithContext(<WfsRequest />));

test("wfsRequest textarea appears on the page witn no value", () => {
  const wfsRequestTextarea = screen.getByRole("textbox", {
    name: labels.wfsRequest
  });
  expect(wfsRequestTextarea).toBeInTheDocument();
  expect(wfsRequestTextarea).toHaveValue("");
});

test("get request button appears on the page and is enabled", () => {
  const getRequestBtn = screen.getByRole("button", {
    name: labels.getReqBtn
  });
  expect(getRequestBtn).toBeInTheDocument();
  expect(getRequestBtn).toBeEnabled();
});

test("post request button appears on the page and is enabled", () => {
  const postRequestBtn = screen.getByRole("button", {
    name: labels.postReqBtn
  });
  expect(postRequestBtn).toBeInTheDocument();
  expect(postRequestBtn).toBeEnabled();
});
