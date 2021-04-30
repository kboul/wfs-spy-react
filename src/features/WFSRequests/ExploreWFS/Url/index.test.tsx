import userEvent from '@testing-library/user-event';

import { renderWithContext, screen, fireEvent } from '../../../../tests/utils';

import Url, { consts } from '.';

let url: HTMLElement;

beforeEach(() => {
    renderWithContext(<Url />);
    url = screen.getByLabelText(consts.label);
});

test('url input appears on the page with empty initial value', () => {
    expect(url).toBeInTheDocument();
});

test('url input has empty initial value', () => {
    expect(url).toHaveValue('');
});

test('url textbox has purple color when focused & white when blurred', () => {
    expect(url).toHaveStyle({ backgroundColor: 'rgb(238, 238, 255)' });
    fireEvent.blur(url);
    expect(url).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255)' });
});

test('url text updates when user types a value', () => {
    const value = 'http://domain.com';
    userEvent.type(url, value);
    expect(url).toHaveValue(value);

    userEvent.clear(url);
    expect(url).toHaveValue('');
});
