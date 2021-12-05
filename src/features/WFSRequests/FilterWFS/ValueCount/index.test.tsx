import { renderWithContext, screen } from '../../../../tests/utils';
import ValueCount, { consts } from '.';

let valueCountInput: HTMLElement;

beforeEach(() => {
    renderWithContext(<ValueCount />);
    valueCountInput = screen.getByLabelText(consts.label);
});

test('value count input appears on the page', () => {
    expect(valueCountInput).toBeInTheDocument();
});

test('value count is initially disabled', () => {
    expect(valueCountInput).toBeDisabled();
});

test('value count input has empty intial value', () => {
    expect(valueCountInput).toHaveValue('');
});
