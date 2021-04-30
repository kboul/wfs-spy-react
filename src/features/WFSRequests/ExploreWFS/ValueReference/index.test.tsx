import { renderWithContext, screen } from '../../../../tests/utils';

import ValueReference from '.';
import consts from './constants';

let valueReference: HTMLElement;

beforeEach(() => {
    renderWithContext(<ValueReference />);
    valueReference = screen.getByLabelText(consts.valueReference);
});

test('valueReference dropdown appears on the page', () => {
    expect(valueReference).toBeInTheDocument();
});

test('valueReference dropdown is disabled initially', () => {
    expect(valueReference).toBeDisabled();
});
