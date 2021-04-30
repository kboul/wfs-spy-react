import { renderWithContext, screen } from '../../../../tests/utils';

import AddSortByASC, { consts } from '.';
import initialState from '../../../../context/initialState';

let addSortByDropdown: HTMLElement;

beforeEach(() => {
    renderWithContext(<AddSortByASC />);
    addSortByDropdown = screen.getByLabelText(consts.label);
});

test('add sort by dropdown appears on the page ', () => {
    expect(addSortByDropdown).toBeInTheDocument();
});

test('add sortBy dropdown dropdown has initial value GetCapabilities', () => {
    expect(addSortByDropdown).toHaveValue(initialState.addSortBy);
});

test('add sortBy dropdown dropdown is disabled initially', () => {
    expect(addSortByDropdown).toBeDisabled();
});
