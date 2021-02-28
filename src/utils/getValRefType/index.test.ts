import getValRefType from '.';
import valueReferences from '../../tests/constants/valueReferences';

describe('getValRefType', () => {
    const args = {
        typename: 'mais:ATCCS_ESMM',
        valueReference: '',
        valueReferences
    };

    test('returns the correct valueReference type when attribute has string type', () => {
        args.valueReference = 'TYPEOFAREA';
        const valueReferenceType = getValRefType(args);
        expect(valueReferenceType).toEqual('string');
    });

    test('returns the correct valueReference type when attribute has decimal type', () => {
        args.valueReference = 'MSID';
        const valueReferenceType = getValRefType(args);
        expect(valueReferenceType).toEqual('decimal');
    });

    test('returns the correct valueReference type when attribute has geometry type', () => {
        args.valueReference = 'GEOMETRY';
        const valueReferenceType = getValRefType(args);
        expect(valueReferenceType).toEqual('gml:SurfacePropertyType');
    });
});
