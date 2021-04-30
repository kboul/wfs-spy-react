import { renderWithContext, screen } from '../../../../tests/utils';

import Typename, { consts } from '.';

let typeName: HTMLElement;

beforeEach(() => {
    renderWithContext(<Typename />);
    typeName = screen.getByLabelText(consts.label);
});

test('typeName dropdown appears on the page', () => {
    expect(typeName).toBeInTheDocument();
});

test('typeName dropdown is disabled initially', () => {
    expect(typeName).toBeDisabled();
});
