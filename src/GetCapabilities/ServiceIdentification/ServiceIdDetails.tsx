import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { IServiceIdDetails } from './models';
import consts from './constants';

const ServiceIdDetails: FC<IServiceIdDetails> = ({ serviceId }) => {
    const { state } = useContext(Context);
    const serviceIdLength = Object.keys(serviceId).length;

    return serviceIdLength ? (
        state.getCapResponse && (
            <>
                <Table
                    responsive
                    className="table-striped text-center table-borderless">
                    <tbody>
                        {Object.entries(serviceId).map(
                            ([serviceName, serviceValue], serviceIndex) => (
                                <tr key={serviceIndex}>
                                    <th>{serviceName}</th>
                                    <td>{serviceValue}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
                <TotalItems numberOfItems={serviceIdLength} />
            </>
        )
    ) : state.getCapResponse && !serviceIdLength ? (
        <b>{consts.noServiceId}</b>
    ) : null;
};

export default ServiceIdDetails;
