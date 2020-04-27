import React, { FC, useContext, useState } from 'react';
import { Table } from 'reactstrap';
import Context from '../context';
import TotalItems from '../shared/TotalItems';
import TablePagination from '../shared/TablePagination';
import { IFunctions } from './models';
import consts from './constants';

const Functions: FC<IFunctions> = ({ functions }) => {
    const { state } = useContext(Context);
    const functionsLength = functions.names.length;
    const { names, returns, args, types } = functions;

    const pageSize = 10;
    const pagesCount = Math.ceil(names.length / pageSize);
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
                        <th>{consts.functionName}</th>
                        <th>{consts.functionReturns}</th>
                        {/* <th>{consts.functionArguments}</th>
                        <th>{consts.functionType}</th> */}
                    </tr>
                </thead>
                <tbody>
                    {names
                        .slice(
                            currentPage * pageSize,
                            (currentPage + 1) * pageSize
                        )
                        .map((name, nameIndex) => (
                            <tr key={nameIndex}>
                                <td>{name}</td>
                                <td>{returns[nameIndex]}</td>
                                {/* <td>{args[nameIndex]}</td>
                            <td>{types[nameIndex]}</td> */}
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
