import { renderWithContext, screen } from '../../../../tests/utils';

import WfsResponse from '.';
import consts from './constants';

beforeEach(() => {
    renderWithContext(<WfsResponse />);
});

test('wfs filter response textarea appears on the page and has no value', () => {
    const wfsFilterResponseTextarea = screen.getByRole('textbox', {
        name: consts.wfsFilterResponseLabel
    });
    expect(wfsFilterResponseTextarea).toBeInTheDocument();
    expect(wfsFilterResponseTextarea).toHaveValue('');
});

test('get filter response button appears on the page and is disabled', () => {
    const getFilterResponseBtn = screen.getByRole('button', {
        name: 'GET Filter Response'
    });
    expect(getFilterResponseBtn).toBeInTheDocument();
    expect(getFilterResponseBtn).toBeDisabled();
});

test('open in a new window button for get filter response appears on the page and is disabled', () => {
    const openInANewWindowGetFilterBtn = screen.getAllByRole('button', {
        name: 'Open in a new window'
    })[0];
    expect(openInANewWindowGetFilterBtn).toBeInTheDocument();
    expect(openInANewWindowGetFilterBtn).toBeDisabled();
});

test('post filter response button appears on the page and is disabled', () => {
    const postFilterResponseBtn = screen.getByRole('button', {
        name: 'POST Filter Response'
    });
    expect(postFilterResponseBtn).toBeInTheDocument();
    expect(postFilterResponseBtn).toBeDisabled();
});

test('open in a new window button for post filter response appears on the page and is disabled', () => {
    const openInANewWindowPostFilterBtn = screen.getAllByRole('button', {
        name: 'Open in a new window'
    })[1];
    expect(openInANewWindowPostFilterBtn).toBeInTheDocument();
    expect(openInANewWindowPostFilterBtn).toBeDisabled();
});
