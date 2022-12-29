import {
  renderWithContext,
  screen
} from "../../../../tests/utils/renderWithContext";

import WfsResponse from "./WFSResponse";
import consts from "./constants";

beforeEach(() => renderWithContext(<WfsResponse />));

test("wfsResponse textarea appears on the page and has no value", () => {
  const wfsResponseTextarea = screen.getByRole("textbox", {
    name: consts.label
  });
  expect(wfsResponseTextarea).toBeInTheDocument();
  expect(wfsResponseTextarea).toHaveValue("");
});

test("get response button appears on the page and is disabled", () => {
  const getResponseBtn = screen.getByRole("button", {
    name: consts.getRespBtnLabel
  });
  expect(getResponseBtn).toBeInTheDocument();
  expect(getResponseBtn).toBeDisabled();
});

test("open in a new window button for get response appears on the page and is disabled", () => {
  const openInANewWindowGetBtn = screen.getAllByRole("button", {
    name: consts.openInANewWindowLabel
  })[0];
  expect(openInANewWindowGetBtn).toBeInTheDocument();
  expect(openInANewWindowGetBtn).toBeDisabled();
});

test("post response button appears on the page and is disabled", () => {
  const postRequestBtn = screen.getByRole("button", {
    name: consts.postRespBtnLabel
  });
  expect(postRequestBtn).toBeInTheDocument();
  expect(postRequestBtn).toBeDisabled();
});

test("open in a new window button for post response appears on the page and is disabled", () => {
  const openInANewWindowPostBtn = screen.getAllByRole("button", {
    name: consts.openInANewWindowLabel
  })[1];
  expect(openInANewWindowPostBtn).toBeInTheDocument();
  expect(openInANewWindowPostBtn).toBeDisabled();
});
