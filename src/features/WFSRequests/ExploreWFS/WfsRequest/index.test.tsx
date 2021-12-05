import { renderWithContext, screen } from '../../../../tests/utils';

import WfsRequest from '.';
import consts from './constants';

beforeEach(() => {
    renderWithContext(<WfsRequest />);
});

test('wfsRequest textarea appears on the page witn no value', () => {
    const wfsRequestTextarea = screen.getByRole('textbox', {
        name: consts.label
    });
    expect(wfsRequestTextarea).toBeInTheDocument();
    expect(wfsRequestTextarea).toHaveValue('');
});

test('get request button appears on the page and is enabled', () => {
    const getRequestBtn = screen.getByRole('button', {
        name: consts.getReqBtnLabel
    });
    expect(getRequestBtn).toBeInTheDocument();
    expect(getRequestBtn).toBeEnabled();
});

test('post request button appears on the page and is enabled', () => {
    const postRequestBtn = screen.getByRole('button', {
        name: consts.postReqBtnLabel
    });
    expect(postRequestBtn).toBeInTheDocument();
    expect(postRequestBtn).toBeEnabled();
});
