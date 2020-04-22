import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../context';
import TotalItems from '../shared/TotalItems';
import { IComparisonOperators } from './models';
import consts from './constants';

const ComparisonOperators: FC<IComparisonOperators> = ({ compOper }) => {
    const { state } = useContext(Context);
    const compOperLength = compOper.length;
    return compOperLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <thead>
                    <tr>
                        <th>{consts.compOperHeader}</th>
                    </tr>
                </thead>
                <tbody>
                    {compOper.map((operator, operatorIndex) => (
                        <tr key={operatorIndex}>
                            <td>{operator}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={compOperLength} />
        </>
    ) : state.getCapResponse && !compOperLength ? (
        <b>{consts.noCompOper}</b>
    ) : null;
};

export default ComparisonOperators;
