import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { extractFilterCap, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const GeometryOperands: FC = () => {
    const { state } = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const geomOper = extractFilterCap(getCapResp, 'GeometryOperand');
    const geomOperLength = geomOper.length;

    return geomOperLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {geomOper.map((operand, index) => (
                        <tr key={`geometry-operands-${index}`}>
                            <td>{operand}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={geomOperLength} />
        </>
    ) : state.getCapResp && !geomOperLength ? (
        <b>{consts.noGeomOper}</b>
    ) : null;
};

export default GeometryOperands;
