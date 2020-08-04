import React, { FC } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import ITablePagination from './model';
import './index.sass';

const TablePagination: FC<ITablePagination> = ({
    currentPage,
    pagesCount,
    onClick
}: ITablePagination) => {
    const paginationStyle = {
        justifyContent: pagesCount < 300 ? 'center' : 'start'
    };

    type ButtonEvent = React.MouseEvent<HTMLElement>;

    const previousFirst = (e: ButtonEvent) => onClick(e, 0);
    const previous = (e: ButtonEvent) => onClick(e, currentPage - 1);
    const next = (e: ButtonEvent) => onClick(e, currentPage + 1);
    const nextLast = (e: ButtonEvent) => onClick(e, pagesCount - 1);

    return (
        <div className="paginationWrapper">
            <Pagination style={paginationStyle}>
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                        className="paginationLink"
                        first
                        href="#"
                        onClick={previousFirst}
                    />
                </PaginationItem>
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                        className="paginationLink"
                        onClick={previous}
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
                        onClick={next}
                        next
                        href="#"
                    />
                </PaginationItem>
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                    <PaginationLink
                        className="paginationLink"
                        last
                        href="#"
                        onClick={nextLast}
                    />
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default TablePagination;
