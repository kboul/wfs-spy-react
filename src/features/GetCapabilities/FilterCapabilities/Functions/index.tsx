import React, { useState } from 'react';
import { Table } from 'reactstrap';

import { useAppContext } from '../../../../context';
import TotalItems from '../../../../components/TotalItems';
import TablePagination from '../../../../components/TablePagination';
import { extractFunctions } from '../../../../wfsMetadata';
import { ClickEvent } from '../../../../models/events';
import consts from '../constants';

export default function Functions() {
    const { state } = useAppContext();
    const { getCapResp } = state;
    const functions = extractFunctions(getCapResp);
    const functionsLength = functions.length;

    const pageSize = 10;
    const pagesCount = Math.ceil(functions.length / pageSize);
    const [currentPage, setCurrentPage] = useState(0);

    const handleClick = (e: ClickEvent, index: number) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    const table = (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <thead>
                    <tr>
                        <th>{consts.funcName}</th>
                        <th>{consts.funcReturns}</th>
                        <th>{consts.funcArgsAndTypes}</th>
                    </tr>
                </thead>
                <tbody>
                    {functions
                        .slice(
                            currentPage * pageSize,
                            (currentPage + 1) * pageSize
                        )
                        .map(({ name, returns, argsAndTypes }, index) => (
                            <tr key={`functions-${index}`}>
                                <td>{name}</td>
                                <td>{returns}</td>
                                <td>{argsAndTypes?.join(', ')}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <TablePagination
                currentPage={currentPage}
                pagesCount={pagesCount}
                onClick={handleClick}
            />
            <TotalItems numberOfItems={functionsLength} />
        </>
    );

    if (functionsLength) return table;
    if (getCapResp && !functionsLength) return <b>{consts.noFunctions}</b>;
    return null;
}
