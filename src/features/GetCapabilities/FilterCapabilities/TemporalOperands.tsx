import React, { useContext } from 'react';
import { Table } from 'reactstrap';

import Context, { ContextProps } from '../../../context';
import TotalItems from '../../../shared/TotalItems';
import { extractFilterCap, parseXML } from '../../../shared/wfsMetadata';
import consts from './constants';

export default function TemporalOperands() {
    const { state } = useContext<ContextProps>(Context);
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const tempOperands = extractFilterCap(parsedResponse, 'TemporalOperand');
    const tempOperandsLength = tempOperands.length;

    const table = (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {tempOperands.map((operand, index) => (
                        <tr key={`temporal-operands-${index}`}>
                            <td>{operand}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={tempOperandsLength} />
        </>
    );

    if (tempOperandsLength) return table;
    if (getCapResp && !tempOperandsLength)
        return <b>{consts.noTempOperands}</b>;
    return null;
}
