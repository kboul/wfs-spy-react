import React, { FC, useContext } from 'react';
import { Context } from '../context';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import AcceptedVersions from './AcceptedVersions';
import ServiceProvider from './ServiceProvider';
import {
    extractTitle,
    parseXML,
    extractAbstract,
    extractAcceptedVersions,
    extractProvider
} from '../shared/wfsMetadata';
import { IServiceIdProvider } from './model';
import consts from './constants';

const ServiceIdProvider: FC<IServiceIdProvider> = () => {
    const { state } = useContext(Context);
    const wfsResponse = parseXML(state.getCapResponse);
    const title = extractTitle(wfsResponse);
    const abstract = extractAbstract(wfsResponse);
    const acceptedVersions = extractAcceptedVersions(wfsResponse);
    const provider = extractProvider(wfsResponse);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.titleHeader}
                title={consts.titleTitle}
                content={<b>{title}</b>}
            />
            <Panel
                header={consts.versionsHeader}
                title={consts.versionsTitle}
                content={<AcceptedVersions versions={acceptedVersions} />}
            />
            <Panel
                header={consts.abstractHeader}
                title={consts.abstractTitle}
                content={abstract}
            />
            <Panel
                header={consts.providerHeader}
                title={consts.providerTitle}
                content={<ServiceProvider provider={provider} />}
            />
        </Col>
    );
};

export default ServiceIdProvider;
