import getOrPost from '.';

describe('getOrPost', () => {
    test('returns get when input is GET', () => {
        const output = getOrPost('GET');
        expect(output).toEqual('get');
    });

    test('returns post when input is POST', () => {
        const output = getOrPost('POST');
        expect(output).toEqual('post');
    });
});
