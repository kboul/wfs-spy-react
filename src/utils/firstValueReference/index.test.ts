import firstValueReference from '.';
import valueReferences from '../../tests/constants/valueReferences';

test('returns the first valueReference from the names list', () => {
    const typename = 'mais:ATCCS_ESMM';
    const valueReference = firstValueReference(typename, valueReferences);
    expect(valueReference).toEqual('TYPEOFAREA');
});
