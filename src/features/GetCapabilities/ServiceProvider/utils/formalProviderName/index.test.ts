import formalProviderName from '.';
import consts from '../../constants';

describe('formalProviderName', () => {
    test('returns formal provider name when input is Voice', () => {
        const providerName = formalProviderName(consts.voice);
        expect(providerName).toEqual(consts.telephone);
    });

    test('returns formal provider name when input is Facsimile', () => {
        const providerName = formalProviderName(consts.facsimile);
        expect(providerName).toEqual(consts.fax);
    });

    test('returns formal provider name when input is ElectronicMailAddress', () => {
        const providerName = formalProviderName(consts.electrMailAddress);
        expect(providerName).toEqual(consts.email);
    });

    test('returns formal provider name when input is ElectronicMailAddress', () => {
        const input = 'Individual Name';
        const providerName = formalProviderName(input);
        expect(providerName).toEqual(input);
    });
});
