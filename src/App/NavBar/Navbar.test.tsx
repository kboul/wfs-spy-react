import { MemoryRouter } from "react-router-dom";

import { renderWithContext, screen } from "../../tests/utils";

import Navbar from ".";

beforeEach(() => {
  renderWithContext(<Navbar />, { wrapper: MemoryRouter });
});

test("app logo appears on navbar ", () => {
  const appLogo = screen.getByText("WFS Spy");
  expect(appLogo).toBeInTheDocument();
});

test("getCapabilities list appears on navbar", () => {
  const getCapabilitiesList = screen.getByText("GetCapabilities");
  expect(getCapabilitiesList).toBeInTheDocument();
});

test("describeFeatureType list appears on navbar", () => {
  const describeFeatureTypeList = screen.getByText("DescribeFeatureType");
  expect(describeFeatureTypeList).toBeInTheDocument();
});

test("statistics link appears on navbar", () => {
  const statisticsLink = screen.getByText("Statistics");
  expect(statisticsLink).toBeInTheDocument();
});

test("reset link appears on navbar", () => {
  const resetLink = screen.getByText("Reset");
  expect(resetLink).toBeInTheDocument();
});

test("navbar has two images", () => {
  const img = screen.getAllByRole("img");
  expect(img).toHaveLength(2);
});
