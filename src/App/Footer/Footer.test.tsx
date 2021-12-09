import { render, screen } from '@testing-library/react';

import Footer from './Footer';

test('footer appears on the page', () => {
    render(<Footer />);
    const footerPrefix = screen.getByText('Developed & designed by');
    expect(footerPrefix).toBeInTheDocument();

    const footerName = screen.getByText('Konstantinos Voulgaridis');
    expect(footerName).toBeInTheDocument();
    expect(footerName).toHaveStyle({ fontWeight: 'bold' });
});
