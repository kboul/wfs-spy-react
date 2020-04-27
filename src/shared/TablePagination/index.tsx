import React, { FC } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import ITablePagination from './model';
import './index.sass';

const TablePagination: FC<ITablePagination> = ({
    currentPage,
    pagesCount,
    onClick
}) => {
    return (
        <div className="paginationWrapper">
            <Pagination className="pagination">
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                        className="paginationLink"
                        first
                        href="#"
                        onClick={e => onClick(e, 0)}
                    />
                </PaginationItem>
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                        className="paginationLink"
                        onClick={e => onClick(e, currentPage - 1)}
                        previous
                        href="#"
                    />
                </PaginationItem>
                {[...Array(pagesCount)].map((page, i) => (
                    <PaginationItem active={i === currentPage} key={i}>
                        <PaginationLink
                            className="paginationLink"
                            onClick={e => onClick(e, i)}
                            href="#">
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                    <PaginationLink
                        className="paginationLink"
                        onClick={e => onClick(e, currentPage + 1)}
                        next
                        href="#"
                    />
                </PaginationItem>
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                    <PaginationLink
                        className="paginationLink"
                        last
                        href="#"
                        onClick={e => onClick(e, pagesCount - 1)}
                    />
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default TablePagination;
