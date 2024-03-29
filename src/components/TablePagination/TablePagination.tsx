import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import { ClickEvent } from "../../models/events";
import TablePaginationProps from "./model";
import "./TablePagination.sass";

export default function TablePagination({
  currentPage,
  onClick,
  pagesCount
}: TablePaginationProps) {
  const paginationStyle = {
    justifyContent: pagesCount < 300 ? "center" : "start"
  };

  const handlePreviousFirstClick = (e: ClickEvent) => onClick(e, 0);
  const handlePreviousClick = (e: ClickEvent) => onClick(e, currentPage - 1);
  const handleCurrentClick = (e: ClickEvent, i: number) => onClick(e, i);
  const handleNextClick = (e: ClickEvent) => onClick(e, currentPage + 1);
  const handleNextLastClick = (e: ClickEvent) => onClick(e, pagesCount - 1);

  return (
    <div className="paginationWrapper">
      <Pagination style={paginationStyle}>
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink
            className="paginationLink"
            first
            href="#"
            onClick={handlePreviousFirstClick}
          />
        </PaginationItem>
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink
            className="paginationLink"
            onClick={handlePreviousClick}
            previous
            href="#"
          />
        </PaginationItem>
        {[...Array(pagesCount)].map((page, index) => (
          <PaginationItem active={index === currentPage} key={index}>
            <PaginationLink
              className="paginationLink"
              onClick={(e) => handleCurrentClick(e, index)}
              href="#"
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage >= pagesCount - 1}>
          <PaginationLink
            className="paginationLink"
            onClick={handleNextClick}
            next
            href="#"
          />
        </PaginationItem>
        <PaginationItem disabled={currentPage >= pagesCount - 1}>
          <PaginationLink
            className="paginationLink"
            last
            href="#"
            onClick={handleNextLastClick}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
}
