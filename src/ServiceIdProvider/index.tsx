import React, { FC, useContext } from 'react';
import Context from '../context';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import Title from './Title';
import Abstract from './Abstract';
import AcceptVersions from './AcceptVersions';
import ServiceProvider from './ServiceProvider';
import {
    extractTitle,
    parseXML,
    extractAbstract,
    extractAcceptVersions,
    extractProvider
} from '../shared/wfsMetadata';
import { IServiceIdProvider } from './models';
import consts from './constants';

const ServiceIdProvider: FC<IServiceIdProvider> = () => {
    const { state } = useContext(Context);
    const wfsResponse = parseXML(state.getCapResponse);
    const title = extractTitle(wfsResponse);
    const abstract = extractAbstract(wfsResponse);
    const acceptVersions = extractAcceptVersions(wfsResponse);
    const provider = extractProvider(wfsResponse);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.titleHeader}
                title={consts.titleTitle}
                content={<Title title={title} />}
            />
            <Panel
                header={consts.abstractHeader}
                title={consts.abstractTitle}
                content={<Abstract abstract={abstract} />}
            />
            <Panel
                header={consts.versionsHeader}
                title={consts.versionsTitle}
                content={<AcceptVersions versions={acceptVersions} />}
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
