export default interface ITablePagination {
    currentPage: number;
    pagesCount: number;
    onClick: (e: React.MouseEvent<HTMLElement>, index: number) => void;
}
