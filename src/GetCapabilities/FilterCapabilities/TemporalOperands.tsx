import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import { IContext } from '../../context/models';
import TotalItems from '../../shared/TotalItems';
import { extractFilterCap, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const TemporalOperands: FC = () => {
    const { state }: IContext = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const tempOperands = extractFilterCap(getCapResp, 'TemporalOperand');
    const tempOperandsLength = tempOperands.length;

    return tempOperandsLength ? (
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
    ) : state.getCapResp && !tempOperandsLength ? (
        <b>{consts.noTempOperands}</b>
    ) : null;
};

export default TemporalOperands;
