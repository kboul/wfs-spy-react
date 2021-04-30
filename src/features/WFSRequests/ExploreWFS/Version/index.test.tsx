import { renderWithContext, screen, fireEvent } from '../../../../tests/utils';

import Version, { consts } from '.';
import globalConsts from '../../../../constants';

let version: HTMLElement;

beforeEach(() => {
    renderWithContext(<Version />);
    version = screen.getByLabelText(consts.label);
});

test('version dropdown appears on the page with initial value 2.0.0', () => {
    expect(version).toBeInTheDocument();
});

test('version dropdown with initial value 2.0.0', () => {
    expect(version).toHaveValue(globalConsts.versions[0]);
});

test('version value is updated when user selects other option', () => {
    fireEvent.change(version, { target: { value: globalConsts.versions[1] } });
    expect(version).toHaveValue(globalConsts.versions[1]);
});
