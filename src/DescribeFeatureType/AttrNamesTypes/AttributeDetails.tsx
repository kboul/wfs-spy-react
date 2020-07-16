import React, { FC, useContext, useState } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import { IContext } from '../../context/models';
import Typename from '../../WFSRequests/ExploreWFS/Typename';
import TablePagination from '../../shared/TablePagination';
import TotalItems from '../../shared/TotalItems';
import { parseXML, extractAttrNamesTypes } from '../../shared/wfsMetadata';
import attrNameType from './utils';
import IAttrNameType from './models';
import { noOption } from '../../shared/constants';
import consts from './constants';

const AttributeDetails: FC = () => {
    const { state }: IContext = useContext(Context);
    const { descFeatTypeResp } = state;
    const parsedResponse = parseXML(descFeatTypeResp);
    const attrNamesTypes = extractAttrNamesTypes(parsedResponse);
    const namesLength = Object.keys(attrNamesTypes.names).length;

    const selectedAttrNameType: IAttrNameType[] = attrNameType(
        attrNamesTypes,
        state
    );

    const pageSize = 10;
    const pagesCount =
        selectedAttrNameType &&
        Math.ceil(selectedAttrNameType?.length / pageSize);
    const [currentPage, setCurrentPage] = useState(0);

    const onClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    const { typename } = state;
    const attributesExist =
        typename && typename !== noOption && selectedAttrNameType.length;

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
                        {selectedAttrNameType
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
            {selectedAttrNameType && selectedAttrNameType.length > 10 && (
                <TablePagination
                    currentPage={currentPage}
                    pagesCount={pagesCount}
                    onClick={onClick}
                />
            )}
            {selectedAttrNameType && (
                <TotalItems numberOfItems={selectedAttrNameType?.length} />
            )}
        </>
    );

    if (namesLength) return table;
    if (descFeatTypeResp && !namesLength) return <b>{consts.noAttributes}</b>;
    return null;
};

export default AttributeDetails;
