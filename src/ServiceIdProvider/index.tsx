import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IServiceIdProvider from './model';
import { defaultProps } from './constants';

const ServiceIdProvider: FC<IServiceIdProvider> = ({
    header,
    descr,
    wfsTitleHeader,
    wfsTitleHeaderText,
    wfsVersionsHeader,
    wfsVersionsText,
    wfsAbstractHeader,
    wfsAbstractText,
    wfsProviderHeader,
    wfsProviderText
}) => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{header}</h3>
            <p>{descr}</p>

            <Panel header={wfsTitleHeader} text={wfsTitleHeaderText} />
            <Panel header={wfsVersionsHeader} text={wfsVersionsText} />
            <Panel header={wfsAbstractHeader} text={wfsAbstractText} />
            <Panel header={wfsProviderHeader} text={wfsProviderText} />
        </Col>
    );
};

ServiceIdProvider.defaultProps = defaultProps;

export default ServiceIdProvider;
