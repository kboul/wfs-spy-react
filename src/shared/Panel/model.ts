import { ReactElement, ReactNode } from 'react';

export default interface PanelProps {
    content: ReactElement | ReactNode | string;
    header: string;
    title: string;
}
