import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { extractFilterCap, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const ComparisonOperators: FC = () => {
    const { state } = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const compOper = extractFilterCap(getCapResp, 'ComparisonOperator');
    const compOperLength = compOper.length;

    return compOperLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {compOper.map((operator, index) => (
                        <tr key={`comparison-operators-${index}`}>
                            <td>{operator}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={compOperLength} />
        </>
    ) : state.getCapResp && !compOperLength ? (
        <b>{consts.noCompOper}</b>
    ) : null;
};

export default ComparisonOperators;
