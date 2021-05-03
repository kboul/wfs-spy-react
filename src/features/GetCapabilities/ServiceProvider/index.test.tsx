import { renderWithContext, screen } from '../../../tests/utils';
import ServiceProvider from '.';
import consts from './constants';

beforeEach(() => {
    renderWithContext(<ServiceProvider />);
});

test('header appears on the page', () => {
    const header = screen.getByRole('heading', { name: consts.header });
    expect(header).toBeInTheDocument();
});

test('description appears on the page', () => {
    const descr = screen.getByText(consts.descr);
    expect(descr).toBeInTheDocument();
});

test('card header appears on the page', () => {
    const cardHeader = screen.getAllByText(consts.cardHeader)[1];
    expect(cardHeader).toBeInTheDocument;
});

test('card title appears on the page', () => {
    const cardTitle = screen.getByText(consts.cardTitle);
    expect(cardTitle).toBeInTheDocument;
});
