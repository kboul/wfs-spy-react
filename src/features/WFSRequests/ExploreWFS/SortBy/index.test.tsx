import { renderWithContext, screen } from '../../../../tests/utils';
import SortBy, { consts } from '.';

let sortByInput: HTMLElement;

beforeEach(() => {
    renderWithContext(<SortBy />);
    sortByInput = screen.getByLabelText(consts.label);
});

test('sortBy input appears on the page', () => {
    expect(sortByInput).toBeInTheDocument();
});

test('sortBy input is disabled by default', () => {
    expect(sortByInput).toBeDisabled();
});
