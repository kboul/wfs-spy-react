import { renderWithContext, screen, fireEvent } from '../../../../tests/utils';

import Request from '.';
import consts from '../../../../constants';

let request: HTMLElement;

beforeEach(() => {
    renderWithContext(<Request />);
    request = screen.getByLabelText('request');
});

test('request dropdown appears on the page', () => {
    expect(request).toBeInTheDocument();
});

test('request value is GetCapabilities initially', () => {
    expect(request).toHaveValue(consts.requests[0]);
});

test('request value is not updated when user selects other option and a GetCapabilities request has not been performed', () => {
    fireEvent.change(request, { target: { value: consts.requests[1] } });
    expect(request).toHaveValue(consts.requests[0]);
});
