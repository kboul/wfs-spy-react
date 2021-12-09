import { fireEvent } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import useWindowWidth from './useWindowWidth';

describe('useWindowWidth', () => {
    test('initial width is equal to browser width', () => {
        const { result } = renderHook(useWindowWidth);
        expect(result.current).toEqual(window.innerWidth);
    });

    test('returns the browser"s width after it gets resized', async () => {
        const { result } = renderHook(useWindowWidth);

        act(() => {
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: 200
            });
        });

        fireEvent(window, new Event('resize'));
        expect(result.current).toBe(200);
    });
});
