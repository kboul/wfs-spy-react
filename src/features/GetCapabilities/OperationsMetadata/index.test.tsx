import userEvent from '@testing-library/user-event';

import { renderWithContext, screen } from '../../../tests/utils';
import OperationsMetadata from '.';
import consts from './constants';

beforeEach(() => {
    renderWithContext(<OperationsMetadata />);
});

test('header appears on the page', () => {
    const header = screen.getByRole('heading', { name: consts.header });
    expect(header).toBeInTheDocument();
});

test('description appears on the page', () => {
    const descr = screen.getByText(consts.descr);
    expect(descr).toBeInTheDocument();
});

describe('accept versions', () => {
    test('card header appears on the page', () => {
        const cardHeader = screen.getAllByText(consts.acceptVersionsCardHeader);
        expect(cardHeader).toBeInTheDocument;
    });

    test('card icon appears on the page & user sees proper icon upon toggle', () => {
        const toggleCardIcon = screen.getAllByLabelText('toggle card')[0];
        expect(toggleCardIcon).toBeInTheDocument();

        expect(toggleCardIcon).toHaveClass('fa-chevron-down');

        userEvent.click(toggleCardIcon);
        expect(toggleCardIcon).toHaveClass('fa-chevron-right');

        userEvent.click(toggleCardIcon);
        expect(toggleCardIcon).toHaveClass('fa-chevron-down');
    });

    test('card title appears on the page', () => {
        const cardTitle = screen.getByText(consts.acceptVersionsCardTitle);
        expect(cardTitle).toBeInTheDocument;
    });
});

describe('operations metadata', () => {
    test('card header appears on the page', () => {
        const cardHeader = screen.getAllByText(consts.operMetaCardHeader);
        expect(cardHeader).toBeInTheDocument;
    });

    test('card icon appears on the page & user sees proper icon upon toggle', () => {
        const toggleCardIcon = screen.getAllByLabelText('toggle card')[1];
        expect(toggleCardIcon).toBeInTheDocument();

        expect(toggleCardIcon).toHaveClass('fa-chevron-down');

        userEvent.click(toggleCardIcon);
        expect(toggleCardIcon).toHaveClass('fa-chevron-right');

        userEvent.click(toggleCardIcon);
        expect(toggleCardIcon).toHaveClass('fa-chevron-down');
    });

    test('card title appears on the page', () => {
        const cardTitle = screen.getByText(consts.operMetaCardTitle, {
            exact: true
        });
        expect(cardTitle).toBeInTheDocument;
    });
});
