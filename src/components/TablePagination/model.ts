import { ClickEvent } from "../../models/events";

export default interface TablePaginationProps {
  currentPage: number;
  onClick: (e: ClickEvent, index: number) => void;
  pagesCount: number;
}
