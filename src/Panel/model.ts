import { ReactElement, ReactNode } from 'react';

export default interface IPanel {
    header: string;
    title: string;
    content: ReactElement | ReactNode | string;
}
