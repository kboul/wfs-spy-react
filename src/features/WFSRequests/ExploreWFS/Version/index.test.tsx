import {
  renderWithContext,
  screen,
  fireEvent
} from "../../../../tests/utils/renderWithContext";
import Version, { consts } from ".";
import globalConsts from "../../../../constants";

let versionDropdown: HTMLElement;

beforeEach(() => {
  renderWithContext(<Version />);
  versionDropdown = screen.getByLabelText(consts.label);
});

test("version dropdown appears on the page", () => {
  expect(versionDropdown).toBeInTheDocument();
});

test("version dropdown with initial value 2.0.0", () => {
  expect(versionDropdown).toHaveValue(globalConsts.versions[0]);
});

test("version value is updated when user selects other option", () => {
  fireEvent.change(versionDropdown, {
    target: { value: globalConsts.versions[1] }
  });
  expect(versionDropdown).toHaveValue(globalConsts.versions[1]);
});
