import { ClickEvent } from '../models';

export default interface TablePaginationProps {
    currentPage: number;
    pagesCount: number;
    onClick: (e: ClickEvent, index: number) => void;
}
