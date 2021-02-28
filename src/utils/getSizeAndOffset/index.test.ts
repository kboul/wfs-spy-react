import getSizeAndOffset from '.';

describe('getSizeAndOffset', () => {
    test('size should be 12 and offset 0 when window width is smaller than 1550px', () => {
        const windowWidth = 1000;
        const { size, offset } = getSizeAndOffset(windowWidth);
        expect(size).toBe(12);
        expect(offset).toBe(0);
    });

    test('size should be 8 and offset 2 when window width is bigger than 1550px', () => {
        const windowWidth = 1600;
        const { size, offset } = getSizeAndOffset(windowWidth);
        expect(size).toBe(8);
        expect(offset).toBe(2);
    });
});
