import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../../shared/Panel';
import OperationDetails from './OperationDetails';
import AcceptVersions from './AcceptVersions';
import consts from './constants';

const OperationsMetadata: FC = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.versionsHeader}
                title={consts.versionsTitle}
                content={<AcceptVersions />}
            />

            <Panel
                header={consts.operMetaHeader}
                title={consts.operMetaText}
                content={<OperationDetails />}
            />
        </Col>
    );
};

export default OperationsMetadata;
