import React from 'react';
import { Col } from 'reactstrap';

import Panel from '../../../shared/Panel';
import OperationDetails from './OperationDetails';
import AcceptVersions from './AcceptVersions';
import consts from './constants';

export default function OperationsMetadata() {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                content={<AcceptVersions />}
                header={consts.versionsHeader}
                title={consts.versionsTitle}
            />

            <Panel
                content={<OperationDetails />}
                header={consts.operMetaHeader}
                title={consts.operMetaText}
            />
        </Col>
    );
}
