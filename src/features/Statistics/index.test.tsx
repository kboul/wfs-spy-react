import { renderWithContext, screen } from '../../tests/utils';
import Statistics from '.';
import consts from './constants';

beforeEach(() => {
    renderWithContext(<Statistics />);
});

test('header appears on the page', () => {
    const header = screen.getByRole('heading', { name: consts.header });
    expect(header).toBeInTheDocument();
});

test('description appears on the page', () => {
    const descr = screen.getByText(consts.descr);
    expect(descr).toBeInTheDocument();
});

describe('HTTP Response Time', () => {
    test('card header appears on the page', () => {
        const cardHeader = screen.getAllByText(consts.respTimeCardHeader);
        expect(cardHeader).toBeInTheDocument;
    });

    test('card title appears on the page', () => {
        const cardTitle = screen.getByText(consts.respTimeCardTitle);
        expect(cardTitle).toBeInTheDocument;
    });
});

describe('Individual & Total HTTP Request Number', () => {
    test('card header appears on the page', () => {
        const cardHeader = screen.getAllByText(consts.reqTimeCardHeader);
        expect(cardHeader).toBeInTheDocument;
    });

    test('card title appears on the page', () => {
        const cardTitle = screen.getByText(consts.reqTimeCardTitle);
        expect(cardTitle).toBeInTheDocument;
    });
});
