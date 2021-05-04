import { renderWithContext, screen } from '../../../../tests/utils';
import Service, { consts } from '.';

let serviceInput: HTMLElement;

beforeEach(() => {
    renderWithContext(<Service />);
    serviceInput = screen.getByLabelText(consts.label);
});

test('service input appears on the page', () => {
    expect(serviceInput).toBeInTheDocument();
});

test('service input has initial value WFS', () => {
    expect(serviceInput).toHaveValue('WFS');
});

test('version input is disabled by default', () => {
    expect(serviceInput).toBeDisabled();
});
