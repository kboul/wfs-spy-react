import {
  renderWithContext,
  screen
} from "../../../tests/utils/renderWithContext";
import FilterCapabilities from ".";
import consts from "./constants";

beforeEach(() => renderWithContext(<FilterCapabilities />));

test("header appears on the page", () => {
  const header = screen.getByRole("heading", { name: consts.header });
  expect(header).toBeInTheDocument();
});

test("description appears on the page", () => {
  const descr = screen.getByText(consts.descr);
  expect(descr).toBeInTheDocument();
});

describe("comparison operators", () => {
  test("card header appears on the page", () => {
    const header = screen.getByText(consts.compOperCardHeader);
    expect(header).toBeInTheDocument();
  });

  test("card title appears on the page", () => {
    const descr = screen.getByText(consts.compOperCardTitle);
    expect(descr).toBeInTheDocument();
  });
});

describe("spatial operators", () => {
  test("card header appears on the page", () => {
    const header = screen.getByText(consts.spatOperCardHeader);
    expect(header).toBeInTheDocument();
  });

  test("card title appears on the page", () => {
    const descr = screen.getByText(consts.spatOperCardTitle);
    expect(descr).toBeInTheDocument();
  });
});

describe("geometry operands", () => {
  test("card header appears on the page", () => {
    const header = screen.getByText(consts.geomOperCardHeader);
    expect(header).toBeInTheDocument();
  });

  test("card title appears on the page", () => {
    const descr = screen.getByText(consts.geomOperCardTitle);
    expect(descr).toBeInTheDocument();
  });
});

describe("temporal operands", () => {
  test("card header appears on the page", () => {
    const header = screen.getByText(consts.tempOperandsCardHeader);
    expect(header).toBeInTheDocument();
  });

  test("card title appears on the page", () => {
    const descr = screen.getByText(consts.tempOperandsCardTitle);
    expect(descr).toBeInTheDocument();
  });
});

describe("temporal operators", () => {
  test("card header appears on the page", () => {
    const header = screen.getByText(consts.tempOperatorsCardHeader);
    expect(header).toBeInTheDocument();
  });

  test("card title appears on the page", () => {
    const descr = screen.getByText(consts.tempOperatorsCardTitle);
    expect(descr).toBeInTheDocument();
  });
});

describe("funtions", () => {
  test("card header appears on the page", () => {
    const header = screen.getByText(consts.funcCardHeader);
    expect(header).toBeInTheDocument();
  });

  test("card title appears on the page", () => {
    const descr = screen.getByText(consts.funcCardTitle);
    expect(descr).toBeInTheDocument();
  });
});
