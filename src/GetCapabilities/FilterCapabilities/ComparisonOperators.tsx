import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';

import Context from '../../context';
import { IContext } from '../../context/models';
import TotalItems from '../../shared/TotalItems';
import { extractFilterCap, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const ComparisonOperators: FC = () => {
    const { state }: IContext = useContext(Context);
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const compOper = extractFilterCap(parsedResponse, 'ComparisonOperator');
    const compOperLength = compOper.length;

    const table = (
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
    );

    if (compOperLength) return table;
    if (getCapResp && !compOperLength) return <b>{consts.noCompOper}</b>;
    return null;
};

export default ComparisonOperators;
