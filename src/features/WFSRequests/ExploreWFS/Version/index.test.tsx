import { renderWithContext, screen, fireEvent } from '../../../../tests/utils';

import Version from '.';
import consts from '../../../../constants';

let version: HTMLElement;

beforeEach(() => {
    renderWithContext(<Version />);
    version = screen.getByLabelText('version');
});

test('version dropdown appears on the page with initial value 2.0.0', () => {
    expect(version).toBeInTheDocument();
    expect(version).toHaveValue(consts.versions[0]);
});

test('version value is updated when user selects other option', () => {
    fireEvent.change(version, { target: { value: consts.versions[1] } });
    expect(version).toHaveValue(consts.versions[1]);
});
