import React from 'react';
import { Table } from 'reactstrap';

import TotalItems from '../../../components/TotalItems';
import { useAppContext } from '../../../context';
import { extractFilterCap } from '../../../wfsMetadata';
import consts from './constants';

export default function TemporalOperands() {
    const { state } = useAppContext();
    const { getCapResp } = state;
    const tempOperands = extractFilterCap(getCapResp, 'TemporalOperand');
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
