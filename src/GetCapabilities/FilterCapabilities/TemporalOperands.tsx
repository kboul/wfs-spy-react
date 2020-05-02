import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { ITemporalOperands } from './models';
import consts from './constants';

const TemporalOperands: FC<ITemporalOperands> = ({ tempOperands }) => {
    const { state } = useContext(Context);
    const tempOperandsLength = tempOperands.length;
    return tempOperandsLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {tempOperands.map((operand, operandIndex) => (
                        <tr key={operandIndex}>
                            <td>{operand}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={tempOperandsLength} />
        </>
    ) : state.getCapResponse && !tempOperandsLength ? (
        <b>{consts.noTempOperands}</b>
    ) : null;
};

export default TemporalOperands;
