import { renderWithContext, screen } from '../../../../tests/utils';

import Typename from '.';
import consts from './constants';

let typeName: HTMLElement;

beforeEach(() => {
    renderWithContext(<Typename />);
    typeName = screen.getByLabelText(consts.typename);
});

test('typeName dropdown appears on the page', () => {
    expect(typeName).toBeInTheDocument();
});

test('typeName dropdown is disabled initially', () => {
    expect(typeName).toBeDisabled();
});
