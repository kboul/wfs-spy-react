import React, { useState } from 'react';
import { Table } from 'reactstrap';

import Typename from '../../WFSRequests/ExploreWFS/Typename';
import TablePagination from '../../../shared/TablePagination';
import TotalItems from '../../../shared/TotalItems';
import { useAppContext } from '../../../context';
import getAttrNameType from './utils';
import { parseXML, extractAttrNamesTypes } from '../../../shared/wfsMetadata';
import { ClickEvent } from '../../../shared/models';
import { noOption } from '../../../shared/constants';
import consts from './constants';

export default function AttributeDetails() {
    const { state } = useAppContext();
    const { descFeatTypeResp, typename } = state;
    const parsedResponse = parseXML(descFeatTypeResp);
    const attrNamesTypes = extractAttrNamesTypes(parsedResponse);
    const namesLength = Object.keys(attrNamesTypes.names).length;

    const attrNameType = getAttrNameType(attrNamesTypes, typename);

    const pageSize = 10;
    const pagesCount =
        attrNameType && Math.ceil(attrNameType?.length / pageSize);
    const [currentPage, setCurrentPage] = useState(0);

    const handleClick = (e: ClickEvent, index: number) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    const attributesExist =
        typename && typename !== noOption && attrNameType.length;

    const table = (
        <>
            <Typename />

            {attributesExist ? (
                <Table
                    responsive
                    className="table-striped text-center table-borderless">
                    <thead>
                        <tr>
                            <th>{consts.attrNames}</th>
                            <th>{consts.attrTypes}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attrNameType
                            .slice(
                                currentPage * pageSize,
                                (currentPage + 1) * pageSize
                            )
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
            {attrNameType && (
                <TotalItems numberOfItems={attrNameType?.length} />
            )}
        </>
    );

    if (namesLength) return table;
    if (descFeatTypeResp && !namesLength) return <b>{consts.noAttributes}</b>;
    return null;
}
