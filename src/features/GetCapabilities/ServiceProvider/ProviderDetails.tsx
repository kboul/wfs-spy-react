import React from 'react';
import { Table } from 'reactstrap';

import { useAppContext } from '../../../context';
import TotalItems from '../../../shared/TotalItems';
import { parseXML, extractProvider } from '../../../shared/wfsMetadata';
import { formalProviderName } from './utils';
import consts from './constants';

export default function ProviderDetails() {
    const { state } = useAppContext();
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const provider = extractProvider(parsedResponse);
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