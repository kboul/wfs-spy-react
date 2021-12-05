import { renderWithContext, screen } from '../../../../tests/utils';
import LowerValue, { consts } from '.';

test('lower value input does not appear on the page initially', () => {
    renderWithContext(<LowerValue />);
    const lowerValueInput = screen.queryByLabelText(consts.label);
    expect(lowerValueInput).not.toBeInTheDocument();
});
