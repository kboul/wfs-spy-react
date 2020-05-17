import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { ITemporalOperators } from './models';
import consts from './constants';

const TemporalOperators: FC<ITemporalOperators> = ({ tempOperators }) => {
    const { state } = useContext(Context);
    const tempOperatorsLength = tempOperators.length;
    return tempOperatorsLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {tempOperators.map((operator, operatorIndex) => (
                        <tr key={operatorIndex}>
                            <td>{operator}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={tempOperatorsLength} />
        </>
    ) : state.getCapResp && !tempOperatorsLength ? (
        <b>{consts.noTempOperators}</b>
    ) : null;
};

export default TemporalOperators;
