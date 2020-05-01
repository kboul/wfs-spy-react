import React, { FC, useContext, useState } from 'react';
import { Table } from 'reactstrap';
import Context from '../context';
import TotalItems from '../shared/TotalItems';
import TablePagination from '../shared/TablePagination';
import { IFunctions } from './models';
import consts from './constants';

const Functions: FC<IFunctions> = ({ functions }) => {
    const { state } = useContext(Context);
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
                        .map(({ name, returns, argsAndTypes }, funIndex) => (
                            <tr key={funIndex}>
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
    ) : state.getCapResponse && !functionsLength ? (
        <b>{consts.noFunctions}</b>
    ) : null;
};

export default Functions;
