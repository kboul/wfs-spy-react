import makeSpace from '.';

test('should return the correct number of triple spaces', () => {
    const output = makeSpace(2);
    expect(output).toBe(' &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;');
});
