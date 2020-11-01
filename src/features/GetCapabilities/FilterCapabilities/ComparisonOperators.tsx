import React from 'react';
import { Table } from 'reactstrap';

import { useAppContext } from '../../../context';
import TotalItems from '../../../shared/TotalItems';
import { extractFilterCap, parseXML } from '../../../shared/wfsMetadata';
import consts from './constants';

export default function ComparisonOperators() {
    const { state } = useAppContext();
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const compOpers = extractFilterCap(parsedResponse, 'ComparisonOperator');
    const compOperLength = compOpers.length;

    const table = (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {compOpers.map((operator, index) => (
                        <tr key={`comparison-operators-${index}`}>
                            <td>{operator}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={compOperLength} />
        </>
    );

    if (compOperLength) return table;
    if (getCapResp && !compOperLength) return <b>{consts.noCompOper}</b>;
    return null;
}
