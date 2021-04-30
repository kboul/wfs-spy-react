import { renderWithContext, screen, fireEvent } from '../../../../tests/utils';

import Request, { consts } from '.';
import globalConsts from '../../../../constants';

let request: HTMLElement;

beforeEach(() => {
    renderWithContext(<Request />);
    request = screen.getByLabelText(consts.label);
});

test('request dropdown appears on the page with initial value GetCapabilities', () => {
    expect(request).toBeInTheDocument();
});

test('request dropdown has initial value GetCapabilities', () => {
    expect(request).toHaveValue(globalConsts.requests[0]);
});

test('request value is not updated when user selects other option and a GetCapabilities request has not been performed', () => {
    fireEvent.change(request, { target: { value: globalConsts.requests[1] } });
    expect(request).toHaveValue(globalConsts.requests[0]);
});
