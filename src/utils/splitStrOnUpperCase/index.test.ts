import splitStrOnUpperCase from '.';

test('splits string on upper case letter', () => {
    const splittedString = splitStrOnUpperCase('Default CRS');
    expect(splittedString).toBe('Default CRS');
});
