import React, { FC, useContext, useState } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import { IContext } from '../../context/models';
import TotalItems from '../../shared/TotalItems';
import TablePagination from '../../shared/TablePagination';
import { extractFunctions, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const Functions: FC = () => {
    const { state }: IContext = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const functions = extractFunctions(getCapResp);
    const functionsLength = functions.length;

    const pageSize = 10;
    const pagesCount = Math.ceil(functions.length / pageSize);
    const [currentPage, setCurrentPage] = useState(0);

    const onClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    return functionsLength ? (
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
                onClick={onClick}
            />
            <TotalItems numberOfItems={functionsLength} />
        </>
    ) : state.getCapResp && !functionsLength ? (
        <b>{consts.noFunctions}</b>
    ) : null;
};

export default Functions;
