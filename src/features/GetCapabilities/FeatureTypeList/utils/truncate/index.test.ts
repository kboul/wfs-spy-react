import truncate from '.';

describe('checkAbstractLength', () => {
    test('returns - when input is an empty string', () => {
        const abstract = truncate('');
        expect(abstract).toEqual('-');
    });

    test('returns the input truncated with 3 dots when its length is bigger than 50 characters ', () => {
        const input = 'Designated bathing waters have extra protection in law.';
        const output = truncate(input);
        expect(output.length).toBe(53);
        expect(output).toContain('...');
    });

    test('returns the input when its length is up to 50 characters ', () => {
        const input = 'Location of EPA AIR EMEP Monitoring Sites';
        const output = truncate(input);
        expect(output).toEqual(input);
    });
});
