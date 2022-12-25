import { useState } from "react";
import { Table } from "reactstrap";

import Typename from "../../WFSRequests/ExploreWFS/Typename";
import { TablePagination, TotalItems } from "../../../components";
import { useAppContext } from "../../../context";
import { getAttrNameTypeList } from "./utils";
import { extractAttrNamesTypes } from "../../../wfsMetadata";
import { ClickEvent } from "../../../models/events";
import globalConsts from "../../../constants";
import consts from "./constants";

export default function AttributeDetails() {
  const { state } = useAppContext();
  const { descFeatTypeResp, typename } = state;
  const attrNamesTypes = extractAttrNamesTypes(descFeatTypeResp);
  const namesLength = Object.keys(attrNamesTypes.names).length;

  const attrNameType = getAttrNameTypeList(typename, attrNamesTypes);

  const pageSize = 10;
  const pagesCount = attrNameType && Math.ceil(attrNameType.length / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (e: ClickEvent, index: number) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  const attributesExist =
    typename && typename !== globalConsts.noOption && attrNameType.length;

  const table = (
    <>
      <Typename />

      {attributesExist ? (
        <Table
          responsive
          className="table-striped text-center table-borderless"
        >
          <thead>
            <tr>
              <th>{consts.attrNames}</th>
              <th>{consts.attrTypes}</th>
            </tr>
          </thead>
          <tbody>
            {attrNameType
              .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              .map(({ name, type }, index) => {
                return (
                  <tr key={`attribute-names-types-${index}`}>
                    <td>{name}</td>
                    <td>{type}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      ) : null}
      {attrNameType?.length > pageSize && (
        <TablePagination
          currentPage={currentPage}
          onClick={handleClick}
          pagesCount={pagesCount}
        />
      )}
      {attrNameType && <TotalItems numberOfItems={attrNameType?.length} />}
    </>
  );

  if (namesLength) return table;
  if (descFeatTypeResp && !namesLength) return <b>{consts.noAttributesMsg}</b>;
  return null;
}
