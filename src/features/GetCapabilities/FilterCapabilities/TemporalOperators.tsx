import React from 'react';
import { Table } from 'reactstrap';

import TotalItems from '../../../shared/TotalItems';
import { useAppContext } from '../../../context';
import { extractFilterCap } from '../../../wfsMetadata';
import consts from './constants';

export default function TemporalOperators() {
    const { state } = useAppContext();
    const { getCapResp } = state;
    const tempOperators = extractFilterCap(getCapResp, 'TemporalOperator');
    const tempOperatorsLength = tempOperators.length;

    const table = (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {tempOperators.map((operator, index) => (
                        <tr key={`temporal-operators-${index}`}>
                            <td>{operator}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={tempOperatorsLength} />
        </>
    );

    if (tempOperatorsLength) return table;
    if (getCapResp && !tempOperatorsLength)
        return <b>{consts.noTempOperators}</b>;
    return null;
}
