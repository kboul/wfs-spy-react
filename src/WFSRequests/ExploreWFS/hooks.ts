import { useRef, useState, useEffect } from 'react';
import { colors } from './constants';

const useInputFocus = () => {
    const urlRef = useRef<HTMLInputElement>(null);
    const [urlBackgroud, setUrlBackground] = useState<string>(
        colors.lightPurple
    );

    useEffect(() => urlRef?.current?.focus(), []);

    const handleFocus = () => {
        urlRef.current?.focus();
        setUrlBackground(colors.lightPurple);
    };

    const handleBlur = () => {
        urlRef.current?.blur();
        setUrlBackground(colors.white);
    };

    return { urlRef, urlBackgroud, handleFocus, handleBlur };
};

export default useInputFocus;
