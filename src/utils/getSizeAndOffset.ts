import { useWindowWidth } from '../hooks';

export default function getSizeAndOffset() {
    const windowWidth = useWindowWidth();
    const windownWidthLimit = 1550;
    const size = windowWidth > windownWidthLimit ? 8 : 12;
    const offset = windowWidth > windownWidthLimit ? 2 : 0;
    return { size, offset };
}
