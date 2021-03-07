import getTotalGetRequestNumber from '.';
import initialState from '../../../../context/initialState';

test('returns total number of get requests', () => {
    const output = getTotalGetRequestNumber({
        ...initialState,
        getGetCapNumber: 2,
        getDescFeatTypeNumber: 3,
        getGetPropValNumber: 1,
        getGetPropValFiltNumber: 0
    });
    expect(output).toBe(6);
});
