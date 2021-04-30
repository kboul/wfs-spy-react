import { renderWithContext, screen } from '../../../../tests/utils';

import ValueReference, { consts } from '.';

let valueReference: HTMLElement;

beforeEach(() => {
    renderWithContext(<ValueReference />);
    valueReference = screen.getByLabelText(consts.label);
});

test('valueReference dropdown appears on the page', () => {
    expect(valueReference).toBeInTheDocument();
});

test('valueReference dropdown is disabled initially', () => {
    expect(valueReference).toBeDisabled();
});
