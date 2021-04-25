import formalProviderName from '.';
import consts from '../../constants';

describe('formalProviderName', () => {
    test('returns formal provider name when input is Voice', () => {
        const output = formalProviderName(consts.voice);
        expect(output).toEqual(consts.telephone);
    });

    test('returns formal provider name when input is Facsimile', () => {
        const output = formalProviderName(consts.facsimile);
        expect(output).toEqual(consts.fax);
    });

    test('returns formal provider name when input is ElectronicMailAddress', () => {
        const output = formalProviderName(consts.electrMailAddress);
        expect(output).toEqual(consts.email);
    });

    test('returns formal provider name when input is ElectronicMailAddress', () => {
        const input = 'Individual Name';
        const output = formalProviderName(input);
        expect(output).toEqual(input);
    });
});
