import { renderWithContext, screen } from '../../../../tests/utils';

import SortBy, { consts } from '.';

let sortBy: HTMLElement;

beforeEach(() => {
    renderWithContext(<SortBy />);
    sortBy = screen.getByLabelText(consts.label);
});

test('sortBy input appears on the page', () => {
    expect(sortBy).toBeInTheDocument();
});

test('sortBy input is disabled by default', () => {
    expect(sortBy).toBeDisabled();
});
