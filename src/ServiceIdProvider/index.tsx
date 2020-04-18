import React, { FC, useContext } from 'react';
import { Context } from '../context';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import {
    extractTitle,
    parseXML,
    extractAbstract,
    extractAcceptedVersions
} from '../shared/wfsMetadata';
import { IServiceIdProvider } from './model';
import consts from './constants';
import AcceptedVersions from './AcceptedVersions';

const ServiceIdProvider: FC<IServiceIdProvider> = () => {
    const { state } = useContext(Context);
    const wfsResponse = parseXML(state.getCapResponse);
    console.log(wfsResponse);
    const title = extractTitle(wfsResponse);
    const abstract = extractAbstract(wfsResponse);
    const acceptedVersions = extractAcceptedVersions(wfsResponse);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.titleHeader}
                title={consts.titleHeaderTitle}
                content={<b>{title}</b>}
            />
            <Panel
                header={consts.versionsHeader}
                title={consts.versionsTitle}
                content={
                    <AcceptedVersions acceptedVersions={acceptedVersions} />
                }
            />
            <Panel
                header={consts.abstractHeader}
                title={consts.abstractTitle}
                content={abstract}
            />
            <Panel
                header={consts.providerHeader}
                title={consts.providerTitle}
                content=""
            />
        </Col>
    );
};

export default ServiceIdProvider;
