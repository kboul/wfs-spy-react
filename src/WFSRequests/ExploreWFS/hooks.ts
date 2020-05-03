import { useRef, useState, useEffect } from 'react';
import { colors } from './constants';

const useInputFocus = () => {
    const urlRef = useRef<HTMLInputElement | null>(null);
    const [urlBackgroud, setUrlBackground] = useState<string>(
        colors.lightPurple
    );

    useEffect(() => urlRef?.current?.focus(), []);

    const onFocus = () => {
        urlRef?.current?.focus();
        setUrlBackground(colors.lightPurple);
    };

    const onBlur = () => {
        urlRef?.current?.blur();
        setUrlBackground(colors.white);
    };

    return { urlRef, urlBackgroud, onFocus, onBlur };
};

export default useInputFocus;
