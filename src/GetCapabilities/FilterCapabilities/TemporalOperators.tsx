import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { parseXML, extractFilterCap } from '../../shared/wfsMetadata';
import consts from './constants';

const TemporalOperators: FC = () => {
    const { state } = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const tempOperators = extractFilterCap(getCapResp, 'TemporalOperator');
    const tempOperatorsLength = tempOperators.length;

    return tempOperatorsLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {tempOperators.map((operator, index) => (
                        <tr key={`temporal-operators-${index}`}>
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
