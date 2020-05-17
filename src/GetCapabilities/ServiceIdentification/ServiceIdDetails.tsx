import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import { splitStrOnUpperCase } from '../../shared/utils';
import { IServiceIdDetails } from './models';
import consts from './constants';

const ServiceIdDetails: FC<IServiceIdDetails> = ({ serviceId }) => {
    const { state } = useContext(Context);
    const serviceIdLength = Object.keys(serviceId).length;

    return serviceIdLength ? (
        state.getCapResp && (
            <>
                <Table
                    responsive
                    className="table-striped text-center table-borderless">
                    <tbody>
                        {Object.entries(serviceId).map(
                            ([serviceName, serviceValue], index) => (
                                <tr key={`service-details-${index}`}>
                                    <th>{splitStrOnUpperCase(serviceName)}</th>
                                    <td>{serviceValue}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
                <TotalItems numberOfItems={serviceIdLength} />
            </>
        )
    ) : state.getCapResp && !serviceIdLength ? (
        <b>{consts.noServiceId}</b>
    ) : null;
};

export default ServiceIdDetails;
