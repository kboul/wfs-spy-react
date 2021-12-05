import { renderWithContext, screen, fireEvent } from '../../../../tests/utils';
import Request, { consts } from '.';
import globalConsts from '../../../../constants';

let requestDropdown: HTMLElement;

beforeEach(() => {
    renderWithContext(<Request />);
    requestDropdown = screen.getByLabelText(consts.label);
});

test('request dropdown appears on the page', () => {
    expect(requestDropdown).toBeInTheDocument();
});

test('request dropdown has initial value GetCapabilities', () => {
    expect(requestDropdown).toHaveValue(globalConsts.requests[0]);
});

test('request value is not updated when user selects other option and a GetCapabilities request has not been performed', () => {
    fireEvent.change(requestDropdown, {
        target: { value: globalConsts.requests[1] }
    });
    expect(requestDropdown).toHaveValue(globalConsts.requests[0]);
});
