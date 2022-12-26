import {
  renderWithContext,
  screen
} from "../../../tests/utils/renderWithContext";
import OperationsMetadata from ".";
import consts from "./constants";

beforeEach(() => {
  renderWithContext(<OperationsMetadata />);
});

test("header appears on the page", () => {
  const header = screen.getByRole("heading", { name: consts.header });
  expect(header).toBeInTheDocument();
});

test("description appears on the page", () => {
  const descr = screen.getByText(consts.descr);
  expect(descr).toBeInTheDocument();
});

describe("accept versions", () => {
  test("card header appears on the page", () => {
    const cardHeader = screen.getAllByText(consts.acceptVersionsCardHeader);
    expect(cardHeader).toBeInTheDocument;
  });

  test("card title appears on the page", () => {
    const cardTitle = screen.getByText(consts.acceptVersionsCardTitle);
    expect(cardTitle).toBeInTheDocument;
  });
});

describe("operations metadata", () => {
  test("card header appears on the page", () => {
    const cardHeader = screen.getAllByText(consts.operMetaCardHeader);
    expect(cardHeader).toBeInTheDocument;
  });

  test("card title appears on the page", () => {
    const cardTitle = screen.getByText(consts.operMetaCardTitle, {
      exact: true
    });
    expect(cardTitle).toBeInTheDocument;
  });
});
