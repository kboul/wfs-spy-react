import { renderWithContext, screen } from '../../../../tests/utils';

import Service, { consts } from '.';

let service: HTMLElement;

beforeEach(() => {
    renderWithContext(<Service />);
    service = screen.getByLabelText(consts.service);
});

test('service input appears on the page with value WFS', () => {
    expect(service).toBeInTheDocument();
    expect(service).toHaveValue('WFS');
});

test('version input is disabled by default', () => {
    expect(service).toBeDisabled();
});
