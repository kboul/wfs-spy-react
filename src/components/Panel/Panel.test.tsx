import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Panel from "./Panel";

const content = "My Content";
const header = "My header";
const title = "My title";

beforeEach(() => {
  render(
    <Panel content={<div>{content}</div>} header={header} title={title} />
  );
});

test("header appears on the page", () => {
  const headerElement = screen.getByText(header);
  expect(headerElement).toBeInTheDocument();
});

test("title appears on the page", () => {
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});

test("content appears on the page", () => {
  const contentElement = screen.getByText(content);
  expect(contentElement).toBeInTheDocument();
});

test("toggle card icon appears on the page", () => {
  const toggleCardIcon = screen.getByLabelText("toggle card");
  expect(toggleCardIcon).toBeInTheDocument();
});

test("user sees down toggle card icon initially and right if it is clicked", async () => {
  const toggleCardIcon = screen.getByLabelText("toggle card");
  expect(toggleCardIcon).toHaveClass("fa-chevron-down");

  userEvent.click(toggleCardIcon);

  await waitFor(() => expect(toggleCardIcon).toHaveClass("fa-chevron-right"));

  userEvent.click(toggleCardIcon);
  await waitFor(() => expect(toggleCardIcon).toHaveClass("fa-chevron-down"));
});
