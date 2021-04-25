import { renderWithContext, screen, fireEvent } from '../../../../tests/utils';

import Version from '.';
import consts from '../../../../constants';

let version: HTMLElement;

beforeEach(() => {
    renderWithContext(<Version />);
    version = screen.getByLabelText('version');
});

test('version dropdown appears in the page', () => {
    expect(version).toBeInTheDocument();
});

test('version value is 2.0.0 initially', () => {
    expect(version).toHaveValue(consts.versions[0]);
});

test('version value is updated when user selects other option', () => {
    fireEvent.change(version, { target: { value: consts.versions[1] } });
    expect(version).toHaveValue(consts.versions[1]);
});
