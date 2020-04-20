import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import { Context } from '../context';
import { IOperationsTable } from './models';
import consts from './constants';

const OperationsTable: FC<IOperationsTable> = ({ operations }) => {
    const { state } = useContext(Context);
    const operationsLength = Object.keys(operations).length;

    return operationsLength ? (
        <Table
            responsive
            className="table-striped text-center table-borderless">
            <thead>
                <tr>
                    <th>Operation</th>
                    <th>GET</th>
                    <th>POST</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(operations).map(
                    ([key, values], operationsIndex) => (
                        <tr key={operationsIndex}>
                            <td>{key}</td>
                            <td>{values.get}</td>
                            <td>{values.post}</td>
                        </tr>
                    )
                )}
            </tbody>
        </Table>
    ) : state.getCapResponse && !operationsLength ? (
        <b>{consts.noOperation}</b>
    ) : null;
};

export default OperationsTable;
