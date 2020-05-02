import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { IGeometryOperands } from './models';
import consts from './constants';

const GeometryOperands: FC<IGeometryOperands> = ({ geomOper }) => {
    const { state } = useContext(Context);
    const geomOperLength = geomOper.length;
    return geomOperLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {geomOper.map((operand, operandIndex) => (
                        <tr key={operandIndex}>
                            <td>{operand}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={geomOperLength} />
        </>
    ) : state.getCapResponse && !geomOperLength ? (
        <b>{consts.noGeomOper}</b>
    ) : null;
};

export default GeometryOperands;
