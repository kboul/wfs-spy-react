import React from 'react';
import { Col } from 'reactstrap';

import Panel from '../../../shared/Panel';
import ProviderDetails from './ProviderDetails';
import consts from './constants';

export default function ServiceProvider() {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.providerHeader}
                title={consts.providerTitle}
                content={<ProviderDetails />}
            />
        </Col>
    );
}
