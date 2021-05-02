import { renderWithContext, screen } from '../../../../tests/utils';
import CompOperDropDown, { consts } from '.';

let compOperDropdown: HTMLElement;

beforeEach(() => {
    renderWithContext(<CompOperDropDown />);
    compOperDropdown = screen.getByLabelText(consts.label);
});

test('comparison operators dropdown appears on the page', () => {
    expect(compOperDropdown).toBeInTheDocument();
});

test('comparison operators dropdown is disabled initially', () => {
    expect(compOperDropdown).toBeDisabled();
});
