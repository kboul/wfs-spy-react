import React, { FC, useContext } from 'react';
import Context from '../../context';
import { Col } from 'reactstrap';
import Panel from '../../shared/Panel';
import { parseXML, extractServiceId } from '../../shared/wfsMetadata';
import { IServiceIdentification } from './models';
import consts from './constants';
import ServiceIdDetails from './ServiceIdDetails';

const ServiceIdentification: FC<IServiceIdentification> = () => {
    const { state } = useContext(Context);
    const wfsResponse = parseXML(state.getCapResp);
    const serviceId = extractServiceId(wfsResponse);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.serviceIdHeader}
                title={consts.serviceIdTitle}
                content={<ServiceIdDetails serviceId={serviceId} />}
            />
        </Col>
    );
};

export default ServiceIdentification;
