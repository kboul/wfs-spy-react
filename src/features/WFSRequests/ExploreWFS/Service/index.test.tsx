import { renderWithContext, screen } from '../../../../tests/utils';

import Service, { consts } from '.';

let service: HTMLElement;

beforeEach(() => {
    renderWithContext(<Service />);
    service = screen.getByLabelText(consts.label);
});

test('service input appears on the page', () => {
    expect(service).toBeInTheDocument();
});

test('service input has initial value WFS', () => {
    expect(service).toHaveValue('WFS');
});

test('version input is disabled by default', () => {
    expect(service).toBeDisabled();
});
