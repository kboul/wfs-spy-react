import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { ISpatialOperators } from './models';
import consts from './constants';

const SpatialOperators: FC<ISpatialOperators> = ({ spatialOper }) => {
    const { state } = useContext(Context);
    const spatialOperLength = spatialOper.length;
    return spatialOperLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {spatialOper.map((operator, operatorIndex) => (
                        <tr key={operatorIndex}>
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
