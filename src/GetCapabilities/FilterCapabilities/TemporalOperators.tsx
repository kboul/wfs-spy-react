import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import { IContext } from '../../context/models';
import TotalItems from '../../shared/TotalItems';
import { parseXML, extractFilterCap } from '../../shared/wfsMetadata';
import consts from './constants';

const TemporalOperators: FC = () => {
    const { state }: IContext = useContext(Context);
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const tempOperators = extractFilterCap(parsedResponse, 'TemporalOperator');
    const tempOperatorsLength = tempOperators.length;

    const table = (
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
    );

    if (tempOperatorsLength) return table;
    if (getCapResp && !tempOperatorsLength)
        return <b>{consts.noTempOperators}</b>;
    return null;
};

export default TemporalOperators;
