import { useState } from "react";
import { Table, UncontrolledTooltip } from "reactstrap";

import { TablePagination, TotalItems } from "../../../components";
import { useAppContext } from "../../../context";
import { extractFeatureTypes } from "../../../wfsMetadata";
import { ClickEvent } from "../../../models/events";
import { truncate } from "../../../utils";
import consts from "./constants";

export default function FeatureDetails() {
  const { state } = useAppContext();
  const { getCapResp } = state;
  const features = extractFeatureTypes(getCapResp);
  const featuresLength = features.length;

  const pageSize = 10;
  const pagesCount = Math.ceil(featuresLength / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (e: ClickEvent, index: number) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  const table = (
    <>
      <Table responsive className="table-striped text-center table-borderless">
        <thead>
          <tr>
            {featuresLength &&
              consts.tableHeaders.map(({ id, key, value }) => (
                <th key={id}>{key in features[0] ? value : ""}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {features
            .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
            .map(
              (
                { name, title, abstract, defaultCRS, lowerCorner, upperCorner },
                index
              ) => {
                return (
                  <tr key={`feature-details-${index}`}>
                    <td>{title}</td>
                    <td>{name}</td>
                    <td>
                      <span id={`tooltip-${index + 1}`}>
                        {abstract && truncate(abstract)}
                      </span>
                    </td>
                    {abstract && abstract?.length > 50 && (
                      <UncontrolledTooltip
                        placement="right"
                        target={`tooltip-${index + 1}`}
                      >
                        {abstract}
                      </UncontrolledTooltip>
                    )}
                    <td>{defaultCRS}</td>
                    <td>{lowerCorner}</td>
                    <td>{upperCorner}</td>
                  </tr>
                );
              }
            )}
        </tbody>
      </Table>
      {featuresLength > pageSize && (
        <TablePagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          onClick={handleClick}
        />
      )}
      <TotalItems numberOfItems={featuresLength} />
    </>
  );

  if (featuresLength) return table;
  if (getCapResp && !featuresLength) return <b>{consts.noFeaturesMsg}</b>;
  return null;
}
