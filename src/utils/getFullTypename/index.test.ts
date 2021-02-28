import getFullTypename from '.';

describe('getFullTypename', () => {
    test('splits string on upper case when typename is defined', () => {
        const fullTypename = getFullTypename('bsl:baeume');
        expect(fullTypename).toBe('baeumeType');
    });

    test('splits string on upper case when typename is empyt string', () => {
        const fullTypename = getFullTypename('');
        expect(fullTypename).toBe('');
    });
});
