import { renderWithContext, screen } from '../../../../tests/utils';

import Service from '.';

let service: HTMLElement;

beforeEach(() => {
    renderWithContext(<Service />);
    service = screen.getByLabelText('service');
});

test('service input appears in the page', () => {
    expect(service).toBeInTheDocument();
});

test('version input is disabled by default', () => {
    expect(service).toBeDisabled();
});
