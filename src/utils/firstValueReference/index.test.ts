import firstValueReference from '.';
import { AttrNamesTypes } from '../../wfsMetadata/models';

describe('firstValueReference', () => {
    describe('attrTypesList is defined', () => {
        const typename = 'mais:ATCCS_ESMM';

        test('returns the first valueReference from the names" list', () => {
            const valueReferences: AttrNamesTypes = {
                names: { ATCCS_ESMMType: ['TYPEOFAREA', 'NAMEOFAREA'] },
                types: { ATCCS_ESMMType: ['xsd:string', 'xsd:string'] }
            };
            const valueReference = firstValueReference(
                typename,
                valueReferences
            );
            expect(valueReference).toEqual('TYPEOFAREA');
        });

        test('returns the second valueReference when first item type is geometry', () => {
            const valueReferences: AttrNamesTypes = {
                names: { ATCCS_ESMMType: ['TYPEOFAREA', 'NAMEOFAREA'] },
                types: {
                    ATCCS_ESMMType: ['gml:SurfacePropertyType', 'xsd:string']
                }
            };
            const output = firstValueReference(typename, valueReferences);
            expect(output).toEqual('NAMEOFAREA');
        });
    });

    describe('attrTypesList is not defined', () => {
        test('returns an empty string when attrTypesList is undefined', () => {
            const typename = '';
            const valueReferences: AttrNamesTypes = {
                names: { ATCCS_ESMMType: ['TYPEOFAREA', 'NAMEOFAREA'] },
                types: { ATCCS_ESMMType: ['xsd:string', 'xsd:string'] }
            };
            const output = firstValueReference(typename, valueReferences);
            expect(output).toEqual('');
        });
    });
});
