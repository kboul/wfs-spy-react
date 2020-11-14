import React from 'react';
import { Table } from 'reactstrap';

import TotalItems from '../../../shared/TotalItems';
import { useAppContext } from '../../../context';
import { parseXML, extractFilterCap } from '../../../shared/wfsMetadata';
import consts from './constants';

export default function SpatialOperators() {
    const { state } = useAppContext();
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const spatialOper = extractFilterCap(parsedResponse, 'SpatialOperator');
    const spatialOperLength = spatialOper.length;

    const table = (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {spatialOper.map((operator, index) => (
                        <tr key={`spatial-operators-${index}`}>
                            <td>{operator}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={spatialOperLength} />
        </>
    );

    if (spatialOperLength) return table;
    if (getCapResp && !spatialOperLength) return <b>{consts.noSpatialOper}</b>;
    return null;
}
