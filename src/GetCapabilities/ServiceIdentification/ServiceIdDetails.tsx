import React, { FC, useContext } from 'react';
import { Table } from 'reactstrap';

import Context from '../../context';
import { IContext } from '../../context/models';
import TotalItems from '../../shared/TotalItems';
import { parseXML, extractServiceId } from '../../shared/wfsMetadata';
import { splitStrOnUpperCase } from '../../shared/utils';
import consts from './constants';

const ServiceIdDetails: FC = () => {
    const { state }: IContext = useContext(Context);
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const serviceId = extractServiceId(parsedResponse);
    const serviceIdLength = Object.keys(serviceId).length;

    const table = (
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
    );

    if (getCapResp && serviceIdLength) return table;
    if (getCapResp && !serviceIdLength) return <b>{consts.noServiceId}</b>;
    return null;
};

export default ServiceIdDetails;
