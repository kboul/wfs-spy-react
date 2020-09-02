import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';

import Context from '../../context';
import { IContext } from '../../context/models';
import TotalItems from '../../shared/TotalItems';
import { etxractOperations, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const OperationsDetails: FC = () => {
    const { state }: IContext = useContext(Context);
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const operations = etxractOperations(parsedResponse);
    const operationsLength = Object.keys(operations).length;

    const table = (
        <>
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
                    {Object.entries(operations).map(([key, values], index) => (
                        <tr key={`operations-${index}`}>
                            <td>{key}</td>
                            <td>{values.get}</td>
                            <td>{values.post}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={operationsLength} />
        </>
    );

    if (operationsLength) return table;
    if (getCapResp && !operationsLength) return <b>{consts.noOperation}</b>;
    return null;
};

export default OperationsDetails;
