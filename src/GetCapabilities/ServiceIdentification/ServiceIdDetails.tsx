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
    const wfsResponse = parseXML(state.getCapResp);
    const serviceId = extractServiceId(wfsResponse);
    const serviceIdLength = Object.keys(serviceId).length;

    return serviceIdLength ? (
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
    ) : state.getCapResp && !serviceIdLength ? (
        <b>{consts.noServiceId}</b>
    ) : null;
};

export default ServiceIdDetails;
