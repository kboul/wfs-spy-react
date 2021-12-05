import { renderWithContext, screen } from '../../../../tests/utils';
import FilteredValueCount, { consts } from '.';

let filterdValueCountInput: HTMLElement;

beforeEach(() => {
    renderWithContext(<FilteredValueCount />);
    filterdValueCountInput = screen.getByLabelText(consts.label);
});

test('filtered value count input appears on the page', () => {
    expect(filterdValueCountInput).toBeInTheDocument();
});

test('filtered value count is initially disabled', () => {
    expect(filterdValueCountInput).toBeDisabled();
});

test('filtered value count input has empty intial value', () => {
    expect(filterdValueCountInput).toHaveValue('');
});
