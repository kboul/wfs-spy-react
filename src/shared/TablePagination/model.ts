import { ClickEvent } from '../../models/events';

export default interface TablePaginationProps {
    currentPage: number;
    pagesCount: number;
    onClick: (e: ClickEvent, index: number) => void;
}
