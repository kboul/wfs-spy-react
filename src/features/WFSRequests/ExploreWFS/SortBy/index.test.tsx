import { renderWithContext, screen } from '../../../../tests/utils';

import SortBy from '.';

let sortBy: HTMLElement;

beforeEach(() => {
    renderWithContext(<SortBy />);
    sortBy = screen.getByLabelText('sortBy');
});

test('sortBy input appears on the page', () => {
    expect(sortBy).toBeInTheDocument();
});

test('sortBy input is disabled by default', () => {
    expect(sortBy).toBeDisabled();
});
