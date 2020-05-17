import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { formalProviderName } from './utils';
import { IProviderDetails } from './models';
import consts from './constants';

const ProviderDetails: FC<IProviderDetails> = ({ provider }) => {
    const { state } = useContext(Context);
    const { providerNames, providerValues } = provider;
    const hasProvider = providerNames.length && providerValues.length;

    return hasProvider ? (
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
    ) : state.getCapResp && !hasProvider ? (
        <b>{consts.noProvider}</b>
    ) : null;
};

export default ProviderDetails;
