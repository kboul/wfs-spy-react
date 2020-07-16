import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import { IContext } from '../../context/models';
import TotalItems from '../../shared/TotalItems';
import { extractFilterCap, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const SpatialOperators: FC = () => {
    const { state }: IContext = useContext(Context);
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
};

export default SpatialOperators;
