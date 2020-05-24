import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { extractFilterCap, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const SpatialOperators: FC = () => {
    const { state } = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const spatialOper = extractFilterCap(getCapResp, 'SpatialOperator');
    const spatialOperLength = spatialOper.length;

    return spatialOperLength ? (
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
    ) : state.getCapResp && !spatialOperLength ? (
        <b>{consts.noSpatialOper}</b>
    ) : null;
};

export default SpatialOperators;
