import concatPrefixesAndUris from '.';
import xmlNamespaces from '../../../../tests/data/xmlNamespaces';

test('returns an array of strings with prefixes and uris', () => {
    const output = concatPrefixesAndUris(xmlNamespaces);
    Object.keys(xmlNamespaces.prefixes).forEach((key, index) => {
        expect(output[index]).toEqual(
            expect.stringMatching(
                `${xmlNamespaces.prefixes[index]}="${xmlNamespaces.uris[index]}"`
            )
        );
    });
});
