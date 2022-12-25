import { DropdownItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

import { DropDownItemProps } from "./models";

export default function DropDownItem({ routes }: DropDownItemProps) {
  const { pathname } = useLocation();
  return (
    <>
      {routes.map(({ path, name }) => (
        <DropdownItem
          key={`drop-down-item-${name}`}
          tag={Link}
          to={path}
          active={path === pathname}
        >
          {name}
        </DropdownItem>
      ))}
    </>
  );
}
