import React, { FC } from 'react';
import { Table } from 'reactstrap';
import { formalProviderName } from './utils';
import { IServiceProvider } from './model';

const ServiceProvider: FC<IServiceProvider> = ({ provider }) => {
    const { providerNames, providerValues } = provider;
    return (
        <Table
            responsive
            className="table-striped text-center table-borderless">
            <tbody>
                {providerNames.map((name: string, nameIndex: number) => (
                    <tr key={nameIndex}>
                        <th>{formalProviderName(name)}</th>
                        <td>{providerValues[nameIndex]}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ServiceProvider;
