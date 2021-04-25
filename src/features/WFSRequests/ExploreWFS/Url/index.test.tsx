import userEvent from '@testing-library/user-event';

import { renderWithContext, screen, fireEvent } from '../../../../tests/utils';

import Url from '.';

let urlInput: HTMLElement;

beforeEach(() => {
    renderWithContext(<Url />);
    urlInput = screen.getByLabelText('url');
});

test('appears in the page', () => {
    expect(urlInput).toBeInTheDocument();
});

test('is empty when page lands', () => {
    expect(urlInput).toHaveValue('');
});

test('text has purple color when focused & white when blurred', () => {
    expect(urlInput).toHaveStyle({ backgroundColor: 'rgb(238, 238, 255)' });
    fireEvent.blur(urlInput);
    expect(urlInput).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255)' });
});

test('text updates when user types a value', () => {
    const value = 'http://domain.com';
    userEvent.type(urlInput, value);
    expect(urlInput).toHaveValue(value);
});
