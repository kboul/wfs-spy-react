import React, { FC } from 'react';
import { Col } from 'reactstrap';

import Panel from '../../shared/Panel';
import ServiceIdDetails from './ServiceIdDetails';
import consts from './constants';

const ServiceIdentification: FC = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.serviceIdHeader}
                title={consts.serviceIdTitle}
                content={<ServiceIdDetails />}
            />
        </Col>
    );
};

export default ServiceIdentification;
