import userEvent from '@testing-library/user-event';

import { renderWithContext, screen } from '../../../tests/utils';
import ServiceIdentification from '.';
import consts from './constants';

beforeEach(() => {
    renderWithContext(<ServiceIdentification />);
});

test('header appears on the page', () => {
    const header = screen.getByRole('heading', { name: consts.header });
    expect(header).toBeInTheDocument();
});

test('description appears on the page', () => {
    const descr = screen.getByText(consts.descr.trim().substring(0, 10), {
        exact: false
    });
    expect(descr).toBeInTheDocument();
});

test('toggle card icon appears on the page', () => {
    const toggleCardIcon = screen.getByLabelText('toggle card');
    expect(toggleCardIcon).toBeInTheDocument();
});

test('user sees down toggle card icon initially and right if it is clicked', () => {
    const toggleCardIcon = screen.getByLabelText('toggle card');
    expect(toggleCardIcon).toHaveClass('fa-chevron-down');

    userEvent.click(toggleCardIcon);
    expect(toggleCardIcon).toHaveClass('fa-chevron-right');

    userEvent.click(toggleCardIcon);
    expect(toggleCardIcon).toHaveClass('fa-chevron-down');
});

test('card header appears on the page', () => {
    const cardHeader = screen.getAllByText(consts.cardHeader)[1];
    expect(cardHeader).toBeInTheDocument;
});

test('card title appears on the page', () => {
    const cardTitle = screen.getByText(consts.cardTitle);
    expect(cardTitle).toBeInTheDocument;
});
