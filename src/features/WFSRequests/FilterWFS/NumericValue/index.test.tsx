import { renderWithContext, screen } from '../../../../tests/utils';

import NumericValue, { consts } from '.';

test('numeric value input does not appear initially on the page ', () => {
    renderWithContext(<NumericValue />);

    const numericValueInput = screen.queryByLabelText(consts.label);
    expect(numericValueInput).not.toBeInTheDocument();
});
