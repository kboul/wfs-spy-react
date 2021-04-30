import { renderWithContext, screen } from '../../../../tests/utils';

import NonNumericValue, { consts } from '.';

test('non numeric value input does not appear initially on the page ', () => {
    renderWithContext(<NonNumericValue />);

    const nonNumericValueInput = screen.queryByLabelText(consts.label);
    expect(nonNumericValueInput).not.toBeInTheDocument();
});
