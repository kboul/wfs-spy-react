import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import { Context } from '../context';
import { formalProviderName } from './utils';
import { IServiceProvider } from './models';
import consts from './constants';

const ServiceProvider: FC<IServiceProvider> = ({ provider }) => {
    const { state } = useContext(Context);
    const { providerNames, providerValues } = provider;
    const hasProvider = providerNames.length && providerValues.length;

    return hasProvider ? (
        <Table
            responsive
            className="table-striped text-center table-borderless">
            <tbody>
                {providerNames.map((name, nameIndex) => (
                    <tr key={nameIndex}>
                        <th>{formalProviderName(name)}</th>
                        <td>{providerValues[nameIndex]}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    ) : state.getCapResponse && !hasProvider ? (
        <b>{consts.noProvider}</b>
    ) : null;
};

export default ServiceProvider;
