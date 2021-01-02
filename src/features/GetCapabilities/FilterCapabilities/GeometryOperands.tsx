import React from 'react';
import { Table } from 'reactstrap';

import TotalItems from '../../../shared/TotalItems';
import { useAppContext } from '../../../context';
import { parseXML, extractFilterCap } from '../../../wfsMetadata';
import consts from './constants';

export default function GeometryOperands() {
    const { state } = useAppContext();
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const geomOper = extractFilterCap(parsedResponse, 'GeometryOperand');
    const geomOperLength = geomOper.length;

    const table = (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {geomOper.map((operand, index) => (
                        <tr key={`geometry-operands-${index}`}>
                            <td>{operand}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={geomOperLength} />
        </>
    );

    if (geomOperLength) return table;
    if (getCapResp && !geomOperLength) return <b>{consts.noGeomOper}</b>;
    return null;
}
