import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IOperationsMetadata from './model';
import defaultProps from './constants';

const OperationsMetadata: FC<IOperationsMetadata> = ({
    header,
    descr,
    wfsOperMetaHeader,
    wfsOperMetaText
}) => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{header}</h3>
            <p>{descr}</p>

            <Panel header={wfsOperMetaHeader} text={wfsOperMetaText} />
        </Col>
    );
};

OperationsMetadata.defaultProps = defaultProps;

export default OperationsMetadata;
