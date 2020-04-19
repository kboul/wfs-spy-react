import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IOperationsMetadata from './model';
import consts from './constants';

const OperationsMetadata: FC<IOperationsMetadata> = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.operMetaHeader}
                title={consts.operMetaText}
                content=""
            />
        </Col>
    );
};

export default OperationsMetadata;
