import firstValueReference from '.';

describe('firstValueReference', () => {
    const typename = 'mais:ATCCS_ESMM';

    test('returns the first valueReference from the names list', () => {
        const valueReferences = {
            names: { ATCCS_ESMMType: ['TYPEOFAREA', 'NAMEOFAREA'] },
            types: { ATCCS_ESMMType: ['xsd:string', 'xsd:string'] }
        };
        const valueReference = firstValueReference(typename, valueReferences);
        expect(valueReference).toEqual('TYPEOFAREA');
    });

    test('returns the correct output when first"s item type is geometry', () => {
        const valueReferences = {
            names: { ATCCS_ESMMType: ['TYPEOFAREA', 'NAMEOFAREA'] },
            types: { ATCCS_ESMMType: ['gml:SurfacePropertyType', 'xsd:string'] }
        };
        const output = firstValueReference(typename, valueReferences);
        expect(output).toEqual('NAMEOFAREA');
    });
});
