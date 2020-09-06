export default interface TablePaginationProps {
    currentPage: number;
    pagesCount: number;
    onClick: (e: React.MouseEvent<HTMLElement>, index: number) => void;
}
