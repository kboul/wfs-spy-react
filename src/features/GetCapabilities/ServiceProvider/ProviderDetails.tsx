import React from 'react';
import { Table } from 'reactstrap';

import { useAppContext } from '../../../context';
import TotalItems from '../../../components/TotalItems';
import { extractProvider } from '../../../wfsMetadata';
import { formalProviderName } from './utils';
import consts from './constants';

export default function ProviderDetails() {
    const { state } = useAppContext();
    const { getCapResp } = state;
    const provider = extractProvider(getCapResp);
    const { providerNames, providerValues } = provider;
    const hasProvider = providerNames.length && providerValues.length;

    const table = (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <tbody>
                    {providerNames.map((name, index) => (
                        <tr key={`provider-details-${index}`}>
                            <th>{formalProviderName(name)}</th>
                            <td>{providerValues[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <TotalItems numberOfItems={providerNames.length} />
        </>
    );

    if (hasProvider) return table;
    if (getCapResp && !hasProvider) return <b>{consts.noProvider}</b>;
    return null;
}
