import React, { FC, useContext } from 'react';
import { Col } from 'reactstrap';
import Context from '../../context';
import Panel from '../../shared/Panel';
import OperationsTable from './OperationDetails';
import AcceptVersions from './AcceptVersions';
import {
    parseXML,
    extractAcceptVersions,
    etxractOperations
} from '../../shared/wfsMetadata';
import { IOperationsMetadata } from './models';
import consts from './constants';

const OperationsMetadata: FC<IOperationsMetadata> = () => {
    const { state } = useContext(Context);
    const wfsResponse = parseXML(state.getCapResponse);
    const acceptVersions = extractAcceptVersions(wfsResponse);
    const operations = etxractOperations(wfsResponse);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.versionsHeader}
                title={consts.versionsTitle}
                content={<AcceptVersions versions={acceptVersions} />}
            />

            <Panel
                header={consts.operMetaHeader}
                title={consts.operMetaText}
                content={<OperationsTable operations={operations} />}
            />
        </Col>
    );
};

export default OperationsMetadata;
