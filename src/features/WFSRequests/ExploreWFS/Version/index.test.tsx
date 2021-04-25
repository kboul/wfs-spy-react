import { renderWithContext, screen, fireEvent } from '../../../../tests/utils';

import Version from '.';

let version: HTMLElement;

beforeEach(() => {
    renderWithContext(<Version />);
    version = screen.getByLabelText('version');
});

test('version dropdown appears in the page', () => {
    expect(version).toBeInTheDocument();
});

test('version value is 2.0.0 initially', () => {
    expect(version).toHaveValue('2.0.0');
});

test('version value is updated when user selects other option', () => {
    fireEvent.change(version, { target: { value: '2.0.2' } });
    expect(version).toHaveValue('2.0.2');
});
